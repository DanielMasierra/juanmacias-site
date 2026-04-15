'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const statsRaw = t.raw('stats');
  const stats = Array.isArray(statsRaw) ? statsRaw as Array<{ value: string; label: string; sub: string }> : [];

  return (
    <section style={{
      backgroundColor: 'var(--bg-lowest)',
      padding: '3rem 1.5rem 2rem',
      borderBottom: '1px solid var(--color-outline-variant)'
    }}>
      {/* macOS dots */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((color, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: color }} />
        ))}
      </div>

      {/* Terminal prompt */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
        {t('prompt')}<span className="cursor-blink" />
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        fontWeight: 500,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '0.75rem'
      }}>
        {t('name')}
      </h1>

      {/* Subtitle */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.875rem',
        color: 'var(--color-primary)',
        marginBottom: '0.5rem'
      }}>
        {t('subtitle')}
      </div>

      {/* Tagline */}
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        maxWidth: '600px',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.7
      }}>
        {t('tagline')}
      </p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', width: '100%' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            backgroundColor: 'var(--bg-container)',
            border: '1px solid var(--color-primary)',
            padding: '0.75rem 1rem',
            minWidth: '140px'
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--color-primary)'
            }}>
              {stat.value} <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)' }}>{stat.label}</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { key: 'linkedin', url: 'https://linkedin.com/in/juanmaciassierra', label: '[linkedin]' },
          { key: 'github', url: 'https://github.com/DanielMasierra', label: '[github]' },
          { key: 'twitter', url: 'https://twitter.com/JMaciasSierra', label: '[twitter]' }
        ].map((link) => (
          <a
            key={link.key}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
