
import React from 'react';
import type { PortfolioData } from '../types';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface ResumeProps {
  data: PortfolioData;
  onBack: () => void;
}

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8 print:mb-6">
    <h2 className="text-2xl font-bold text-accent border-b-2 border-accent/30 pb-2 mb-4 print:text-xl print:mb-2">{title}</h2>
    {children}
  </div>
);

const Resume: React.FC<ResumeProps> = ({ data, onBack }) => {
  return (
    <>
      <div className="bg-primary text-light min-h-screen font-sans antialiased resume-container">
        <header className="p-4 sm:p-6 bg-secondary/50 print:hidden resume-controls">
          <div className="max-w-5xl mx-auto flex justify-end items-center">
            <button
              onClick={onBack}
              className="bg-primary text-light font-semibold py-2 px-5 rounded-full hover:bg-opacity-80 transition-all"
            >
              &larr; Back to Portfolio
            </button>
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-6 sm:p-10 bg-secondary shadow-lg mt-4 mb-8 rounded-lg print:shadow-none print:mt-0 print:mb-0 print:p-4">
          <div className="text-center border-b border-primary pb-6 mb-6 print:pb-4 print:mb-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-light print:text-3xl">{data.name.toUpperCase()}</h1>
            <div className="mt-4 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-medium print:text-sm print:gap-x-4">
              <a href={`mailto:${data.contact.email}`} className="flex items-center space-x-2 hover:text-accent"><Mail size={16} /><span>{data.contact.email}</span></a>
              <a href={`tel:${data.contact.phone}`} className="flex items-center space-x-2 hover:text-accent"><Phone size={16} /><span>{data.contact.phone}</span></a>
              <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-accent"><Linkedin size={16} /><span>{data.contact.linkedinHandle}</span></a>
            </div>
          </div>
          
          <ResumeSection title="Education">
            <h3 className="text-xl font-bold text-light print:text-lg">{data.education.degree}</h3>
            <p className="text-medium italic">{data.education.institution} | {data.education.years}</p>
            <p className="text-medium mt-1">CGPA: {data.education.cgpa}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-medium">
              {data.education.activities.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </ResumeSection>

          <ResumeSection title="Projects">
            {data.projects.map(p => (
              <div key={p.title} className="mb-4 print:mb-3">
                <h3 className="text-xl font-bold text-light print:text-lg">{p.title}</h3>
                <ul className="list-disc list-inside mt-1 space-y-1 text-medium">
                  {p.description.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </ResumeSection>
          
          <ResumeSection title="Hackathons & Achievements">
             {data.achievements.map(a => (
              <div key={a.title}>
                <ul className="list-disc list-inside mt-1 space-y-1 text-medium">
                  {a.description.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            {data.skills.map(s => (
              <div key={s.title} className="mb-3 print:mb-2">
                <h4 className="text-lg font-semibold text-light inline-block mr-3 print:text-base">{s.title}:</h4>
                <span className="text-medium">{s.skills.join(', ')}</span>
              </div>
            ))}
          </ResumeSection>

        </main>
      </div>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.75in;
          }
          body {
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .resume-controls {
            display: none !important;
          }
          .resume-container {
            min-height: auto;
          }
          main {
            background-color: #ffffff !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            border-radius: 0 !important;
          }
          h1, h2, h3, h4, h5, h6, .text-light {
            color: #111827 !important;
          }
          p, li, span, .text-medium {
            color: #374151 !important;
          }
          .text-accent {
            color: #00BFFF !important;
          }
          .border-accent\\/30, .border-primary, .border-b, .border-b-2 {
             border-color: #e5e7eb !important;
          }
          a {
            text-decoration: none !important;
            color: #374151 !important;
          }
          a:hover {
            color: #111827 !important;
          }
          svg {
            width: 1rem;
            height: 1rem;
            color: #374151 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;
