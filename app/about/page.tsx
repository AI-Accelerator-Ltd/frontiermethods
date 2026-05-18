import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import { ArrowRight, BookOpen, Compass, Github, Globe2, Sparkles, Users2 } from "lucide-react";
import { SITE } from "@/lib/nav";

export const metadata = {
  title: "About Frontier Methods",
  description:
    "Why Frontier Methods exists, what we believe, and the AI Accelerator founder story behind it.",
};

const BELIEFS = [
  {
    title: "Techniques over tools",
    body: "The teaching unit is the technique, not the tool. A new model release can change what AI is useful for by a hundred times overnight. Techniques survive that change because they describe what the human is doing. They transfer across whatever model the researcher ends up running.",
  },
  {
    title: "Cross-vertical reuse is the highest-value move",
    body: "The strongest AI reuse consistently sits outside a researcher's home domain. We've watched voice transcription invented for stadium walkdowns become the standard for quantity surveying site visits. Same technique, two unrelated verticals. The platform exists to make those jumps deliberate.",
  },
  {
    title: "Governance attaches to the use case, not the data source",
    body: "Risk is about how a person uses what they already have. Even consumer AI can be used in ways that breach the EU AI Act if the user isn't competent. We govern by competency, not by data class. The governance assessment travels with the use case across labs, institutions, and external collaborators.",
  },
  {
    title: "Open-source by default for the operational layer",
    body: "Every operational skill ships open-source under permissive licence. The curated technique library is the platform's commercial value; the operational artefacts are public good. That boundary is clean, and it's the right shape for UK sovereign capability.",
  },
];

const STORY = [
  {
    when: "2024",
    title: "AI Accelerator founded",
    body: "Mike Chatterton founded AI Accelerator after a career building digital adoption inside large UK organisations. The thesis: the binding constraint on AI inside enterprises is not the model, it's the operating model.",
  },
  {
    when: "2025",
    title: "Highest Tide governance methodology shipped",
    body: "Built to handle the AI Act and the practical reality that most enterprise AI risk is about competency rather than data class. Now in production with Virgin Red, designed in dialogue with regulated industries.",
  },
  {
    when: "2026",
    title: "Frontier Methods launched as a UK public-good initiative",
    body: "What started as a commercial enterprise platform converts under public funding into UK research infrastructure — multi-tenant verticals, cross-tenant aggregated insight, open-source skills released under permissive licence. The thing AI Accelerator is already building, scaled to do what no commercial customer ever pays for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Frontier Methods"
        title={<>The platform AIA was already building — converted into UK public-good infrastructure.</>}
        lede="Frontier Methods is the publicly-funded extension of an enterprise platform AI Accelerator has been building for clients like Virgin Red, Morgan Sindall, and Tokio Marine HCC. What's commercial in private becomes public-good under public funding."
      />

      {/* THE STORY */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-turq mb-3">The story</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              Three steps to here.
            </h2>
          </div>

          <div className="space-y-4">
            {STORY.map((s, i) => (
              <div key={s.when} className="card md:flex gap-8">
                <div className="md:w-1/4 mb-3 md:mb-0">
                  <div className="text-2xl font-bold text-turq-text">{s.when}</div>
                  <div className="text-sm text-gable/50 mt-1">Step {i + 1}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="h-card text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-gable/70 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-turq mb-3">What we believe</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              Four convictions.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              These aren&apos;t marketing positions. They are the bets baked
              into how the platform actually works, and the lines the team
              defends when scope creeps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {BELIEFS.map((b, i) => (
              <div key={b.title} className="card">
                <div className="glyph mb-3">0{i + 1}</div>
                <h3 className="h-card text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gable/70 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PLATFORM CO-INVESTMENT */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <span className="tag tag-on-dark-turq mb-3">Why this works</span>
              <h2 className="h-section text-3xl md:text-4xl mt-3 mb-5 text-white">
                The platform exists. We just need to fund the network.
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-4">
                AI Accelerator already builds the commercial, per-client,
                white-labelled version of this platform. ARIA-style public
                funding converts the same asset into shared UK research
                infrastructure — multi-tenant verticals, cross-tenant
                aggregated insight, open-source skills releases.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                That moves the budget from &quot;build the platform&quot; to
                &quot;fund the network around it&quot; — the vertical leads,
                the champions, the events, the fellowship placements. Public
                funding does what commercial customers never will.
              </p>
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="card-dark">
                <Sparkles size={18} style={{ color: "#00FFBC" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">
                  Contributed in kind
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  The platform itself · ~1,000-use-case seed library ·
                  Highest Tide governance methodology · AI Adoption Framework
                  · Three-Track Leadership/Lab/Crowd model · Eleven AI Forces
                  analysis.
                </p>
              </div>
              <div className="card-dark">
                <Users2 size={18} style={{ color: "#00B1FF" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">
                  What public funding pays for
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Vertical extension · embedded AI Practitioner Fellows ·
                  named Programme Director partnerships · cross-pollination
                  event series · open-source skills release operations ·
                  impact measurement and reporting.
                </p>
              </div>
              <div className="card-dark">
                <Globe2 size={18} style={{ color: "#00FFBC" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">
                  Why public, not just commercial
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  No commercial customer pays for cross-tenant insight. The
                  most valuable thing the platform does — moving a technique
                  from one vertical into a completely unrelated one — only
                  happens under a public-good operating model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE TEAM TEASER */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="md:flex items-end justify-between mb-10 gap-8">
            <div className="max-w-3xl">
              <span className="tag tag-turq mb-3">The team</span>
              <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
                Founder-led. UK-built.
              </h2>
              <p className="text-lg text-gable/70 leading-relaxed">
                Frontier Methods is led by Mike Chatterton, founder of AI
                Accelerator. Domain delivery scope sits with three named
                operators — Orbit-RRI, SimplyBD, and HFBAC — each with a
                public track record.
              </p>
            </div>
            <Link href="/team" className="btn-primary shrink-0 mt-4 md:mt-0">
              Meet the team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <span className="tag tag-turq mb-3">Three ways in</span>
          <h2 className="h-section text-3xl md:text-5xl mt-3 mb-5">
            Where to go from here.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link href="/methodology" className="btn-primary">
              <Compass size={14} /> Walk the methods
            </Link>
            <Link href="/skills" className="btn-ghost">
              <Github size={14} /> Browse the skills
            </Link>
            <Link href="/contact" className="btn-ghost">
              <BookOpen size={14} /> Get in touch
            </Link>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/", label: "Home" }}
        next={{ href: "/team", label: "The Team" }}
      />
    </>
  );
}
