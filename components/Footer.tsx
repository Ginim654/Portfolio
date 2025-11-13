import React from 'react';
import type { Contact } from '../types';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" y2="3"/></svg>;


interface FooterProps {
  name: string;
  contact: Contact;
  onShowResume: () => void;
}

const Footer: React.FC<FooterProps> = ({ name, contact, onShowResume }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t border-accent/20 mt-24 py-12">
      <div className="max-w-7xl mx-auto text-center px-6 sm:px-8 md:px-12 lg:px-24">
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="text-medium mb-6 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-8">
            <a href={`mailto:${contact.email}`} className="text-medium hover:text-accent transition-colors flex items-center space-x-2">
                <MailIcon /> <span>{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone}`} className="text-medium hover:text-accent transition-colors flex items-center space-x-2">
                <PhoneIcon /> <span>{contact.phone}</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors flex items-center space-x-2">
                <LinkedinIcon /> <span>LinkedIn</span>
            </a>
            <button onClick={onShowResume} className="text-medium hover:text-accent transition-colors flex items-center space-x-2">
                <DownloadIcon /> <span>View Resume</span>
            </button>
        </div>
        <p className="text-medium text-sm">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
