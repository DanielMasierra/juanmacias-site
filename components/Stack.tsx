'use client';
import { useTranslations } from 'next-intl';

export default function Stack() {
  const t = useTranslations('stack');
  const legal = t.raw('legal') as string[];
  const tech = t.raw('tech') as string[];

  return (
    <section id="stack" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {t('legal_label')}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {legal.map((item, i) => <span key={i} className="pill pill-indigo">{item}</span>)}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {t('tech_label')}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tech.map((item, i) => <span key={i} className="pill pill-teal">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
