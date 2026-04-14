'use client';
import { useTranslations } from 'next-intl';

interface TimelineItem {
  period: string;
  role: string;
  org: string;
}

export default function Timeline() {
  const t = useTranslations('timeline');
  const items = t.raw('items') as TimelineItem[];

  return (
    <section id="timeline" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ position: 'relative', paddingLeft: '1.25rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--color-outline-variant)' }} />
        {items.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <div style={{
              position: 'absolute',
              left: '-1.625rem',
              top: '0.3rem',
              width: '9px',
              height: '9px',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-primary)',
              border: '1px solid var(--bg-base)'
            }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>
              {item.period}
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
              {item.role}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              {item.org}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
