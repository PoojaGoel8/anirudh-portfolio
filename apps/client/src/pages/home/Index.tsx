import { ArrowRight, ArrowUpRight, Download, FileCode2, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/portfolio/Reveal";
import { Seo } from "@/components/portfolio/Seo";
import { metrics, recommendations, workItems } from "@/data/portfolio";

const featuredWork = workItems.slice(0, 3);

const Index = () => (
  <>
    <Seo
      path="/"
      title="Anirudh Dalmia — AI Transformation & Change Leader"
      description="Portfolio of Anirudh Dalmia, a Singapore-based AI transformation, financial crime, risk, and programme leadership professional."
    />

    <section id="about-me" className="hero section-shell" aria-labelledby="about-me-heading">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="status-dot" />
          Singapore-based · Open to consequential challenges
        </div>
        <p className="eyebrow">About me</p>
        <h1 id="about-me-heading">
          Leading change where <em>systems</em> meet people.
        </h1>
        <p className="hero-summary">
          I turn complex regulatory and operating problems into governed roadmaps, reusable AI products, and adoption
          programmes that people can trust—and use. My path also spans entrepreneurship, sustainability, coaching,
          debating, film, and community leadership.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/work">
            Explore selected work <ArrowRight size={17} />
          </Link>
          <a className="button button-secondary" href="/assets/documents/anirudh-dalmia-resume.pdf" download>
            Download résumé <Download size={16} />
          </a>
          <a className="button button-secondary" href="/assets/documents/anirudh-dalmia-portfolio.html" download>
            Download HTML <FileCode2 size={16} />
          </a>
        </div>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/anirudh-dalmia/" target="_blank" rel="noreferrer">
            <span className="linkedin-glyph small" aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href="mailto:anirudhdalmia@hotmail.com">anirudhdalmia@hotmail.com</a>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-image-frame">
          <img
            data-image-slot="home.hero"
            src="/assets/slots/home.hero.webp"
            alt="Anirudh Dalmia delivering a guest-of-honour address on stage"
            width="760"
            height="860"
            fetchPriority="high"
          />
          <span className="image-caption">Guest of Honour · Lady Andal School · 2026</span>
        </div>
        <div className="hero-note">
          <span>Current focus</span>
          <strong>Responsible AI at enterprise scale</strong>
        </div>
      </div>
    </section>

    <section className="metrics-band" aria-label="Selected impact metrics">
      <div className="section-shell metrics-grid">
        {metrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <div>
              <span>{metric.label}</span>
              <small>{metric.detail}</small>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Reveal className="section-shell section-block">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Selected transformation work</p>
          <h2>From ambiguity to adoption.</h2>
        </div>
        <p>
          A portfolio built at the intersection of responsible AI, financial crime controls, operating-model change, and
          executive communication.
        </p>
      </div>
      <div className="work-preview-grid">
        {featuredWork.map((item, index) => (
          <article className={`work-preview-card ${index === 0 ? "featured" : ""}`} key={item.title}>
            <div className="work-card-topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item.category}</span>
            </div>
            {index === 0 ? (
              <img
                data-image-slot="work.ai-catalyst"
                src="/assets/slots/work.ai-catalyst.webp"
                alt="Anirudh Dalmia at a Singapore AI Catalyst Think Tank session"
                width="900"
                height="600"
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <div className="work-card-content">
              <p className="card-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <strong>{item.outcome}</strong>
            </div>
          </article>
        ))}
      </div>
      <Link className="text-link" to="/work">
        View the complete work portfolio <ArrowRight size={16} />
      </Link>
    </Reveal>

    <Reveal className="quote-feature">
      <div className="section-shell quote-feature-inner">
        <p className="quote-mark">“</p>
        <blockquote>{recommendations[1].quote}</blockquote>
        <div className="quote-attribution">
          <strong>{recommendations[1].name}</strong>
          <span>{recommendations[1].context}</span>
        </div>
        <Link className="button button-inverse" to="/recommendations">
          Read recommendations <ArrowRight size={16} />
        </Link>
      </div>
    </Reveal>

    <Reveal className="section-shell section-block leadership-preview">
      <div className="leadership-preview-copy">
        <p className="eyebrow">Leadership beyond the job title</p>
        <h2>Change lands when people feel invited into it.</h2>
        <p>
          Serving as Master of Ceremonies for Toastmasters District 80’s three-day Annual Conference, hosting its Hall
          of Fame, coaching debaters, and advocating for mental wellbeing have shaped how I lead: with clarity, empathy,
          and a little theatre when the moment needs it.
        </p>
        <div className="inline-actions">
          <Link className="button button-primary" to="/leadership">
            Explore leadership & impact <ArrowRight size={16} />
          </Link>
          <a
            className="button button-secondary"
            href="https://www.youtube.com/watch?v=10SKVUuWJwk&t=33s"
            target="_blank"
            rel="noreferrer"
          >
            <Play size={16} /> Watch the wellbeing film
          </a>
        </div>
      </div>
      <div className="leadership-preview-visual">
        <img
          data-image-slot="leadership.annual-conference"
          src="/assets/slots/leadership.annual-conference.webp"
          alt="Anirudh Dalmia leading a fireside chat and addressing delegates at Toastmasters District 80 Annual Conference 2025"
          width="760"
          height="520"
          loading="lazy"
          decoding="async"
        />
        <span className="floating-label">Annual Conference MC · Host · Coach</span>
      </div>
    </Reveal>
  </>
);

export default Index;
