'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ConferenceItem {
  year: number;
  role: 'speaker' | 'moderator' | 'expositor';
  title: string;
  event: string;
  org: string;
  date: string;
}

export default function Conferences() {
  const t = useTranslations('conferences');
  const roles = t.raw('roles') as Record<string, string>;
  const items = t.raw('items') as ConferenceItem[];
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 4);

  const roleColors: Record<string, string> = {
    speaker: 'var(--color-primary)',
    moderator: 'var(--color-secondary)',
    expositor: 'var(--color-tertiary)'
  };

  return (
    <section id="conferences" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {visible.map((item, i) => (
          <div key={i} style={{ borderLeft: '2px solid var(--color-outline-variant)', paddingLeft: '1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', minWidth: '40px' }}>[{item.year}]</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: roleColors[item.role] || 'var(--text-secondary)', border: `1px solid ${roleColors[item.role] || 'var(--color-outline-variant)'}`, padding: '0.1rem 0.3rem' }}>
                    {roles[item.role]}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{item.date}</span>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.1rem' }}>{item.event}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary)' }}>{item.org}</div>
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
