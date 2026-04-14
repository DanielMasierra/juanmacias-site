'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface PublicationItem {
  year: number;
  title: string;
  venue: string;
  isbn?: string;
  pages?: string;
  role?: string;
  url?: string;
}

export default function Publications() {
  const t = useTranslations('publications');
  const items = t.raw('items') as PublicationItem[];
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 3);

  return (
    <section id="publications" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {visible.map((item, i) => (
          <div key={i} style={{ borderLeft: '2px solid var(--color-outline-variant)', paddingLeft: '1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', minWidth: '40px' }}>[{item.year}]</span>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem', lineHeight: 1.4 }}>
                  {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a> : item.title}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {item.venue}
                  {item.pages && ` · pp. ${item.pages}`}
                  {item.isbn && ` · ISBN ${item.isbn}`}
                  {item.role && <span style={{ color: 'var(--color-secondary)', marginLeft: '0.5rem' }}>[{item.role}]</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          background: 'transparent',
          border: '1px solid var(--color-outline-variant)',
          color: 'var(--color-primary)',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        {expanded ? t('show_less') : t('show_more')} ({items.length})
      </button>
    </section>
  );
}
