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

interface ConferenceItem {
  year: number;
  role: 'speaker' | 'moderator' | 'expositor';
  title: string;
  event: string;
  org: string;
  date: string;
}

interface TeachingItem {
  year: string;
  course: string;
  program: string;
  institution: string;
  type: string;
}

type Tab = 'publications' | 'conferences' | 'teaching';

export default function Academia() {
  const [activeTab, setActiveTab] = useState<Tab>('publications');
  const tp = useTranslations('publications');
  const tc = useTranslations('conferences');
  const tt = useTranslations('teaching');

  const publications = tp.raw('items') as PublicationItem[];
  const conferences = tc.raw('items') as ConferenceItem[];
  const teaching = tt.raw('items') as TeachingItem[];

  const [pubExpanded, setPubExpanded] = useState(false);
  const [confExpanded, setConfExpanded] = useState(false);

  const visiblePubs = pubExpanded ? publications : publications.slice(0, 3);
  const visibleConfs = confExpanded ? conferences : conferences.slice(0, 4);

  const roleColors: Record<string, string> = {
    speaker: 'var(--color-primary)',
    moderator: 'var(--color-secondary)',
    expositor: 'var(--color-tertiary)'
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: 'publications', label: tp('title') },
    { key: 'conferences', label: tc('title') },
    { key: 'teaching', label: tt('title') }
  ];

  return (
    <section id="academia" style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>

      {/* Section header */}
      <div className="section-title">{'> academia'}</div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '0',
        borderBottom: '1px solid var(--color-outline-variant)',
        marginBottom: '2rem',
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.key ? '2px solid var(--color-primary)' : '2px solid transparent',
              color: activeTab === tab.key ? 'var(--color-primary)' : 'var(--text-secondary)',
              padding: '0.6rem 1.25rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              marginBottom: '-1px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Publications tab */}
      {activeTab === 'publications' && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {visiblePubs.map((item, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--color-outline-variant)', paddingLeft: '1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
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
            onClick={() => setPubExpanded(!pubExpanded)}
            style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'transparent', border: '1px solid var(--color-outline-variant)', color: 'var(--color-primary)', padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            {pubExpanded ? tp('show_less') : tp('show_more')} ({publications.length})
          </button>
        </div>
      )}

      {/* Conferences tab */}
      {activeTab === 'conferences' && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {visibleConfs.map((item, i) => {
              const roles = tc.raw('roles') as Record<string, string>;
              return (
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
              );
            })}
          </div>
          <button
            onClick={() => setConfExpanded(!confExpanded)}
            style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'transparent', border: '1px solid var(--color-outline-variant)', color: 'var(--color-primary)', padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            {confExpanded ? tc('show_less') : tc('show_more')} ({conferences.length})
          </button>
        </div>
      )}

      {/* Teaching tab */}
      {activeTab === 'teaching' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {teaching.map((item, i) => (
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
      )}

    </section>
  );
}
