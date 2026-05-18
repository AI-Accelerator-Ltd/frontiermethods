import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { Lock, ShieldAlert, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Governance",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const LENSES = [
  { name: "Data confidentiality", question: "Is sensitive data exposed? To which models? Under what DPA?", aligns: "GDPR · UK DPA 2018", owner: "AIA governance reviewer" },
  { name: "Ethical risk", question: "Could the use case cause harm? Who decides? Where's the review board?", aligns: "EU AI Act Article 50 · ISO 42001", owner: "AIA governance reviewer · Orbit-RRI escalation" },
  { name: "Sustainability", question: "What's the compute cost? Carbon footprint? Energy budget?", aligns: "BSI PAS 440 · ARIA sustainability lens", owner: "Orbit-RRI" },
  { name: "IP", question: "Whose foreground IP is generated? Whose background IP is used?", aligns: "ARIA's founder-friendly default · no foreground IP claim", owner: "AIA governance reviewer" },
  { name: "Trusted Research", question: "Are export controls / dual-use considerations engaged?", aligns: "UKRI Trusted Research framework", owner: "Orbit-RRI" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Governance"
        title={<>Highest Tide: governance by user competency, not data class.</>}
        lede="Risk is about how a person uses what they already have. Even consumer AI can be used in EU AI Act-violating ways by an untrained user with legitimate access. The Highest Tide methodology attaches governance to the use case, not the data source — and the assessment travels with the use case across labs and institutions."
        meta="For CFO · procurement"
      />

      {/* THREE CLAIMS */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The methodology"
            title="Three claims Highest Tide makes."
          />
          <div className="grid md:grid-cols-3 gap-3">
            <div className="card">
              <div className="glyph mb-3">01</div>
              <h3 className="h-card text-base mb-2">Risk is about competency, not data or tool access</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                Even consumer AI can be used in EU AI Act-violating ways. Conversely, the most sensitive models can be safely used by competent operators. Governance attaches to the use case, not the data source.
              </p>
            </div>
            <div className="card">
              <div className="glyph mb-3">02</div>
              <h3 className="h-card text-base mb-2">A finite set of lenses can triage a near-infinite set of use cases</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                Five orthogonal lenses (data confidentiality, ethical risk, sustainability, IP, Trusted Research) score every use case. Each scores RAG. The lens with the highest tide sets the route.
              </p>
            </div>
            <div className="card">
              <div className="glyph mb-3">03</div>
              <h3 className="h-card text-base mb-2">The assessment travels with the use case</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                When a use case escalates from researcher self-serve to lab-group or institutional, the assessment carries forward. No re-bottling at every step. Auditable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LENSES */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The five lenses"
            title="What each lens covers, what it aligns to, who owns it."
          />
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gable/10 text-left text-[10px] uppercase tracking-wider text-gable/50">
                  <th className="py-3 pr-4">Lens</th>
                  <th className="py-3 pr-4">Question</th>
                  <th className="py-3 pr-4">Aligns to</th>
                  <th className="py-3 pr-4">Owner</th>
                </tr>
              </thead>
              <tbody>
                {LENSES.map((l) => (
                  <tr key={l.name} className="border-b border-gable/5 align-top">
                    <td className="py-4 pr-4 font-semibold whitespace-nowrap">{l.name}</td>
                    <td className="py-4 pr-4 text-gable/70 italic">{l.question}</td>
                    <td className="py-4 pr-4 text-gable/70 text-xs">{l.aligns}</td>
                    <td className="py-4 pr-4 text-gable/70 text-xs">{l.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-3">
            <div className="card text-center">
              <div className="text-3xl font-bold text-turq-text">80%+</div>
              <div className="text-xs text-gable/60 mt-1 leading-snug">Triage as self-serve · auto-approve</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-dodger">15-20%</div>
              <div className="text-xs text-gable/60 mt-1 leading-snug">Lab-group review · within 5 working days</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-gable">1-3%</div>
              <div className="text-xs text-gable/60 mt-1 leading-snug">Institutional review · monthly board</div>
            </div>
          </div>
        </div>
      </section>

      {/* IP */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-turq mb-3">IP commitment</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              Zero foreground-IP claim by the consortium.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              ARIA&apos;s published no-foreground-IP policy was authored
              inside its finance and operations function. Our IP terms
              operationalise it visibly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="card-dark">
              <ShieldCheck size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-2">Creators retain all foreground IP</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Over outputs, prompts, model artefacts, and data. No
                consortium claim. No step-in rights. No equity in spinouts.
              </p>
            </div>
            <div className="card-dark">
              <ShieldCheck size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-2">Open-source skills MIT-licensed</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Released under MIT licence. ARIA-co-branded. Any UK research
                team funded by anyone can pick them up and apply.
              </p>
            </div>
            <div className="card-dark">
              <ShieldCheck size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-2">Platform IP stays AIA-owned</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                The platform, the technique taxonomy, the seed library, and
                the Highest Tide methodology are AIA&apos;s in-kind
                contribution. ARIA gets full operational use; no licence fees.
              </p>
            </div>
            <div className="card-dark">
              <ShieldCheck size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-2">No ongoing licence implications</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Year 3 transition planning includes a published path to
                sustainability beyond ARIA funding. ARIA is not locked into
                ongoing licence fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONFLICTS */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Declared conflicts"
            title="The Shadow Robot Chinese-wall."
            lede="One material relationship declared up-front. The Shadow Robot CEO has acknowledged and supported HFBAC's participation in the consortium."
          />

          <div className="card border-l-4 !border-l-yellow-400">
            <div className="md:flex gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <ShieldAlert size={22} className="text-yellow-600 mb-3" />
                <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                  Declared relationship
                </div>
                <h3 className="font-bold text-base leading-snug">HFBAC × Shadow Robot Company</h3>
                <p className="text-xs text-gable/60 mt-2">10-year embedded recruitment partnership. Shadow Robot is an existing ARIA-funded Creator.</p>
              </div>
              <div className="md:w-2/3 space-y-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">Chinese-wall undertaking</div>
                  <p className="text-sm text-gable/80 leading-relaxed">No Fellow placed at Shadow Robot Company under the ARIA-funded contract. Helen leads fellowship recruitment for the consortium; her commercial Shadow Robot relationship continues entirely outside ARIA scope, with no cross-subsidisation.</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">Contractual treatment</div>
                  <p className="text-sm text-gable/80 leading-relaxed">Documented as a Section 9 declaration in the bid. Shadow Robot CEO acknowledgement on file. Auditable separation of HFBAC's ARIA-funded work from its Shadow Robot commercial work.</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">Why we still declare</div>
                  <p className="text-sm text-gable/80 leading-relaxed">Because Helen&apos;s decade at Shadow Robot is also the strongest piece of evidence in this bid — HFBAC&apos;s recruitment methodology is proven inside an ARIA Creator team. We disclose the relationship and the wall in the same breath.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/risks", label: "Risks" }}
        next={{ href: "/aria/open-source", label: "Open-source commitment" }}
      />
    </>
  );
}
