import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  ArrowDown, ArrowRight, Github, Linkedin,
  Mail, Menu, X, Sparkles
} from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section className="hero" id="home">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="navbar">
          <a className="brand" href="#home" aria-label="Chanduni home">CB</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> PORTFOLIO · 2026</span>
            <h1>Hello,<br />I'm <span>Chanduni</span></h1>
            <p className="role">Software Engineer <i /> Problem Solver <i /> Dreamer</p>
            <p className="intro">
              I build user-centered solutions,<br className="desktop-break" />
              explore technology, and find beauty<br className="desktop-break" />
              in both code and life.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">View Projects <ArrowRight size={16} /></a>
   
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a woman wearing headphones">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <Sparkles className="sparkle sparkle-top" size={20} />
            <Sparkles className="sparkle sparkle-side" size={14} />
            <img src="/images/headphone-girl.png" alt="Lavender line-art illustration of a girl wearing headphones" />
          </div>
        </div>

        <div className="hero-bottom">
          <a href="#about" className="scroll-cue"><ArrowDown size={16} /> <span>Scroll Down</span></a>
          <div className="social-links">
            <a href="https://github.com/Chanduni-Bootawatta" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn - add your profile URL"><Linkedin size={18} /></a>
            <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
        <h2>Curious mind. <span>Creative heart.</span></h2>
        <p className="section-text">I'm a Software Engineering graduate who enjoys turning ideas into useful digital experiences. I love thoughtful design, learning new technologies, photography, and finding small moments of beauty in everyday life.</p>
      </section>

      <section className="content-section projects-section" id="projects">
        
<section className="content-section projects-section" id="projects">
  <p className="section-kicker">02 / SELECTED WORK</p>
  <h2>Things I've <span>built.</span></h2>

  <article className="project-card">
    <div className="project-number">01</div>
    <div>
      <p className="project-type">FINAL YEAR RESEARCH · WEB APPLICATION · MACHINE LEARNING</p>
      <h3>Medical Claim Management System</h3>
      <p>
        Developed a user-centered web-based medical claim system
        for People’s Bank staff and pensioners, featuring a hybrid
        fraud detection model combining rule-based techniques
        and Random Forest machine learning.
      </p>
      <div className="tags">
        <span>React</span><span>Flask</span><span>Python</span>
        <span>MySQL</span><span>Scikit-learn</span>
      </div>
      <p className="project-type">MY CONTRIBUTION · Research, development & machine learning</p>
      <a className="text-link"
        href="https://github.com/Chanduni-Bootawatta/medicalclaimsystem"
        target="_blank" rel="noreferrer">
        View on GitHub <ArrowRight size={15} />
      </a>
    </div>
  </article>

  <article className="project-card">
    <div className="project-number">02</div>
    <div>
      <p className="project-type">3RD YEAR · MOBILE APPLICATION DEVELOPMENT</p>
      <h3>Vehicle Care Application</h3>
      <p>
        Developed a vehicle care mobile application featuring
        scheduled servicing, SOS assistance, repair station
        navigation and electric vehicle charging management
        to promote sustainable mobility.
      </p>
      <div className="tags">
        <span>Flutter</span><span>Dart</span><span>UI/UX Design</span>
      </div>
      <p className="project-type">MY CONTRIBUTION · Flutter/Dart development & UI/UX design</p>
      <a className="text-link"
  href="https://github.com/lula124/Car_Care"
  target="_blank" rel="noreferrer">
  View on GitHub <ArrowRight size={15} />
</a>
    </div>
  </article>

  <article className="project-card">
    <div className="project-number">03</div>
    <div>
      <p className="project-type">2ND YEAR · HUMAN COMPUTER INTERACTION</p>
      <h3>Learning Management System</h3>
      <p>
        Designed a student-focused learning management system
        featuring study progress tracking, past paper marks
        review and upcoming examination schedules.
      </p>
      <div className="tags">
        <span>Figma</span><span>Wireframing</span>
        <span>Prototyping</span><span>UI/UX Design</span>
      </div>
      <p className="project-type">MY CONTRIBUTION · UI design & Figma prototyping</p>
      <a
  className="text-link"
  href="https://www.figma.com/proto/OGcN1dMKWN6zEn3cMKS5Xk/GetoghterMaths-UI-UX?node-id=30-2&starting-point-node-id=30%3A2"
  target="_blank"
  rel="noreferrer"
>
  View Figma Prototype <ArrowRight size={15} />
</a>
    </div>
  </article>
  
<article className="project-card">
  <div className="project-number">04</div>
  <div>
    <p className="project-type">GOOGLE COURSE · WEB DEVELOPMENT · UI DESIGN</p>
    <h3>CampEase – Dynamic Website UI</h3>
    <p>
      Designed and developed a dynamic user interface for a
      website as part of the Google course, Build Dynamic UI
      for Websites.
    </p>
    <div className="tags">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>UI Design</span>
    </div>
    <p className="project-type">
      PROJECT TYPE · Course-based website development
    </p>
    <a
      className="text-link"
      href="https://www.figma.com/proto/poteHM6jxD763Ib9HlzphK/CampEase?node-id=78-33&starting-point-node-id=4%3A2"
      target="_blank"
      rel="noreferrer"
    >
      View Figma Prototype <ArrowRight size={15} />
    </a>
  </div>
</article>

</section>

      </section>

      <section className="content-section" id="experience">
        <p className="section-kicker">03 / EXPERIENCE</p>
        <h2>Learning by <span>doing.</span></h2>
        <div className="experience-item">
          <p className="project-type">INTERNSHIP · PEOPLE'S BANK· 6 MONTHS</p>
          <h3>System Analyst Intern</h3>
          <p>Kandy Branch · July – January</p>
          <p>Contributed to understanding and documenting banking workflows, digital process improvements, and internal systems.</p>
        </div>
        
  <div className="experience-item">
    <p className="project-type">CONTENT WRITING & PHOTOGRAPHY · 3 YEARS</p>
    <h3>Content Writer & Photographer</h3>
    <p>Salvia – Ecological Institute, Czech Republic</p>
    <p>
      Contributed environmental content and photography
      to a non-profit ecological organization focused
      on nature conservation.
    </p>
    <a
      className="text-link"
      href="https://salvia-os.cz/author/6ossalvia/"
      target="_blank"
      rel="noreferrer"
    >
      View Published Contributions <ArrowRight size={15} />
    </a>
  </div>
</section>


      <section className="content-section contact-section" id="contact">
        <p className="section-kicker">04 / GET IN TOUCH</p>
        <h2>Let's create something <span>meaningful.</span></h2>
        <p className="section-text">Have an idea, opportunity, or just want to say hello? I'd love to hear from you.</p>
        <button
  className="primary-button"
  onClick={() => setShowEmail(true)}
>
  Say Hello <ArrowRight size={16} />
</button>

{showEmail && (
  <div className="email-popup">
    <button
      className="popup-close"
      onClick={() => setShowEmail(false)}
    >
      ×
    </button>
    <p>LET'S CONNECT ✦</p>
    <a href="mailto:chandu46813@gmail.com">
      chandu46813@gmail.com
    </a>
  </div>
)}
      </section>

      <footer><span>© 2026 Chanduni Bootawatta</span><span>Made with curiosity & a little lavender ✦</span></footer>
    </main>
  );
}