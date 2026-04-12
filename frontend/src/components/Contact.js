import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';

const API =
  process.env.REACT_APP_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:5001`;

const RESUME_PDF = '/ishika_jain_resume.pdf';
const RESUME_DOCX = '/ishika_jain_resume.docx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await axios.post(`${API}/api/contact`, form);
      setStatus({ type: 'success', msg: res.data.message });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: err.response?.data?.error || 'Something went wrong. Try again!' });
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: FaEnvelope, label: 'Email', value: 'ishikajain0203@gmail.com', href: 'mailto:ishikajain0203@gmail.com' },
    { icon: FaPhoneAlt, label: 'Phone', value: '+91 6367141046', href: 'tel:+916367141046' },
    { icon: FaLinkedinIn, label: 'LinkedIn', value: 'ishika-jain', href: 'https://www.linkedin.com/in/ishika-jain-973a79274/' },
    { icon: FaGithub, label: 'GitHub', value: 'ishikajain0203', href: 'https://github.com/ishikajain0203' },
  ];

  return (
    <>
      <div className="download-section" id="download">
        <div className="container download-content">
          <h2 className="download-title">Download My Resume</h2>
          <p className="download-sub">Available in both PDF and Word formats as direct file downloads.</p>
          <div className="download-buttons">
            <a href={RESUME_PDF} className="btn-white" download="Ishika_Jain_Resume.pdf">
              Download PDF
            </a>
            <a href={RESUME_DOCX} className="btn-white-outline" download="Ishika_Jain_Resume.docx">
              Download DOCX
            </a>
          </div>
        </div>
      </div>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Let&apos;s build something amazing together.
          </p>

          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <p className="contact-text">
                I&apos;m currently open to <strong style={{ color: 'var(--accent)' }}>internship opportunities</strong> and
                <strong style={{ color: 'var(--accent2)' }}> full-time roles</strong> in Full Stack Development or
                Product Management. Whether you have a project in mind or just want to say hi, my inbox is always open.
              </p>
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a key={contact.label} href={contact.href} className="contact-item" target="_blank" rel="noreferrer">
                    <div className="contact-item-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <div className="contact-item-label">{contact.label}</div>
                      <div className="contact-item-value">{contact.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              data-aos="fade-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 32 }}>
                <h3 style={{ marginBottom: 24, fontSize: '1.2rem', fontWeight: 700 }}>Send a Message</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Hi Ishika, I'd like to..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {status && <div className={`form-status ${status.type}`}>{status.msg}</div>}
                  <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
