import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Differentiators from './components/Differentiators';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FileUploadSection from './components/FileUploadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Pricing />
        <Process />
        <Differentiators />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <FileUploadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;