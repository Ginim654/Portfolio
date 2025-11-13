
import React from 'react';
import type { EducationInfo } from '../types';
import Section from './Section';

interface EducationProps {
  education: EducationInfo;
}

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;


const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-lg shadow-lg border border-accent/20 text-center">
        <h3 className="text-2xl font-bold text-light">{education.degree}</h3>
        <p className="text-lg text-accent mt-1">{education.institution} ({education.years})</p>
        <p className="text-lg text-medium mt-2">CGPA: {education.cgpa}</p>
        <div className="mt-6 border-t border-primary pt-6">
            <ul className="space-y-3 text-left max-w-md mx-auto">
                {education.activities.map((activity, index) => (
                    <li key={index} className="flex items-center text-medium">
                        <span className="text-accent mr-3"><CheckIcon/></span>
                        {activity}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </Section>
  );
};

export default Education;
