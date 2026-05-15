import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const tiers = [
  {
    name: 'Open Source',
    price: '₹0',
    desc: 'Self-host and bring your own keys.',
    features: ['Standard Job Scanning', 'Basic CV Tailoring', 'Community Support', 'API Access', 'Local Data Only'],
    cta: 'View on GitHub',
    ghost: true,
  },
  {
    name: 'Pro',
    price: '₹2,499',
    featured: true,
    desc: 'Everything you need for an elite hunt.',
    features: [
      'Unlimited Agent Access',
      'Priority Provider Routing',
      'Voice Interview Sim (Live)',
      'Salary Negotiation AI',
      '24/7 Concierge Support',
      'Shadow Application Mode',
    ],
    cta: 'Get Early Access',
  },
  {
    name: 'Team',
    price: 'Custom',
    desc: 'For agencies and collective hunts.',
    features: [
      'Shared Agent Workflows',
      'Bulk CV Management',
      'Enterprise Security',
      'SLA Guarantees',
      'Dedicated Agent Training',
    ],
    cta: 'Contact Sales',
    ghost: true,
  },
]

const Pricing = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="pricing"
      className="py-40 relative overflow-hidden"
      style={{
        backgroundColor: isDark ? '#070809' : '#f5f5f0',
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        transition: 'all 0.4s ease',
      }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle at top right, rgba(255,95,31,0.04) 0%, transparent 50%)'
            : 'radial-gradient(circle at top right, rgba(255,95,31,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase mb-6 block"
            style={{ color: 'var(--accent)' }}
          >
            Simple Economics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-bold text-5xl md:text-8xl tracking-tight leading-none"
            style={{ color: 'var(--text-primary)' }}
          >
            Elite plans for <br />
            <span className="italic" style={{ color: 'var(--accent)' }}>
              elite talent.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 md:p-12 rounded-[2.5rem] flex flex-col transition-all duration-500 relative group"
              style={{
                backgroundColor: tier.featured
                  ? isDark
                    ? 'rgba(255,95,31,0.03)'
                    : 'rgba(255,95,31,0.02)'
                  : isDark
                  ? 'rgba(255,255,255,0.02)'
                  : 'rgba(0,0,0,0.02)',
                border: tier.featured
                  ? `1px solid var(--accent)`
                  : `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                boxShadow: tier.featured ? '0 0 80px rgba(255,95,31,0.05)' : 'none',
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 font-mono font-bold text-[9px] rounded-full uppercase tracking-[0.3em] shadow-xl"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#000',
                    boxShadow: '0 4px 20px rgba(255,95,31,0.3)',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3
                  className="font-serif font-bold text-3xl mb-6 tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-5xl md:text-6xl font-serif font-bold tracking-tight"
                    style={{ color: tier.featured ? 'var(--accent)' : 'var(--text-primary)' }}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span
                      className="font-mono text-sm font-bold uppercase tracking-widest"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      /mo
                    </span>
                  )}
                </div>
                <p className="text-sm mt-6 font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {tier.desc}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-4 group/item">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-colors"
                      style={{
                        border: tier.featured
                          ? `1px solid rgba(255,95,31,0.3)`
                          : `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        color: tier.featured ? 'var(--accent)' : 'var(--text-muted)',
                      }}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span
                      className="text-sm font-medium tracking-wide transition-colors"
                      style={{ color: 'var(--text-primary)', opacity: tier.featured ? 0.9 : 0.7 }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-4 rounded-xl font-serif font-bold text-lg transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: tier.ghost ? 'transparent' : 'var(--accent)',
                  color: tier.ghost ? 'var(--text-primary)' : '#000',
                  border: tier.ghost
                    ? `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                    : 'none',
                  boxShadow: tier.ghost ? 'none' : '0 4px 30px rgba(255,95,31,0.25)',
                }}
                onMouseEnter={(e) => {
                  if (tier.ghost) {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = isDark
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(0,0,0,0.05)'
                  } else {
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(255,95,31,0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.ghost) {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                  } else {
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 30px rgba(255,95,31,0.25)'
                  }
                }}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
