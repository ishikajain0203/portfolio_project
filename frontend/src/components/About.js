import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { num: '8.92', label: 'CGPA' },
    { num: '3+', label: 'Projects' },
    { num: '100+', label: 'Students Mentored' },
  ];

  const tags = [
    'Jaipur, Rajasthan',
    'BSc CS 2027',
    'Open to Work',
    'MERN Developer',
    'Product Thinker',
    'IIT Gandhinagar Exchange',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Get to know the person behind the code
        </p>

        <div className="about-grid">
          <motion.div
            className="about-image-wrap"
            data-aos="fade-right"
            whileHover={{ scale: 1.02 }}
          >
            <div className="about-photo-frame">
              <img
                src="/ishikajain.JPG"
                alt="Ishika Jain"
                className="about-photo"
              />
            </div>
          </motion.div>

          <div className="about-info" data-aos="fade-left">
            <motion.p className="about-text">
              Hey! I'm <strong style={{ color: 'var(--accent)' }}>Ishika Jain</strong>, a passionate Computer Science student at
              JK Lakshmipat University (CGPA: 8.924). I was selected for a semester exchange at
              <strong style={{ color: 'var(--accent2)' }}> IIT Gandhinagar</strong>, where I deepened my knowledge in
              Computer Networks & Network Security.
            </motion.p>
            <p className="about-text">
              I interned as a <strong style={{ color: 'var(--accent)' }}>Project Management Intern</strong> at Sunday Tech (Mumbai),
              working with cross-functional teams using Agile/Scrum. As a
              <strong style={{ color: 'var(--accent2)' }}> Teaching Assistant</strong> at JKLU, I mentored 100+ students
              in DSA and C Programming, building both technical depth and leadership.
            </p>

            <div className="about-tags">
              {tags.map((tag) => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>

            <div className="about-stats">
              {stats.map((stat) => (
                <motion.div key={stat.label} className="stat-card" whileHover={{ scale: 1.05 }}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
