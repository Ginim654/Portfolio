
import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Ginim Narang",
  contact: {
    email: "ginim654@gmail.com",
    phone: "+91 9625822349",
    linkedin: "https://linkedin.com/in/ginim-narang-631924283",
    linkedinHandle: "ginim-narang-631924283",
  },
  education: {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "BVIMR",
    years: "2024-2027",
    cgpa: "9.25",
    activities: [
      "Active Coding Club Member",
      "Participated & Won Hackathons",
      "Completed Internship Program",
    ],
  },
  projects: [
    {
      title: "Attendance Monitoring System",
      description: [
        "Messaging, calling & video-enabled attendance system.",
        "Role-based system for teachers, students, and admins.",
        "Secure login, dashboards & real-time DB sync.",
      ],
    },
    {
      title: "Sales Management App",
      description: [
        "Created a complete sales app with separate Retailer, Distributor, and Admin views.",
        "Enabled order creation, product listing, invoice generation & sales tracking.",
        "Added role-based authentication and clean dashboard UI for each user type.",
      ],
    },
    {
      title: "Dynamic Mini Projects",
      description: [
        "Responsive UI/UX focused websites.",
        "Built with clean, accessible frontend architecture.",
      ],
    },
    {
      title: "Real-time Chat Application",
      description: [
        "Developed a full-featured real-time chat application with group and private messaging.",
        "Implemented user authentication and presence indicators for online status.",
        "Built with a scalable backend and a responsive, modern user interface.",
      ],
    },
  ],
  achievements: [
      {
        title: "Hackathons & Achievements",
        description: [
            "Participated in national & regional hackathons.",
            "Organized technical fests, coding competitions, hackathons.",
            "Mentored juniors in coding logic & project building.",
            "Built strong problem-solving & collaboration skills."
        ]
      }
  ],
  skills: [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["API Integration", "DBMS"],
    },
    {
      title: "Tools",
      skills: ["VS Code", "GitHub"],
    },
    {
      title: "Other",
      skills: ["System Design", "OOP", "Financial Analysis"],
    },
  ],
};
