'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    label: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    description: 'We modernize manufacturing operations with IoT integrations, real-time supply chain tracking, and intelligent ERP systems that reduce downtime and optimize production cycles.',
    stats: ['30% Faster Production Cycles', '99.9% Uptime Analytics']
  },
  {
    label: 'Retail & eCommerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    description: 'Elevate customer experiences with blazing-fast headless commerce platforms, AI-driven personalizations, and unified inventory management across all channels.',
    stats: ['40% Boost in Conversion', 'Omnichannel Sync']
  },
  {
    label: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    description: 'Secure, HIPAA-compliant patient management platforms, telehealth integrations, and data analytics that improve care delivery and streamline hospital administration.',
    stats: ['HIPAA Compliant', 'Seamless Telehealth']
  },
  {
    label: 'Finance & Banking',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Next-generation fintech solutions ranging from robust payment gateways to secure blockchain ledgers, designed for scale and uncompromising security.',
    stats: ['Bank-grade Security', 'Real-time Ledgers']
  },
  {
    label: 'Logistics',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200',
    description: 'End-to-end logistics platforms offering real-time fleet tracking, automated route optimization, and smart warehousing solutions for global operations.',
    stats: ['25% Fuel Savings', 'AI Route Optimization']
  },
  {
    label: 'Education',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    description: 'Engaging, accessible EdTech platforms including bespoke Learning Management Systems (LMS) and interactive virtual classrooms that scale to millions of users.',
    stats: ['Custom LMS', 'Scalable Classrooms']
  },
  {
    label: 'Energy & Utilities',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    description: 'Transforming energy grids with smart meter integrations, predictive maintenance dashboards, and sustainable resource management software.',
    stats: ['Smart Grid Ready', 'Predictive Maintenance']
  },
  {
    label: 'Life Sciences',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200',
    description: 'Accelerate research and development with secure clinical trial data platforms, deep learning research tools, and rigorous compliance tracking systems.',
    stats: ['FDA Compliant Data', 'Accelerated R&D']
  },
  {
    label: 'High Tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    description: 'Partnering with innovative startups and tech giants to build scalable SaaS architectures, complex microservices, and AI-native applications.',
    stats: ['Cloud Native', 'Microservices Architecture']
  },
  {
    label: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    description: 'Digitalizing the construction site with unified project management tools, resource allocation trackers, and BIM software integrations.',
    stats: ['Unified Tracking', 'Reduced Overhead']
  },
  {
    label: 'Telecom & Media',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=1200',
    description: 'High-bandwidth content delivery systems, OTT streaming platforms, and scalable BSS/OSS solutions that keep the world connected.',
    stats: ['High Concurrency', 'Global CDN Integration']
  },
  {
    label: 'Travel & Aviation',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
    description: 'Seamless booking engines, loyalty program management, and flight operations software designed to deliver frictionless traveler experiences.',
    stats: ['Frictionless Booking', 'Loyalty Management']
  },
];

export default function IndustriesPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="min-h-screen pt-[80px]" style={{ background: 'var(--bg)' }}>
        {/* Page Hero */}
        <section style={{ padding: '80px 24px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>
              Industries
            </span>
            <h1 style={{
              fontFamily: 'var(--font-fraunces), serif', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--fg)',
              lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px'
            }}>
              Solutions tailored for<br />
              <span className="gradient-text">every sector.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '1.1rem', color: 'var(--fg-muted)', maxWidth: '600px', margin: '0 auto',
            }}>
              We don't believe in one-size-fits-all. Dive into our industry-specific expertise and see how we build software engineered for your unique challenges.
            </p>
          </div>
        </section>

        {/* Industries List */}
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {industries.map((industry, i) => (
              <div
                key={industry.label}
                id={industry.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                style={{
                  display: 'flex',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '40px',
                  flexWrap: 'wrap'
                }}
                className="group"
              >
                {/* Image Side */}
                <div style={{
                  flex: '1 1 500px',
                  height: '400px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${industry.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} className="group-hover:scale-105" />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '24px', left: '24px',
                    fontFamily: 'var(--font-fraunces), serif', fontSize: '2rem',
                    fontWeight: 700, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}>
                    {industry.label}
                  </div>
                </div>

                {/* Content Side */}
                <div style={{ flex: '1 1 400px', padding: '24px 0' }}>
                  <div style={{
                    width: '40px', height: '3px', background: 'var(--brand)', marginBottom: '20px'
                  }} />
                  <h2 style={{
                    fontFamily: 'var(--font-fraunces), serif', fontSize: '2.5rem',
                    fontWeight: 700, color: 'var(--fg)', marginBottom: '16px'
                  }}>
                    {industry.label}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-manrope), sans-serif', fontSize: '1.1rem',
                    color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: '32px'
                  }}>
                    {industry.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                    {industry.stats.map(stat => (
                      <div key={stat} style={{
                        padding: '8px 16px', borderRadius: '8px',
                        background: 'var(--bg-off)', border: '1px solid var(--border)',
                        fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.9rem',
                        fontWeight: 600, color: 'var(--brand)'
                      }}>
                        {stat}
                      </div>
                    ))}
                  </div>

                  <Link href="/#contact" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Discuss your project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: '60px 24px', background: 'var(--bg-navy)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), serif', fontSize: '2rem',
              fontWeight: 700, color: '#fff', marginBottom: '16px'
            }}>
              Ready to transform your industry?
            </h2>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif', fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.7)', marginBottom: '32px'
            }}>
              Let's build software that puts you ahead of the competition.
            </p>
            <Link href="/#contact" className="btn-primary" style={{ background: 'var(--brand-teal)' }}>
              Get in Touch Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
