'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Lottie from 'lottie-react';

// Require the JSON animations directly
import businessAnim from '../../public/Business Analytics.json';
import meetingAnim from '../../public/Meeting.json';
import softwareAnim from '../../public/Software.json';
import startupAnim from '../../public/tech startup.json';

const slides = [
  {
    anim: softwareAnim,
    label: 'Enterprise ERP',
    tag: 'Cloud Architecture',
  },
  {
    anim: businessAnim,
    label: 'AI & Intelligence',
    tag: 'Predictive Analytics',
  },
  {
    anim: meetingAnim,
    label: 'Team Collaboration',
    tag: 'Workflow Automation',
  },
  {
    anim: startupAnim,
    label: 'Scale & Growth',
    tag: 'Digital Transformation',
  },
];

const heroContent = {
  overline: 'Enterprise Technology Partner',
  headline: 'Building Perpetually\nAdaptive Enterprises',
  sub: 'From manufacturing floors to boardroom dashboards — NajCode Solution Pvt Ltd delivers technology that helps businesses evolve, automate, and scale without limits.',
  cta: 'Explore Our Services',
  ctaHref: '#services',
};

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '68px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
        backgroundSize: '36px 36px', opacity: 0.6,
      }} />
      {/* Glows */}
      <div style={{ position: 'absolute', top: '-8%', right: '20%', width: '600px', height: '500px', pointerEvents: 'none', background: 'radial-gradient(ellipse, rgba(0,166,153,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '5%', width: '400px', height: '300px', pointerEvents: 'none', background: 'radial-gradient(ellipse, rgba(0,98,204,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="flex flex-col-reverse lg:grid" style={{
        maxWidth: '1440px', margin: '0 auto',
        padding: '0 32px',
        paddingLeft: 'max(4vw, 32px)',
        width: '100%',
        gridTemplateColumns: 'minmax(400px, 580px) 1fr',
        gap: '64px',
        alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {/* ── LEFT — Copy ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Overline */}
          <div style={{ display: 'inline-flex', gap: '8px', marginBottom: '20px', marginTop: '20px' }} className="lg:mt-0">
            <span style={{
              fontFamily: 'var(--font-dm), sans-serif',
              fontWeight: 700,
              letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'var(--brand-teal)',
            }} className="text-[10px] lg:text-[11px]">
              {heroContent.overline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl" style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontWeight: 700,
            lineHeight: 1.06, letterSpacing: '-0.025em',
            color: 'var(--fg)', marginBottom: '22px',
            whiteSpace: 'pre-line',
            animation: visible ? 'fadeUp 0.55s ease forwards 0.08s' : 'none',
          }}>
            {heroContent.headline}
          </h1>

          {/* Sub */}
          <p className="text-sm lg:text-base" style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            color: 'var(--fg-muted)',
            lineHeight: 1.8, marginBottom: '36px',
            maxWidth: '560px',
          }}>
            {heroContent.sub}
          </p>

          {/* CTAs */}
          <div className="flex-col sm:flex-row" style={{ display: 'flex', gap: '14px', marginBottom: '48px' }}>
            <a href={heroContent.ctaHref} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              {heroContent.cta} <ArrowRight size={16} />
            </a>
            <button
               className="w-full justify-center sm:w-auto sm:justify-start"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '12px 20px', fontFamily: 'var(--font-dm), sans-serif',
                background: 'var(--bg-off)', border: '1px solid var(--border)',
                color: 'var(--fg)', borderRadius: '4px',
                fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.color = 'var(--brand)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg)'; }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={10} fill="white" color="white" />
              </div>
              Watch Client Stories
            </button>
          </div>


        </div>

        {/* ── RIGHT — Lottie Animation Carousel ── */}
        <div className="pt-12 lg:pt-0 flex" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
          flexDirection: 'column', gap: '0',
          width: '100%',
        }}>
          {/* Lottie Animation Container */}
          <div className="h-[300px] lg:h-[520px]" style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {slides.map((s, i) => (
              <div
                key={s.label}
                className="p-4 lg:p-8"
                style={{
                  position: 'absolute', inset: 0,
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'scale(1)' : 'scale(0.96)',
                  transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: i === current ? 'auto' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Lottie
                  animationData={s.anim}
                  loop={true}
                  style={{ width: '100%', height: '100%', maxWidth: '640px' }}
                />
              </div>
            ))}
          </div>

          {/* Controls: prev · dots · next */}
          <div className="hidden lg:flex" style={{
            marginTop: '18px',
            alignItems: 'center',
            justifyContent: 'space-between', gap: '12px',
          }}>
            <button
              onClick={prev}
              aria-label="Previous animation"
              className="hidden md:flex"
              style={{
                width: '44px', height: '44px', border: 'none', background: 'transparent',
                color: 'var(--fg-muted)', cursor: 'pointer',
                alignItems: 'center', justifyContent: 'center',
                transition: 'color 0.2s ease', flexShrink: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-muted)'; }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Dots + label */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1 }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: i === current ? '24px' : '8px', height: '8px',
                      borderRadius: '100px', border: 'none', cursor: 'pointer', padding: 0,
                      background: i === current ? 'var(--brand)' : 'var(--border)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
              <span style={{
                fontFamily: 'var(--font-dm), sans-serif',
                fontSize: '0.72rem', color: 'var(--fg-subtle)',
                letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600,
              }}>
                {slide.label}
              </span>
            </div>

            <button
              onClick={next}
              aria-label="Next animation"
              className="hidden md:flex"
              style={{
                width: '44px', height: '44px', border: 'none', background: 'transparent',
                color: 'var(--fg-muted)', cursor: 'pointer',
                alignItems: 'center', justifyContent: 'center',
                transition: 'color 0.2s ease', flexShrink: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-muted)'; }}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Accent bottom line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, var(--brand) 30%, var(--brand-teal) 70%, transparent 100%)',
      }} />
    </section>
  );
}
