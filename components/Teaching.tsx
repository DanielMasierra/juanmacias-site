'use client';
import { useTranslations } from 'next-intl';

interface TeachingItem {
  year: string;
  course: string;
  program: string;
  institution: string;
  type: string;
}

export default function Teaching() {
  const t = useTranslations('teaching');
  const items = t.raw('items') as TeachingItem[];

  return (
    <section id="teaching" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item, i) => (
          <div key={i} className="card card-accent-indigo">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{item.course}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span className="pill pill-indigo">{item.type}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.year}</span>
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{item.program}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary)' }}>{item.institution}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
