'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const navItems = ['about', 'projects', 'stack', 'academia', 'fellowships', 'awards'] as const;

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'color 0.2s',
    display: 'block',
    padding: '0.4rem 0'
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-lowest)',
      borderBottom: '1px solid var(--color-outline-variant)',
      padding: '0.75rem 1.5rem',
    }}>
      {/* Desktop nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Desktop links — hidden on mobile */}
        <div className="nav-desktop" style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          alignItems: 'center',
          flex: 1
        }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {t(item)}
            </a>
          ))}
        </div>

        {/* Right side: locale switcher + hamburger */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0, marginLeft: '1rem' }}>
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

          {/* Hamburger button — only visible on mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: menuOpen ? 'var(--color-primary)' : 'var(--text-secondary)', transition: 'all 0.2s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: menuOpen ? 'transparent' : 'var(--text-secondary)', transition: 'all 0.2s' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: menuOpen ? 'var(--color-primary)' : 'var(--text-secondary)', transition: 'all 0.2s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          display: 'none',
          flexDirection: 'column',
          paddingTop: '1rem',
          borderTop: '1px solid var(--color-outline-variant)',
          marginTop: '0.75rem',
          gap: '0.25rem'
        }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {t(item)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
