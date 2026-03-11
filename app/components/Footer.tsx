'use client';

import { ArrowRight, Linkedin, Twitter, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    heading: 'What We Do',
    links: ['ERP & Enterprise Systems', 'CRM & Sales Automation', 'AI & Analytics', 'Cloud Migration', 'Web & Mobile Apps', 'IT Consulting'],
  },
  {
    heading: 'Industries',
    links: ['Manufacturing', 'Retail & eCommerce', 'Healthcare', 'Finance & Banking', 'Logistics', 'Education'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Our Work', 'Careers', 'Press & Media', 'Partner With Us'],
  },
  {
    heading: 'Resources',
    links: ['Case Studies', 'Blog & Insights', 'White Papers', 'Documentation', 'Privacy Policy', 'Terms of Service'],
  },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', color: '#0077b5' },
  { icon: Twitter, label: 'Twitter', color: '#1da1f2' },
  { icon: Github, label: 'GitHub', color: '#24292e' },
  { icon: Youtube, label: 'YouTube', color: '#ff0000' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-off)', borderTop: '1px solid var(--border)' }}>
      {/* CTA Banner */}
      <div style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        padding: '56px 24px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '32px', flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-dm), sans-serif',
              fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-teal)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px',
            }}>
              Start Your Transformation
            </p>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
              color: 'var(--fg)', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              Ready to build something that<br />
              <em style={{ fontStyle: 'italic', color: 'var(--brand-teal)' }}>actually scales?</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <a href="https://wa.me/18886252633?text=Hi! I want to book a discovery call with NajCode."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-dm), sans-serif',
                padding: '13px 26px', background: 'var(--brand)',
                color: 'white', borderRadius: '4px', textDecoration: 'none',
                fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.2s ease', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0056b8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--brand)'; }}
            >
              Book Discovery Call <ArrowRight size={16} />
            </a>
            <p style={{ fontFamily: 'var(--font-manrope), sans-serif', fontSize: '0.8rem', color: 'var(--fg-subtle)' }}>
              Free Consultation / Enquiry
            </p>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', overflow: 'hidden', height: '54px', width: '180px' }}>
              <img src="/najcode-logo.png" alt="NajCode Solutions" className="brand-logo" />
            </div>
            <p style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: '0.85rem', color: 'var(--fg-muted)',
              lineHeight: 1.75, marginBottom: '20px', maxWidth: '220px',
            }}>
              Building perpetually adaptive enterprises through technology, consulting, and deep partnership.
            </p>
            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {[
                { icon: Mail, text: 'hello@najcode.io' },
                { icon: Phone, text: '+1 (888) 625-2633' },
                { icon: MapPin, text: '20/h Topsia Road, Kolkata, WB 700039' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={13} color="var(--brand-teal)" />
                  <span style={{ fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.78rem', color: 'var(--fg-muted)' }}>{text}</span>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '34px', height: '34px', borderRadius: '4px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--fg-muted)', textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = color + '15';
                    e.currentTarget.style.borderColor = color + '40';
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--fg-muted)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: 'var(--font-dm), sans-serif',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--fg)', marginBottom: '16px',
              }}>
                {col.heading}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(link => (
                  <a
                    key={link}
                    href={link === 'About Us' ? '/about' : '#'}
                    style={{
                      fontFamily: 'var(--font-manrope), sans-serif',
                      fontSize: '0.83rem', color: 'var(--fg-muted)',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-muted)'; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{
            fontFamily: 'var(--font-dm), sans-serif',
            fontSize: '0.78rem', color: 'var(--fg-subtle)',
          }}>
            © 2025 NajCode Solution Pvt Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: 'var(--font-dm), sans-serif',
                  fontSize: '0.75rem', color: 'var(--fg-subtle)',
                  textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-subtle)'; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
