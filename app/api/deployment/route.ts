export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json(
    {
      commit: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  )
}
