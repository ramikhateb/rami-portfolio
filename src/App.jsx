import React from "react";
import "./App.css";


// ---------- Data (edit these) ----------
const projects = [
  {
    title: "RoomieMatch – Smart Roommate Finder",
    blurb: "Full‑stack web app that matches roommates using surveys, scoring, and apartment recommendations.",
    bullets: [
      "React + Node.js + Express; MongoDB schema for profiles & matches",
      "Scoring engine with weighted attributes and cosine similarity",
      "Admin dashboard, email notifications, and report exports"
    ],
    tech: ["React", "Node.js",],
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    title: "Price Compass – Chrome Price Comparison Extension",
    blurb: "Browser extension to search products across multiple stores and sort by price with full product details.",
    bullets: [
      "Background service fetches & normalizes JSON from APIs",
      "Generic sorting pipeline for heterogeneous products",
      "Clean popup UI and results page"
    ],
    tech: ["JavaScript", "Chrome APIs", "Flask/Node backend"],
    links: { code: "#" }
  },
  {
    title: "Taskify – Minimal Task Manager",
    blurb: "Simple productivity app (multi‑page HTML/CSS/JS) with categories, due dates, and analytics.",
    bullets: ["LocalStorage persistence", "Filters & search", "Charts for weekly progress"],
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "Movies DB – Flask + MySQL",
    blurb: "Academic mini‑IMDB with >5k records, full‑text search, and complex SQL queries.",
    bullets: ["Python 3.11 + Flask", "MySQL on TAU server", "Five complex queries incl. joins & views"],
    tech: ["Python", "Flask", "MySQL"],
    links: { code: "#" }
  }
];

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "REST APIs",
  "HTML", "CSS", "SQL (MySQL)", "Git/GitHub", "Testing",
  "Python", "Java", "C", "Data Structures & Algorithms"
];

export default function Portfolio() {
  const years = new Date().getFullYear() - 2021;

  return (
    <>
      <header>
        <div className="container nav">
          <div className="brand">
            <div className="logo">RK</div>
            <span>Rami Khateb</span>
          </div>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <div className="container hero">
          <div>
            <span className="badge">Full‑Stack Developer • React & Node.js</span>
            <h1>Building clean, fast web apps with a product mindset.</h1>
            <p className="sub">
              Computer Science & Business (Psychology) graduate from Tel‑Aviv University (GPA 81). I love turning ideas into reliable, user‑friendly software and bringing value with thoughtful UX and robust engineering.
            </p>
            <div className="cta">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="/cv/ramikhateb_CV copy.pdf" download>Download CV</a>
              <a className="btn" href="mailto:rami@example.com">Email Me</a>
            </div>
          </div>
          <div className="panel">
            <div className="kpis">
              <div className="kpi"><strong>4+</strong>Years coding</div>
              <div className="kpi"><strong>3+</strong>Projects</div>
              <div className="kpi"><strong>3</strong>Languages</div>
            </div>
            <p className="focus-text">
              Focus areas: full-stack apps, testing, data-driven features, and clean architecture.
              Comfortable across frontend, backend, and databases.
            </p>

          </div>
        </div>

        {/* ABOUT */}
        <section id="about">
          <div className="container about">
            <div>
              <h2 className="section-title">About</h2>
              <div className="panel">
                <p>
                  I recently completed a B.A. in Computer Science & Business Administration . I enjoy shipping features end‑to‑end: designing data models, building APIs, and crafting responsive UIs.
                </p>
                <p>
                  Highlights include a roommate‑matching app, a price comparison Chrome extension, and research tooling for VR driving simulations. I’m actively seeking a junior full‑stack role where I can learn fast and contribute from day one.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-title">Tech Snapshot</h2>
              <div className="panel skills">
                {skills.map((s) => (
                  <div key={s} className="chip">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="grid">
              {projects.map((p) => (
                <article key={p.title} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                  <ul style={{margin:0, paddingLeft: "18px", color:"var(--muted)"}}>
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="links">
                    {p.links.demo && <a href={p.links.demo}>Live Demo ↗</a>}
                    {p.links.code && <a href={p.links.code}>Source Code ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              <div className="timecard">
                <div>
                  <strong>2022–2024</strong>
                </div>
                <div>
                  <strong>Marketing & Ops – Gold Energy (family business)</strong>
                  <p className="sub">Planned campaigns for a supermarket and B2B fuel clients; learned practical business operations and analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timecard">
                <div>
                  <strong>2021–2025</strong>
                </div>
                <div>
                  <strong>Tel‑Aviv University</strong>
                  <p className="sub">B.A. Computer Science & Business Administration • GPA-81</p>
                </div>
              </div>
              <div className="timecard">
                <div>
                  <strong>2025-2026</strong>
                </div>
                <div>
                  <strong>Full‑Stack Course</strong>
                  <p className="sub">Focused on HTML, CSS, JavaScript, React, Node.js/Express, and databases.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container contact">
            <div>
              <h2 className="section-title">Contact</h2>
              <div className="panel">
                <p>Want to collaborate or have an opportunity? Reach out directly or use the form.</p>
                <div className="cta">
                  <a className="btn" href="mailto:ramikhateb39@gmail.com">ramikhateb39@gmail.com</a>
                  <a className="btn" href="https://github.com/ramikhateb">GitHub</a>
                  <a className="btn" href="https://www.linkedin.com/in/rami-khateb">LinkedIn</a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="section-title">Quick Message</h2>
              <div className="panel">
                <form onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const subject = encodeURIComponent("Portfolio contact from " + f.get("name")); const body = encodeURIComponent((f.get("message")||"") + "\n\nFrom: " + f.get("name") + " (" + f.get("email") + ")"); window.location.href = `mailto:rami@example.com?subject=${subject}&body=${body}`; e.currentTarget.reset(); }}>
                  <input name="name" placeholder="Your name" required />
                  <input name="email" type="email" placeholder="Email" required />
                  <textarea name="message" placeholder="How can I help?" />
                  <button className="btn primary" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Rami Khateb • Built with React, HTML, CSS, and a sprinkle of JS ✨</div>
      </footer>
    </>
  );
}

/* ---------------------------------------------
Deployment notes
1) Vite: npm create vite@latest my-portfolio -- --template react; cd my-portfolio; npm i; replace App.jsx with this file's default export as App; npm run dev
2) Build: npm run build (outputs to dist/)
3) GitHub Pages (static): use vite-plugin-gh-pages or deploy /dist to any static host.
4) CV: put your PDF at public/cv/rami-khateb-cv.pdf so the download button works.
5) Custom domain: add CNAME on your DNS to your hosting.
6) To add a Node/Express API later, create a separate server folder and deploy it to Render/Fly/Heroku; swap mailto: with a fetch() POST.
---------------------------------------------- */
