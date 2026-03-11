'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building2, Calendar, MapPin, Users } from 'lucide-react';

export default function AboutPage() {
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
      <main style={{ paddingTop: '68px', minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Header Section */}
        <section
          style={{
            background: 'linear-gradient(rgba(10, 15, 20, 0.8), rgba(10, 15, 20, 0.85)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid var(--border)',
            padding: '120px 24px',
            position: 'relative'
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <span style={{
              fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.8rem', fontWeight: 700,
              color: 'var(--brand-teal)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px'
            }}>
              Our Story
            </span>
            <h1 style={{
              fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700,
              color: 'white', marginBottom: '24px', lineHeight: 1.1
            }}>
              Building Perpetually Adaptive <br />
              <span className="gradient-text">Enterprises.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.8, maxWidth: '640px', margin: '0 auto'
            }}>
              NajCode Solution Private Limited is an actively registered technology consulting and software engineering firm dedicated to transforming complex challenges into scalable digital realities.
            </p>
          </div>
        </section>

        {/* Company Data Grid */}
        <section className="section-pad">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h3 style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: '1.8rem', fontWeight: 700,
              color: 'var(--fg)', marginBottom: '40px',
              textAlign: 'center',
            }}>
              Official Registry Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Corporate Entity', value: 'Najcode Solution Pvt Ltd', icon: Building2 },
                { label: 'CIN Number', value: 'U63990WB2025PTC280460', icon: Building2 },
                { label: 'Incorporation Date', value: '18th June, 2025', icon: Calendar },
                { label: 'Key Directors', value: 'Raghib Najmi, Mohd Najmul Huda', icon: Users },
              ].map((item, i) => (
                <div key={i} className="group" style={{
                  padding: '32px 24px', background: 'var(--bg-card)',
                  border: '1px solid var(--border)', borderRadius: '12px',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'var(--brand)';
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)';
                  }}
                >
                  {/* Subtle top gradient accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--brand), var(--brand-teal))', opacity: 0.8 }} />

                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'var(--bg-off)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px', color: 'var(--brand)',
                    transition: 'transform 0.3s ease',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <item.icon size={22} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.75rem', color: 'var(--fg-subtle)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-manrope), sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--fg)' }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Address Block */}
            <div style={{
              marginTop: '40px', padding: '32px',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '24px',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: 'white'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--fg)', marginBottom: '8px' }}>
                  Registered Headquarters
                </h4>
                <p style={{ fontFamily: 'var(--font-manrope), sans-serif', fontSize: '1rem', color: 'var(--fg-muted)', lineHeight: 1.6, maxWidth: '400px' }}>
                  Bl-t3, 5th-fr, Fl-4, 20/h Topsia Road, Tiljala Bazar<br />
                  South 24 Parganas, Tiljala<br />
                  Kolkata, West Bengal, India 700039
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
