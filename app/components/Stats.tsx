'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Cloud, Cpu, Globe, Infinity, Hexagon } from 'lucide-react';

const stats = [
  { value: 12, suffix: '+', prefix: '', label: 'Happy Clients', sub: 'Across 3 countries' },
  { value: 100, suffix: '%', prefix: '', label: 'On-Time Delivery', sub: 'Across 20+ projects' },
  { value: 50, suffix: '0k+', prefix: '', label: 'Lines of Code', sub: 'Written with passion' },
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
    name: "Nebula Systems",
    icon: <Cloud size={24} />
  },
  {
    name: "Acme Corp",
    icon: <Box size={24} />
  },
  {
    name: "Globex Analytics",
    icon: <Globe size={24} />
  },
  {
    name: "Initech Data",
    icon: <Cpu size={24} />
  },
  {
    name: "Axiom Infinity",
    icon: <Infinity size={24} />
  },
  {
    name: "Hexa Solutions",
    icon: <Hexagon size={24} />
  }
];

const repeatedLogos = [...techLogos, ...techLogos, ...techLogos];

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
