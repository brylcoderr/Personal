import { NextResponse } from 'next/server'

export async function GET() {
  const username = process.env.GITHUB_USERNAME || 'brylcoderr'
  const token = process.env.GITHUB_TOKEN
  const headers: Record<string, string> = {
    'User-Agent': 'portfolio-app',
    Accept: 'application/vnd.github+json',
  }

  if (token) headers.Authorization = `token ${token}`

  try {
    // Fetch user profile for followers
    const userRes = await fetch(`https://api.github.com/users/${username}`, { headers })
    if (!userRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch GitHub user' }, { status: 502 })
    }
    const user = await userRes.json()
    const followers = user.followers ?? 0

    // Fetch all public repos (paginated)
    let repos: any[] = []
    let page = 1
    while (true) {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&type=public&sort=updated`,
        { headers }
      )
      if (!res.ok) break
      const data = await res.json()
      if (!Array.isArray(data) || data.length === 0) break
      repos = repos.concat(data)
      if (data.length < 100) break
      page++
    }

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)
    const totalForks = repos.reduce((sum, r) => sum + (r.forks_count ?? 0), 0)
    const totalOpenIssues = repos.reduce((sum, r) => sum + (r.open_issues_count ?? 0), 0)
    const totalWatchers = repos.reduce((sum, r) => sum + (r.watchers_count ?? 0), 0)

    const topRepos = repos
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6)
      .map(r => ({
        id: r.id,
        name: r.name,
        description: r.description,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        html_url: r.html_url,
        updated_at: r.updated_at,
      }))

    return NextResponse.json(
      {
        stats: {
          totalStars,
          totalForks,
          totalOpenIssues,
          totalWatchers,
          followers,
        },
        repos: topRepos,
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error fetching GitHub data' }, { status: 500 })
  }
}
