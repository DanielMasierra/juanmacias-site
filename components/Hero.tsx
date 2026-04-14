'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const stats = t.raw('stats') as Array<{ value: string; label: string; sub: string }>;

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
        maxWidth: '600px'
      }}>
        {t('tagline')}
      </p>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
              {stat.value} <span style={{ fontSize: '0.75rem' }}>{stat.label}</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
