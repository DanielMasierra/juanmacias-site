'use client';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const links = t.raw('links') as Record<string, string>;

  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--bg-lowest)',
      borderTop: '1px solid var(--color-outline-variant)',
      padding: '2rem 1.5rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {Object.entries(links).map(([key, url]) => (
            <a key={key} href={url} target={key !== 'email' ? '_blank' : undefined} rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              [{key}]
            </a>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          © Juan Macías Sierra — juanmacias.site<br />
          <span style={{ color: 'var(--color-outline)' }}>{t('tagline')}</span>
        </div>
      </div>
    </footer>
  );
}
