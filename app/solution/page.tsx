import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight, Database, Layers, Lock, Shapes, Sparkles, TestTube2, Users2, ScrollText } from "lucide-react";

export const metadata = {
  title: "The Solution",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const FIVE = [
  {
    icon: <Shapes size={20} />,
    title: "Cross-vertical technique surfacing",
    body: "A Creator describes their work in their own words. The platform returns three techniques from their vertical and three from deliberately adjacent and unrelated domains. Voice transcription invented for stadium walkdowns became the QS site-visit standard — same technique, two unrelated verticals. The platform makes that jump deliberate, not accidental.",
  },
  {
    icon: <ScrollText size={20} />,
    title: "Techniques over tools (the pedagogical bet)",
    body: "Model utility shifts daily; a new release can change what AI is useful for by 100× overnight. Teaching the current tool dates the curriculum in weeks. Teaching the technique survives because it describes what the human is doing. Fellows remain useful three years out because techniques transfer across whatever model they end up running.",
  },
  {
    icon: <Lock size={20} />,
    title: "Use cases as redacted shareable IP",
    body: "Use cases submit in redacted form by default. Contributors describe technique, workflow, value — without exposing data, customer, or IP. Unlocks the most defensive contributors: enterprise legal teams, regulated researchers, IP-sensitive labs. The library seeds from AIA's ~1,000 enterprise use cases as in-kind co-investment.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Governance by user competency",
    body: "Risk is about user competency, not data or tool access. Highest Tide attaches governance to the use case, not the data source. Five lenses score every use case. The lens with the highest tide sets the route. Assessments travel with the use case across labs, institutions, external collaborators.",
  },
  {
    icon: <TestTube2 size={20} />,
    title: "Micro-learning + feedback loops",
    body: "Five-minute videos paired with one downloadable skill each. Recommendation engine refines on observed platform behaviour. Every artefact carries a feedback prompt with plural value attribution: time saved, quality improved, new approach unlocked, knowledge captured that would otherwise have walked out of the door.",
  },
];

const COMPONENTS = [
  { id: "C1", title: "The Platform", lead: "AIA (Andreea + Ross + Year-1 senior hire)", year1: "Live with 6 verticals, seed library loaded, recommendation engine v1" },
  { id: "C2", title: "The Technique Library", lead: "AIA + Orbit-RRI", year1: "~1,000-use-case seed + 30+ new technique cards Year 1" },
  { id: "C3", title: "Open-Source Skills", lead: "AIA + Fellows", year1: "30+ skills shipped on public GitHub, ARIA co-branded" },
  { id: "C4", title: "Highest Tide Governance", lead: "AIA + Orbit-RRI", year1: "Live across all 6 verticals · UKRI Trusted Research aligned · PAS 440 anchored" },
  { id: "C5", title: "AI Practitioner Fellowship", lead: "HFBAC (Helen Wingrove-Sanders)", year1: "8–12 fellows recruited, placed and supported · 12-month placements" },
  { id: "C6", title: "Programme Director partnerships", lead: "Mike + named operators", year1: "3 named PD engagements live (Bramhavar, Dalrymple, one Cohort 2)" },
  { id: "C7", title: "Cross-Pollination Event Series", lead: "AIA + SimplyBD", year1: "4 hybrid events · London → Cambridge → Manchester → Oxford" },
  { id: "C8", title: "Impact & Measurement", lead: "AIA + Jeremy Steer", year1: "Quarterly progress reports + annual impact report to ARIA" },
];

const DATA_OBJECTS = [
  { name: "Technique", body: "A technology-agnostic pattern of AI use. The teaching unit. Example: 'voice-to-structured-report', 'lab-notebook AI assistant', 'cross-disciplinary application surfacing'." },
  { name: "Use Case", body: "A specific applied instance of a technique in a real workflow. Redacted by default. Example: 'QS site walkdowns — ~£40-50k saved per visit' (redacted from 'QS site walkdowns at Glasgow Royal Infirmary')." },
  { name: "Skill", body: "A downloadable, model-agnostic capability pack. Open-source by default from Year 1. Example: a Claude skill / Cursor rule / OpenAI assistant prompt scaffold + eval rig + README." },
  { name: "Lens", body: "A governance dimension applied to a use case. Five in operation: data confidentiality, ethical risk, sustainability, IP, Trusted Research alignment." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="02 · The Solution"
        title={<>A platform <em>plus</em> a delivery layer.</>}
        lede="If a Creator never opens the platform, they still benefit — a Fellow is sitting next to them, or their Programme Director has a quarterly engagement with the consortium. If a Creator just wants to self-serve, they can — the platform is enough on its own. The same operating model serves both. That dual mode is exactly what ARIA's RFP §3.1 asks for in two operational modes (working directly with ARIA + running alongside ARIA)."
      />

      {/* FIVE THINGS THE PLATFORM DOES */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="What the platform does"
            title="Five functions. One operating model."
            lede="Each function answers a real failure mode in current AI adoption efforts — corporate or academic. They compound. The system gets better as more Creators feed it."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FIVE.map((f, i) => (
              <div key={f.title} className="card card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="glyph">0{i + 1}</div>
                  <div className="text-turq-text">{f.icon}</div>
                </div>
                <h3 className="h-card text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gable/70 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EIGHT OPERATIONAL COMPONENTS */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Eight operational components"
            title="Each is a separately deliverable artefact."
            lede="Each component has its own milestone, owner, and KPI. They map cleanly onto the eight work packages in the cost sheet — so when ARIA's CFO models a kill-point, the units of work are already there."
          />

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gable/10 text-left text-[10px] uppercase tracking-wider text-gable/50">
                  <th className="py-3 pr-4">#</th>
                  <th className="py-3 pr-4">Component</th>
                  <th className="py-3 pr-4">Lead</th>
                  <th className="py-3 pr-4">Year 1 deliverable</th>
                </tr>
              </thead>
              <tbody>
                {COMPONENTS.map((c) => (
                  <tr key={c.id} className="border-b border-gable/5 align-top">
                    <td className="py-4 pr-4 font-mono text-xs text-turq-text font-semibold">{c.id}</td>
                    <td className="py-4 pr-4 font-semibold whitespace-nowrap">{c.title}</td>
                    <td className="py-4 pr-4 text-gable/70">{c.lead}</td>
                    <td className="py-4 pr-4 text-gable/70">{c.year1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DATA MODEL */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Data model"
            title="Four primary objects."
            lede="The whole system reduces to four object types. Relationships are simple: a Technique has many Use Cases, has many Skills, and is rated against many Lenses. Use Cases live inside Verticals. Lenses are global."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DATA_OBJECTS.map((o) => (
              <div key={o.name} className="card border-t-4 !border-t-dodger">
                <div className="flex items-center gap-3 mb-3">
                  <Database size={18} className="text-dodger" />
                  <span className="text-[10px] uppercase tracking-wider text-gable/50">Object</span>
                </div>
                <h3 className="h-card text-lg mb-2">{o.name}</h3>
                <p className="text-sm text-gable/70 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-INVESTMENT */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-turq mb-3">In-kind co-investment</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              The platform exists. ARIA funds the network around it.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              AIA contributes the platform, the seed library, the Highest Tide
              methodology, and the AI Adoption Framework as in-kind co-investment.
              ARIA pays for vertical extension, fellowship placements, the event
              series, the three Programme Director partnerships, the open-source
              skills release operations, and impact measurement. This is the
              <strong className="text-white"> skin-in-the-game signal</strong> ARIA evaluates for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card-dark">
              <Layers size={22} style={{ color: "#00FFBC" }} className="mb-3" />
              <h3 className="h-card text-lg text-white mb-3">
                AIA contributes (in-kind)
              </h3>
              <ul className="text-sm text-white/70 leading-relaxed space-y-1.5">
                <li>· The platform (use case library, capture and triage workflow, governance layer, micro-learning, recommendation engine)</li>
                <li>· The ~1,000-use-case seed library</li>
                <li>· Highest Tide governance methodology (already in production at Virgin Red)</li>
                <li>· AI Adoption Framework + Three-Track Leadership/Lab/Crowd model</li>
                <li>· Eleven AI Forces analysis</li>
              </ul>
            </div>
            <div className="card-dark">
              <Users2 size={22} style={{ color: "#00B1FF" }} className="mb-3" />
              <h3 className="h-card text-lg text-white mb-3">
                ARIA funds (the network)
              </h3>
              <ul className="text-sm text-white/70 leading-relaxed space-y-1.5">
                <li>· Six founding verticals + scale path</li>
                <li>· 8–12 AI Practitioner Fellow placements (Year 1)</li>
                <li>· Three named Programme Director partnerships</li>
                <li>· Cross-pollination event series (4 events/year)</li>
                <li>· Open-source skills release operations (30+ Year 1)</li>
                <li>· Impact measurement, reporting, governance review</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/aria/cost" className="btn-ghost-dark">
              See the costed envelope <ArrowRight size={14} />
            </Link>
            <Link href="/platform" className="btn-ghost-dark">
              See the platform working <Sparkles size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/why-aria", label: "Why ARIA, why now" }}
        next={{ href: "/methodology", label: "Methodology walkthrough" }}
      />
    </>
  );
}
