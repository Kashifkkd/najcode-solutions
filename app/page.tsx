'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function HomeContent() {
  return (
    <main>
      <div id="hero"><Hero /></div>
      <Stats />
      <div id="industries" className="scroll-mt-24"><Services /></div>
      <div id="portfolio" className="scroll-mt-24"><Portfolio /></div>
      <HowItWorks />
      <Testimonials />
      <div id="insights" className="scroll-mt-24"><FAQ /></div>
    </main>
  );
}

export default function Page() {
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
      <Suspense fallback={<main style={{ minHeight: '100vh' }} />}>
        <HomeContent />
      </Suspense>
      <Footer />
    </>
  );
}
