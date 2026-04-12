import React from 'react';
import { motion } from 'framer-motion';

const CERTIFICATIONS_ARCHIVE_LINK = 'https://drive.google.com/drive/folders/14DWwaPVLLANHRulndRamnQ2ixttKVrFm';

const certs = [
  {
    icon: '🎯',
    title: 'Google Project Management Certificate',
    org: 'Google / Coursera',
    date: '2025',
    link: 'https://drive.google.com/drive/folders/14DWwaPVLLANHRulndRamnQ2ixttKVrFm',
    color: '#4285f4',
  },
  {
    icon: '🔒',
    title: 'Network Security & Fundamentals',
    org: 'IIT Gandhinagar',
    date: 'Dec 2024',
    link: '#',
    color: '#8b5cf6',
  },
  {
    icon: '⚡',
    title: 'Data Structures & Algorithms',
    org: 'NPTEL / Competitive Programming',
    date: '2024',
    link: 'https://drive.google.com/drive/folders/14DWwaPVLLANHRulndRamnQ2ixttKVrFm',
    color: '#f59e0b',
  },
  {
    icon: '🔐',
    title: 'Ethical Hacking Basics',
    org: 'Kali Linux / Self-study',
    date: '2024',
    link: 'https://drive.google.com/drive/folders/14DWwaPVLLANHRulndRamnQ2ixttKVrFm',
    color: '#ef4444',
  },
  {
    icon: '📈',
    title: 'Agile & Scrum Fundamentals',
    org: 'Jira / Atlassian',
    date: '2025',
    link: 'https://drive.google.com/drive/folders/14DWwaPVLLANHRulndRamnQ2ixttKVrFm',
    color: '#f43f5e',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Certifications & Achievements</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Proof of continuous learning 📚
        </p>

        <div className="cert-grid">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={i * 60}
              whileHover={{ scale: 1.02 }}
            >
              <div className="cert-icon" style={{ fontSize: '2.2rem' }}>{c.icon}</div>
              <div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-org" style={{ color: c.color }}>{c.org}</div>
                <div className="cert-date">📅 {c.date}</div>
              </div>
              <a href={c.link} target="_blank" rel="noreferrer" className="cert-link">
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="120" style={{ marginTop: 28, textAlign: 'center' }}>
          <a href={CERTIFICATIONS_ARCHIVE_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            View More Certifications
          </a>
        </div>

        {/* Achievements Banner */}
        <div data-aos="fade-up" data-aos-delay="200" style={{ marginTop: 64 }}>
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: '40px',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>
              🏆 Key Achievements
            </h3>
            <p style={{ color: 'var(--text2)', marginBottom: 24 }}>Milestones that define my journey</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              {[
                { emoji: '🎓', text: 'IIT Gandhinagar Exchange Student (SGPA 8.25)' },
                { emoji: '👩‍🏫', text: 'Mentored 100+ students as TA' },
                { emoji: '💼', text: 'PM Intern at Mumbai-based startup' },
                { emoji: '🏫', text: 'CGPA 8.924 at JKLU' },
                { emoji: '🇫🇷', text: 'Learning French (Interdisciplinary)' },
              ].map(a => (
                <div key={a.text} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  borderRadius: 50, padding: '10px 20px', fontSize: '0.9rem',
                }}>
                  <span>{a.emoji}</span>
                  <span style={{ color: 'var(--text2)' }}>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
