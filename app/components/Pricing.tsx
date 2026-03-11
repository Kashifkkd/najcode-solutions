'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Zap, Star, Building2, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    color: '#6c47ff',
    monthlyPrice: 29,
    annualPrice: 19,
    description: 'Perfect for small teams getting their operations in order.',
    highlight: false,
    badge: null,
    features: [
      'Up to 10 users',
      'Finance & Accounting',
      'Basic HR management',
      'Inventory tracking',
      '5GB file storage',
      'Email support',
      'API access',
      'Standard reports',
    ],
  },
  {
    name: 'Growth',
    icon: Star,
    color: '#00d2ff',
    monthlyPrice: 89,
    annualPrice: 59,
    description: 'The full ERP suite for fast-moving businesses.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 50 users',
      'All Starter features',
      'CRM & Sales pipeline',
      'Project management',
      'Advanced analytics & BI',
      '50GB file storage',
      'Priority support + live chat',
      'AI-powered insights',
      'Custom workflows',
      'Multi-currency support',
    ],
  },
  {
    name: 'Enterprise',
    icon: Building2,
    color: '#ff6b6b',
    monthlyPrice: 249,
    annualPrice: 179,
    description: 'Enterprise-grade power with white-glove service.',
    highlight: false,
    badge: null,
    features: [
      'Unlimited users',
      'All Growth features',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantees (99.99%)',
      'Unlimited storage',
      'On-premise deployment option',
      'SSO & SAML auth',
      'Audit logs & compliance',
      'Custom contracts',
    ],
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: 'center', marginBottom: '60px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 18px',
            background: 'rgba(255, 107, 107, 0.1)',
            border: '1px solid rgba(255, 107, 107, 0.25)',
            borderRadius: '100px',
            fontSize: '0.8rem', fontWeight: 600, color: '#ff6b6b',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Transparent Pricing
          </span>
          <h2
            className="text-section"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--fg)', marginBottom: '16px' }}
          >
            Choose Your
            <br />
            <span className="gradient-text">Growth Plan</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--fg-muted)', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            No hidden fees. No surprises. Cancel anytime. 14-day free trial on all plans.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '100px',
            padding: '6px 8px',
          }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                border: 'none', cursor: 'pointer',
                fontSize: '0.875rem', fontWeight: 600,
                background: !annual ? 'var(--brand)' : 'transparent',
                color: !annual ? 'white' : 'var(--fg-muted)',
                transition: 'all 0.3s ease',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                border: 'none', cursor: 'pointer',
                fontSize: '0.875rem', fontWeight: 600,
                background: annual ? 'var(--brand)' : 'transparent',
                color: annual ? 'white' : 'var(--fg-muted)',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              Annual
              <span style={{
                background: 'linear-gradient(135deg, #4ade80, #00d2ff)',
                color: 'white', fontSize: '0.65rem', fontWeight: 700,
                padding: '2px 8px', borderRadius: '100px',
              }}>
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '20px',
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} visible={visible} annual={annual} />
          ))}
        </div>

        {/* Enterprise CTA */}
        <div style={{
          marginTop: '40px', textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.5s',
        }}>
          <p style={{ color: 'var(--fg-muted)', fontSize: '0.9rem' }}>
            Need a custom plan for 500+ users?{' '}
            <a href="#" style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>
              Contact our sales team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index, visible, annual }: {
  plan: typeof plans[0]; index: number; visible: boolean; annual: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const price = annual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: plan.highlight ? '36px' : '32px',
        background: plan.highlight
          ? 'linear-gradient(135deg, rgba(0, 210, 255, 0.08), rgba(108, 71, 255, 0.08))'
          : 'var(--bg-card)',
        border: plan.highlight ? '1px solid rgba(0, 210, 255, 0.35)' : `1px solid ${hovered ? plan.color + '40' : 'var(--border)'}`,
        borderRadius: '24px',
        transition: 'all 0.4s ease',
        transform: visible ? (plan.highlight ? 'scale(1.03)' : hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.1}s`,
        boxShadow: plan.highlight
          ? '0 30px 60px rgba(0, 210, 255, 0.15)'
          : hovered ? `0 20px 40px ${plan.color}10` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div style={{
          position: 'absolute', top: '0', right: '0',
          background: 'linear-gradient(135deg, var(--brand), var(--accent))',
          color: 'white', fontSize: '0.7rem', fontWeight: 700,
          padding: '6px 20px',
          borderRadius: '0 24px 0 14px',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          {plan.badge}
        </div>
      )}

      {/* Plan icon */}
      <div style={{
        width: '48px', height: '48px',
        background: plan.color + '18',
        border: `1px solid ${plan.color}30`,
        borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <plan.icon size={22} color={plan.color} />
      </div>

      <h3 style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem',
        color: 'var(--fg)', marginBottom: '6px',
      }}>
        {plan.name}
      </h3>
      <p style={{ color: 'var(--fg-muted)', fontSize: '0.85rem', marginBottom: '24px', lineHeight: 1.6 }}>
        {plan.description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--fg-muted)', alignSelf: 'flex-start', marginTop: '8px' }}>$</span>
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '3.5rem', fontWeight: 800,
          color: 'var(--fg)',
          lineHeight: 1,
          transition: 'all 0.3s ease',
        }}>
          {price}
        </span>
        <span style={{ color: 'var(--fg-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>/mo</span>
      </div>

      {/* CTA */}
      <a
        href="#"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          padding: '13px 24px',
          background: plan.highlight
            ? 'linear-gradient(135deg, var(--brand), var(--accent))'
            : 'transparent',
          border: plan.highlight ? 'none' : `1px solid ${plan.color}50`,
          color: plan.highlight ? 'white' : plan.color,
          borderRadius: '12px',
          textDecoration: 'none',
          fontSize: '0.9rem', fontWeight: 600,
          marginBottom: '28px',
          boxShadow: plan.highlight ? '0 8px 24px rgba(108, 71, 255, 0.35)' : 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!plan.highlight) {
            e.currentTarget.style.background = plan.color + '12';
          } else {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(108, 71, 255, 0.5)';
          }
        }}
        onMouseLeave={(e) => {
          if (!plan.highlight) {
            e.currentTarget.style.background = 'transparent';
          } else {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(108, 71, 255, 0.35)';
          }
        }}
      >
        Get Started <ArrowRight size={16} />
      </a>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {plan.features.map(feature => (
          <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
              background: plan.color + '18',
              border: `1px solid ${plan.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Check size={11} color={plan.color} strokeWidth={3} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
