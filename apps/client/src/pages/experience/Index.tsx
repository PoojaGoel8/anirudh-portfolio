import { Download } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Seo } from "@/components/portfolio/Seo";
import { capabilityGroups, experience } from "@/data/portfolio";

const earlyFoundations = experience.slice(4).filter((item) => item.organisation !== "Road to Sangam");

export default function ExperiencePage() {
  return (
    <>
      <Seo
        path="/experience"
        title="Experience — Anirudh Dalmia"
        description="Career chronology, capabilities, education, certifications, and leadership experience of Anirudh Dalmia."
      />
      <section className="page-hero section-shell">
        <p className="eyebrow">Experience</p>
        <h1>Seven-plus years in APAC banking. A career built across disciplines.</h1>
        <p className="page-intro">
          Financial crime and regulatory depth, paired with programme leadership, AI enablement, communication, and an
          enduring curiosity about how organisations change.
        </p>
        <a className="button button-primary" href="/assets/documents/anirudh-dalmia-resume.pdf" download>
          Download full résumé <Download size={16} />
        </a>
      </section>

      <section className="section-shell section-block experience-layout">
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal className="timeline-item" key={`${item.period}-${item.role}`}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-content">
                <p className="card-period">{item.period}</p>
                <h2>{item.role}</h2>
                <strong>{item.organisation}</strong>
                <p>{item.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <aside className="experience-aside">
          <div className="aside-card sticky-card">
            <p className="eyebrow">Education</p>
            <h3>Bachelor of Business Management</h3>
            <p>Double major in Marketing & Psychology</p>
            <strong>Singapore Management University · 2018</strong>
          </div>
          <div className="aside-card">
            <p className="eyebrow">Selected certifications</p>
            <ul className="clean-list">
              <li>GenAI for Risk Management Essentials</li>
              <li>ICA Specialist Certificate in Anti-Corruption</li>
              <li>SCI M5, M&A & B, and M9A & B</li>
            </ul>
          </div>
          <div className="aside-card">
            <p className="eyebrow">Languages</p>
            <p className="language-list">English · Hindi · Tamil</p>
          </div>
        </aside>
      </section>

      <section className="early-foundations">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Early foundations</p>
              <h2>Entrepreneurship, consulting, sustainability, and editorial craft.</h2>
            </div>
            <p>
              Before banking, customer research, sustainability policy, and editorial communications built the range I
              still draw on. Road to Sangam remains within the career timeline above, in chronological context.
            </p>
          </div>
          <div className="foundation-grid">
            {earlyFoundations.map((item, index) => (
              <Reveal className="foundation-card" key={`${item.organisation}-${item.role}`}>
                <div className="foundation-number">{String(index + 1).padStart(2, "0")}</div>
                <p className="card-period">{item.period}</p>
                <h3>{item.organisation}</h3>
                <strong>{item.role}</strong>
                <p>{item.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="capability-section">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow light">Capability system</p>
              <h2>Depth where it matters. Range where it helps.</h2>
            </div>
            <p>Four disciplines that reinforce one another across complex transformation.</p>
          </div>
          <div className="capability-grid">
            {capabilityGroups.map((group, index) => (
              <article key={group.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
