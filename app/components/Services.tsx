'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  { label: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
  { label: 'Retail & eCommerce', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600' },
  { label: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600' },
  { label: 'Finance & Banking', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a223690?auto=format&fit=crop&q=80&w=600' },
  { label: 'Logistics', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600' },
  { label: 'Education', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600' },
  { label: 'Energy & Utilities', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600' },
  { label: 'Life Sciences', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600' },
  { label: 'High Tech', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' },
  { label: 'Construction', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600' },
  { label: 'Telecom & Media', image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600' },
  { label: 'Travel & Aviation', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600' },
];

const services = [
  {
    number: '01',
    title: 'ERP & Enterprise Systems',
    desc: 'Custom-built ERP solutions that unify finance, HR, inventory, and operations into one intelligent system — tailored precisely to your processes.',
    tags: ['Finance', 'HR', 'Inventory', 'Operations'],
  },
  {
    number: '02',
    title: 'CRM & Sales Automation',
    desc: 'Visual pipelines, AI follow-ups, and deep analytics that help your sales team close more deals, faster — with zero manual admin.',
    tags: ['Pipeline', 'Automation', 'Analytics'],
  },
  {
    number: '03',
    title: 'AI & Business Intelligence',
    desc: 'Natural language dashboards, predictive forecasts, and anomaly detection that turn your raw data into a competitive advantage.',
    tags: ['Predictive AI', 'NLP Dashboards', 'Data Pipelines'],
  },
  {
    number: '04',
    title: 'Cloud Migration & DevOps',
    desc: 'Zero-downtime migration to AWS, Azure, or GCP — complete with CI/CD pipelines, monitoring, and cost optimization from day one.',
    tags: ['AWS', 'GCP', 'Azure', 'CI/CD'],
  },
  {
    number: '05',
    title: 'Web & Mobile Applications',
    desc: 'Scalable, beautifully designed software — from customer portals to internal tools — delivered with full QA and production-grade infrastructure.',
    tags: ['React', 'Next.js', 'iOS', 'Android'],
  },
  {
    number: '06',
    title: 'IT Consulting & Strategy',
    desc: 'Tech stack audits, digital roadmaps, and architecture planning that align your technology investments with your long-term business goals.',
    tags: ['Roadmapping', 'Audits', 'Architecture'],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, visible };
}

export default function Services() {
  const { ref: headRef, visible: headVisible } = useReveal();

  return (
    <>
      {/* ── INDUSTRIES ── */}
      <section id="industries" style={{ padding: '72px 24px', background: 'var(--bg-off)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <span className="section-label">Industries We Serve</span>
              <h2 style={{
                fontFamily: 'var(--font-fraunces), serif', fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--fg)',
                letterSpacing: '-0.02em',
              }}>
                Cutting-edge solutions across every sector
              </h2>
            </div>
            <a href="#" style={{
              fontFamily: 'var(--font-dm), sans-serif',
              color: 'var(--brand)', fontSize: '0.875rem', fontWeight: 600,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              All industries <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {industries.map((ind) => (
              <a
                key={ind.label}
                href="#"
                className="group relative h-[240px] rounded-[16px] overflow-hidden shadow-lg border border-black/10 dark:border-white/10"
                style={{
                  display: 'flex', alignItems: 'flex-end', textDecoration: 'none',
                  background: 'var(--bg-card)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${ind.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }} className="group-hover:scale-110" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)',
                  transition: 'opacity 0.4s ease',
                }} className="opacity-80 group-hover:opacity-100" />
                
                {/* Hover Arrow Icon */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', opacity: 0, transform: 'translateY(10px) rotate(-45deg)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', border: '1px solid rgba(255,255,255,0.2)'
                }} className="group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0">
                  <ArrowRight size={16} />
                </div>

                <div style={{
                  position: 'relative', zIndex: 1, padding: '24px',
                  width: '100%'
                }}>
                  <div style={{
                    width: '32px', height: '2px', background: 'var(--brand)', marginBottom: '12px',
                    transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} className="group-hover:scale-x-100" />
                  <span style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '1.4rem', fontWeight: 600, color: 'white',
                    lineHeight: 1.2, letterSpacing: '0.01em', display: 'block'
                  }}>
                    {ind.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '96px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div
            ref={headRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '40px', alignItems: 'end', marginBottom: '60px',
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s ease',
            }}
          >
            <div>
              <span className="section-label">What We Deliver</span>
              <h2 className="text-section" style={{ color: 'var(--fg)' }}>
                Experience our services.<br />
                <span className="gradient-text">Transform your business.</span>
              </h2>
            </div>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              color: 'var(--fg-muted)', fontSize: '1rem', lineHeight: 1.8,
            }}>
              We don't deliver off-the-shelf solutions. Every engagement starts with deep discovery and ends with a system built precisely for your workflow — on time, every time.
            </p>
          </div>

          {/* Services grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: '12px', overflow: 'hidden',
          }}>
            {services.map((svc, i) => (
              <ServiceCard key={svc.number} svc={svc} index={i} />
            ))}
          </div>

          {/* CTA strip */}
          <div style={{
            marginTop: '48px', padding: '28px 36px',
            background: 'var(--bg-navy)', borderRadius: '8px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: '24px', flexWrap: 'wrap',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '4px',
              }}>
                Not sure where to start?
              </p>
              <p style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem',
              }}>
                Book a free 45-minute discovery call with our senior consultants.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              style={{ background: 'var(--brand-teal)', flexShrink: 0 }}
            >
              Book Free Discovery Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px 32px',
        background: hovered ? 'var(--bg-off)' : 'var(--bg)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 0.06}s`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, var(--brand), var(--brand-teal))',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform 0.35s ease',
      }} />

      {/* Number */}
      <span style={{
        fontFamily: 'var(--font-fraunces), serif',
        fontSize: '0.8rem', fontWeight: 400, color: 'var(--brand-teal)',
        letterSpacing: '0.06em', display: 'block', marginBottom: '14px',
      }}>{svc.number}</span>

      <h3 style={{
        fontFamily: 'var(--font-manrope), sans-serif',
        fontWeight: 700, fontSize: '1.05rem',
        color: hovered ? 'var(--brand)' : 'var(--fg)',
        marginBottom: '12px', transition: 'color 0.25s ease', lineHeight: 1.3,
      }}>
        {svc.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-manrope), sans-serif',
        color: 'var(--fg-muted)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '20px',
      }}>
        {svc.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {svc.tags.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-dm), sans-serif',
            padding: '3px 10px', borderRadius: '3px',
            background: 'var(--bg-off)', border: '1px solid var(--border)',
            fontSize: '0.72rem', fontWeight: 500, color: 'var(--fg-subtle)',
          }}>{t}</span>
        ))}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-dm), sans-serif',
        fontSize: '0.82rem', fontWeight: 600, color: 'var(--brand)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease',
      }}>
        Learn more <ArrowRight size={13} />
      </div>
    </div>
  );
}
