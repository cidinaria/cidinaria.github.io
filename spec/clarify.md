# Clarifications
## Language
English
## Style
Professional, clean, modern, science-focused
## Visual direction
- Dark blue
- White
- Light gray
- Soft teal accents
## Tone
Clear, credible, intelligent, accessible
## Brand impression
The website should communicate:
- scientific credibility
- clarity
- professionalism
- modern research identity
- interdisciplinary expertise
## Website type
Single-page academic/professional portfolio
## Contact strategy
Use direct public contact information:
- email
- phone / WhatsApp
- GitHub
- Lattes
## Publication strategy
Show selected publications on the page and direct visitors to Lattes for the full academic record.
spec/plan.md
md


# Technical Plan
## Stack
- HTML5
- CSS3
- JavaScript vanilla
## Structure
- index.html
- styles.css
- script.js
## Layout
- Sticky header
- Single-page layout
- Section-based navigation
- Clean cards and content blocks
- Responsive grid where useful
## Features
- Smooth scrolling
- Active navigation highlight on scroll
- Mobile navigation toggle
- Publication list
- Contact links
- GitHub and Lattes links
## SEO
- Title tag
- Meta description
- Semantic headings
- Accessible structure
## Accessibility
- Semantic sections
- Visible focus states
- Good color contrast
- Keyboard-friendly navigation
## Deployment
- Upload project to GitHub
- Publish the site/ folder contents with GitHub Pages
- Keep the project static and lightweight
spec/tasks.md
md


# Tasks
## Task 1
Create the full project structure.
## Task 2
Build the hero and about sections.
## Task 3
Build expertise, experience, and education sections.
## Task 4
Build the skills and selected publications sections.
## Task 5
Build the contact and footer sections.
## Task 6
Apply responsive design and navigation behavior.
## Task 7
Review the site for clarity, performance, accessibility, and GitHub Pages readiness.
site/index.html
html


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maria Cidinaria Silva Alves | Bioinformatician</title>
  <meta
    name="description"
    content="Personal website of Maria Cidinaria Silva Alves, a biologist and bioinformatician working in genomics, transcriptomics, molecular biology, and multi-omics research."
  />
  <meta name="author" content="Maria Cidinaria Silva Alves" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a href="#home" class="logo">Maria Cidinaria</a>
      <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="site-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#publications">Publications</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
  <main>
    <section id="home" class="hero section">
      <div class="container hero-grid">
        <div class="hero-text">
          <p class="eyebrow">Biologist | Bioinformatician</p>
          <h1>Bioinformatics, Genomics, and Multi-Omics for Scientific Discovery</h1>
          <p class="lead">
            I am a Brazilian biologist and bioinformatician with experience in genomic
            surveillance, molecular biology, RNA-seq, single-cell analysis, protein
            modeling, and computational research in health and biotechnology.
          </p>
          <div class="hero-actions">
            <a href="#publications" class="btn btn-primary">View Publications</a>
            <a href="#contact" class="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div class="hero-card">
          <h2>Research Focus</h2>
          <ul>
            <li>Genomics and transcriptomics</li>
            <li>Single-cell and RNA-seq analysis</li>
            <li>Genomic surveillance and public health</li>
            <li>Protein modeling and peptide design</li>
            <li>Multi-omics and data science</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="about" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">About</p>
          <h2>Scientific background with interdisciplinary bioinformatics experience</h2>
        </div>
        <div class="content-block">
          <p>
            I am a <strong>Biologist and Bioinformatician</strong> with a strong background
            in <strong>genomics, transcriptomics, molecular biology, and computational analysis</strong>.
            My academic and professional experience includes research in
            <strong>genomic surveillance of respiratory viruses</strong>,
            <strong>single-cell and RNA-seq analysis</strong>,
            <strong>structural and functional characterization of genes and proteins</strong>,
            and <strong>rational design of therapeutic peptides</strong>.
          </p>
          <p>
            I contributed to projects linked to <strong>PAHO/WHO</strong> at <strong>LACEN-AL</strong>,
            supporting genomic sequencing and bioinformatics workflows for
            <strong>SARS-CoV-2, dengue, and influenza</strong>. My work combines laboratory
            practice with computational analysis, including workflow automation with
            <strong>Python</strong> and <strong>R</strong>.
          </p>
          <p>
            I am currently working as a <strong>Bioinformatician at Hospital de Câncer de Barretos</strong>,
            with a focus on <strong>single-cell analysis, RNA-seq, statistics, data science,
            machine learning, and scientific communication</strong>.
          </p>
        </div>
      </div>
    </section>
    <section id="expertise" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Expertise</p>
          <h2>Areas of expertise</h2>
          <p>
            My work integrates molecular biology, bioinformatics, and data analysis
            to support scientific and translational research.
          </p>
        </div>
        <div class="card-grid">
          <article class="card">
            <h3>Genomic Sequencing and Surveillance</h3>
            <p>
              Experience in sequencing workflows from bench to bioinformatics,
              including SARS-CoV-2, dengue, and influenza, with applications in public health surveillance.
            </p>
          </article>
          <article class="card">
            <h3>RNA-seq and Single-Cell Analysis</h3>
            <p>
              Analysis of bulk RNA-seq and single-cell data, including preprocessing,
              quality control, differential expression, and biological interpretation.
            </p>
          </article>
          <article class="card">
            <h3>Multi-Omics and Functional Genomics</h3>
            <p>
              Integration and interpretation of genomic, transcriptomic, and metagenomic data
              for gene discovery, annotation, and systems-level analysis.
            </p>
          </article>
          <article class="card">
            <h3>Protein Modeling and Peptide Design</h3>
            <p>
              Structural and functional characterization of proteins, in silico modeling,
              and rational design of therapeutic peptides with bioactive potential.
            </p>
          </article>
          <article class="card">
            <h3>Data Science and Workflow Automation</h3>
            <p>
              Development of reproducible analytical routines using Python, R,
              Nextflow, Docker, and Singularity.
            </p>
          </article>
          <article class="card">
            <h3>Scientific Writing and Communication</h3>
            <p>
              Preparation of technical reports, scientific publications,
              and communication materials for academic and applied research contexts.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section id="experience" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Experience</p>
          <h2>Professional experience</h2>
        </div>
        <div class="timeline">
          <article class="timeline-item">
            <div class="timeline-meta">2025 - Present</div>
            <div class="timeline-content">
              <h3>Bioinformatician</h3>
              <p class="timeline-place">Hospital de Câncer de Barretos</p>
              <ul>
                <li>Performing single-cell and RNA-seq analyses for cancer-related research.</li>
                <li>Applying statistics, data science, and machine learning to biological datasets.</li>
                <li>Contributing to scientific communication and research dissemination.</li>
                <li>Supporting data interpretation for translational and biomedical research.</li>
              </ul>
            </div>
          </article>
          <article class="timeline-item">
            <div class="timeline-meta">2022 - 2023</div>
            <div class="timeline-content">
              <h3>Bioinformatician</h3>
              <p class="timeline-place">PAHO/WHO / LACEN-AL</p>
              <ul>
                <li>Conducted genomic sequencing of SARS-CoV-2, dengue, and influenza samples.</li>
                <li>Performed molecular biology laboratory procedures and bioinformatics analyses.</li>
                <li>Contributed to genomic surveillance projects with regional and national impact.</li>
                <li>Automated analysis workflows using Python and R.</li>
                <li>Wrote technical reports and supported research documentation.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section id="education" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Education</p>
          <h2>Academic training</h2>
        </div>
        <div class="list-grid">
          <article class="list-card">
            <h3>Ph.D. in Biological Sciences</h3>
            <p>Bioinformatics and Biotechnology - UFPE</p>
            <span>2022 - 2026</span>
          </article>
          <article class="list-card">
            <h3>M.Sc. in Biological Sciences</h3>
            <p>Bioinformatics and Biotechnology - UFPE</p>
            <span>2019 - 2021</span>
          </article>
          <article class="list-card">
            <h3>Postgraduate Specialization</h3>
            <p>Biology Teaching and Pedagogical Practices - Faculdade Única de Ipatinga</p>
            <span>2018 - 2019</span>
          </article>
          <article class="list-card">
            <h3>Postgraduate Specialization</h3>
            <p>Cellular and Molecular Biology - UCAM</p>
            <span>2018 - 2019</span>
          </article>
          <article class="list-card">
            <h3>B.Sc. in Biological Sciences</h3>
            <p>UNEAL</p>
            <span>2013 - 2017</span>
          </article>
        </div>
      </div>
    </section>
    <section id="skills" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Skills</p>
          <h2>Technical skills</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-box">
            <h3>Molecular Biology</h3>
            <p>Nucleic acid extraction, conventional PCR, RT-qPCR.</p>
          </div>
          <div class="skill-box">
            <h3>Sequencing</h3>
            <p>Sample-to-bioinformatics workflows, including Illumina MiSeq.</p>
          </div>
          <div class="skill-box">
            <h3>Genomics</h3>
            <p>Genome assembly, annotation, and variant calling.</p>
          </div>
          <div class="skill-box">
            <h3>Transcriptomics</h3>
            <p>Differential expression, RNA-seq, and single-cell analysis.</p>
          </div>
          <div class="skill-box">
            <h3>Metagenomics</h3>
            <p>Analysis and biological interpretation of complex datasets.</p>
          </div>
          <div class="skill-box">
            <h3>Protein Science</h3>
            <p>Protein prospecting, structural modeling, and functional characterization.</p>
          </div>
          <div class="skill-box">
            <h3>Peptide Design</h3>
            <p>Rational design of peptides with antifungal, antibacterial, and anti-inflammatory potential.</p>
          </div>
          <div class="skill-box">
            <h3>Programming and Tools</h3>
            <p>Python, R, Nextflow, Docker, and Singularity.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="publications" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Publications</p>
          <h2>Selected publications</h2>
          <p>
            A selection of peer-reviewed publications in bioinformatics, genomics,
            molecular biology, and translational research.
          </p>
        </div>
        <div class="publication-list">
          <article class="publication-item">
            <h3>Bioinformatics and omics revolutionizing leprosy research: Unveiling mechanisms and driving therapeutic innovations</h3>
            <p><em>Medicine in Microecology</em> (2025)</p>
          </article>
          <article class="publication-item">
            <h3>Structural and transcriptional characterization of thaumatin-like proteins in Cenostigma pyramidale under salt stress</h3>
            <p><em>Genetica</em> (2025)</p>
          </article>
          <article class="publication-item">
            <h3>Gut Microbiota and COVID-19: Unraveling the Gut-Lung Axis and Immunomodulatory Therapies</h3>
            <p><em>ACS Infectious Diseases</em> (2025)</p>
          </article>
          <article class="publication-item">
            <h3>Therapeutic Approaches for COVID-19: A Review of Antiviral Treatments, Immunotherapies, and Emerging Interventions</h3>
            <p><em>Advances in Therapy</em> (2025)</p>
          </article>
          <article class="publication-item">
            <h3>Genome-wide identification and characterization of caleosin genes in lima-bean (Phaseolus lunatus)</h3>
            <p><em>Scientific Electronic Archives</em> (2025)</p>
          </article>
          <article class="publication-item">
            <h3>Genomic sequencing of SARS-CoV-2 samples at the central public health laboratory of Alagoas (Brazil) in June 2023</h3>
            <p><em>International Journal of Molecular Biology: Open Access</em> (2025)</p>
          </article>
          <article class="publication-item">
            <h3>Genomic and Epidemiological Surveillance of SARS-CoV-2: Data Analysis from the Central Public Health Laboratory of Alagoas and GISAID Database</h3>
            <p><em>International Journal of Science, Technology and Society</em> (2025)</p>
          </article>
        </div>
        <div class="section-link">
          <a
            href="[lattes.cnpq.br](http://lattes.cnpq.br/1633031262017450)"
            target="_blank"
            rel="noopener noreferrer"
            class="text-link"
          >
            View full academic record on Lattes
          </a>
        </div>
      </div>
    </section>
    <section id="contact" class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Contact</p>
          <h2>Research collaborations and professional contact</h2>
          <p>
            I am open to research collaborations, scientific partnerships,
            bioinformatics projects, and academic networking.
          </p>
        </div>
        <div class="contact-grid">
          <a class="contact-card" href="mailto:cidi.nara19@gmail.com">
            <span class="contact-label">Email</span>
            <strong>cidi.nara19@gmail.com</strong>
          </a>
          <a class="contact-card" href="mailto:cidi.nara16@hotmail.com">
            <span class="contact-label">Alternative Email</span>
            <strong>cidi.nara16@hotmail.com</strong>
          </a>
          <a class="contact-card" href="[wa.me](https://wa.me/5582981130982)" target="_blank" rel="noopener noreferrer">
            <span class="contact-label">Phone / WhatsApp</span>
            <strong>+55 82 98113-0982</strong>
          </a>
          <a class="contact-card" href="[github.com](https://github.com/cidinaria)" target="_blank" rel="noopener noreferrer">
            <span class="contact-label">GitHub</span>
            <strong>github.com/cidinaria</strong>
          </a>
          <a class="contact-card" href="[lattes.cnpq.br](http://lattes.cnpq.br/1633031262017450)" target="_blank" rel="noopener noreferrer">
            <span class="contact-label">Lattes</span>
            <strong>Academic profile</strong>
          </a>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p><strong>Maria Cidinaria Silva Alves</strong></p>
      <p>Biologist | Bioinformatician</p>
      <p>Working across genomics, bioinformatics, molecular biology, and data science.</p>
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
site/styles.css
css


:root {
  --bg: #f7f9fc;
  --surface: #ffffff;
  --surface-alt: #eef4f8;
  --text: #18212b;
  --muted: #5a6a7a;
  --primary: #123a63;
  --primary-dark: #0d2d4c;
  --accent: #1f8a8a;
  --border: #d7e1ea;
  --shadow: 0 10px 30px rgba(18, 58, 99, 0.08);
  --radius: 18px;
  --container: 1120px;
  --transition: 0.25s ease;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.65;
}
img {
  max-width: 100%;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}
p {
  margin-top: 0;
  color: var(--muted);
}
h1,
h2,
h3 {
  margin-top: 0;
  color: var(--text);
  line-height: 1.2;
}
ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
}
.container {
  width: min(100% - 2rem, var(--container));
  margin-inline: auto;
}
.section {
  padding: 88px 0;
}
.section-alt {
  background: var(--surface-alt);
}
.section-heading {
  max-width: 760px;
  margin-bottom: 2rem;
}
.eyebrow {
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
  margin-bottom: 0.75rem;
}
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(247, 249, 252, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(215, 225, 234, 0.8);
}
.header-inner {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.logo {
  font-weight: 800;
  color: var(--primary);
  font-size: 1.05rem;
}
.site-nav {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}
.site-nav a {
  color: var(--muted);
  font-weight: 600;
  transition: color var(--transition);
}
.site-nav a:hover,
.site-nav a.active {
  color: var(--primary);
}
.nav-toggle {
  display: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}
.nav-toggle span {
  display: block;
  width: 26px;
  height: 3px;
  background: var(--primary);
  border-radius: 999px;
}
.nav-toggle span + span {
  margin-top: 5px;
}
.hero {
  padding-top: 110px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 2rem;
  align-items: center;
}
.hero-text h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  margin-bottom: 1rem;
}
.lead {
  font-size: 1.08rem;
  max-width: 680px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.8rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.95rem 1.4rem;
  font-weight: 700;
  transition: transform var(--transition), background var(--transition), color var(--transition);
}
.btn:hover {
  transform: translateY(-2px);
}
.btn-primary {
  background: var(--primary);
  color: #ffffff;
}
.btn-primary:hover {
  background: var(--primary-dark);
}
.btn-secondary {
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--primary);
}
.hero-card,
.card,
.list-card,
.skill-box,
.publication-item,
.contact-card,
.content-block,
.timeline-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-card {
  padding: 1.6rem;
}
.hero-card h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
.content-block {
  padding: 2rem;
}
.card-grid,
.list-grid,
.skills-grid,
.contact-grid {
  display: grid;
  gap: 1.2rem;
}
.card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.card,
.list-card,
.skill-box,
.publication-item,
.contact-card {
  padding: 1.4rem;
}
.card h3,
.list-card h3,
.skill-box h3,
.publication-item h3 {
  margin-bottom: 0.7rem;
  font-size: 1.08rem;
}
.timeline {
  display: grid;
  gap: 1.6rem;
}
.timeline-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.2rem;
  align-items: start;
}
.timeline-meta {
  font-weight: 700;
  color: var(--accent);
  padding-top: 0.4rem;
}
.timeline-content {
  padding: 1.5rem;
}
.timeline-place {
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.9rem;
}
.list-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.list-card span {
  display: inline-block;
  margin-top: 0.8rem;
  color: var(--accent);
  font-weight: 700;
}
.skills-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.publication-list {
  display: grid;
  gap: 1rem;
}
.section-link {
  margin-top: 1.5rem;
}
.text-link {
  color: var(--primary);
  font-weight: 700;
}
.text-link:hover {
  color: var(--accent);
}
.contact-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.contact-card {
  display: block;
  transition: transform var(--transition), border-color var(--transition);
}
.contact-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}
.contact-label {
  display: block;
  font-size: 0.88rem;
  color: var(--muted);
  margin-bottom: 0.45rem;
}
.site-footer {
  background: var(--primary-dark);
  color: rgba(255, 255, 255, 0.92);
  padding: 2rem 0;
}
.site-footer p {
  margin-bottom: 0.4rem;
  color: rgba(255, 255, 255, 0.8);
}
.footer-inner p:first-child {
  color: #ffffff;
}
@media (max-width: 980px) {
  .hero-grid,
  .timeline-item,
  .card-grid,
  .list-grid,
  .skills-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .timeline-meta {
    padding-top: 0;
  }
}
@media (max-width: 820px) {
  .nav-toggle {
    display: block;
  }
  .site-nav {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    background: #ffffff;
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }
  .site-nav.open {
    display: flex;
  }
  .section {
    padding: 72px 0;
  }
  .hero {
    padding-top: 92px;
  }
}
site/script.js
javascript


const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
const activateNavOnScroll = () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === currentSection) {
      link.classList.add("active");
    }
  });
};
window.addEventListener("scroll", activateNavOnScroll);
window.addEventListener("load", activateNavOnScroll);
README.md
md


# Maria Cidinaria Silva Alves - Personal Website
This project is a personal academic and professional website for Maria Cidinaria Silva Alves.
## Project structure
```text
maria-cidinaria-site/
├─ spec/
│  ├─ constitution.md
│  ├─ specification.md
│  ├─ clarify.md
│  ├─ plan.md
│  └─ tasks.md
├─ site/
│  ├─ index.html
│  ├─ styles.css
│  └─ script.js
└─ README.md
Website overview
This is a static single-page website built with:

HTML
CSS
JavaScript
It is designed to be:

lightweight
responsive
easy to maintain
compatible with GitHub Pages
Local preview
Open the site/index.html file in your browser to preview the website locally.

Deploy to GitHub Pages
Option 1: publish from the root
If you want, you can move the files from site/ to the repository root and publish from the main branch.

Option 2: publish with the current structure
Keep the files in site/ and use one of these approaches:

copy the contents of site/ to the repository root
or create a docs/ folder and place the website files there
Recommended simple deployment
Create a new GitHub repository
Upload the project files
Move index.html, styles.css, and script.js to the root of the repository, or to docs/
Go to repository settings
Open the Pages section
Choose the branch to deploy from
Select /root or /docs
Save and wait for the public URL
Contact links included in the site
Email
Alternative email
WhatsApp
GitHub
Lattes
Notes
No backend is required
No database is required
No API keys should be added
The project is ready for free hosting on GitHub Pages


---
## Como usar sem erro
### 1. Crie a pasta
```text
maria-cidinaria-site
2. Dentro dela, crie:
a pasta spec
a pasta site
3. Copie cada conteúdo acima para o arquivo correspondente
4. Abra este arquivo no navegador:
text


site/index.html
5. Quando estiver tudo certo, suba para o GitHub
Como o GitHub Pages funciona melhor com os arquivos do site na raiz ou em docs/, o jeito mais simples é:

manter spec/ na raiz
mover os arquivos de site/ para a raiz na hora de publicar
Ficaria assim no repositório publicado:

text


/
├─ spec/
├─ index.html
├─ styles.css
├─ script.js
└─ README.md
Ajustes que eu recomendo antes de publicar
trocar o texto do hero se quiser um tom mais forte ou mais acadêmico
adicionar sua foto profissional, se quiser
depois incluir links diretos para DOI ou artigos
no futuro, criar uma página separada só para publicações
Correção importante no seu conteúdo
No site público, eu não recomendaria expor contatos de referência de terceiros. Mantive isso fora da página, o que é melhor para privacidade.

Também deixei as publicações como selected publications, porque isso melhora muito a leitura do site.

Próximo passo prático
Agora faça isso:

crie a pasta
crie os arquivos
cole o conteúdo
abra index.html
depois suba para o GitHub
Se quiser, no próximo passo eu posso te entregar uma versão 2 mais bonita e premium, ainda só com HTML/CSS/JS, com:

visual mais sofisticado
seção de destaque para métricas
botão flutuante de contato
animações suaves
layout com cara de pesquisadora internacional
