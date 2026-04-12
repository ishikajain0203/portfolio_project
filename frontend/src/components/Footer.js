import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: '💼', href: 'https://www.linkedin.com/in/ishika-jain-973a79274/', label: 'LinkedIn' },
    { icon: '🐙', href: 'https://github.com/ishikajain0203', label: 'GitHub' },
    { icon: '📧', href: 'mailto:ishikajain0203@gmail.com', label: 'Email' },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-logo">&lt;IJ /&gt;</div>
        <p className="footer-text">
          Ishika Jain · Full Stack Developer · Product Manager
        </p>
        <div className="footer-socials">
          {socials.map(s => (
            <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer" title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <p className="footer-copy">
          © {year} <span>Ishika Jain</span> ❤️.
        </p>
      </div>
    </footer>
  );
}
