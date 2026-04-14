'use client';
import { useTranslations } from 'next-intl';

interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  status: string;
  github?: string;
  mcp?: string;
}

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as ProjectItem[];

  return (
    <section id="projects" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
      <div className="section-title">{t('title')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item, i) => (
          <div key={i} className="card card-accent-teal">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', padding: '0.15rem 0.4rem' }}>
                {t('building')}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
              {item.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {item.tags.map((tag, j) => (
                <span key={j} className="pill pill-teal">{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)' }}>
                  [GitHub] {t('visit')}
                </a>
              )}
              {item.mcp && (
                <a href={item.mcp} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
                  [MCP] {t('mcp')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
