'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a custom ERP system?',
    a: 'Our typical ERP engagement goes live in 6–10 weeks for a mid-market business. Complex enterprise rollouts with multiple subsidiaries or legacy migrations may take 12–20 weeks. We provide a fixed timeline estimate after our 2-week discovery phase — and we stick to it.',
  },
  {
    q: 'Do you work with businesses outside of our country?',
    a: 'Yes. We serve clients across 18+ countries. Our team operates across multiple time zones and we have delivery centers in South Asia, the Middle East, and Europe. Remote collaboration is part of our DNA.',
  },
  {
    q: 'What happens after the system goes live?',
    a: 'Every engagement includes a 90-day hypercare period with dedicated support, weekly check-ins, and guaranteed SLA response times. After that, most clients move to our ongoing managed service plan for continued optimization and feature development.',
  },
  {
    q: 'Can you integrate with our existing software (SAP, Salesforce, QuickBooks, etc.)?',
    a: 'Absolutely. We have deep integration experience with SAP, Oracle, Salesforce, HubSpot, QuickBooks, Xero, Shopify, Amazon, and dozens of other platforms. Integration scoping is part of our discovery process.',
  },
  {
    q: 'How do you handle data migration from our legacy systems?',
    a: 'We run parallel systems during migration, validate data thoroughly with your team, and never do big-bang cutovers. Our standard migration process includes a dry run, data quality audit, and a rollback plan — ensuring zero data loss.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Our deepest expertise is in manufacturing, retail, logistics, healthcare, and finance. However, we\'ve built systems across 14+ verticals. If your business has unique workflows, that\'s exactly the kind of challenge we enjoy.',
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const ansRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [vis, setVis] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (ansRef.current) setHeight(open ? ansRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div
      ref={ref}
      style={{
        borderBottom: '1px solid var(--border)',
        opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(16px)',
        transition: `all 0.5s ease ${delay}s`,
      }}
    >
      <button
        onClick={() => setOpen(p => !p)}
        style={{
          width: '100%', textAlign: 'left', padding: '22px 0',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-manrope), sans-serif',
          fontWeight: 600, fontSize: '1rem', color: open ? 'var(--brand)' : 'var(--fg)',
          transition: 'color 0.2s ease', lineHeight: 1.4,
        }}>{q}</span>
        <ChevronDown size={18} color={open ? 'var(--brand)' : 'var(--fg-subtle)'}
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'all 0.3s ease' }}
        />
      </button>
      <div style={{ height, overflow: 'hidden', transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
        <div ref={ansRef} style={{ paddingBottom: '20px' }}>
          <p style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.8,
          }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="faq" style={{ padding: '96px 24px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '64px',
        }}>
          {/* Left */}
          <div
            ref={ref}
            style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.65s ease' }}
          >
            <span className="section-label">FAQs</span>
            <h2 className="text-section" style={{ color: 'var(--fg)', marginBottom: '20px' }}>
              Common<br />
              <span className="gradient-text">Questions.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              color: 'var(--fg-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '32px',
            }}>
              Have more questions? Our senior consultants are available for a free 45-minute call.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-dm), sans-serif',
                padding: '11px 22px', background: 'var(--brand)',
                color: 'white', borderRadius: '4px', textDecoration: 'none',
                fontSize: '0.875rem', fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0056b8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--brand)'; }}
            >
              <MessageCircle size={15} />
              Chat with our team
            </a>
          </div>

          {/* Right */}
          <div>
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
