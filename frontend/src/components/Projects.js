import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    name: 'ishika_protfoli_project',
    desc: 'Portfolio project repository built with TypeScript for presenting work, profile details, and interactive frontend sections.',
    tech: ['TypeScript', 'Frontend', 'Portfolio'],
    tags: ['TypeScript', 'Frontend', 'Portfolio'],
    github: 'https://github.com/ishikajain0203/ishika_protfoli_project',
    demo: null,
    color: '#8b5cf6',
    icon: 'PORT',
    highlights: [
      'Portfolio-focused frontend repository',
      'Built with a TypeScript-based web stack',
      'Organizes personal projects and profile presentation',
    ],
  },
  {
    id: 2,
    num: '02',
    name: 'Blockchain-Based-Intellectual-Property-Protection',
    desc: 'A full-stack decentralized application for protecting and managing intellectual property records on the Ethereum blockchain.',
    tech: ['HTML', 'Solidity', 'Ethereum', 'ethers.js', 'DApp'],
    tags: ['Blockchain', 'Web', 'HTML'],
    github: 'https://github.com/ishikajain0203/Blockchain-Based-Intellectual-Property-Protection',
    demo: null,
    color: '#06b6d4',
    icon: 'CHAIN',
    highlights: [
      'Ethereum-based intellectual property workflow',
      'Smart contract driven record protection',
      'Single-page DApp frontend with ethers.js integration',
    ],
  },
  {
    id: 3,
    num: '03',
    name: 'valentine_web-site',
    desc: 'A Valentine\'s Day special website recreated from a Figma design and deployed as an interactive TypeScript web experience.',
    tech: ['TypeScript', 'Frontend', 'Vercel'],
    tags: ['TypeScript', 'Frontend', 'Web'],
    github: 'https://github.com/ishikajain0203/valentine_web-site',
    demo: 'https://valentine-web-site-pearl.vercel.app',
    color: '#f43f5e',
    icon: 'LOVE',
    highlights: [
      'Design translated from Figma into code',
      'Interactive themed landing experience',
      'Live deployment available on Vercel',
    ],
  },
  {
    id: 4,
    num: '04',
    name: 'birthday_website',
    desc: 'A celebratory anniversary and birthday website built from design assets into a polished TypeScript frontend.',
    tech: ['TypeScript', 'Frontend', 'Vercel'],
    tags: ['TypeScript', 'Frontend', 'Web'],
    github: 'https://github.com/ishikajain0203/birthday_website',
    demo: 'https://birthday-website-hibg.vercel.app',
    color: '#f59e0b',
    icon: 'BDAY',
    highlights: [
      'Personal event-focused web experience',
      'Derived from a custom design concept',
      'Deployed as a live shareable site',
    ],
  },
  {
    id: 5,
    num: '05',
    name: 'ishika_jain_portfolio',
    desc: 'A personal portfolio repository built with TypeScript to showcase profile content, work, and presentation-focused frontend design.',
    tech: ['TypeScript', 'Portfolio', 'Frontend'],
    tags: ['TypeScript', 'Portfolio', 'Frontend'],
    github: 'https://github.com/ishikajain0203/ishika_jain_portfolio',
    demo: null,
    color: '#14b8a6',
    icon: 'CV',
    highlights: [
      'Portfolio-oriented site structure',
      'TypeScript-based frontend implementation',
      'Focused on profile and work presentation',
    ],
  },
  {
    id: 6,
    num: '06',
    name: 'ride_sharing_project',
    desc: 'A JKLU ride-sharing backend for community transport with authentication, ride management, fare handling, safety workflows, and committee governance.',
    tech: ['TypeScript', 'Node.js', 'Backend', 'Authentication'],
    tags: ['TypeScript', 'Node.js', 'Backend'],
    github: 'https://github.com/ishikajain0203/ride_sharing_project',
    demo: null,
    color: '#0ea5e9',
    icon: 'RIDE',
    highlights: [
      'Campus-focused ride-sharing backend',
      'Authentication restricted to JKLU community users',
      'Safety, payments, and admin governance features',
    ],
  },
  {
    id: 7,
    num: '07',
    name: 'social_networking',
    desc: 'A social networking feed optimization project focused on ranking the most relevant posts using user interactions and preferences.',
    tech: ['Algorithms', 'Feed Ranking', 'Optimization', 'Forked Repo'],
    tags: ['Algorithms', 'Forked', 'DSA'],
    github: 'https://github.com/ishikajain0203/social_networking',
    demo: null,
    color: '#ec4899',
    icon: 'FEED',
    highlights: [
      'Feed relevance based on likes, comments, and shares',
      'User network and subject-based interaction modeling',
      'Repository on GitHub is currently a fork',
    ],
  },
  {
    id: 8,
    num: '08',
    name: 'static-blogging-website-',
    desc: 'A static blogging website repository on GitHub, included as part of the published project list from your profile.',
    tech: ['Static Site', 'Blog', 'Forked Repo'],
    tags: ['Web', 'Forked', 'Frontend'],
    github: 'https://github.com/ishikajain0203/static-blogging-website-',
    demo: null,
    color: '#6366f1',
    icon: 'BLOG',
    highlights: [
      'Static blog-style website repository',
      'Web-focused project structure',
      'Repository on GitHub is currently a fork',
    ],
  },
  {
    id: 9,
    num: '09',
    name: 'Grid-World-Optimization-Value-and-Policy-Iteration-Simulator',
    desc: 'A Grid World simulator that applies value iteration and policy iteration to learn optimal actions and visualize utilities and policies.',
    tech: ['Python', 'MDP', 'Value Iteration', 'Policy Iteration'],
    tags: ['Python', 'Algorithms', 'AI'],
    github: 'https://github.com/ishikajain0203/Grid-World-Optimization-Value-and-Policy-Iteration-Simulator',
    demo: null,
    color: '#10b981',
    icon: 'GRID',
    highlights: [
      'Implements value iteration and policy iteration',
      'Visualizes grid, utilities, and learned policy',
      'Markov decision process based simulation',
    ],
  },
  {
    id: 10,
    num: '10',
    name: 'SecureATM_Group11',
    desc: 'A secure banking server-client application for ATM-style operations using encryption and data integrity protections for financial transactions.',
    tech: ['C++', 'TLS/SSL', 'Client-Server', 'Security'],
    tags: ['C++', 'Security', 'Systems'],
    github: 'https://github.com/ishikajain0203/SecureATM_Group11',
    demo: null,
    color: '#ef4444',
    icon: 'ATM',
    highlights: [
      'Secure client-server banking workflow',
      'TLS/SSL based protection for transactions',
      'Supports account, balance, deposit, and withdrawal flows',
    ],
  },
];

const filters = ['All', ...new Set(projects.flatMap((project) => project.tags))];

function FolderIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M6 18C6 13.582 9.582 10 14 10H26L32 16H50C54.418 16 58 19.582 58 24V26H6V18Z" fill="url(#folderTop)" />
      <path d="M6 24C6 19.582 9.582 16 14 16H50C54.418 16 58 19.582 58 24V46C58 50.418 54.418 54 50 54H14C9.582 54 6 50.418 6 46V24Z" fill="url(#folderBody)" />
      <path d="M12 30H52" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="folderTop" x1="6" y1="10" x2="58" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="folderBody" x1="6" y1="16" x2="58" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const [folderOpen, setFolderOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = active === 'All'
    ? projects
    : projects.filter((project) => project.tags.includes(active));

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Open the folder to explore selected work.
        </p>

        <div className="projects-stage">
          <div className={`projects-workspace ${selectedProject ? 'is-blurred' : ''}`}>
            <motion.button
              type="button"
              className={`projects-folder ${folderOpen ? 'is-open' : ''}`}
              onClick={() => {
                setFolderOpen((open) => !open);
                if (folderOpen) {
                  setSelectedProject(null);
                }
              }}
              data-aos="fade-up"
              whileHover={{ y: -6, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="folder-icon-wrap">
                <FolderIcon />
              </div>
              <div className="folder-copy">
                <span className="folder-kicker">Portfolio Directory</span>
                <h3>All Projects</h3>
                <p>{folderOpen ? 'Click to close the folder.' : 'Click to open the folder and reveal project cards.'}</p>
              </div>
              <span className="folder-count">{projects.length} items</span>
            </motion.button>

            <AnimatePresence>
              {folderOpen && (
                <motion.div
                  className="projects-folder-panel"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="projects-filter">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        className={`filter-btn ${active === filter ? 'active' : ''}`}
                        onClick={() => setActive(filter)}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  <div className="projects-grid">
                    <AnimatePresence mode="popLayout">
                      {filtered.map((project, index) => (
                        <motion.button
                          key={project.id}
                          type="button"
                          className="project-card"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: index * 0.08 }}
                          layout
                          style={{ borderTop: `3px solid ${project.color}` }}
                          onClick={() => setSelectedProject(project)}
                        >
                          <div className="project-card-top">
                            <span className="project-icon-chip" style={{ color: project.color, borderColor: `${project.color}55` }}>
                              {project.icon}
                            </span>
                            <span className="project-number">{project.num}</span>
                          </div>
                          <h3 className="project-name">{project.name}</h3>
                          <p className="project-desc">{project.desc}</p>

                          <div className="project-tech">
                            {project.tech.slice(0, 4).map((tech) => (
                              <span key={tech} className="tech-badge" style={{ color: project.color }}>
                                {tech}
                              </span>
                            ))}
                          </div>

                          <span className="project-open-cta">Click to view details</span>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="project-modal"
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  onClick={(event) => event.stopPropagation()}
                  style={{ borderTop: `4px solid ${selectedProject.color}` }}
                >
                  <button
                    type="button"
                    className="project-modal-close"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project details"
                  >
                    x
                  </button>

                  <div className="project-modal-head">
                    <span className="project-icon-chip large" style={{ color: selectedProject.color, borderColor: `${selectedProject.color}55` }}>
                      {selectedProject.icon}
                    </span>
                    <div>
                      <p className="project-modal-label">Project {selectedProject.num}</p>
                      <h3 className="project-modal-title">{selectedProject.name}</h3>
                    </div>
                  </div>

                  <p className="project-desc modal-copy">{selectedProject.desc}</p>

                  <div className="project-modal-block">
                    <h4>Highlights</h4>
                    <ul className="project-highlights">
                      {selectedProject.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-modal-block">
                    <h4>Tech Stack</h4>
                    <div className="project-tech">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="tech-badge" style={{ color: selectedProject.color }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="project-link github">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      GitHub
                    </a>
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="project-link demo">
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
