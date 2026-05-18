import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { Briefcase, GraduationCap, Network } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "The Team" };
// Note: /team is indexed (public-facing). The bid framing is preserved but the page serves both audiences.

const AIA_TEAM = [
  {
    name: "Mike Chatterton",
    role: "Named bid lead · Founder, AI Accelerator",
    time: "70% Year 1",
    body: "Mike personally underwrites this bid. Founded AI Accelerator in 2024 after a career building digital adoption inside large organisations. Authored the AI Adoption Framework, Three-Track Leadership/Lab/Crowd model, Highest Tide governance methodology, and the Eleven AI Forces analysis — the intellectual backbone of the Morgan Sindall 23 April 2026 conference keynote to 100+ senior leaders.",
    track: "AIA clients include Virgin Red, Morgan Sindall (FTSE 250), Tokio Marine HCC, MJS Tax, Arrive/Parkopedia.",
  },
  {
    name: "Ross Pepperell",
    role: "Chief AI Officer",
    time: "50% Year 1, rising to 80% Year 2",
    body: "Platform technical lead and senior skill developer. Drives the technical bench credibility Aayush Chadha tests for: builds the agent harnesses, evaluation rigs, and reference implementations that ship with each skill.",
    track: "Owns the AI capability stack across AIA's enterprise engagements. Has shipped governance-by-competency in production at Virgin Red.",
  },
  {
    name: "Andreea Iaconi",
    role: "AI Technician",
    time: "100% (ramps from 1 day/week to full-time over Year 1)",
    body: "Platform build and open-source skill shipping. Owns the GitHub release operations and the technique-card-to-skill pipeline. The person Aayush Chadha will technically interrogate first.",
    track: "Already operating inside AIA's delivery, building and maintaining the platform v0 used in the demo.",
  },
  {
    name: "Jeremy Steer",
    role: "Chief Operating Officer",
    time: "30% Year 1",
    body: "Commercials, contracting, impact measurement, and procurement-facing accountability for the consortium. The named point of contact for ARIA's procurement and finance teams (Tammy Thomas-Brown, Olivia Donovan, Antonia Jenkinson).",
    track: "Runs AIA's operating cadence. Will own the quarterly progress reporting and the unit-economics modelling.",
  },
  {
    name: "Year-1 senior hire",
    role: "Head of Training Delivery",
    time: "100% from month 3",
    body: "Externally sourced (£80–110k), open role today. Owns the AI Practitioner training curriculum, the vertical onboarding flow, and the platform's learning content. Quality bar for every open-source skill release.",
    track: "A precondition for award. AIA can produce candidate bios at shortlist stage.",
  },
];

const OPERATORS = [
  {
    name: "Martin de Heaver",
    role: "Academic vertical onboarding · RRI · Trusted Research",
    org: "Orbit-RRI Ltd · Companies House 13059639 · CLG",
    time: "4–6 days/month",
    body: "Director of Orbit-RRI, embedded in the EPSRC Oxford AIMS CDT and the Heriot-Watt Applied Photonics CDT. Founder track on the public record: Ipsotek (Queen Mary computer vision spin-out, exited to Atos), GEOMii (Guildford smart-city pilot, InnovateUK), Safewise.ai (Oxford incubator). London Business School entrepreneurs programme judge/mentor since 2004.",
    role2: "Year 1 ownership: Trusted Research lens specification · responsible AI training curriculum for Fellows · institutional escalation path · ~4-6 academic-vertical onboardings",
  },
  {
    name: "Alix Johnstone-Morfoisse",
    role: "Nuclear vertical lead · industry engagement",
    org: "SimplyBD Ltd · Companies House 14896736 · UK Ltd",
    time: "4–6 days/month",
    body: "Founder and Director of SimplyBD, a nuclear-sector business-development consultancy. PhD on radiation effects on robots and electronic components, University of Birmingham. £3k 2021 Birmingham Engineers in Business Fellowship winner with 'Simply Radiation'. World Nuclear Association member.",
    role2: "Year 1 ownership: Nuclear / fusion vertical · UKAEA-adjacent network · cross-pollination event series convening · industry-facing case studies",
  },
  {
    name: "Helen Wingrove-Sanders",
    role: "AI Practitioner Fellowship operations",
    org: "HFBAC / TalentJet Group Ltd · UK Ltd",
    time: "4–6 days/month (rising to 6–10 in Y2/3)",
    body: "Founder of HFBAC. Author of Hire Ready (Wingrove Publishing, April 2026). Operates the Chemistry First recruitment methodology. 10-year embedded recruitment partnership with Shadow Robot Company — an existing ARIA-funded Creator. Declared with explicit Chinese-wall undertaking (no fellow placed at Shadow Robot under the ARIA contract).",
    role2: "Year 1 ownership: 8–12 fellowship placements · 90/180/270/365-day retention check-ins · Chemistry First Creator-team matching",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="04 · The team"
        title={<>One named founder. Three named operators. One accountable prime.</>}
        lede="Matt Clifford reads bids like an Entrepreneur First application — he wants one obsessed founder, not a steering committee. This bid is structured to pass that test. AIA Ltd is the single accountable contracting entity; Mike is named bid lead; three operators carry domain delivery scope with public track records."
        meta="Clifford · Fisher · Tammy Thomas-Brown"
      />

      {/* AIA CORE TEAM */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="AIA core delivery team"
            title="The team that ships the platform."
            lede="Five people inside AIA carry the platform, the skills, the commercials, and the impact reporting. None is being repurposed from another engagement — Mike is the named bid lead and personally underwrites the proposal."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {AIA_TEAM.map((p, i) => (
              <div key={p.name} className={`card ${i === 0 ? "border-t-4 !border-t-turq" : ""}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] uppercase tracking-wider text-gable/50">
                    AIA · #{i + 1}
                  </div>
                  <div className="tag tag-gable">{p.time}</div>
                </div>
                <h3 className="h-card text-xl mb-1">{p.name}</h3>
                <div className="text-sm text-gable/60 mb-3">{p.role}</div>
                <p className="text-sm text-gable/70 leading-relaxed mb-3">{p.body}</p>
                <div className="text-[12px] text-gable/60 leading-relaxed border-t border-gable/10 pt-3 mt-3">
                  <span className="text-[10px] uppercase tracking-wider text-gable/40 block mb-1">
                    Track record
                  </span>
                  {p.track}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIKE SPOTLIGHT */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="tag tag-on-dark-turq mb-3">Founder spotlight</span>
              <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4 text-white">
                Why Mike personally underwrites this.
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                The Activation Partners call rewards founder-led conviction over
                committee-led caution. Mike is named lead, founder of the prime,
                author of the methodology, and contracting signatory.
              </p>
            </div>
            <div className="md:col-span-8 space-y-3">
              <div className="card-dark">
                <Briefcase size={20} style={{ color: "#00FFBC" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">
                  Built AIA from zero to FTSE 250 work in 18 months
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  AIA was founded in 2024. By 2026 it has shipped: a live
                  governance-by-competency methodology with Virgin Red (launched
                  23 Feb 2026); a 6-month enablement programme with Morgan
                  Sindall (FTSE 250, confirmed 26 Feb 2026); ongoing
                  engagements with Tokio Marine HCC, MJS Tax, and Arrive /
                  Parkopedia.
                </p>
              </div>
              <div className="card-dark">
                <GraduationCap size={20} style={{ color: "#00FFBC" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">
                  Authored every layer of the methodology this bid runs on
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  AI Adoption Framework. Three-Track Leadership/Lab/Crowd
                  model. Highest Tide governance methodology. Eleven AI Forces
                  analysis (Morgan Sindall keynote, 23 April 2026). Not bought
                  in. Not licensed. Authored.
                </p>
              </div>
              <div className="card-dark">
                <Network size={20} style={{ color: "#00FFBC" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">
                  Built and runs the relationships behind every consortium name
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Mike sourced and qualified Martin de Heaver, Alix
                  Johnstone-Morfoisse, and Helen Wingrove-Sanders personally.
                  No agency intermediary. Each operator has met Mike face to
                  face and has agreed to subcontractor lead status under AIA
                  as prime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAMED OPERATORS */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Named subcontractor leads"
            title="Three operators. Three real organisations. Three real track records."
            lede="Each operator is named subcontractor lead in their domain. Each has signed up to the consortium with AIA as prime. Each has a public record we can stand behind."
          />

          <div className="space-y-4">
            {OPERATORS.map((p) => (
              <div key={p.name} className="card md:flex gap-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="h-card text-xl mb-2">{p.name}</h3>
                  <div className="text-sm text-gable/70 mb-2">{p.role}</div>
                  <div className="text-xs text-gable/50 font-mono mb-3">{p.org}</div>
                  <div className="tag tag-gable">{p.time}</div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-gable/70 leading-relaxed mb-3">{p.body}</p>
                  <div className="text-[12px] text-gable/60 leading-relaxed border-t border-gable/10 pt-3 mt-3">
                    <span className="text-[10px] uppercase tracking-wider text-turq-text font-semibold block mb-1">
                      Year 1 ownership
                    </span>
                    {p.role2}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3 flex-wrap">
            <Link href="/consortium" className="btn-ghost">
              See the consortium governance
            </Link>
            <Link href="/aria/governance" className="btn-ghost">
              Read the conflicts statement
            </Link>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/programme", label: "The Programme" }}
        next={{ href: "/consortium", label: "Consortium" }}
      />
    </>
  );
}
