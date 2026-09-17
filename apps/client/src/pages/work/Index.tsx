import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Seo } from "@/components/portfolio/Seo";
import { workItems, type WorkCategory } from "@/data/portfolio";

const categories: Array<"All" | WorkCategory> = [
  "All",
  "AI Transformation",
  "Risk & Controls",
  "Change & Adoption",
  "Strategy",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const filteredItems = useMemo(
    () => (activeCategory === "All" ? workItems : workItems.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <Seo
        path="/work"
        title="Selected Work — Anirudh Dalmia"
        description="Selected AI transformation, financial crime, risk, operating-model, adoption, and strategy work by Anirudh Dalmia."
      />
      <section className="page-hero section-shell">
        <p className="eyebrow">Selected work</p>
        <h1>Transformation with controls, context, and people built in.</h1>
        <p className="page-intro">
          These case studies describe the challenge, approach, and supported outcome without disclosing confidential
          implementation detail.
        </p>
      </section>

      <section className="section-shell section-block">
        <div className="filter-bar" aria-label="Filter work by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "filter-button active" : "filter-button"}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === "All" || activeCategory === "AI Transformation" ? (
          <div className="act-feature">
            <img
              data-image-slot="work.ai-catalyst"
              src="/assets/slots/work.ai-catalyst.webp"
              alt="Anirudh Dalmia at a Singapore AI Catalyst Think Tank session"
              width="900"
              height="600"
            />
            <div>
              <p className="eyebrow">Featured programme</p>
              <h2>Experimentation to execution.</h2>
              <p>
                Singapore AI Catalyst Think Tank (ACT) brings more than 40 champions into one branch-wide forum focused
                on collaboration, responsible enablement, and scale.
              </p>
            </div>
          </div>
        ) : null}

        <div className="case-study-list" aria-live="polite">
          {filteredItems.map((item, index) => (
            <Reveal className="case-study" key={item.title}>
              <div className="case-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="case-main">
                <div className="case-meta">
                  <span>{item.category}</span>
                  <span>{item.period}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
              <div className="case-outcome">
                <span>Outcome</span>
                <strong>{item.outcome}</strong>
                <ul>
                  {item.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell compact-cta">
        <div>
          <p className="eyebrow">Interested in the operating approach?</p>
          <h2>Let’s compare notes on responsible transformation.</h2>
        </div>
        <a className="button button-primary" href="mailto:anirudhdalmia@hotmail.com">
          Start a conversation <ArrowUpRight size={16} />
        </a>
      </section>
    </>
  );
}
