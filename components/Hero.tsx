
import React from 'react';
import type { Contact } from '../types';

interface HeroProps {
  name: string;
  contact: Contact;
}

const Hero: React.FC<HeroProps> = ({ name, contact }) => {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center justify-center animate-fade-in-up">
      <div className="text-center max-w-4xl mx-auto py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-light">
          Hi, I'm <span className="text-accent">{name}</span>.
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-medium max-w-3xl mx-auto">
          A passionate developer building dynamic and user-centric web applications. Specializing in frontend technologies and clean, efficient code.
        </p>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-lg"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
