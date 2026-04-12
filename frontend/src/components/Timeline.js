import React from 'react';

const items = [
  {
    type: 'exp',
    title: 'Project Management Intern',
    org: 'Do Points Marketing Pvt. Ltd. (Sunday Tech)',
    period: 'May 2025 – July 2025 · Mumbai, India',
    points: [
      'Coordinated with cross-functional teams including developers, designers, and stakeholders.',
      'Supported Agile sprint planning, backlog prioritization & task tracking using Jira & Azure.',
      'Prepared detailed project documentation, reports, and timelines.',
      'Applied product thinking to align deliverables with business goals.',
    ],
  },
  {
    type: 'edu',
    title: 'Bachelor of Science — Computer Science',
    org: 'JK Lakshmipat University',
    period: 'Aug 2023 – May 2027 · Jaipur, Rajasthan · CGPA: 8.924',
    points: [
      'Relevant: Data Structures, Algorithms, DBMS, Computer Networks, Cyber-security, Cloud Computing.',
      'Active in competitive programming and technical clubs.',
    ],
  },
  {
    type: 'exp',
    title: 'Teaching Assistant — DSA & C Programming',
    org: 'JK Lakshmipat University',
    period: 'Jan–May 2025 & Jan–May 2026 · Jaipur, India',
    points: [
      'Mentored 100+ undergraduate students in DSA, Algorithms, and C Programming.',
      'Conducted coding contests and up-solving sessions.',
      'Guided students on memory management, pointers, and time complexity.',
      'Collaborated with faculty to design structured learning modules.',
    ],
  },
  {
    type: 'edu',
    title: 'Semester Exchange Student',
    org: 'IIT Gandhinagar',
    period: 'Aug 2024 – Dec 2024 · Gandhinagar, India · SGPA: 8.25',
    points: [
      'Selected for competitive semester exchange program.',
      'Completed Computer Networks and Network Security coursework.',
      'Developed leadership and cross-cultural communication skills.',
      'Learned French as an additional language.',
    ],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Education & Experience</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My academic & professional journey
        </p>

        <div className="timeline">
          {items.map((item, i) => (
            <div
              key={i}
              className="timeline-item"
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={i * 100}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className={`timeline-type ${item.type}`}>
                  {item.type === 'edu' ? '🎓 Education' : '💼 Experience'}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-org">{item.org}</div>
                <div className="timeline-period">{item.period}</div>
                <ul className="timeline-points">
                  {item.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
