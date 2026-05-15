import { Github, Search, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const Navbar = () => {
  const { theme, toggle } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-14 flex items-center backdrop-blur-xl"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(10,10,10,0.85)' : 'rgba(245,245,240,0.85)',
        borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm text-white"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            TN
          </div>
          <span className="font-serif text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Talent-OS,{' '}
            <span className="italic" style={{ color: 'var(--accent)' }}>
              your career operations hub
            </span>
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md w-56 text-sm cursor-pointer"
            style={{
              backgroundColor: theme === 'dark' ? '#1a1a1a' : '#e0e0db',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
              color: 'var(--text-muted)',
              transition: 'all 0.3s ease',
            }}
          >
            <Search className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="flex-1 text-left text-xs">Search</span>
            <kbd
              className="text-[10px] font-mono px-1 rounded"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                color: 'var(--text-muted)',
              }}
            >
              ctrl K
            </kbd>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300 hover:opacity-80"
            style={{
              backgroundColor: theme === 'dark' ? '#1a1a1a' : '#e0e0db',
              color: 'var(--text-secondary)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300 hover:opacity-80"
            style={{
              backgroundColor: theme === 'dark' ? '#1a1a1a' : '#e0e0db',
              color: 'var(--text-secondary)',
            }}
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Launch App */}
          <Link
            to="/dashboard"
            className="px-4 py-1.5 rounded-md text-xs font-mono font-bold tracking-widest uppercase flex items-center transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#000',
            }}
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
