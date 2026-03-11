'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "NajCode delivered our ERP system in 6 weeks — when our previous vendor had been saying '6 months' for two years. The difference is night and day.",
    name: 'Sarah Mitchell',
    title: 'COO, Vertex Manufacturing',
    initial: 'SM',
    color: '#0062cc',
    metric: '68% admin reduction',
  },
  {
    quote: "The CRM they built has completely transformed how our sales team works. We're closing 40% more deals with the same headcount. Exceptional ROI.",
    name: 'David Okonkwo',
    title: 'VP Sales, RapidScale Logistics',
    initial: 'DO',
    color: '#00a699',
    metric: '40% revenue growth',
  },
  {
    quote: "What impressed us most was their depth of business understanding. They didn't just write code — they fundamentally redesigned our supply chain workflow.",
    name: 'Priya Sharma',
    title: 'Head of Operations, GreenLeaf Retail',
    initial: 'PS',
    color: '#e84118',
    metric: '89% stockout elimination',
  },
  {
    quote: "Their AI dashboard now saves our executive team 13 hours per board report. The NLP interface alone is worth the entire engagement fee.",
    name: 'Marcus Becker',
    title: 'CFO, NexGen Solutions',
    initial: 'MB',
    color: '#f5a623',
    metric: '13h saved per report',
  },
  {
    quote: "NajCode aren't just vendors — they're true technology partners. We've now built four systems with them and each delivery has been better than the last.",
    name: 'Chen Wei',
    title: 'CTO, Alpine Group',
    initial: 'CW',
    color: '#0062cc',
    metric: '4 systems delivered',
  },
  {
    quote: "I was skeptical we could migrate 8 years of data and go live with zero downtime. NajCode proved me wrong. It was the smoothest enterprise rollout I've witnessed.",
    name: 'Amara Nwosu',
    title: 'IT Director, OptiManufacture',
    initial: 'AN',
    color: '#00a699',
    metric: 'Zero-downtime migration',
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

export default function Testimonials() {
  const { ref: headRef, v: headVis } = useReveal();
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((api: any) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section id="testimonials" style={{ padding: '96px 24px', background: 'var(--bg-off)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          ref={headRef}
          style={{
            textAlign: 'center', marginBottom: '56px',
            opacity: headVis ? 1 : 0,
            transform: headVis ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.65s ease',
          }}
        >
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Client Voices</span>
          <h2 className="text-section" style={{ color: 'var(--fg)' }}>
            With you for the<br />
            <span className="gradient-text">long run.</span>
          </h2>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="embla" ref={emblaRef} style={{ overflow: 'hidden', width: '100%' }}>
          {/* Embla Container */}
          <div className="embla__container" style={{ display: 'flex', marginLeft: '-24px', touchAction: 'pan-y' }}>
            {testimonials.map((t, i) => {
              return (
                <div
                  key={t.name}
                  className="embla__slide"
                  style={{
                    flex: '0 0 auto',
                    width: 'calc(min(100%, 380px) + 24px)',
                    paddingLeft: '24px',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    padding: '28px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {/* Accent corner */}
                    <div style={{
                      position: 'absolute', top: 0, right: 0,
                      width: '40px', height: '40px',
                      background: t.color + '18',
                      borderBottomLeftRadius: '100%',
                    }} />

                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={13} fill="#f5a623" color="#f5a623" />)}
                    </div>

                    {/* Quote */}
                    <p style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.9rem', color: 'var(--fg)',
                      lineHeight: 1.8, marginBottom: '20px',
                      fontStyle: 'normal',
                    }}>
                      "{t.quote}"
                    </p>

                    {/* Metric badge */}
                    <div style={{
                      display: 'inline-block', marginBottom: '20px',
                      padding: '4px 12px', borderRadius: '3px',
                      background: t.color + '12',
                      border: `1px solid ${t.color}28`,
                      fontFamily: 'var(--font-dm), sans-serif',
                      fontSize: '0.72rem', fontWeight: 700,
                      color: t.color, letterSpacing: '0.04em',
                      alignSelf: 'flex-start',
                    }}>
                      {t.metric}
                    </div>

                    {/* Author */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: 'auto' }}>
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '50%',
                        background: t.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-fraunces), serif',
                        fontSize: '0.85rem', fontWeight: 700, color: 'white', flexShrink: 0,
                      }}>{t.initial}</div>
                      <div>
                        <p style={{
                          fontFamily: 'var(--font-manrope), sans-serif',
                          fontWeight: 700, fontSize: '0.875rem', color: 'var(--fg)',
                        }}>{t.name}</p>
                        <p style={{
                          fontFamily: 'var(--font-dm), sans-serif',
                          fontSize: '0.75rem', color: 'var(--fg-subtle)', marginTop: '1px',
                        }}>{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === selectedIndex ? '28px' : '8px',
                height: '8px',
                borderRadius: '100px',
                border: 'none',
                background: index === selectedIndex ? 'var(--brand)' : 'var(--border)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
