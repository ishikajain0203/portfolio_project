import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}>
        <div className="container">
          <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); handleNav('#hero'); }}>
            &lt;IJ /&gt;
          </a>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href); }}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="theme-toggle" onClick={toggle} title="Toggle theme">
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="hamburger" onClick={() => setMobileOpen(p => !p)}>
              <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href); }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
