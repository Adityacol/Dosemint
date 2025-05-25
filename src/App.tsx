import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CtaSection } from './components/CtaSection';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CtaSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;