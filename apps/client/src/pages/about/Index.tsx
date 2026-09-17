import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Seo } from "@/components/portfolio/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        path="/about"
        title="About — Anirudh Dalmia"
        description="About Anirudh Dalmia: AI transformation and risk leader, communicator, coach, filmmaker, and community advocate based in Singapore."
      />
      <section className="about-hero section-shell">
        <div className="about-portrait">
          <img
            data-image-slot="home.portrait"
            src="/assets/slots/home.portrait.webp"
            alt="Portrait of Anirudh Dalmia"
            width="520"
            height="620"
          />
          <span>Singapore · English · Hindi · Tamil</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h1>I work best where the answer is not obvious—but the responsibility is.</h1>
          <p className="large-copy">
            My career has moved through marketing, psychology, financial advice, sustainability, anti-financial crime,
            enterprise change, and responsible AI. The thread is a fascination with how people make decisions inside
            complex systems.
          </p>
          <p>
            I bring a regulator-aware mindset to innovation and an adoption-aware mindset to control. That means
            translating technical and policy detail into a path that executives can sponsor, delivery teams can execute,
            and users can understand.
          </p>
          <p>
            Outside core roles, debating, Toastmasters, coaching, film, and community work have sharpened another
            conviction: communication is not the final layer of transformation. It is part of the operating model.
          </p>
          <div className="inline-actions">
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/anirudh-dalmia/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-glyph small" aria-hidden="true">in</span> Connect on LinkedIn
            </a>
            <a className="button button-secondary" href="/assets/documents/anirudh-dalmia-resume.pdf" download>
              <Download size={16} /> Download résumé
            </a>
          </div>
        </div>
      </section>

      <Reveal className="principles-section">
        <div className="section-shell">
          <p className="eyebrow light">Working principles</p>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h2>Make the complex legible.</h2>
              <p>Structure is a form of empathy. People engage better when the path, evidence, and trade-offs are visible.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Design governance into the work.</h2>
              <p>Human oversight, traceability, and controlled testing are product features—not paperwork added later.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Build for reuse, not applause.</h2>
              <p>A strong solution can be understood, adapted, and carried forward by people beyond its original team.</p>
            </article>
          </div>
        </div>
      </Reveal>

      <section className="section-shell compact-cta about-contact">
        <div>
          <p className="eyebrow">What’s worth discussing?</p>
          <h2>Responsible AI, regulated transformation, or the art of bringing a room with you.</h2>
        </div>
        <a className="button button-primary" href="mailto:anirudhdalmia@hotmail.com">
          Email Anirudh <ArrowUpRight size={16} />
        </a>
      </section>
    </>
  );
}
