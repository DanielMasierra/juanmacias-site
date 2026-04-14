'use client';
import { useTranslations } from 'next-intl';

interface FellowshipItem {
  year: number;
  title: string;
  event: string;
  org: string;
  location: string;
  highlight: boolean;
}

export default function Fellowships() {
  const t = useTranslations('fellowships');
  const items = t.raw('items') as FellowshipItem[];

  return (
    <section id="fellowships" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item, i) => (
          <div key={i} className="card" style={{
            borderLeft: item.highlight ? '2px solid var(--color-primary)' : '2px solid var(--color-outline-variant)',
            backgroundColor: item.highlight ? 'var(--bg-container)' : 'var(--bg-high)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)' }}>[{item.year}]</span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</h3>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-primary)',
                padding: '0.1rem 0.4rem'
              }}>Fellow</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{item.event}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '0.2rem' }}>{item.org}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>📍 {item.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
