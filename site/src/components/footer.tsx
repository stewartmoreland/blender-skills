import Link from 'next/link'
import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-[10px] font-black">B</span>
          </div>
          <span>
            <strong className="text-foreground">Blender Skills</strong> — Built for Claude Code and Cursor
          </span>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/arjun988/blender-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link href="/getting-started" className="hover:text-foreground transition-colors">
            Getting Started
          </Link>
          <Link href="/skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
        </div>

        <p>MIT License · v1.1.0</p>
      </div>
    </footer>
  )
}
