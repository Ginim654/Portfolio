import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 sm:py-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;