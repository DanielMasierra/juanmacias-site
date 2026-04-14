'use client';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  const roles = t.raw('roles') as string[];

  return (
    <section id="about" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--text-primary)', maxWidth: '600px' }}>
          {t('bio')}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {roles.map((role, i) => (
            <div key={i} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: i === 2 ? 'var(--color-primary)' : 'var(--text-secondary)',
              borderLeft: '2px solid var(--color-outline-variant)',
              paddingLeft: '0.75rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem'
            }}>
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
