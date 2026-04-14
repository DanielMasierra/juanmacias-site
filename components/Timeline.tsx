'use client';
import { useTranslations } from 'next-intl';

interface TimelineItem {
  period: string;
  role: string;
  org: string;
  type: 'work' | 'education';
  thesis?: string;
  advisor?: string;
  thesis_url?: string | null;
}

export default function Timeline() {
  const t = useTranslations('timeline');
  const items = t.raw('items') as TimelineItem[];

  return (
    <section id="timeline" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--color-outline-variant)' }} />
        {items.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: '1.5rem' }}>
            {/* Dot — indigo for education, teal for work */}
            <div style={{
              position: 'absolute',
              left: '-1.625rem',
              top: '0.3rem',
              width: '9px',
              height: '9px',
              borderRadius: '9999px',
              backgroundColor: item.type === 'education' ? 'var(--color-secondary)' : 'var(--color-primary)',
              border: '1px solid var(--bg-base)'
            }} />

            {/* Period */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: item.type === 'education' ? 'var(--color-secondary)' : 'var(--color-primary)', marginBottom: '0.2rem' }}>
              {item.period}
              {item.type === 'education' && (
                <span style={{ marginLeft: '0.5rem', fontSize: '0.65rem', border: '1px solid var(--color-secondary)', padding: '0.05rem 0.3rem', color: 'var(--color-secondary)' }}>
                  edu
                </span>
              )}
            </div>

            {/* Role */}
            <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
              {item.role}
            </div>

            {/* Org */}
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: item.thesis ? '0.5rem' : 0 }}>
              {item.org}
            </div>

            {/* Thesis block — only for education entries with thesis */}
            {item.thesis && (
              <div style={{
                backgroundColor: 'var(--bg-container)',
                borderLeft: '2px solid var(--color-secondary)',
                padding: '0.6rem 0.75rem',
                marginTop: '0.5rem'
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                  {t('thesis_label')}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: item.advisor ? '0.3rem' : 0 }}>
                  {item.thesis}
                </div>
                {item.advisor && (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {t('advisor_label')}: {item.advisor}
                  </div>
                )}
                {item.thesis_url && (
                  <a
                    href={item.thesis_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--color-secondary)',
                      border: '1px solid var(--color-secondary)',
                      padding: '0.15rem 0.5rem',
                      textDecoration: 'none'
                    }}
                  >
                    [{t('view_thesis')}]
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
