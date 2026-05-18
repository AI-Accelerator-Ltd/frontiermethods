import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, CalendarRange, CheckCircle2, Clock, Flag } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "The Programme",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const PHASES = [
  {
    year: "Year 1 · Foundation",
    cost: "£3m",
    headline: "Six founding verticals + three named Programme Director partnerships.",
    detail:
      "Platform live, seed library loaded, Highest Tide governance operational across all six verticals, first 8–12 AI Practitioner Fellow cohort placed, 30+ open-source skills released. Phase 1 ends with a go/no-go decision point ARIA's CFO can pull on. Phase 1 fails → ARIA does not commit Phase 2. No tail risk.",
    deliverables: [
      "Platform v1 live · 6 founding verticals",
      "30+ open-source skills released on public GitHub",
      "First fellowship cohort (8–12) placed",
      "Three PD partnerships running (Bramhavar, Dalrymple, one Cohort 2)",
      "4 cross-pollination events (London, Cambridge, Manchester, Oxford)",
      "Annual impact report published",
    ],
  },
  {
    year: "Year 2 · Scale",
    cost: "£3.5m",
    headline: "Scale to ~30 verticals using AI-assisted onboarding.",
    detail:
      "Conditional on Phase 1 milestones. Second fellowship cohort (12–18). Integrate DSIT's Sovereign AI Unit autonomous-labs grantees. Three more Programme Director partnerships. Aggregated cross-vertical insight published quarterly.",
    deliverables: [
      "~30 verticals operational",
      "Second fellowship cohort (12–18) placed",
      "Three additional PD partnerships",
      "Quarterly cross-vertical insight report (public)",
      "Year 2 open-source skill releases (50+)",
    ],
  },
  {
    year: "Year 3 · Maturity",
    cost: "£3.5m",
    headline: "Scale toward ~100 verticals. Open the platform.",
    detail:
      "Conditional on Phase 2 milestones. Platform opens to the wider UK research ecosystem under ARIA branding. UK Deep-Tech Talent Landscape report (HFBAC-led) published. Cross-vertical Technique Atlas (open-source) published. Begin transition planning for sustainability beyond ARIA funding.",
    deliverables: [
      "Scale toward ~100 verticals",
      "Third fellowship cohort (18–24)",
      "UK Deep-Tech Talent Landscape report",
      "Cross-vertical Technique Atlas (open-source)",
      "Platform opened to wider UK research ecosystem",
      "Year 3 impact report",
    ],
  },
];

const MONTHS = [
  { m: "Month 1 · Sep '26", title: "Stand-up", points: ["Contract commences", "Year-1 senior hire onboarded", "Platform v0 + first 100 seed use cases in private beta", "Bramhavar PD kick-off", "Fellow recruitment opens publicly", "Open-source GitHub org created"] },
  { m: "Month 2 · Oct '26", title: "First skills + PD #2", points: ["Open-source skills #1 (Peer Review) and #2 (Grant Writing) released", "Dalrymple PD kick-off", "Platform v0.5 — public Creator onboarding live", "First 30 use cases public", "Highest Tide operational"] },
  { m: "Month 3 · Nov '26", title: "First vertical + Q1 Event", points: ["Vertical 1 (Nuclear, SimplyBD-led) live with 50+ seed use cases", "Fellow shortlist (24 candidates for 8–12 places)", "Cross-pollination Event Q1 · London (AIA Design District)", "Open-source skill #3 (Living Documentation)"] },
  { m: "Month 4 · Dec '26", title: "Fellow matches + verticals 2, 3", points: ["8–12 Fellows matched to Creator teams", "Verticals 2 (Biomedical, Orbit-led) and 3 (Drug Discovery, Orbit-led) live", "Cohort 2 PD kick-off (Wang or Wurm)", "Open-source skill #4", "First quarterly progress report"] },
  { m: "Month 5 · Jan '27", title: "Fellow placements begin", points: ["All Fellows begin 12-month placements", "Orbit-RRI delivers 2-day Trusted Research + PAS 440 training", "Verticals 4 (Novel Materials) and 5 (Photonics/Quantum) live", "First Bramhavar quarterly review", "M3 go/no-go milestone reached"] },
  { m: "Month 6 · Feb '27", title: "All verticals live + Q2 Event", points: ["Vertical 6 (AI for Science Talent, HFBAC-led) live", "Cross-pollination Event Q2 · Cambridge", "Scientific Advisory Board established (3+ members)", "M6 milestone: 100+ skill downloads, all 6 verticals live"] },
  { m: "Month 7 · Mar '27", title: "Compounding", points: ["First Fellow-authored technique cards in library", "Platform v1 launched publicly", "First commercial enterprise picks up the open-source skills (crowding-in evidence)", "Open-source skills #6–8 released"] },
  { m: "Month 8 · Apr '27", title: "Mid-year inflexion", points: ["First cross-vertical pollination evidence: Materials Creator adopts a Drug Discovery technique", "Mid-year ARIA team check-in", "Open-source skills #9–12 released"] },
  { m: "Month 9 · May '27", title: "Q3 Event + scale prep", points: ["Cross-pollination Event Q3 · Manchester", "M9 milestone: demonstrable Creator value in 3+ named engagements", "Begin Year-2 Phase 2 planning", "Open-source skills #13–18 released"] },
  { m: "Month 10 · Jun '27", title: "Phase 2 case-building", points: ["Phase 2 business case prepared", "Open-source skills #19–22 released", "Fellow cohort half-way retention check-ins (HFBAC methodology)"] },
  { m: "Month 11 · Jul '27", title: "Year-end run-up", points: ["Phase 2 negotiation with ARIA", "Open-source skills #23–28 released", "Annual impact report drafted"] },
  { m: "Month 12 · Aug '27", title: "Year-end + Q4 Event", points: ["Cross-pollination Event Q4 · Oxford", "Annual impact report published (public-good)", "M12 milestone — Phase 2 trigger decision", "Open-source skills #29–32 — target exceeded"] },
];

const MILESTONES = [
  { id: "M3", title: "Three verticals live + three PDs onboarded", when: "End of Q1" },
  { id: "M6", title: "Six verticals live · first fellowship cohort placed · 100+ skill downloads", when: "End of Q2" },
  { id: "M9", title: "Demonstrable Creator-level value in 3+ named engagements (use case adoption, time-saved, or capability uplift evidenced)", when: "End of Q3" },
  { id: "M12", title: "30+ open-source skills released · first-year impact report · Phase 2 trigger decision point", when: "End of Year 1" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="03 · Programme"
        title={<>Three years, phase-gated.</>}
        lede="The trajectory is concentrated by design. Six founding verticals in Year 1 — not 100. Demonstrate Creator value, then scale. ARIA's CFO can pull at four named milestones."
      />

      {/* PHASES */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Phase-gated trajectory"
            title="£10m total. £3m, then £3.5m, then £3.5m — conditional."
          />

          <div className="grid lg:grid-cols-3 gap-4">
            {PHASES.map((p, i) => (
              <div
                key={p.year}
                className={`card ${i === 0 ? "border-l-4 !border-l-turq" : i === 1 ? "border-l-4 !border-l-dodger" : "border-l-4 !border-l-gable"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold">{p.year}</span>
                  <span className="text-2xl font-bold">{p.cost}</span>
                </div>
                <h3 className="h-card text-lg mb-3">{p.headline}</h3>
                <p className="text-sm text-gable/70 leading-relaxed mb-4">
                  {p.detail}
                </p>
                <div className="text-[10px] uppercase tracking-wider text-gable/40 mb-2 font-semibold">
                  Deliverables
                </div>
                <ul className="space-y-1.5">
                  {p.deliverables.map((d) => (
                    <li key={d} className="text-[13px] text-gable/70 leading-snug flex gap-2">
                      <CheckCircle2 size={14} className="text-turq-text mt-0.5 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GO / NO-GO MILESTONES */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-turq mb-3">For ARIA&apos;s CFO</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              Four go/no-go milestones in Year 1.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Each milestone is evidence-based, written into the contract, and
              gives ARIA the option to slow, change scope, or stop. No tail risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {MILESTONES.map((m) => (
              <div key={m.id} className="card-dark flex items-start gap-4">
                <div className="text-2xl font-bold" style={{ color: "#00FFBC" }}>{m.id}</div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                    {m.when}
                  </div>
                  <p className="text-sm text-white leading-relaxed">{m.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YEAR 1 MONTH-BY-MONTH */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Year 1 · month by month"
            title="The launch sequence."
            lede="Working backward from ARIA contract commencement on 1 September 2026."
          />

          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gable/15 hidden md:block" />
            <div className="space-y-4">
              {MONTHS.map((mo, i) => (
                <div key={mo.m} className="md:flex gap-6 md:pl-12 relative">
                  <div className="md:absolute md:left-0 top-2 flex items-center gap-2 mb-2 md:mb-0">
                    <div className="w-3 h-3 rounded-full bg-turq border-2 border-paper relative z-10" />
                  </div>
                  <div className="card flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold">
                        {mo.m}
                      </span>
                      <div className="h-px flex-1 bg-gable/10" />
                      <span className="text-[10px] text-gable/40">Step {i + 1} / 12</span>
                    </div>
                    <h3 className="h-card text-lg mb-3">{mo.title}</h3>
                    <ul className="space-y-1.5">
                      {mo.points.map((p) => (
                        <li key={p} className="text-[13px] text-gable/70 leading-relaxed flex gap-2">
                          <Clock size={13} className="text-gable/30 mt-1 shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/aria/programme-directors" className="btn-ghost">
              See the PD partnership detail <ArrowRight size={14} />
            </Link>
            <Link href="/aria/cost" className="btn-ghost">
              See the cost shape <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/platform", label: "Platform demo" }}
        next={{ href: "/team", label: "The Team" }}
      />
    </>
  );
}
