import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { portfolioData } from './constants';

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return <Resume data={portfolioData} onBack={() => setShowResume(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-primary opacity-50 z-0"></div>
      <div className="relative z-10">
        <Header contact={portfolioData.contact} />
        <main className="px-6 sm:px-8 md:px-12 lg:px-24">
          <Hero name={portfolioData.name} contact={portfolioData.contact} />
          <Skills skills={portfolioData.skills} />
          <Projects projects={portfolioData.projects} />
          <Education education={portfolioData.education} />
          <Achievements achievements={portfolioData.achievements} />
        </main>
        <Footer name={portfolioData.name} contact={portfolioData.contact} onShowResume={() => setShowResume(true)} />
      </div>
    </div>
  );
};

export default App;
