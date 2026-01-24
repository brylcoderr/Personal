'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GitBranch, Star, ExternalLink, Calendar } from 'lucide-react'

interface GitHubStats {
  totalStars: number
  totalForks: number
  totalOpenIssues: number
  totalWatchers: number
  followers: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  html_url: string
  updated_at: string
}

export function GitHubIntegration() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/github')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()

        // Map server response into UI types
        const apiStats = data.stats || {}
        const apiRepos = data.repos || []

        setStats({
          totalStars: apiStats.totalStars ?? 0,
          totalForks: apiStats.totalForks ?? 0,
          totalOpenIssues: apiStats.totalOpenIssues ?? 0,
          totalWatchers: apiStats.totalWatchers ?? 0,
          followers: apiStats.followers ?? 0,
        })

        setRepos(apiRepos)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch GitHub data')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return (
      <Card className="p-6 bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20">
        <div className="text-center">
          <p className="text-destructive/80">GitHub integration temporarily unavailable</p>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-lg bg-foreground/5 border border-primary/10 animate-pulse"
            >
              <div className="h-6 w-16 bg-foreground/10 rounded mb-2"></div>
              <div className="h-4 w-12 bg-foreground/10 rounded"></div>
            </motion.div>
          ))}
        </div>
      ) : (
        <>
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground/60">STARS</span>
              </div>
              <p className="text-xl font-bold text-primary">{stats?.totalStars}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <GitBranch className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground/60">FORKS</span>
              </div>
              <p className="text-xl font-bold text-primary">{stats?.totalForks}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground/60">OPEN ISSUES</span>
              </div>
              <p className="text-xl font-bold text-primary">{stats?.totalOpenIssues}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <GitBranch className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground/60">WATCHERS</span>
              </div>
              <p className="text-xl font-bold text-primary">{stats?.totalWatchers}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <GitBranch className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground/60">FOLLOWERS</span>
              </div>
              <p className="text-xl font-bold text-primary">{stats?.followers}</p>
            </motion.div>
          </div>

          {/* Featured Repositories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-primary" />
              Featured Repositories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                  whileHover={{ y: -5, borderColor: 'hsl(var(--primary)/0.4)' }}
                  className="block"
                >
                  <Card className="p-4 h-full border border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-card to-card/80 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground truncate">{repo.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-foreground/60">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-foreground/50">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>
                          {new Date(repo.updated_at).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                        View Repo
                      </Button>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
