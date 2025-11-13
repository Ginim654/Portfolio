
import React from 'react';
import type { Achievement } from '../types';
import Section from './Section';

interface AchievementsProps {
  achievements: Achievement[];
}
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;


const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <Section id="achievements" title="Hackathons & Achievements">
      <div className="max-w-3xl mx-auto space-y-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-secondary p-8 rounded-lg shadow-lg border border-accent/20">
            <ul className="space-y-3">
              {achievement.description.map((item, i) => (
                <li key={i} className="flex items-start text-medium text-lg">
                    <span className="text-accent mr-3 mt-1 flex-shrink-0"><StarIcon /></span>
                    <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
