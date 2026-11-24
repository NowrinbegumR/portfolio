import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Database,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Menu,
  ScrollText,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  achievements,
  certifications,
  experience,
  filterProjects,
  patentPublications,
  profile,
  projectFilters,
  projects,
  researchStats,
  researchWorks,
  skills,
  type ProjectFilter,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nowrin Begum R. | AI & Data Science Portfolio" },
      {
        name: "description",
        content:
          "Explore Nowrin Begum R.'s work in AI, data science, machine learning, generative AI, computer vision, analytics, and software development.",
      },
      { property: "og:title", content: "Nowrin Begum R. | AI & Data Science Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, research, experience, and skills from Nowrin Begum R., an aspiring data scientist and AI developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const skillIconMap = {
  code: Code2,
  brain: Brain,
  sparkles: Sparkles,
  scan: Eye,
  chart: BarChart3,
  database: Database,
  layers: Layers,
} as const;

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = useMemo(() => filterProjects(activeFilter), [activeFilter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a
            className="brand-mark"
            href="#home"
            onClick={closeMenu}
            aria-label="Nowrin Begum R. home"
          >
            NR<span>.</span>
          </a>
          <ul id="primary-navigation" className={`nav-list${menuOpen ? " is-open" : ""}`}>
            <li>
              <a className="nav-link" href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a className="nav-link" href="#research" onClick={closeMenu}>
                Research
              </a>
            </li>
            <li>
              <a className="nav-link" href="#patents" onClick={closeMenu}>
                Patents
              </a>
            </li>
            <li>
              <a className="nav-link" href="#achievements" onClick={closeMenu}>
                Achievements
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <Button asChild size="sm" className="nav-resume button-action button-primary">
            <a href={profile.resumeUrl} download="Nowrin-Begum-R-Resume.pdf">
              Résumé <ArrowDownToLine aria-hidden="true" />
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">AI · DATA SCIENCE · ENGINEERING</p>
              <h1 className="hero-title" id="hero-title">
                Nowrin Begum <span>R.</span>
              </h1>
              <p className="hero-role">Aspiring Data Scientist · AI &amp; Data Science</p>
              <p className="hero-description">
                Python · SQL · Machine Learning · Generative AI · Computer Vision · Deep Learning ·
                Data Analytics
              </p>
              <div className="hero-actions">
                <Button asChild size="lg" className="button-action button-primary">
                  <a href="#projects">
                    Explore projects <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="button-action button-outline"
                >
                  <a href={profile.resumeUrl} download="Nowrin-Begum-R-Resume.pdf">
                    Download résumé <ArrowDownToLine aria-hidden="true" />
                  </a>
                </Button>
                <div className="social-links" aria-label="Professional profiles">
                  <Button asChild variant="outline" size="icon" className="social-link">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                    >
                      <Github aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="social-link">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hero-facts" aria-label="Profile highlights">
                <div className="hero-fact">
                  <strong>{projects.length}</strong>
                  <span>public repositories</span>
                </div>
                <span className="hero-fact-divider" aria-hidden="true" />
                <div className="hero-fact">
                  <strong>{profile.cgpa}</strong>
                  <span>academic record</span>
                </div>
                <span className="hero-fact-divider" aria-hidden="true" />
                <div className="hero-fact">
                  <strong>AI · ML</strong>
                  <span>research to application</span>
                </div>
              </div>
            </div>

            <figure className="portrait-stage">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-frame">
                <picture>
                  <source srcSet={profile.portrait.webp} type="image/webp" />
                  <img
                    className="portrait-image"
                    src={profile.portrait.src}
                    alt={profile.portrait.alt}
                    width={568}
                    height={712}
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
              <figcaption className="portrait-badge">
                <span className="portrait-badge-dot" aria-hidden="true" />
                AI &amp; Data Science · B.Tech
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / ABOUT</p>
                <h2 className="section-title" id="about-title">
                  Practical AI, grounded in research.
                </h2>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I am a <strong>B.Tech student in Artificial Intelligence and Data Science</strong>{" "}
                  at {profile.college}. My work spans machine learning, deep learning, generative
                  AI, and computer vision, and I am most interested in problems where a model has to
                  hold up inside a real application.
                </p>
                <p>
                  I have built a legal RAG assistant, a YOLO-based tool that redacts personal
                  information from images, a maritime-monitoring dashboard, and skin-analysis models
                  with explainability, and I have interned on AI and backend teams, including an AI
                  mock-interview platform at IQmath.
                </p>
                <p>
                  My research includes a paper on automated PII redaction published at IATMSI in
                  2026, and two published patent applications covering PII redaction and GeoAI for
                  maritime threat detection. My team placed in the Top 75 of more than 5,000 at Tata
                  Elxsi TELIPORT Season 3. I want to keep applying these skills to real-world
                  problems with intelligent, responsibly built technology.
                </p>
              </div>
              <dl className="about-facts">
                <div className="about-fact">
                  <dt>FOCUS</dt>
                  <dd>AI, machine learning &amp; analytics</dd>
                </div>
                <div className="about-fact">
                  <dt>EDUCATION</dt>
                  <dd>{profile.degree}</dd>
                </div>
                <div className="about-fact">
                  <dt>RESEARCH</dt>
                  <dd>Published paper &amp; two published patent applications</dd>
                </div>
                <div className="about-fact">
                  <dt>CODE</dt>
                  <dd>Open-source projects on GitHub</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / TOOLKIT</p>
                <h2 className="section-title" id="skills-title">
                  Technical skills
                </h2>
              </div>
              <p className="section-description">
                A practical toolkit across models, data workflows, and application development.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skillIconMap[skill.icon];
                return (
                  <article className="skill-group" key={skill.title}>
                    <div className="skill-group-heading">
                      <span className="skill-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <h3>{skill.title}</h3>
                    </div>
                    <div className="skill-tags">
                      {skill.items.map((item) => (
                        <span className="skill-tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / SELECTED WORK</p>
                <h2 className="section-title" id="projects-title">
                  Projects &amp; repositories
                </h2>
              </div>
              <p className="section-description">
                Public repositories, described from their available documentation and source
                structure.
              </p>
            </div>
            <div className="project-toolbar">
              <div
                className="project-filters"
                role="group"
                aria-label="Filter repositories by area"
              >
                {projectFilters.map((filter) => (
                  <Button
                    type="button"
                    key={filter}
                    size="sm"
                    variant="ghost"
                    className="filter-button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <p className="project-count" aria-live="polite">
                Showing {visibleProjects.length} of {projects.length} repositories
              </p>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  {project.image ? (
                    <div className="project-image-wrap">
                      <img
                        className="project-image"
                        src={project.image.src}
                        alt={project.image.alt}
                        loading="eager"
                        decoding="async"
                        onError={(event) => {
                          const wrap = event.currentTarget.parentElement;
                          if (wrap) wrap.style.display = "none";
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="project-card-body">
                    <div className="project-kicker">
                      <span>{project.categories[0]}</span>
                      {project.note ? <span className="project-note">{project.note}</span> : null}
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    {project.technologies.length > 0 ? (
                      <div className="project-tags" aria-label={`${project.title} technologies`}>
                        {project.technologies.map((technology) => (
                          <span className="project-tag" key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="project-note">No verified technology details available</p>
                    )}
                    <div className="project-footer">
                      <a
                        className="project-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open repository <ArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / EXPERIENCE</p>
                <h2 className="section-title" id="experience-title">
                  Work history
                </h2>
              </div>
              <Briefcase aria-hidden="true" className="section-mark" />
            </div>
            <div className="timeline">
              {experience.map((role) => (
                <article className="timeline-item" key={`${role.company}-${role.date}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="timeline-date">{role.date}</p>
                  <div className="timeline-content">
                    <h3>{role.company}</h3>
                    <p className="timeline-role">{role.role}</p>
                    <p>{role.summary}</p>
                    <div className="timeline-tags">
                      {role.technologies.map((technology) => (
                        <span className="project-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section research-section"
          id="research"
          aria-labelledby="research-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">05 / RESEARCH WORKS</p>
                <h2 className="section-title" id="research-title">
                  Research &amp; publications.
                </h2>
              </div>
              <p className="section-description">
                Research papers only; patent applications are listed separately in the next section.
                Items marked “to be confirmed” are waiting for verified publication details.
              </p>
            </div>
            <div className="paper-grid">
              {researchWorks.map((paper, index) => (
                <article className="paper-card" key={paper.id}>
                  <div className="card-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="card-chips">
                    <span className="chip chip-domain">{paper.domain}</span>
                    <span className="chip chip-status">{paper.status}</span>
                  </div>
                  <h3 className="paper-title">
                    {paper.href ? (
                      <a href={paper.href} target="_blank" rel="noreferrer">
                        {paper.title}
                      </a>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  <p className="card-text">{paper.abstract}</p>
                  <dl className="meta-list">
                    <div>
                      <dt>Venue</dt>
                      <dd>{paper.venue ?? <em className="tbc">To be confirmed</em>}</dd>
                    </div>
                    <div>
                      <dt>Year</dt>
                      <dd>{paper.year ?? <em className="tbc">To be confirmed</em>}</dd>
                    </div>
                    <div>
                      <dt>Author</dt>
                      <dd>Nowrin Begum R.{paper.authors ? `, ${paper.authors}` : ""}</dd>
                    </div>
                    <div>
                      <dt>Mentor</dt>
                      <dd>{paper.mentor ?? <em className="tbc">To be confirmed</em>}</dd>
                    </div>
                  </dl>
                  <div className="card-actions">
                    {paper.href ? (
                      <a className="card-button" href={paper.href} target="_blank" rel="noreferrer">
                        <FileText aria-hidden="true" /> Read Research Paper{" "}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="card-button is-pending" aria-disabled="true">
                        <FileText aria-hidden="true" /> Paper link pending
                      </span>
                    )}
                    <a
                      className="card-link"
                      href={profile.linkedinPublications}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn publications ↗
                    </a>
                    {paper.doi ? (
                      <a
                        className="card-link"
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        DOI: {paper.doi}
                      </a>
                    ) : null}
                  </div>
                  {paper.needs.length > 0 ? (
                    <p className="needs-note">Needed: {paper.needs.join(" · ")}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section patents-section" id="patents" aria-labelledby="patents-title">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">06 / RESEARCH PATENTS</p>
                <h2 className="section-title" id="patents-title">
                  Patent applications.
                </h2>
              </div>
              <p className="section-description">
                Listed with the status given in the résumé. Published applications are not described
                as granted.
              </p>
            </div>
            <div className="patent-list">
              {patentPublications.map((patent, index) => (
                <article
                  className={`patent-card${patent.applicationNumber ? "" : " is-placeholder"}`}
                  key={patent.id}
                >
                  <div className="patent-side">
                    <ScrollText aria-hidden="true" />
                    <span className="patent-index">P{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="patent-body">
                    <div className="card-chips">
                      <span className="chip chip-status">{patent.status}</span>
                      {patent.published ? (
                        <span className="chip chip-domain">Published {patent.published}</span>
                      ) : null}
                    </div>
                    <h3 className="patent-title">{patent.title}</h3>
                    {patent.description ? <p className="card-text">{patent.description}</p> : null}
                    <dl className="meta-list">
                      <div>
                        <dt>Application No.</dt>
                        <dd>
                          {patent.applicationNumber ? (
                            <code>{patent.applicationNumber}</code>
                          ) : (
                            <em className="tbc">To be confirmed</em>
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt>Inventor</dt>
                        <dd>Nowrin Begum R.{patent.inventors ? `, ${patent.inventors}` : ""}</dd>
                      </div>
                    </dl>
                    <div className="card-actions">
                      {patent.href ? (
                        <a
                          className="card-button"
                          href={patent.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ScrollText aria-hidden="true" /> View Patent Record{" "}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="card-button is-pending" aria-disabled="true">
                          <ScrollText aria-hidden="true" /> Official record link pending
                        </span>
                      )}
                      <a
                        className="card-link"
                        href={profile.linkedinPatents}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn patents ↗
                      </a>
                    </div>
                    {patent.needs.length > 0 ? (
                      <p className="needs-note">Needed: {patent.needs.join(" · ")}</p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section achievements-section"
          id="achievements"
          aria-labelledby="achievements-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">07 / ACHIEVEMENTS &amp; LEADERSHIP</p>
                <h2 className="section-title" id="achievements-title">
                  Leadership &amp; recognition.
                </h2>
              </div>
              <p className="section-description">
                Only what the résumé and portfolio records support.
              </p>
            </div>
            <div className="stat-row" aria-label="Research contribution statistics">
              <div className="stat-card">
                <BookOpen aria-hidden="true" />
                <strong>{researchStats.papers}</strong>
                <span>
                  Research works listed · {researchStats.papersConfirmedPublished} confirmed
                  published
                </span>
              </div>
              <div className="stat-card">
                <ScrollText aria-hidden="true" />
                <strong>{researchStats.patentsDocumented}</strong>
                <span>
                  Published patent applications
                  {researchStats.patentsTotal > researchStats.patentsDocumented
                    ? " · third awaiting details"
                    : ""}
                </span>
              </div>
              <div className="stat-card">
                <Users aria-hidden="true" />
                <strong>5+</strong>
                <span>Club events led</span>
              </div>
              <div className="stat-card">
                <Trophy aria-hidden="true" />
                <strong>Top 75</strong>
                <span>Tata Elxsi TELIPORT S3 · 5,000+ teams</span>
              </div>
            </div>
            <div className="achievement-grid">
              {achievements.map((item) => {
                const Icon = item.icon === "trophy" ? Trophy : Users;
                return (
                  <article className="achievement-card" key={item.id}>
                    <div className="achievement-head">
                      <span className="achievement-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p className="achievement-org">
                          {item.org}
                          {item.date ? ` · ${item.date}` : ""}
                        </p>
                      </div>
                    </div>
                    <p className="card-text">{item.detail}</p>
                    {item.points.length > 0 ? (
                      <ul className="achievement-points">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.needs.length > 0 ? (
                      <p className="needs-note">Needed: {item.needs.join(" · ")}</p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section credentials-section"
          id="education"
          aria-labelledby="education-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">08 / EDUCATION &amp; CREDENTIALS</p>
                <h2 className="section-title" id="education-title">
                  Learning with intent.
                </h2>
              </div>
            </div>
            <div className="credentials-layout">
              <div className="education-line">
                <GraduationCap aria-hidden="true" />
                <h3>{profile.college}</h3>
                <p>{profile.degree}</p>
                <p>{profile.cgpa} CGPA</p>
                <p className="education-date">{profile.educationDates}</p>
              </div>
              <div className="certifications-grid">
                {certifications.map((certification) => (
                  <div className="certification-item" key={certification.title}>
                    <Award aria-hidden="true" />
                    <div>
                      <strong>{certification.title}</strong>
                      <span>{certification.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-inner contact-layout">
            <div>
              <p className="eyebrow">09 / CONTACT</p>
              <h2 id="contact-title">Let’s build something thoughtful.</h2>
              <p>
                Open to conversations about AI, data science, research, and software engineering.
              </p>
            </div>
            <div className="contact-actions">
              <Button asChild size="lg" className="button-action button-primary">
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" /> Email Nowrin
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-action button-outline">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-brand">Nowrin Begum R. · AI &amp; Data Science</span>
          <span>© 2026 Nowrin Begum R.</span>
          <div className="footer-links" aria-label="Social profiles">
            <a
              className="footer-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github aria-hidden="true" />
            </a>
            <a
              className="footer-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin aria-hidden="true" />
            </a>
            <a className="footer-link" href={`mailto:${profile.email}`} aria-label="Email Nowrin">
              <Mail aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
