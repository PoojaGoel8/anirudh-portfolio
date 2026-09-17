import { ArrowUpRight, Award, Bike, Clapperboard, GraduationCap, Mic2, Trophy, UsersRound } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Seo } from "@/components/portfolio/Seo";

const stories = [
  {
    title: "Master of Ceremonies for Annual Conference 2025",
    label: "Toastmasters District 80 · 9–11 May 2025",
    description:
      "Led a three-day conference celebrating Singapore’s best orators and welcoming delegates from around the world. Hosted the gala dinner and key sessions, moderated a fireside chat with World Champion Verity Price, and represented a rebuilt Deutsche Bank Toastmasters club at District finals.",
    icon: Mic2,
    image: (
      <img
        data-image-slot="leadership.annual-conference"
        src="/assets/slots/leadership.annual-conference.webp"
        alt="Anirudh Dalmia leading a fireside chat and addressing delegates at Toastmasters District 80 Annual Conference 2025"
        width="900"
        height="600"
      />
    ),
  },
  {
    title: "Hosting the Hall of Fame",
    label: "Toastmasters District 80",
    description:
      "Hosted the biggest night in Toastmasters District 80 for two consecutive years—celebrating the people, stories, and achievements that make a community memorable. The Deutsche Bank club was recognised as a Distinguished Club, alongside service as Area Director for Toastmasters Singapore (2024–25).",
    icon: Award,
    image: (
      <img
        data-image-slot="leadership.toastmasters"
        src="/assets/slots/leadership.toastmasters.webp"
        alt="Anirudh Dalmia hosting a Toastmasters District 80 event"
        width="760"
        height="520"
      />
    ),
  },
  {
    title: "There is no health without mental health",
    label: "Advocacy & film",
    description:
      "Host and moderator for the Mental Health Film Festival Singapore, contributor to a growing community of caregivers and filmmakers, and writer, director, and producer of an employee mental-wellbeing film.",
    icon: Clapperboard,
    image: (
      <img
        data-image-slot="leadership.mental-health"
        src="/assets/slots/leadership.mental-health.webp"
        alt="Anirudh Dalmia moderating a Mental Health Film Festival event"
        width="760"
        height="520"
      />
    ),
  },
  {
    title: "250 kilometres for a healthier conversation",
    label: "Fundraising & resilience",
    description:
      "Completed a Singapore-to-Malacca cycling challenge supporting mental-health fundraising. The wider campaign raised more than $120,000—and made resilience a collective, visible act.",
    icon: Bike,
    image: (
      <img
        data-image-slot="leadership.cycling"
        src="/assets/slots/leadership.cycling.webp"
        alt="Anirudh Dalmia during a 250 kilometre mental-health fundraising ride"
        width="760"
        height="520"
      />
    ),
  },
  {
    title: "Twelve years, one full-circle address",
    label: "Education & perspective",
    description:
      "Returned to Lady Andal school in 2026 as Guest of Honour, twelve years after serving as School Pupil Leader, to speak about setbacks, learning, and the foundations that endure.",
    icon: GraduationCap,
    image: (
      <img
        data-image-slot="leadership.school"
        src="/assets/slots/leadership.school.webp"
        alt="Anirudh Dalmia returning to his school as Guest of Honour"
        width="760"
        height="520"
      />
    ),
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Seo
        path="/leadership"
        title="Leadership & Impact — Anirudh Dalmia"
        description="Public speaking, Toastmasters leadership, debate coaching, mental-health advocacy, volunteering, and film work by Anirudh Dalmia."
      />
      <section className="page-hero section-shell">
        <p className="eyebrow">Leadership & impact</p>
        <h1>The work is technical. The change is always human.</h1>
        <p className="page-intro">
          The stage, the classroom, a bicycle, and a film set have all taught me the same lesson: people move when
          meaning becomes shared.
        </p>
      </section>

      <section className="section-shell story-list">
        {stories.map((story, index) => {
          const Icon = story.icon;
          return (
            <Reveal className={`story-row ${index % 2 === 1 ? "reverse" : ""}`} key={story.title}>
              <div className="story-image">
                {story.image}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="story-copy">
                <div className="story-icon">
                  <Icon size={19} />
                </div>
                <p className="eyebrow">{story.label}</p>
                <h2>{story.title}</h2>
                <p>{story.description}</p>
              </div>
            </Reveal>
          );
        })}
      </section>

      <Reveal className="debate-section">
        <div className="section-shell debate-layout">
          <div className="debate-intro">
            <p className="eyebrow light">Coaching & competitive debate</p>
            <h2>Teaching people to think clearly—and speak so others can follow.</h2>
            <p>
              From competitive debating to six years of university coaching, argument has been more than performance.
              It is a disciplined way to test assumptions, listen under pressure, and turn complexity into a case that
              moves a room.
            </p>
          </div>
          <div className="debate-proof-grid">
            <article>
              <UsersRound size={21} aria-hidden="true" />
              <span>2018–2024</span>
              <h3>Debate Coach</h3>
              <p>SP Jain University Singapore</p>
            </article>
            <article>
              <Trophy size={21} aria-hidden="true" />
              <span>Competitive record</span>
              <h3>Tournament winner</h3>
              <p>Regional and national debate tournaments</p>
            </article>
            <article>
              <Award size={21} aria-hidden="true" />
              <span>Student leadership</span>
              <h3>Vice President</h3>
              <p>SMU Debate Society</p>
            </article>
          </div>
        </div>
      </Reveal>

      <section className="film-section">
        <div className="section-shell film-layout">
          <div className="film-copy">
            <p className="eyebrow light">Written · directed · produced</p>
            <h2>A film for employee mental wellbeing.</h2>
            <p>
              A short film created to make space for a conversation that can be difficult to begin at work—and to remind
              people that empathy is a professional capability, not an aside.
            </p>
            <a
              className="button button-light"
              href="https://www.youtube.com/watch?v=10SKVUuWJwk&t=33s"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="film-frame">
            <iframe
              src="https://www.youtube.com/embed/10SKVUuWJwk?start=33&rel=0"
              title="Employee mental wellbeing film by Anirudh Dalmia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Reveal className="section-shell section-block volunteer-feature">
        <div>
          <p className="eyebrow">Community</p>
          <h2>Making contribution accessible—and worth celebrating.</h2>
          <p>
            From serving as a Halogen Foundation Charity Champion to hosting The Volunteer Switchboard’s tenth
            anniversary, community work has been an active part of the leadership practice.
          </p>
        </div>
        <img
          data-image-slot="leadership.volunteering"
          src="/assets/slots/leadership.volunteering.webp"
          alt="Anirudh Dalmia speaking at The Volunteer Switchboard anniversary"
          width="760"
          height="520"
        />
      </Reveal>
    </>
  );
}
