'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 120, suffix: '+', prefix: '', label: 'Clients Worldwide', sub: 'Across 18+ countries' },
  { value: 98, suffix: '%', prefix: '', label: 'On-Time Delivery', sub: 'Across 400+ projects' },
  { value: 2.4, suffix: 'B', prefix: '$', label: 'Revenue Unlocked', sub: 'For our clients in 2024' },
  { value: 6, suffix: ' wks', prefix: '', label: 'Avg. Go-Live Time', sub: 'From kickoff to launch' },
];

function Counter({ end, suffix, prefix, started }: { end: number; suffix: string; prefix: string; started: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!started) return;
    const steps = 60; let cur = 0;
    const t = setInterval(() => {
      cur += end / steps;
      if (cur >= end) { setV(end); clearInterval(t); } else setV(cur);
    }, 2000 / steps);
    return () => clearInterval(t);
  }, [started, end]);
  return <span>{prefix}{end % 1 === 0 ? Math.round(v).toLocaleString() : v.toFixed(1)}{suffix}</span>;
}

const techLogos = [
  {
    name: "Vercel",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L24 21H0L12 3Z" />
      </svg>
    )
  },
  {
    name: "React",
    icon: (
      <svg width="24" height="24" viewBox="-11.5 -10.232 23 20.463" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle r="2.05" fill="currentColor" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-.224 16.355l-3.328-4.632v4.632H7.13V7.206h1.563l3.52 4.908v-4.908h1.32v9.149h-1.757z" />
      </svg>
    )
  }
];

const repeatedLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      {/* Stats row */}
      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px 56px' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-2 lg:gap-0 relative">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center p-2 lg:p-8 text-center relative"
            >
              {/* Desktop separator */}
              {i < 3 && (
                <div className="hidden lg:block absolute right-0 top-[20%] bottom-[20%] w-[1px]" style={{ background: 'var(--border)' }} />
              )}
              <div style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700,
                color: 'var(--brand)', lineHeight: 1, marginBottom: '6px',
              }}>
                <Counter end={s.value} suffix={s.suffix} prefix={s.prefix} started={started} />
              </div>
              <p style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontWeight: 700, fontSize: '0.9rem', color: 'var(--fg)', marginBottom: '3px',
              }}>{s.label}</p>
              <p style={{
                fontFamily: 'var(--font-dm), sans-serif',
                fontSize: '0.75rem', color: 'var(--fg-subtle)',
              }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client logo ticker */}
      <div style={{
        borderTop: '1px solid var(--border)', padding: '24px 0',
        overflow: 'hidden',
        background: 'var(--bg-off)',
        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      }}>
        <div className="animate-ticker" style={{ display: 'inline-flex', gap: '80px', whiteSpace: 'nowrap', padding: '0 40px' }}>
          {repeatedLogos.map((tech, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--fg-muted)' }}>
              {tech.icon}
              <span style={{
                fontFamily: 'var(--font-dm), sans-serif',
                fontSize: '1rem', fontWeight: 600, color: 'var(--fg-muted)',
                letterSpacing: '-0.02em',
              }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
