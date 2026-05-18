import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, PoundSterling, TrendingDown } from "lucide-react";

export const metadata = {
  title: "Cost & commercials",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const PACKAGES = [
  { id: "WP1", title: "Platform build & operation", lead: "AIA", y1: "£420k", y2: "£430k", y3: "£440k" },
  { id: "WP2", title: "Technique Library + vertical onboarding", lead: "AIA + Orbit", y1: "£480k", y2: "£560k", y3: "£560k" },
  { id: "WP3", title: "AI Practitioner Fellowship (8-12)", lead: "HFBAC", y1: "£820k", y2: "£950k", y3: "£980k" },
  { id: "WP4", title: "Highest Tide governance ops", lead: "AIA + Orbit", y1: "£180k", y2: "£200k", y3: "£200k" },
  { id: "WP5", title: "Open-source skills release ops", lead: "AIA", y1: "£280k", y2: "£330k", y3: "£330k" },
  { id: "WP6", title: "3 named PD partnerships", lead: "Mike + operators", y1: "£320k", y2: "£440k", y3: "£440k" },
  { id: "WP7", title: "Cross-pollination event series (4/yr)", lead: "AIA + SimplyBD", y1: "£180k", y2: "£200k", y3: "£200k" },
  { id: "WP8", title: "Impact, measurement, reporting", lead: "AIA + Jeremy Steer", y1: "£120k", y2: "£140k", y3: "£140k" },
];

const UNIT_ECONOMICS = [
  { metric: "Cost per Creator engaged", q1: "~£8.0k", q4: "~£3.0k", note: "Drops as the platform's recommendation engine refines and onboarding compounds." },
  { metric: "Cost per Fellow placement (fully loaded)", q1: "~£75k", q4: "~£75k", note: "Stable. HFBAC ops + Orbit-RRI training + platform-side support all included." },
  { metric: "Cost per open-source skill shipped", q1: "~£40k", q4: "~£15k", note: "Drops as templates mature and Fellow-co-authored skills come online." },
  { metric: "Cost per cross-pollination event", q1: "~£45k", q4: "~£45k", note: "Fully loaded — venue, hybrid production, travel, food, speaker honoraria, recording." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Cost & commercials"
        title={<>£10m over three years. Phase-gated. Worked unit economics.</>}
        lede="Built for the CFO's model. ARIA can pull at four named milestones. Marginal cost per vertical decreases as the platform compounds. Day rates harmonised across operators. Zero foreground IP claim."
        meta="For CFO · procurement · contracts"
      />

      {/* PHASE-GATED ENVELOPE */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Phase-gated envelope"
            title="£3m + £3.5m + £3.5m — each phase conditional."
            lede="Each phase has explicit go/no-go milestones. If Year 1 fails to demonstrate Creator value, ARIA does not commit to Year 2. No tail risk."
          />
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { y: "Year 1", c: "£3.0m", n: "Foundation · 6 verticals + 3 PD partnerships", colour: "turq", milestone: "Phase 2 trigger at M12" },
              { y: "Year 2", c: "£3.5m", n: "Scale · ~30 verticals, second fellowship cohort", colour: "dodger", milestone: "Conditional on Year 1 milestones" },
              { y: "Year 3", c: "£3.5m", n: "Maturity · scale toward ~100 verticals, open the platform", colour: "gable", milestone: "Conditional on Year 2 milestones" },
            ].map((p) => (
              <div key={p.y} className={`card border-l-4 !border-l-${p.colour}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold">{p.y}</span>
                  <PoundSterling size={16} className="text-gable/30" />
                </div>
                <div className="text-4xl font-bold mb-2">{p.c}</div>
                <p className="text-sm text-gable/70 leading-relaxed mb-3">{p.n}</p>
                <div className="text-[11px] text-turq-text font-semibold">{p.milestone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PACKAGE TABLE */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Eight work packages"
            title="A cost-sheet decomposition contracts can compare line by line."
            lede="Each work package corresponds to one of the eight operational components. Internally consistent: FTEs in the cost sheet match the named team in the bid. No work package without a corresponding narrative; no narrative without a corresponding line."
          />

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gable/10 text-left text-[10px] uppercase tracking-wider text-gable/50">
                  <th className="py-3 pr-4">WP</th>
                  <th className="py-3 pr-4">Title</th>
                  <th className="py-3 pr-4">Lead</th>
                  <th className="py-3 pr-4 text-right">Y1</th>
                  <th className="py-3 pr-4 text-right">Y2</th>
                  <th className="py-3 pr-4 text-right">Y3</th>
                </tr>
              </thead>
              <tbody>
                {PACKAGES.map((p) => (
                  <tr key={p.id} className="border-b border-gable/5">
                    <td className="py-3 pr-4 font-mono text-xs text-turq-text font-semibold">{p.id}</td>
                    <td className="py-3 pr-4 font-semibold">{p.title}</td>
                    <td className="py-3 pr-4 text-gable/70 text-xs">{p.lead}</td>
                    <td className="py-3 pr-4 text-right font-mono">{p.y1}</td>
                    <td className="py-3 pr-4 text-right font-mono text-gable/60">{p.y2}</td>
                    <td className="py-3 pr-4 text-right font-mono text-gable/60">{p.y3}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-4 pr-4"></td>
                  <td className="py-4 pr-4">Total per year</td>
                  <td className="py-4 pr-4"></td>
                  <td className="py-4 pr-4 text-right font-mono">£3.0m</td>
                  <td className="py-4 pr-4 text-right font-mono">£3.25m</td>
                  <td className="py-4 pr-4 text-right font-mono">£3.29m</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[11px] text-gable/40 mt-3">
              Indicative shape — the live cost-sheet PDF (v3) is in /aria/documents. Day rate harmonised at £1,600 for named-lead time; T&amp;M billed monthly in arrears.
            </p>
          </div>
        </div>
      </section>

      {/* UNIT ECONOMICS */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-turq mb-3">Unit economics</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              Marginal cost drops as the platform compounds.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              ARIA&apos;s CFO will model the unit economics. So have we. The
              marginal cost of vertical 80 is a fraction of the marginal cost
              of vertical 8 because AI-assisted onboarding does the heavy
              lifting. This is what makes scale to ~100 verticals credible at
              the published envelope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {UNIT_ECONOMICS.map((u) => (
              <div key={u.metric} className="card-dark">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown size={14} className="text-turq" />
                  <h3 className="font-semibold text-base text-white">{u.metric}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/5 rounded p-3">
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Q1</div>
                    <div className="text-xl font-bold text-white">{u.q1}</div>
                  </div>
                  <div className="bg-turq/10 rounded p-3">
                    <div className="text-[10px] uppercase tracking-wider text-turq mb-1">Q4 trend</div>
                    <div className="text-xl font-bold text-white">{u.q4}</div>
                  </div>
                </div>
                <p className="text-[12px] text-white/60 leading-relaxed">{u.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP & CO-INVESTMENT */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Co-investment"
            title="Skin in the game."
            lede="AIA contributes the platform, the seed library, and the methodology in kind. ARIA funding pays for the network around it. This signals the commitment ARIA's finance and operations function evaluates for."
          />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card border-l-4 !border-l-turq">
              <h3 className="h-card text-lg mb-3">AIA contributes in-kind</h3>
              <ul className="space-y-2">
                {["The platform itself (use case library, capture and triage workflow, governance layer, micro-learning, recommendation engine)","The ~1,000-use-case seed library","Highest Tide governance methodology (in production at Virgin Red)","AI Adoption Framework + Three-Track model","Eleven AI Forces analysis"].map(x => (
                  <li key={x} className="text-sm text-gable/70 flex gap-2 leading-relaxed">
                    <CheckCircle2 size={14} className="text-turq-text mt-0.5 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4 !border-l-dodger">
              <h3 className="h-card text-lg mb-3">ARIA funding pays for</h3>
              <ul className="space-y-2">
                {["Six founding verticals + scale path","8–12 AI Practitioner Fellow placements (Year 1)","Three named Programme Director partnerships","Cross-pollination event series (4 events/year)","Open-source skills release operations (30+ Year 1)","Impact measurement, reporting, governance review"].map(x => (
                  <li key={x} className="text-sm text-gable/70 flex gap-2 leading-relaxed">
                    <CheckCircle2 size={14} className="text-dodger mt-0.5 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 card bg-gable !text-white">
            <div className="text-[10px] uppercase tracking-wider text-turq font-semibold mb-2">
              IP commitment
            </div>
            <h3 className="h-card text-lg text-white mb-3">Zero foreground-IP claim by the consortium.</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Creators retain all foreground IP over outputs, prompts, model
              artefacts, and data. Open-source skills MIT-licensed. Platform,
              methodology, and seed library remain AIA-owned and contributed
              in kind. The boundary is clean: <strong className="text-white">operational artefacts open, curation and operating model commercial</strong>.
            </p>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/programme", label: "The Programme" }}
        next={{ href: "/aria/risks", label: "Risks" }}
      />
    </>
  );
}
