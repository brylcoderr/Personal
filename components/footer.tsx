import Link from 'next/link'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">CA Studio</h3>
            <p className="text-sm text-foreground/70">
              Transforming ideas into high-converting web experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-foreground/70 hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#case-studies" className="text-foreground/70 hover:text-foreground transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-foreground/60">
              © {new Date().getFullYear()} Creative Architect. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
