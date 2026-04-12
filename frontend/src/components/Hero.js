import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const RESUME_PDF = '/ishika_jain_resume.pdf';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: -Math.random() * 1.5 - 0.5,
      r: Math.random() * 2 + 1,
    }));

    const mouse = { x: width / 2, y: height / 2 };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx + (mouse.x - width / 2) * 0.00005;
        particle.y += particle.vy + (mouse.y - height / 2) * 0.00005;
        particle.z += particle.vz;

        if (particle.z <= 0) particle.z = 1000;
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const scale = 800 / (800 + particle.z);
        const sx = (particle.x - width / 2) * scale + width / 2;
        const sy = (particle.y - height / 2) * scale + height / 2;
        const radius = particle.r * scale;
        const opacity = scale * 0.8;

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.fill();
      });

      particles.forEach((a, index) => {
        const sa = 800 / (800 + a.z);
        const ax = (a.x - width / 2) * sa + width / 2;
        const ay = (a.y - height / 2) * sa + height / 2;

        particles.slice(index + 1, index + 6).forEach((b) => {
          const sb = 800 / (800 + b.z);
          const bx = (b.x - width / 2) * sb + width / 2;
          const by = (b.y - height / 2) * sb + height / 2;
          const dist = Math.hypot(ax - bx, ay - by);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(139,92,246,${(1 - dist / 120) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <ParticleCanvas />

      <div className="shape" style={{ width: 400, height: 400, background: 'rgba(139,92,246,0.12)', top: '10%', right: '5%', animationDelay: '0s' }} />
      <div className="shape" style={{ width: 300, height: 300, background: 'rgba(6,182,212,0.08)', bottom: '15%', right: '20%', animationDelay: '3s' }} />
      <div className="shape" style={{ width: 200, height: 200, background: 'rgba(244,63,94,0.06)', top: '40%', left: '5%', animationDelay: '1.5s' }} />

      <div className="container">
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="hero-badge">
              <span className="dot" />
              Available for Internships and Full-time Roles
            </div>
          </motion.div>

          <motion.p className="hero-greeting" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Hello, World! I&apos;m
          </motion.p>

          <motion.h1 className="hero-name" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Ishika Jain
          </motion.h1>

          <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Product Manager', 2000,
                'React.js Developer', 2000,
                'Problem Solver', 2000,
                'IIT Gandhinagar Exchange Student', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p className="hero-desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            CS student at JK Lakshmipat University with a CGPA of <strong style={{ color: 'var(--accent)' }}>8.924</strong>.
            Former PM Intern at Sunday Tech, Mumbai and IIT Gandhinagar exchange student. Building scalable full-stack apps
            and user-centric products.
          </motion.p>

          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Work
            </a>
            <a href={RESUME_PDF} className="btn-outline" download="Ishika_Jain_Resume.pdf">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll">
        {/* <span>Scroll</span> */}
        {/* <div className="scroll-line" /> */}
      </div>
    </section>
  );
}
