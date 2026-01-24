const fs = require('fs')
const path = require('path')
const os = require('os')

const repos = [
  {
    dep: 'https://brylcodes-saas-dashboard.vercel.app/',
    git: 'https://github.com/brylcoderr/saas-dashboard'
  },
  {
    dep: 'https://skiper-landing.vercel.app/',
    git: 'https://github.com/brylcoderr/Saas-landing'
  },
  {
    dep: 'https://pointer-landing-template.vercel.app/',
    git: 'https://github.com/brylcoderr/AI-Landing-Page'
  },
  {
    dep: 'https://photography-banner.vercel.app/',
    git: 'https://github.com/brylcoderr/photography-banner'
  },
  {
    dep: 'https://katachi-studio-bice.vercel.app/',
    git: 'https://github.com/brylcoderr/katachi-studio'
  }
]

function slugify(s) {
  return s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

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

async function fetchJSON(url, token) {
  const headers = { 'User-Agent': 'portfolio-generator', Accept: 'application/vnd.github+json' }
  if (token) headers.Authorization = `token ${token}`
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`Failed fetch ${url} - ${res.status}`)
  return res.json()
}

async function main() {
  const env = readEnv()
  const token = (env.GITHUB_TOKEN || process.env.GITHUB_TOKEN || '').trim()

  const generated = []

  for (const r of repos) {
    const match = r.git.match(/github.com\/(.+?)\/(.+?)(?:\.git|$)/i)
    if (!match) {
      console.warn('Skipping invalid repo url', r.git)
      continue
    }
    const owner = match[1]
    const repo = match[2]

    console.log('Fetching', owner, repo)
    let repoData
    try {
      repoData = await fetchJSON(`https://api.github.com/repos/${owner}/${repo}`, token)
    } catch (err) {
      console.error('Failed to fetch', r.git, err.message)
      repoData = { name: repo, description: '', stargazers_count: 0, forks_count: 0, open_issues_count: 0, language: '', updated_at: new Date().toISOString() }
    }

    const id = slugify(repo)
    const title = repo.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    const client = `${owner}`
    const date = repoData.updated_at ? repoData.updated_at.split('T')[0] : new Date().toISOString().split('T')[0]
    const coverImage = `/images/case-studies/${id}-cover.jpg` // placeholder — please replace with your images
    const tags = ['Web App', repoData.language || 'JavaScript']
    const stack = [repoData.language || 'JavaScript', 'React', 'Next.js']
    const challenge = repoData.description ? repoData.description : `Built ${title} to address a specific product need and provide a polished user experience.`
    const approach = `Designed and implemented using ${stack.join(', ')}, prioritizing performance and a clean UI. Deployed to Vercel and configured CI for fast iterations.`
    const outcome = `Launched to a live audience at ${r.dep}. Open-source repo has ${repoData.stargazers_count || 0} stars and ${repoData.forks_count || 0} forks.`

    const metrics = [
      { label: 'Stars', value: `+${repoData.stargazers_count || 0}` },
      { label: 'Forks', value: `+${repoData.forks_count || 0}` },
      { label: 'Open Issues', value: `${repoData.open_issues_count || 0}` },
      { label: 'Last Updated', value: new Date(repoData.updated_at).toLocaleDateString() }
    ]

    generated.push({
      id,
      title,
      client: `${client} (Open Source)`,
      date,
      coverImage,
      tags,
      stack,
      challenge,
      approach,
      outcome,
      metrics,
      gallery: [coverImage],
      deployUrl: r.dep,
      repoUrl: r.git,
      testimonial: '',
      testimonialAuthor: '',
      timeline: 'Ongoing',
      role: 'Creator & Maintainer'
    })
  }

  const dataPath = path.join(process.cwd(), 'src', 'data', 'case-studies.json')
  const backupPath = path.join(process.cwd(), 'src', 'data', `case-studies.backup.${Date.now()}.json`)

  if (fs.existsSync(dataPath)) {
    fs.copyFileSync(dataPath, backupPath)
    console.log('Backed up existing case-studies to', backupPath)
  }

  fs.writeFileSync(dataPath, JSON.stringify(generated, null, 2) + os.EOL)
  console.log('Wrote', generated.length, 'projects to', dataPath)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})