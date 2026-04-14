'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const navItems = ['about', 'projects', 'stack', 'publications', 'conferences', 'teaching', 'awards', 'contact'] as const;

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-lowest)',
      borderBottom: '1px solid var(--color-outline-variant)',
      padding: '0.75rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem'
    }}>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
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
            {t(item)}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {(['es', 'en', 'pt'] as const).map((l) => (
          <button
            key={l}
            onClick={() => switchLocale(l)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              background: 'transparent',
              border: locale === l ? '1px solid var(--color-primary)' : '1px solid var(--color-outline-variant)',
              color: locale === l ? 'var(--color-primary)' : 'var(--text-secondary)',
              padding: '0.2rem 0.5rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}
