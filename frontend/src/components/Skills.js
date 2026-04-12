import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiJira,
  SiKalilinux,
  SiFramer,
  SiSocketdotio,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiSolidity,
} from 'react-icons/si';
import {
  FaMobileAlt,
  FaCloud,
  FaNetworkWired,
  FaShieldAlt,
  FaSitemap,
  FaLayerGroup,
  FaLightbulb,
  FaTasks,
  FaDraftingCompass,
  FaFlask,
  FaServer,
  FaCuttlefish,
  FaDatabase,
  FaFileExcel,
} from 'react-icons/fa';

const skills = [
  { name: 'React', category: 'Frontend', tone: 'cyan', icon: SiReact },
  { name: 'HTML5', category: 'Frontend', tone: 'orange', icon: SiHtml5 },
  { name: 'CSS3', category: 'Frontend', tone: 'blue', icon: SiCss },
  { name: 'JavaScript', category: 'Frontend', tone: 'yellow', icon: SiJavascript },
  { name: 'Tailwind CSS', category: 'Frontend', tone: 'teal', icon: SiTailwindcss },
  { name: 'Bootstrap', category: 'Frontend', tone: 'violet', icon: SiBootstrap },
  { name: 'Responsive Design', category: 'Frontend', tone: 'pink', icon: FaMobileAlt },
  { name: 'Node.js', category: 'Backend', tone: 'green', icon: SiNodedotjs },
  { name: 'Express.js', category: 'Backend', tone: 'slate', icon: SiExpress },
  { name: 'REST APIs', category: 'Backend', tone: 'blue', icon: FaServer },
  { name: 'MongoDB', category: 'Database', tone: 'green', icon: SiMongodb },
  { name: 'PostgreSQL', category: 'Database', tone: 'indigo', icon: SiPostgresql },
  { name: 'SQL', category: 'Database', tone: 'sky', icon: FaDatabase },
  { name: 'Git', category: 'Tools', tone: 'orange', icon: SiGit },
  { name: 'GitHub', category: 'Tools', tone: 'slate', icon: SiGithub },
  { name: 'Docker', category: 'Tools', tone: 'blue', icon: SiDocker },
  { name: 'Figma', category: 'Tools', tone: 'pink', icon: SiFigma },
  { name: 'Jira', category: 'Tools', tone: 'violet', icon: SiJira },
  { name: 'Azure', category: 'Cloud', tone: 'sky', icon: FaCloud },
  { name: 'Kali Linux', category: 'Tools', tone: 'slate', icon: SiKalilinux },
  { name: 'Framer Motion', category: 'Library', tone: 'pink', icon: SiFramer },
  { name: 'Socket.io', category: 'Library', tone: 'slate', icon: SiSocketdotio },
  { name: 'Python', category: 'Language', tone: 'yellow', icon: SiPython },
  { name: 'C', category: 'Language', tone: 'indigo', icon: FaCuttlefish },
  { name: 'Pandas', category: 'Library', tone: 'green', icon: SiPandas },
  { name: 'NumPy', category: 'Library', tone: 'blue', icon: SiNumpy },
  { name: 'Scikit-learn', category: 'Library', tone: 'orange', icon: SiScikitlearn },
  { name: 'Agile/Scrum', category: 'Product', tone: 'pink', icon: FaTasks },
  { name: 'A/B Testing', category: 'Product', tone: 'cyan', icon: FaFlask },
  { name: 'Wireframing', category: 'Product', tone: 'violet', icon: FaDraftingCompass },
  { name: 'Blockchain', category: 'Concept', tone: 'teal', icon: SiSolidity },
  { name: 'DBMS', category: 'Concept', tone: 'orange', icon: FaSitemap },
  { name: 'OS', category: 'Concept', tone: 'slate', icon: FaLayerGroup },
  { name: 'Computer Networks', category: 'Concept', tone: 'sky', icon: FaNetworkWired },
  { name: 'Cybersecurity', category: 'Concept', tone: 'pink', icon: FaShieldAlt },
  { name: 'Cloud Computing', category: 'Concept', tone: 'indigo', icon: FaCloud },
  { name: 'Product Thinking', category: 'Concept', tone: 'yellow', icon: FaLightbulb },
  { name: 'Excel', category: 'Tools', tone: 'green', icon: FaFileExcel },
];

const highlightStats = [
  { label: 'Frontend', value: '7+' },
  { label: 'Backend & DB', value: '6+' },
  { label: 'Tools & Concepts', value: '20+' },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const tooltipRef = useRef(null);
  const popperRef = useRef(null);
  const skillRefs = useRef({});

  const skillsByCategory = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = 0;
      acc[skill.category] += 1;
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    if (!activeSkill || !tooltipRef.current) {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
      return undefined;
    }

    const referenceEl = skillRefs.current[activeSkill.name];
    if (!referenceEl) return undefined;

    if (popperRef.current) {
      popperRef.current.destroy();
    }

    popperRef.current = createPopper(referenceEl, tooltipRef.current, {
      placement: 'top',
      modifiers: [
        { name: 'offset', options: { offset: [0, 14] } },
        { name: 'preventOverflow', options: { padding: 16 } },
      ],
    });

    return () => {
      if (popperRef.current) {
        popperRef.current.destroy();
        popperRef.current = null;
      }
    };
  }, [activeSkill]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          A floating overview of the technologies, tools, and concepts I work with
        </p>

        <div className="skills-cloud-layout">
          <div className="skills-intro-card" data-aos="fade-right">
            <div className="skills-eyebrow">Skill Stack</div>
            <h3 className="skills-panel-title">I have experience with these technologies</h3>
            <p className="skills-panel-text">
              Hover a skill to see its category. The layout is intentionally presented as a floating UI rather than
              a static checklist.
            </p>

            <div className="skills-mini-stats">
              {highlightStats.map((item) => (
                <div key={item.label} className="skills-mini-stat">
                  <span className="skills-mini-value">{item.value}</span>
                  <span className="skills-mini-label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="skills-category-list">
              {Object.entries(skillsByCategory).map(([category, count]) => (
                <div key={category} className="skills-category-row">
                  <span>{category}</span>
                  <span>{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-cloud-board" data-aos="fade-left">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <button
                  key={skill.name}
                  ref={(node) => {
                    if (node) skillRefs.current[skill.name] = node;
                  }}
                  type="button"
                  className={`skill-cloud-item tone-${skill.tone}`}
                  style={{ '--delay': `${(index % 6) * 0.45}s` }}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onFocus={() => setActiveSkill(skill)}
                  onBlur={() => setActiveSkill(null)}
                >
                  <Icon className="skill-cloud-icon" aria-hidden="true" />
                  <span className="skill-cloud-name">{skill.name}</span>
                </button>
              );
            })}

            <div
              ref={tooltipRef}
              className={`skill-popper ${activeSkill ? 'visible' : ''}`}
              role="tooltip"
            >
              {activeSkill && (
                <>
                  <div className="skill-popper-title">{activeSkill.name}</div>
                  <div className="skill-popper-meta">{activeSkill.category}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
