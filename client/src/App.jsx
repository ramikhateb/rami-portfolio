import { useEffect, useState } from "react";
import "./App.css";

const CV_URL = "/cv/RamiKhatib_CV.pdf";

const projects = [
  {
    title: "RoomieMatch – Smart Roommate Finder",
    blurb: "Full‑stack app that matches roommates by lifestyle, habits, budget, and preferred area — with apartment search built in.",
    bullets: [
      "React + TypeScript + Tailwind frontend; Express + Prisma + PostgreSQL backend",
      "User auth, apartment listings with filters, and compatibility-based matching",
      "Dashboard for browsing apartments and connecting with potential roommates"
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    links: {
      code: "https://github.com/ramikhateb/roomiematch"
    }
  },
  {
    title: "Price Finder – Chrome Price Comparison Extension",
    blurb: "Chrome extension that compares product prices across stores, auto-detects items from the current page, and ranks results by price.",
    bullets: [
      "Manifest V3 extension with popup UI and dedicated results page",
      "AI-assisted product relevance filtering and similar-product suggestions",
      "Flask backend scrapes and aggregates store ratings for smarter comparisons"
    ],
    tech: ["JavaScript", "Chrome APIs", "Flask", "OpenAI API"],
    links: {
      code: "https://github.com/muhammadtaha211/Price-Finder"
    }
  },
  {
    title: "Taskify – Full‑Stack Task Manager",
    blurb: "Productivity app for creating, organizing, and tracking tasks with filters, search, and due-date sorting.",
    bullets: [
      "React + Vite dashboard with status, priority, and due-date controls",
      "Express REST API with JWT auth and Prisma + PostgreSQL persistence",
      "Search, filter, and sort tasks by newest, oldest, or due date"
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    title: "Direct Ordering – Restaurant Platform",
    blurb: "End-to-end food ordering platform where customers browse menus, build a cart, and place orders directly with restaurants.",
    bullets: [
      "React + TypeScript client with menu, cart, checkout, and order confirmation flows",
      "Express + TypeScript API with full order lifecycle (NEW → PREPARING → DELIVERED)",
      "Coupons, loyalty points, customer accounts, and multi-restaurant data model"
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    links: {
      demo: "#",
      code: "#"
    }
  }
];

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "REST APIs",
  "HTML", "CSS", "SQL (MySQL)", "Git/GitHub", "Testing",
  "Python", "Java", "C", "Data Structures & Algorithms"
];

function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!cvOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setCvOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [cvOpen]);

  return (
    <>
      <header>
        <div className="container nav">
          <div className="brand">
            <div className="logo">RK</div>
            <span>Rami Khateb</span>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav className={`menu${menuOpen ? " open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="container hero">
          <div>
            <span className="badge">Full‑Stack Developer</span>
            <h1>Building clean, fast web apps with a <span className="gradient-text">product mindset</span>.</h1>
            <p className="sub">
              Computer Science & Business graduate from Tel‑Aviv University (GPA 81). I turn ideas into reliable, user‑friendly software with thoughtful UX and solid engineering.
            </p>
            <div className="cta">
              <a className="btn primary" href="#projects">View Projects</a>
              <button type="button" className="btn" onClick={() => setCvOpen(true)}>Show CV</button>
              <a className="btn" href="mailto:ramikhateb39@gmail.com">Email Me</a>
            </div>
          </div>
          <div className="panel">
            <div className="kpis">
              <div className="kpi"><strong>4+</strong>Years coding</div>
              <div className="kpi"><strong>4+</strong>Projects</div>
              <div className="kpi"><strong>3</strong>Languages</div>
            </div>
            <p className="focus-text">
              Focus areas: full-stack apps, testing, data-driven features, and clean architecture.
              Comfortable across frontend, backend, and databases.
            </p>
          </div>
        </div>

        <section id="about">
          <div className="container about">
            <SectionHeader label="About" title="What drives me" />
            <div className="about-content">
              <p>
                I'm passionate about building web applications and SaaS products — taking ideas from zero to something people can actually use.
              </p>
              <p>
                Whether it's a full-stack platform, a browser extension, or a product with real users and business logic, I enjoy every part of the process: shaping the experience, writing clean code, and shipping features that matter.
              </p>
              <p className="about-note">
                CS & Business graduate from Tel‑Aviv University · Looking for my first role in high-tech.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <SectionHeader label="Skills" title="Tech I work with" />
            <div className="skills">
              {skills.map((s) => (
                <div key={s} className="chip">{s}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <SectionHeader label="Work" title="Selected projects" />
            <div className="grid">
              {projects.map((p) => (
                <article key={p.title} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                  <ul>
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="card-links">
                    {p.links.demo && <a href={p.links.demo}>Live Demo ↗</a>}
                    {p.links.code && <a href={p.links.code} target="_blank" rel="noreferrer">Source Code ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <SectionHeader label="Career" title="Experience" />
            <div className="timeline">
              <div className="timecard">
                <div>2022–2024</div>
                <div>
                  <strong>Marketing & Ops – Gold Energy (family business)</strong>
                  <p className="sub">Planned campaigns for a supermarket and B2B fuel clients; learned practical business operations and analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container">
            <SectionHeader label="Background" title="Education" />
            <div className="timeline">
              <div className="timecard">
                <div>Oct 2026–</div>
                <div>
                  <strong>Reichman University</strong>
                  <p className="sub">M.Sc. Machine Learning & Data Science</p>
                </div>
              </div>
              <div className="timecard">
                <div>2021–2025</div>
                <div>
                  <strong>Tel‑Aviv University</strong>
                  <p className="sub">B.A. Computer Science & Business Administration • GPA 81</p>
                </div>
              </div>
              <div className="timecard">
                <div>2025–2026</div>
                <div>
                  <strong>Full‑Stack Course</strong>
                  <p className="sub">Focused on HTML, CSS, JavaScript, React, Node.js/Express, and databases.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact">
            <div>
              <SectionHeader label="Connect" title="Get in touch" />
              <div className="panel">
                <p>Want to collaborate or have an opportunity? Reach out directly or use the form.</p>
                <div className="cta">
                  <a className="btn" href="mailto:ramikhateb39@gmail.com">ramikhateb39@gmail.com</a>
                  <a className="btn" href="https://github.com/ramikhateb" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="btn" href="https://www.linkedin.com/in/rami-khateb" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
            <div>
              <SectionHeader label="Message" title="Quick note" />
              <div className="panel">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const subject = encodeURIComponent("Portfolio contact from " + f.get("name"));
                  const body = encodeURIComponent((f.get("message") || "") + "\n\nFrom: " + f.get("name") + " (" + f.get("email") + ")");
                  window.location.href = `mailto:ramikhateb39@gmail.com?subject=${subject}&body=${body}`;
                  e.currentTarget.reset();
                }}>
                  <input name="name" placeholder="Your name" required />
                  <input name="email" type="email" placeholder="Email" required />
                  <textarea name="message" placeholder="How can I help?" required />
                  <button className="btn primary" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Rami Khateb · Built with React & Vite</div>
      </footer>

      {cvOpen && (
        <div className="cv-modal-overlay" onClick={() => setCvOpen(false)} role="presentation">
          <div
            className="cv-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
          >
            <div className="cv-modal-header">
              <h2 id="cv-modal-title">My CV</h2>
              <div className="cv-modal-actions">
                <a className="btn" href={CV_URL} download>Download</a>
                <button type="button" className="btn" onClick={() => setCvOpen(false)}>Close</button>
              </div>
            </div>
            <iframe
              className="cv-modal-frame"
              src={CV_URL}
              title="Rami Khateb CV"
            />
          </div>
        </div>
      )}
    </>
  );
}
