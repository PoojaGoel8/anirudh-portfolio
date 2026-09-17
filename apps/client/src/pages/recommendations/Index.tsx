import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { Seo } from "@/components/portfolio/Seo";
import { recommendations } from "@/data/portfolio";

export default function RecommendationsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = recommendations[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + recommendations.length) % recommendations.length);
  };

  return (
    <>
      <Seo
        path="/recommendations"
        title="Recommendations — Anirudh Dalmia"
        description="Selected professional recommendations for Anirudh Dalmia across banking, change, sustainability, consulting, and leadership."
      />
      <section className="page-hero section-shell">
        <p className="eyebrow">Recommendations</p>
        <h1>Credibility, in the words of people who worked alongside me.</h1>
        <p className="page-intro">
          Selected excerpts from supplied reference letters across banking, consulting, sustainability, and early-career
          work.
        </p>
      </section>

      <section className="section-shell recommendation-stage" aria-live="polite">
        <div className="recommendation-number">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <small>/ {String(recommendations.length).padStart(2, "0")}</small>
        </div>
        <div className="recommendation-main">
          <Quote size={32} strokeWidth={1.25} />
          <blockquote>{active.quote}</blockquote>
          <div className="quote-attribution dark">
            <strong>{active.name}</strong>
            <span>{active.context}</span>
          </div>
        </div>
        <div className="recommendation-controls">
          <span>{active.theme}</span>
          <div>
            <button type="button" onClick={() => move(-1)} aria-label="Previous recommendation">
              <ArrowLeft size={19} />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next recommendation">
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-shell recommendation-index">
        {recommendations.map((recommendation, index) => (
          <button
            key={`${recommendation.name}-${recommendation.theme}`}
            type="button"
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{recommendation.name}</strong>
            <small>{recommendation.theme}</small>
          </button>
        ))}
      </section>

      <section className="section-shell evidence-note">
        <p>
          Excerpts are lightly condensed for web readability. Full reference materials were supplied for source
          verification and are not published to protect private correspondence and signatures.
        </p>
      </section>
    </>
  );
}
