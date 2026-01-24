const fs = require('fs')
const path = require('path')
const os = require('os')

function readEnv() {
  const envPath = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8')
    const lines = content.split(/\r?\n/)
    const env = {}
    for (const line of lines) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (match) {
        env[match[1]] = match[2]
      }
    }
    return env
  }
  return process.env
}

function slugify(s) {
  return s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function fetchJSON(url, token) {
  const headers = { 'User-Agent': 'portfolio-generator', Accept: 'application/vnd.github+json' }
  if (token) headers.Authorization = `token ${token}`
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`Failed fetch ${url} - ${res.status}`)
  return res.json()
}

async function main() {
  const env = readEnv()
  const username = (env.GITHUB_USERNAME || process.env.GITHUB_USERNAME || 'brylcoderr').trim()
  const token = (env.GITHUB_TOKEN || process.env.GITHUB_TOKEN || '').trim()

  console.log('Generating case studies for', username)

  const reposUrl = `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`
  let repos = []
  try {
    repos = await fetchJSON(reposUrl, token)
  } catch (err) {
    console.error('Error fetching repos:', err.message)
    process.exit(1)
  }

  if (!Array.isArray(repos) || repos.length === 0) {
    console.error('No repositories found for user', username)
    process.exit(1)
  }

  // Filter out forks unless they are popular
  repos = repos.filter(r => !r.fork || (r.stargazers_count && r.stargazers_count > 50))

  // Sort by stars desc then updated
  repos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0) || new Date(b.updated_at) - new Date(a.updated_at))

  const top = repos.slice(0, 6)

  const generated = top.map(r => {
    const id = slugify(r.name)
    const title = r.name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    const client = `${r.owner.login} (Open Source)`
    const date = r.updated_at ? r.updated_at.split('T')[0] : new Date().toISOString().split('T')[0]
    const coverImage = `/images/case-studies/${id}-cover.jpg`

    const language = r.language || 'JavaScript/TypeScript'

    // Build tags and stack
    const tags = ['Open Source', language]
    const stack = [language, 'React', 'TypeScript'].filter(Boolean)

    const challenge = r.description
      ? `Open-source project addressing: ${r.description}`
      : `Addressed developer needs around ${language} tooling and reusable components.`

    const approach = `Developed a ${language}-first repository with a focus on clear documentation, modular architecture, and developer experience. Included tests, CI, and examples to make adoption easy.`

    const outcome = `Grew to ${r.stargazers_count || 0} stars and ${r.forks_count || 0} forks. The project is actively maintained and used as a foundation in multiple projects.`

    const metrics = [
      { label: 'Stars', value: `+${r.stargazers_count || 0}` },
      { label: 'Forks', value: `+${r.forks_count || 0}` },
      { label: 'Open Issues', value: `${r.open_issues_count || 0}` },
      { label: 'Last Updated', value: new Date(r.updated_at).toLocaleDateString() },
    ]

    const gallery = [coverImage]

    return {
      id: id,
      title: title,
      client: client,
      date: date,
      coverImage: coverImage,
      tags: tags,
      stack: stack,
      challenge,
      approach,
      outcome,
      metrics,
      gallery,
      repoUrl: r.html_url,
      testimonial: '',
      testimonialAuthor: '',
      timeline: 'Ongoing',
      role: 'Open Source Maintainer & Developer',
    }
  })

  const dataPath = path.join(process.cwd(), 'src', 'data', 'case-studies.json')
  const backupPath = path.join(process.cwd(), 'src', 'data', `case-studies.backup.${Date.now()}.json`)

  // Backup existing
  if (fs.existsSync(dataPath)) {
    fs.copyFileSync(dataPath, backupPath)
    console.log('Backed up existing case-studies to', backupPath)
  }

  fs.writeFileSync(dataPath, JSON.stringify(generated, null, 2) + os.EOL)
  console.log('Wrote generated case studies to', dataPath)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
