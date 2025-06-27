import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Features from './Features.js';
import HowItWorks from './HowItWorks.jsx';
import Testimonials from './Testimonials.jsx';
import FAQ from './FAQ.jsx';
import CallToAction from './CallToAction.jsx';
import Hero from './Hero.jsx';
const LandingPage = () => {
 
  return (
     <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        {/* <Analytics /> */}
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
