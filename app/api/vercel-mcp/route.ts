import { NextResponse } from 'next/server'

const VERCEL_API = 'https://api.vercel.com'

const TOOLS = [
  {
    name: 'list_projects',
    description: 'List Vercel projects and their latest production deployments',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_project',
    description: 'Get full project configuration, framework, and targets for a Vercel project',
    inputSchema: {
      type: 'object',
      properties: {
        projectId: { type: 'string', description: 'Vercel project ID or name' },
      },
      required: ['projectId'],
    },
  },
  {
    name: 'list_domains',
    description: 'List custom domains and verification status for a Vercel project',
    inputSchema: {
      type: 'object',
      properties: {
        projectId: { type: 'string', description: 'Vercel project ID or name' },
      },
      required: ['projectId'],
    },
  },
  {
    name: 'list_deployments',
    description: 'List recent deployments for a Vercel project',
    inputSchema: {
      type: 'object',
      properties: {
        projectId: { type: 'string', description: 'Vercel project ID or name' },
        limit: { type: 'number', description: 'Number of deployments (default 5)' },
      },
      required: ['projectId'],
    },
  },
  {
    name: 'get_deployment_events',
    description: 'Fetch build logs and error events for a specific Vercel deployment ID',
    inputSchema: {
      type: 'object',
      properties: {
        deploymentId: { type: 'string', description: 'Deployment ID (dpl_...)' },
      },
      required: ['deploymentId'],
    },
  },
  {
    name: 'trigger_redeploy',
    description: 'Trigger a new production redeployment of a Vercel project',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Project name (e.g. mediabar-website)' },
        deploymentId: { type: 'string', description: 'Existing deployment ID to redeploy' },
      },
      required: ['name', 'deploymentId'],
    },
  },
]

async function vercelFetch(path: string, token: string, init?: RequestInit) {
  const res = await fetch(`${VERCEL_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  })
  return res.json()
}

function isAuthorized(req: Request) {
  const secret = process.env.MCP_BRIDGE_SECRET
  if (!secret) return true
  const url = new URL(req.url)
  return url.searchParams.get('key') === secret
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return NextResponse.json({ status: 'ok', server: 'mediabar-vercel-mcp' })
}

export async function POST(req: Request) {
  const token = process.env.VERCEL_TOKEN
  if (!token) {
    return NextResponse.json({ error: 'Missing VERCEL_TOKEN' }, { status: 500 })
  }
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = (await req.json()) as {
    id?: string | number | null
    method?: string
    params?: {
      name?: string
      arguments?: Record<string, unknown>
    }
  }
  const { id = null, method, params } = body

  if (method === 'initialize') {
    return NextResponse.json({
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2024-11-05',
        capabilities: { tools: {} },
        serverInfo: { name: 'mediabar-vercel-mcp', version: '1.0.0' },
      },
    })
  }

  if (method === 'notifications/initialized') {
    return new NextResponse(null, { status: 204 })
  }

  if (method === 'ping') {
    return NextResponse.json({ jsonrpc: '2.0', id, result: {} })
  }

  if (method === 'tools/list') {
    return NextResponse.json({ jsonrpc: '2.0', id, result: { tools: TOOLS } })
  }

  if (method === 'tools/call') {
    const name = params?.name ?? ''
    const args = params?.arguments ?? {}
    let data: unknown

    if (name === 'list_projects') {
      data = await vercelFetch('/v9/projects', token)
    } else if (name === 'get_project') {
      const projectId = String(args.projectId ?? '')
      data = await vercelFetch(`/v9/projects/${encodeURIComponent(projectId)}`, token)
    } else if (name === 'list_domains') {
      const projectId = String(args.projectId ?? '')
      data = await vercelFetch(`/v9/projects/${encodeURIComponent(projectId)}/domains`, token)
    } else if (name === 'list_deployments') {
      const projectId = String(args.projectId ?? '')
      const limit = typeof args.limit === 'number' ? args.limit : 5
      data = await vercelFetch(
        `/v6/deployments?projectId=${encodeURIComponent(projectId)}&limit=${limit}`,
        token
      )
    } else if (name === 'get_deployment_events') {
      const deploymentId = String(args.deploymentId ?? '')
      data = await vercelFetch(
        `/v3/deployments/${encodeURIComponent(deploymentId)}/events`,
        token
      )
    } else if (name === 'trigger_redeploy') {
      data = await vercelFetch('/v13/deployments?forceNew=1', token, {
        method: 'POST',
        body: JSON.stringify({
          name: String(args.name ?? ''),
          deploymentId: String(args.deploymentId ?? ''),
          target: 'production',
        }),
      })
    } else {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Unknown tool: ${name}` },
      })
    }

    return NextResponse.json({
      jsonrpc: '2.0',
      id,
      result: { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] },
    })
  }

  return NextResponse.json({
    jsonrpc: '2.0',
    id,
    error: { code: -32601, message: `Method not found: ${String(method)}` },
  })
}
