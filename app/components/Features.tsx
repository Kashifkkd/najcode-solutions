'use client';

import { useEffect, useRef, useState } from 'react';
import {
  BarChart3, Users, Package, CreditCard,
  Briefcase, Brain, ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    color: '#6c47ff',
    title: 'Smart Finance & Accounting',
    description: 'Automated bookkeeping, real-time P&L, tax compliance across 50+ jurisdictions, and AI-generated financial forecasts that actually make sense.',
    tags: ['Invoicing', 'Tax Filing', 'Forecasting'],
  },
  {
    icon: Users,
    color: '#00d2ff',
    title: 'HR & People Management',
    description: 'Streamline hiring, onboarding, payroll, and performance reviews with smart automations and beautiful employee portals.',
    tags: ['Payroll', 'Recruitment', 'Time Tracking'],
  },
  {
    icon: Package,
    color: '#ff6b6b',
    title: 'Inventory & Supply Chain',
    description: 'Real-time stock visibility, automated reordering, multi-warehouse management, and supplier collaboration in one unified view.',
    tags: ['Stock Alerts', 'PO Management', 'Tracking'],
  },
  {
    icon: Briefcase,
    color: '#ffd93d',
    title: 'CRM & Sales Pipeline',
    description: 'Close deals faster with a visual pipeline, automated follow-ups, email sequences, and deep customer insights powered by AI.',
    tags: ['Leads', 'Pipeline', 'Analytics'],
  },
  {
    icon: CreditCard,
    color: '#4ade80',
    title: 'Project & Task Management',
    description: "Kanban boards, Gantt charts, time tracking, and budget management — keep every project on time and under budget.",
    tags: ['Kanban', 'Gantt', 'Milestones'],
  },
  {
    icon: Brain,
    color: '#f472b6',
    title: 'AI Business Intelligence',
    description: 'Natural language queries, predictive analytics, anomaly detection, and executive dashboards that tell you what matters, instantly.',
    tags: ['NL Queries', 'Predictions', 'Reports'],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function Features() {
  const { ref: headRef, visible: headVisible } = useReveal();

  return (
    <section id="features" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={headRef}
          style={{
            textAlign: 'center', marginBottom: '72px',
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 18px',
            background: 'rgba(108, 71, 255, 0.1)',
            border: '1px solid rgba(108, 71, 255, 0.2)',
            borderRadius: '100px',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Everything You Need
          </span>
          <h2
            className="text-section"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--fg)', marginBottom: '16px' }}
          >
            One Platform.<br />
            <span className="gradient-text">Infinite Possibilities.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--fg-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Replace your scattered tools with one cohesive system. Built for growing businesses that refuse to compromise on power or simplicity.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '20px',
        }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '32px',
        background: hovered ? 'var(--bg-secondary)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? feature.color + '40' : 'var(--border)'}`,
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hovered ? `0 20px 40px ${feature.color}15` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: hovered ? `linear-gradient(90deg, transparent, ${feature.color}, transparent)` : 'transparent',
        transition: 'all 0.4s ease',
      }} />

      {/* Icon */}
      <div style={{
        width: '52px', height: '52px',
        background: feature.color + '18',
        border: `1px solid ${feature.color}30`,
        borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: hovered ? `0 8px 24px ${feature.color}25` : 'none',
      }}>
        <feature.icon size={24} color={feature.color} />
      </div>

      <h3 style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem',
        color: 'var(--fg)', marginBottom: '12px',
      }}>
        {feature.title}
      </h3>
      <p style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
        {feature.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {feature.tags.map(tag => (
          <span key={tag} style={{
            padding: '4px 10px',
            background: feature.color + '12',
            border: `1px solid ${feature.color}25`,
            borderRadius: '100px',
            fontSize: '0.72rem', fontWeight: 600,
            color: feature.color,
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        color: feature.color, fontSize: '0.85rem', fontWeight: 600,
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateX(0)' : 'translateX(-10px)',
        transition: 'all 0.3s ease',
      }}>
        Learn more <ArrowRight size={14} />
      </div>
    </div>
  );
}
