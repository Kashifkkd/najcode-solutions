'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  {
    label: 'What We Do',
    href: '/#hero',
    children: ['ERP & Enterprise Systems', 'CRM & Sales Automation', 'AI & Business Intelligence', 'Cloud Migration', 'Web & Mobile Apps', 'Consulting'],
  },
  {
    label: 'Industries',
    href: '/#industries',
    children: ['Manufacturing', 'Retail & eCommerce', 'Healthcare', 'Finance & Banking', 'Logistics', 'Education'],
  },
  { label: 'Our Work', href: '/#portfolio' },
  { label: 'Insights', href: '/#insights' },
  { label: 'About', href: '/about' },
];

interface NavbarProps { isDark: boolean; toggleTheme: () => void; }

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: mobileOpen ? 'var(--bg)' : (scrolled ? 'var(--nav-bg)' : 'transparent'),
        backdropFilter: mobileOpen ? 'none' : (scrolled ? 'blur(20px)' : 'none'),
        borderBottom: (scrolled || mobileOpen) ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ width: "100%", margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', overflow: 'hidden', height: '68px', width: '180px' }}>
            <img src="/najcode-logo.png" alt="NajCode Solutions" style={{
              mixBlendMode: isDark ? 'screen' : 'normal',
              filter: isDark
                ? 'brightness(0) invert(1)'  // converts entire logo to white
                : 'none',
            }} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1" style={{ gap: '4px' }}>
            {navItems.map((item) => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      padding: '8px 14px', borderRadius: '4px',
                      fontFamily: 'var(--font-dm), sans-serif',
                      fontSize: '0.875rem', fontWeight: 500,
                      color: 'var(--fg-muted)', textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      padding: '8px 14px', borderRadius: '4px',
                      fontFamily: 'var(--font-dm), sans-serif',
                      fontSize: '0.875rem', fontWeight: 500,
                      color: 'var(--fg-muted)', textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                  >
                    {item.label}
                  </span>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 4px)', left: 0,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                    padding: '8px',
                    minWidth: '220px', zIndex: 100,
                    animation: 'fadeIn 0.15s ease',
                  }}>
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        style={{
                          display: 'block', padding: '9px 12px',
                          fontFamily: 'var(--font-manrope), sans-serif',
                          fontSize: '0.85rem', fontWeight: 500,
                          color: 'var(--fg-muted)', textDecoration: 'none',
                          borderRadius: '4px', transition: 'all 0.15s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--bg-off)';
                          e.currentTarget.style.color = 'var(--brand)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--fg-muted)';
                        }}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions (Desktop only) */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '10px' }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '36px', height: '36px', borderRadius: '4px',
                border: '1px solid var(--border)', background: 'transparent',
                cursor: 'pointer', color: 'var(--fg-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--brand)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--fg-muted)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="https://wa.me/18886252633?text=Hi! I want to book a discovery call with NajCode."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
              style={{
                fontFamily: 'var(--font-dm), sans-serif',
                alignItems: 'center', justifyContent: 'center',
                padding: '9px 20px',
                background: 'var(--brand)', color: 'white',
                border: 'none', borderRadius: '4px', cursor: 'pointer',
                fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.2s ease', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0056b8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--brand)'; }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center"
            style={{
              border: '1px solid var(--border)', background: 'transparent',
              width: '36px', height: '36px', borderRadius: '4px',
              cursor: 'pointer', color: 'var(--fg)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            borderTop: '1px solid var(--border)', padding: '12px 0 20px',
            display: 'flex', flexDirection: 'column', gap: '2px',
          }}>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      fontFamily: 'var(--font-dm), sans-serif',
                      padding: '10px 8px', color: 'var(--fg-muted)',
                      textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
                      borderRadius: '4px',
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.children) {
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      }
                    }}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      fontFamily: 'var(--font-dm), sans-serif',
                      padding: '10px 8px', color: 'var(--fg-muted)',
                      textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
                      borderRadius: '4px',
                    }}
                  >
                    {item.label}
                    {item.children && (
                      <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{activeDropdown === item.label ? '▲' : '▼'}</span>
                    )}
                  </a>
                )}
                {item.children && activeDropdown === item.label && (
                  <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '16px', paddingBottom: '8px' }}>
                    {item.children.map(child => (
                      <a
                        key={child}
                        href="#"
                        onClick={() => setMobileOpen(false)}
                        style={{
                          fontFamily: 'var(--font-manrope), sans-serif',
                          padding: '8px', color: 'var(--fg-muted)',
                          textDecoration: 'none', fontSize: '0.85rem', fontWeight: 400,
                        }}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
              <button
                onClick={toggleTheme}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'var(--font-dm), sans-serif', fontSize: '0.9rem', color: 'var(--fg)',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a
                href="https://wa.me/18886252633?text=Hi! I want to book a discovery call with NajCode."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-dm), sans-serif',
                  padding: '8px 16px', background: 'var(--brand)', color: 'white',
                  borderRadius: '4px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
