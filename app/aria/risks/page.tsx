import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Risks & mitigations",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const RISKS = [
  {
    title: "Platform development slips",
    detail: "The technical build takes longer than four months. Affects all Year 1 milestones.",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Year-1 senior hire is a precondition; Andreea full-time from month 1; platform stack is deliberately not exotic (Next.js, Postgres, pgvector, established LLM APIs). We ship v0 by month 1, v0.5 by month 2, v1 by month 7. Platform v0 is already running in our own demo.",
  },
  {
    title: "Fellow cohort underfilled",
    detail: "Fewer than 8 candidates pass Chemistry First + match against Creator teams.",
    likelihood: "Low",
    impact: "Medium",
    mitigation:
      "HFBAC's 10-year network of deep-tech talent plus Orbit's CDT access give us a wide funnel. We recruit 24+ for 8–12 places. Back-up sources include Oxford incubator alumni and the Cohort 1 partner network. HFBAC has been embedded at Shadow Robot for a decade — they know what UK deep-tech demand looks like.",
  },
  {
    title: "PD engagement falls below 2 hrs/month",
    detail: "A named Programme Director goes silent, or the engagement model breaks down in practice.",
    likelihood: "Medium",
    impact: "Medium",
    mitigation:
      "Named back-up PD per partnership. Quarterly review structure means engagement is concentrated, not continuous. If a PD genuinely disengages, we redirect to another opportunity space mid-Year-1 with ARIA's agreement. Engagement minimum and maximum stated explicitly in the contract.",
  },
  {
    title: "Open-source skill quality is unevaluated",
    detail: "The AI-in-Science reviewer's residual scepticism returns — 'where's the evidence the skills work?'",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Every skill ships with an evaluation rig as a release precondition. Published benchmarks compared to non-AI baselines. Adversarial review window for each skill release. The Year-1 senior hire owns release quality and signs every release.",
  },
  {
    title: "Subcontractor financial standing fails ARIA due diligence",
    detail: "Orbit-RRI (CLG) or SimplyBD (young Ltd) flagged on supplier financial resilience.",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Named substitution plan in the bid: AIA prime contractor absorbs cash-flow risk for subcontractors during ramp-up. Pre-emptive supply of management accounts to ARIA before contract. If a sub fails financial DD or withdraws, AIA absorbs the role with a named replacement within 30 days.",
  },
];

const SUBSTITUTION = [
  { name: "Orbit-RRI", fallback: "AIA absorbs Trusted Research + PAS 440 curriculum (Mike has Orbit's licence to deliver). Marina Jirotka named as ad-hoc adviser if entity withdrawal." },
  { name: "SimplyBD", fallback: "AIA absorbs nuclear vertical via existing UKAEA-adjacent network. Vertical Champion appointment accelerated." },
  { name: "HFBAC", fallback: "AIA partners with a named alternative recruitment specialist (working candidate: Talentful or Tribepad). Chemistry First methodology IP not portable, but core fellowship operations can be run." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Risks & mitigations"
        title={<>Five risks. Five named mitigations. One substitution plan.</>}
        lede="No bid this size has zero risk. The question is whether the risks are named, sized, mitigated, and contractually catered for. They are."
        meta="For procurement · contracts · CFO"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The risk register"
            title="Five named risks, ranked by impact."
          />

          <div className="space-y-4">
            {RISKS.map((r, i) => (
              <div key={r.title} className="card">
                <div className="md:flex gap-6 items-start">
                  <div className="md:w-1/4 mb-3 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle size={14} className="text-gable/40" />
                      <span className="text-[10px] uppercase tracking-wider text-gable/50">
                        Risk {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-base leading-snug mb-3">{r.title}</h3>
                    <div className="flex gap-1.5 mb-2">
                      <span className={`tag ${r.likelihood === "High" ? "tag-warn" : "tag-gable"}`}>L: {r.likelihood}</span>
                      <span className={`tag ${r.impact === "High" ? "tag-warn" : "tag-gable"}`}>I: {r.impact}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-[12px] text-gable/60 italic mb-3">{r.detail}</p>
                    <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-2">
                      Mitigation
                    </div>
                    <p className="text-sm text-gable/80 leading-relaxed">{r.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-turq mb-3">Substitution plan</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              If any sub fails, AIA absorbs the role within 30 days.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              ARIA&apos;s procurement and contracts function will check this.
              Each subcontractor lead has a named fallback path. AIA, as
              prime, holds the cash-flow risk and the substitution
              obligation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {SUBSTITUTION.map((s) => (
              <div key={s.name} className="card-dark">
                <ShieldCheck size={18} style={{ color: "#00FFBC" }} className="mb-2" />
                <h3 className="h-card text-base text-white mb-2">If {s.name} withdraws</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.fallback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/cost", label: "Cost & commercials" }}
        next={{ href: "/aria/governance", label: "Governance" }}
      />
    </>
  );
}
