import { Github, Linkedin, Phone } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Footer = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/Rachit-Kakkad1',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rachit-kakkad',
      label: 'LinkedIn',
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: 'https://x.com/rachit_kakk2957',
      label: 'X (Twitter)',
    },
    {
      icon: Phone,
      href: 'tel:+918200250915',
      label: 'Phone',
    },
  ]

  const links = {
    Product: [
      { name: 'Agents', href: '#agents' },
      { name: 'Pipeline', href: '#pipeline' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Docs', href: '#' },
    ],
    Ecosystem: [
      { name: 'GitHub Repo', href: 'https://github.com/Rachit-Kakkad1' },
      { name: 'API Keys', href: '#' },
      { name: 'Self-Host', href: '#' },
      { name: 'Open Source', href: '#' },
    ],
    Connect: [
      { name: 'About', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Contact', href: 'tel:+918200250915' },
    ],
  }

  return (
    <footer
      className="pt-28 pb-12 relative overflow-hidden"
      style={{
        backgroundColor: isDark ? '#070809' : '#eaeae5',
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        transition: 'all 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand column — spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                TO
              </div>
              <span
                className="font-serif text-2xl font-bold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Talent-OS
              </span>
            </div>

            <p className="text-base leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              The autonomous job search engine built for the age of AI. Multi-agent, open source,
              results-first.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                      color: 'var(--text-secondary)',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
                      ;(e.currentTarget as HTMLElement).style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.backgroundColor = isDark
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(0,0,0,0.04)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = isDark
                        ? 'rgba(255,255,255,0.06)'
                        : 'rgba(0,0,0,0.06)'
                      ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Phone number */}
            <a
              href="tel:+918200250915"
              className="text-sm font-mono flex items-center gap-2 group"
              style={{ color: 'var(--text-muted)' }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="group-hover:underline">+91 82002 50915</span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-serif font-bold text-base mb-6" style={{ color: 'var(--text-primary)' }}>
                {title}
              </h4>
              <ul className="space-y-4">
                {items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-mono uppercase tracking-widest transition-colors duration-200 hover:underline"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}
        >
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
            © 2026 Talent-OS · Built by Rachit Kakkad · Gujarat, India
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
              Powered by
            </span>
            <div className="flex items-center gap-4" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
              <span className="font-serif font-bold text-xs tracking-tight">GEMINI</span>
              <span className="font-serif font-bold text-xs tracking-tight">CLAUDE</span>
              <span className="font-serif font-bold text-xs tracking-tight">GROQ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
