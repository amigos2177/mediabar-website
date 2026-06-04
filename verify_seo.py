import re, sys, time, urllib.request

BASE = sys.argv[1] if len(sys.argv) > 1 else "https://www.mediabarproductions.com"

def norm(u):
    return u.rstrip("/").replace("https://www.", "https://").lower()

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 SEOVerify/1.0"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode("utf-8", "replace")

sm = fetch(BASE + "/sitemap.xml")
urls = re.findall(r"<loc>([^<]+)</loc>", sm)
urls = [u.replace("https://www.mediabarproductions.com", BASE) for u in urls]

flags = []
home_status = {}
for u in urls:
    try:
        html = fetch(u); time.sleep(0.15)
    except Exception as e:
        flags.append((u, f"FETCH ERROR: {e}")); continue

    title = re.search(r"<title>([^<]*)</title>", html, re.I)
    title = title.group(1) if title else None
    desc = re.search(r'<meta name="description"[^>]*content="([^"]*)"', html, re.I)
    desc = desc.group(1) if desc else None
    canon = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html, re.I) or \
            re.search(r'<link[^>]*href="([^"]*)"[^>]*rel="canonical"', html, re.I)
    canon = canon.group(1) if canon else None
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    h1_text = re.sub(r"<[^>]+>", "", h1s[0]).strip() if h1s else None
    has_video = bool(re.search(r'"VideoObject"', html))

    issues = []
    if not canon: issues.append("NO canonical")
    elif norm(canon) != norm(u): issues.append(f"canonical mismatch -> {canon}")
    if len(h1s) == 0: issues.append("NO h1")
    elif len(h1s) > 1: issues.append(f"{len(h1s)} h1s")
    if not title: issues.append("NO title")
    elif not (15 <= len(title) <= 65): issues.append(f"title len {len(title)}")
    if not desc: issues.append("NO meta desc")
    elif not (70 <= len(desc) <= 165): issues.append(f"desc len {len(desc)}")
    if issues:
        flags.append((u, "; ".join(issues)))

    if norm(u) == norm(BASE):
        home_status = {"canonical": canon, "h1": h1_text, "VideoObject": has_video}

print(f"Checked {len(urls)} URLs\n")
print("=== HOMEPAGE — status of the 3 target fixes ===")
print(f"  canonical : {home_status.get('canonical') or 'MISSING'}")
print(f"  h1 text   : {home_status.get('h1')!r}  (geo present: {'San Antonio' in (home_status.get('h1') or '')})")
print(f"  VideoObject: {'PRESENT' if home_status.get('VideoObject') else 'MISSING'}\n")
print(f"=== ISSUES across all pages ({len(flags)} flagged) ===")
for u, i in flags:
    print(f"  {u.replace(BASE,'') or '/'}  ->  {i}")
if not flags:
    print("  none")
