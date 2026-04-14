'use client';
import { useTranslations } from 'next-intl';

interface AwardItem {
  year: number;
  prize: string;
  title: string;
  detail?: string;
  org: string;
  highlight: boolean;
}

export default function Awards() {
  const t = useTranslations('awards');
  const items = t.raw('items') as AwardItem[];

  return (
    <section id="awards" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{
            borderLeft: item.highlight ? '2px solid var(--color-primary)' : '2px solid var(--color-outline-variant)',
            paddingLeft: '1rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            backgroundColor: item.highlight ? 'var(--bg-container)' : 'transparent'
          }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', minWidth: '40px' }}>[{item.year}]</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.4rem',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)'
                  }}>
                    {item.prize}
                  </span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</span>
                </div>
                {item.detail && <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.15rem', lineHeight: 1.4 }}>{item.detail}</div>}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary)' }}>{item.org}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
