'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';


const stories = [
  {
    url: 'https://akg-construction-website.vercel.app/',
    industry: 'Construction',
    client: 'AKG Construction',
    result: 'Streamlined project management and timeline tracking across 12 active sites.',
    metric: '12+', metricLabel: 'Active Sites Managed',
  },
  {
    url: 'https://urban-developer.vercel.app/',
    industry: 'Real Estate',
    client: 'Urban Developer',
    result: 'Digitized property listings and client tours with an interactive VR-ready platform.',
    metric: '3x', metricLabel: 'Increase in Virtual Tours',
  },
  {
    url: 'https://my-mentor-gpt.vercel.app/',
    industry: 'Education',
    client: 'MentorGPT',
    result: 'Deployed AI-driven personalized mentoring that scales to 10,000+ students.',
    metric: '10k+', metricLabel: 'Students Mentored',
  },
  {
    url: 'https://kashif-cafe.vercel.app/',
    industry: 'Hospitality',
    client: 'Cafe Hub',
    result: 'Launched automated ordering and inventory that reduced waste by 22%.',
    metric: '22%', metricLabel: 'Waste Reduction',
  },
  {
    url: 'https://coffee-hub-one.vercel.app/',
    industry: 'eCommerce',
    client: 'Coffee Hub One',
    result: 'Built a high-conversion custom storefront driving 45% more direct-to-consumer sales.',
    metric: '45%', metricLabel: 'Sales Growth',
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, visible };
}

export default function ClientStories() {
  const { ref: headRef, visible: headVis } = useReveal();
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(Array(stories.length).fill(false));

  const markLoaded = (i: number) =>
    setLoaded(prev => { const n = [...prev]; n[i] = true; return n; });

  return (
    <section id="portfolio" style={{ padding: '96px 24px', background: 'var(--bg-off)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={headRef}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: '24px', marginBottom: '48px',
            opacity: headVis ? 1 : 0,
            transform: headVis ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.65s ease',
          }}
        >
          <div>
            <span className="section-label">Customer Stories</span>
            <h2 className="text-section" style={{ color: 'var(--fg)' }}>
              Real Results,<br />
              <span className="gradient-text">Real Clients.</span>
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: 'var(--font-dm), sans-serif',
            color: 'var(--brand)', fontSize: '0.875rem', fontWeight: 600,
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            All client stories <ArrowRight size={14} />
          </a>
        </div>

        {/* Two-column layout — list left, featured right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
          {/* Story list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {stories.map((s, i) => {
              const { ref, visible } = { ref: useRef<HTMLDivElement>(null), visible: headVis };
              return (
                <div
                  key={s.client}
                  onClick={() => setActive(i)}
                  style={{
                    padding: '20px 24px',
                    background: active === i ? 'var(--bg)' : 'transparent',
                    border: `1px solid ${active === i ? 'var(--brand)' : 'transparent'}`,
                    borderLeft: `3px solid ${active === i ? 'var(--brand)' : 'transparent'}`,
                    borderRadius: '4px', cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    opacity: headVis ? 1 : 0,
                    transform: headVis ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${i * 0.08}s`,
                  }}
                  onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.background = 'var(--bg)'; }}
                  onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{
                    fontFamily: 'var(--font-dm), sans-serif',
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--brand-teal)',
                  }}>{s.industry}</span>
                  <p style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)', marginTop: '4px', lineHeight: 1.4,
                  }}>{s.client}</p>
                  <p style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontSize: '0.82rem', color: 'var(--fg-muted)', marginTop: '6px', lineHeight: 1.6,
                  }}>{s.result}</p>
                  {active === i && (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '12px',
                      fontFamily: 'var(--font-dm), sans-serif',
                      fontSize: '0.78rem', fontWeight: 600, color: 'var(--brand)',
                    }}>
                      Read more <ExternalLink size={11} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Featured iframe panel */}
          <div style={{
            borderRadius: '10px', overflow: 'hidden',
            position: 'relative', minHeight: '440px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
            background: 'var(--bg-card)',
          }}>
            {/* Top Browser Bar */}
            <div style={{
              height: '32px', background: 'var(--bg-off)',
              borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px',
              position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
            }}>
              {['#ff6369', '#ffbd44', '#00ca4e'].map(c => (
                <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
              ))}
              <div style={{
                marginLeft: '8px', background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '4px', height: '20px', padding: '0 8px', display: 'flex', alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-dm)', fontSize: '0.6rem', color: 'var(--fg-subtle)' }}>
                  {stories[active]?.url.replace('https://', '').replace(/\/$/, '')}
                </span>
              </div>
            </div>

            {/* Iframes */}
            <div style={{ position: 'absolute', top: '32px', left: 0, right: 0, bottom: 0 }}>
              {stories.map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute', inset: 0,
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: i === active ? 'auto' : 'none',
                    zIndex: i === active ? 5 : 1,
                  }}
                >
                  {!loaded[i] && (
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 2,
                      background: 'var(--bg-off)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <p style={{ fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.8rem', color: 'var(--fg-subtle)', animation: 'pulse 1.5s infinite' }}>Loading…</p>
                    </div>
                  )}
                  <iframe
                    src={s.url}
                    title={s.client}
                    onLoad={() => markLoaded(i)}
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                  {/* Floating Metric overlay */}
                  <div style={{
                    position: 'absolute', bottom: '24px', left: '24px', zIndex: 10,
                    background: 'rgba(10,15,40,0.85)', backdropFilter: 'blur(8px)',
                    padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '2rem', fontWeight: 700, color: '#4ade80', lineHeight: 1 }}>{s.metric}</div>
                    <div style={{ fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '4px' }}>{s.metricLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
