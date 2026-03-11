'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    sub: 'Week 1–2',
    desc: 'We run deep-dive workshops with your team to fully understand your processes, pain points, and goals. You get a detailed technology roadmap and scope document — before we write a single line of code.',
    items: ['Business process mapping', 'Stakeholder workshops', 'Technology roadmap', 'Scope & timeline document'],
  },
  {
    icon: Settings,
    title: 'Build & Configure',
    sub: 'Week 3 onwards',
    desc: 'Our engineers build iteratively with weekly demos and your feedback embedded into every sprint. No surprises. You always know exactly what\'s being built and why.',
    items: ['Agile sprint delivery', 'Weekly demos', 'Data migration', 'Integration with existing tools'],
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    sub: 'Go-live & beyond',
    desc: 'We don\'t disappear at launch. Your dedicated success manager stays for 90 days, and our team trains every employee until adoption is complete and measurable.',
    items: ['Staff training & documentation', 'Hypercare support (90 days)', 'Performance monitoring', 'Continuous optimisation'],
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="how-it-works" style={{ padding: '96px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))',
            gap: '56px', alignItems: 'start',
            opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)',
            transition: 'all 0.7s ease',
          }}
        >
          {/* Left — headline */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <span className="section-label">Our Process</span>
            <h2 className="text-section" style={{ color: 'var(--fg)', marginBottom: '20px' }}>
              Up and running<br />
              <em style={{ fontStyle: 'italic', color: 'var(--brand)' }}>in 72 hours.</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              color: 'var(--fg-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px',
            }}>
              We've refined our delivery process across 400+ projects. Every engagement follows the same disciplined, transparent approach — so you always know what's next.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '16px',
              padding: '20px 24px',
              background: 'var(--bg-navy)', borderRadius: '8px',
            }}>
              <div style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-teal)', lineHeight: 1,
              }}>6wk</div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontWeight: 700, color: 'white', fontSize: '0.9rem',
                }}>Average time to go-live</p>
                <p style={{
                  fontFamily: 'var(--font-dm), sans-serif',
                  fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px',
                }}>Faster than any ERP vendor's SLA</p>
              </div>
            </div>

            {/* Video Placeholder */}
            <div style={{
              marginTop: '40px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              height: '400px',
              position: 'relative'
            }}>
              <video
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              >
                {/* Free tech/office video placeholder from open source/Creative Commons source */}
                <source src="https://videos.pexels.com/video-files/6804128/6804128-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right — steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{
                  padding: '32px',
                  background: 'var(--bg-off)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  marginBottom: '12px',
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.6s ease ${i * 0.15}s`,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '3px', bottom: 0,
                  background: 'linear-gradient(180deg, var(--brand), var(--brand-teal))',
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '8px',
                      background: 'rgba(0,98,204,0.1)', border: '1px solid rgba(0,98,204,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <step.icon size={20} color="var(--brand)" />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: 'var(--font-manrope), sans-serif',
                        fontWeight: 700, fontSize: '1rem', color: 'var(--fg)',
                      }}>{step.title}</p>
                      <p style={{
                        fontFamily: 'var(--font-dm), sans-serif',
                        fontSize: '0.72rem', color: 'var(--brand-teal)', fontWeight: 600,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                      }}>{step.sub}</p>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '2rem', fontWeight: 700, color: 'var(--brand)',
                    opacity: 0.15, lineHeight: 1,
                  }}>0{i + 1}</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-manrope), sans-serif',
                  color: 'var(--fg-muted)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '16px',
                }}>{step.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {step.items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'var(--font-dm), sans-serif',
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      padding: '4px 10px', borderRadius: '3px',
                      background: 'rgba(0,98,204,0.07)', border: '1px solid rgba(0,98,204,0.15)',
                      fontSize: '0.75rem', fontWeight: 500, color: 'var(--brand)',
                    }}>
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
