import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { Building2, FileCheck, Network } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Consortium",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const PARTNERS = [
  {
    org: "AI Accelerator Limited",
    role: "Prime contractor · lead applicant",
    legal: "UK Ltd · Companies House (London) · founded 2024",
    address: "2 Appleby Yard, Soames Walk, Design District, London SE10 0BJ",
    body: "Five-person AI adoption consultancy. Three-pillar offering (Advise / Enable / Accelerate) on a shared platform. Authors of the AI Adoption Framework, Highest Tide governance methodology, Three-Track Leadership/Lab/Crowd model, and Eleven AI Forces analysis. Contributes the platform, the seed library, and the methodology in-kind.",
    duties: ["Platform build and operation", "Highest Tide governance methodology", "Open-source skills release operations", "Programme Director relationship management", "Cost-sheet contracting and ARIA-facing reporting", "Single accountable counterparty for staged payments"],
  },
  {
    org: "Orbit-RRI Ltd",
    role: "Subcontractor · academic vertical & RRI lead",
    legal: "Private CLG · Companies House 13059639 · founded 2020",
    address: "3a The Woodstock Accountancy Practice, Market Place, Woodstock, Oxfordshire OX20 1SY",
    body: "Responsible Research and Innovation consultancy. Born out of the EPSRC-funded ORBIT project (2017–2022), jointly hosted by Oxford and De Montfort. Members include Oxford and De Montfort universities. Trains directly to BSI PAS 440 and UKRI Trusted Research. Embedded in the EPSRC Oxford AIMS CDT and Heriot-Watt Applied Photonics CDT.",
    duties: ["Trusted Research lens definition + curriculum", "PAS 440 alignment", "Responsible-AI training for Fellow cohorts", "Academic vertical onboarding", "Institutional escalation path"],
  },
  {
    org: "SimplyBD Ltd",
    role: "Subcontractor · nuclear vertical & industry-engagement lead",
    legal: "UK Ltd · Companies House 14896736 · founded May 2023",
    address: "Registered: 39/43 Bridge Street, Swinton, Mexborough S64 8AP (operating: London + remote)",
    body: "Nuclear-sector business-development consultancy. World Nuclear Association member. UKAEA industry directory listed. Eight named clients including Ice9 Robotics, Artelia Nuclear, WNTI, Chirton Engineering. Founder Alix Johnstone-Morfoisse holds a PhD on radiation effects on robots and electronic components, University of Birmingham.",
    duties: ["Nuclear / fusion founding vertical", "Cross-pollination event convening", "Industry-side use case sourcing", "UKAEA-adjacent network access"],
  },
  {
    org: "HFBAC · TalentJet Group Ltd",
    role: "Subcontractor · fellowship operations lead",
    legal: "UK Ltd · TalentJet Group",
    address: "UK · operating from founder's base",
    body: "Helen Wingrove-Sanders's specialist talent practice for deep-tech and AI hiring. Chemistry First recruitment methodology applied for a decade. 10-year embedded recruitment partnership with Shadow Robot Company — an existing ARIA-funded Creator. Author of Hire Ready (April 2026).",
    duties: ["AI Practitioner Fellowship recruitment + placement", "Chemistry First matching between Fellow and Creator team", "90/180/270/365-day retention check-ins", "UK Deep-Tech Talent Landscape report (Year 3)"],
    note: "Declared conflict: 10-year Shadow Robot embed. Chinese-wall undertaking — no Fellow placed at Shadow Robot under the ARIA contract. Recruitment outside the ARIA contract runs entirely separately with no cross-subsidisation. See /governance.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="05 · Consortium"
        title={<>Clean prime/sub structure. One contracting entity.</>}
        lede="Tammy Thomas-Brown will read for a named legal prime, named back-to-back flow-down terms, clean conflicts handling, and supplier resilience. This page is structured exactly for that read."
        meta="Tammy · Olivia · Antonia"
      />

      {/* CONSORTIUM DIAGRAM */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The shape"
            title="ARIA contracts AIA. AIA contracts everyone else."
            lede="One named legal prime carries the contract and the cash-flow risk. Three subcontractor leads are named on back-to-back terms harmonised on day rate and IP."
          />

          <div className="card">
            <div className="bg-gable text-white rounded-lg p-6 mb-6 max-w-md mx-auto text-center">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                Funder
              </div>
              <div className="font-bold text-lg">ARIA · DSIT</div>
              <div className="text-white/40 text-xs">UK Government R&amp;D funder</div>
            </div>

            <div className="h-6 w-px bg-gable/20 mx-auto" />

            <div className="bg-gable-deep text-white rounded-lg p-6 max-w-md mx-auto text-center mb-6 relative">
              <div className="text-[10px] uppercase tracking-wider text-turq mb-1">
                Prime contractor
              </div>
              <div className="font-bold text-lg">AI Accelerator Limited</div>
              <div className="text-white/40 text-xs">UK Ltd · Mike Chatterton, accountable lead</div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gable-deep rotate-45" />
            </div>

            <div className="h-6 w-px bg-gable/20 mx-auto" />

            <div className="text-[10px] uppercase tracking-wider text-gable/40 text-center mb-3">
              Back-to-back subcontractor leads
            </div>

            <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {[
                { name: "Orbit-RRI Ltd", role: "Academic / RRI / Trusted Research", colour: "#00B1FF" },
                { name: "SimplyBD Ltd", role: "Nuclear / industry / convening", colour: "#00B1FF" },
                { name: "HFBAC · TalentJet", role: "Fellowship operations", colour: "#00B1FF" },
              ].map((s) => (
                <div key={s.name} className="rounded-lg border border-gable/20 p-4 text-center bg-paper">
                  <div className="text-xs font-mono mb-1" style={{ color: s.colour }}>
                    Sub
                  </div>
                  <div className="font-bold text-sm">{s.name}</div>
                  <div className="text-gable/60 text-xs mt-1">{s.role}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-gable/70">
              <div className="flex items-start gap-2">
                <FileCheck size={16} className="text-turq-text mt-0.5 shrink-0" />
                <div>
                  <strong className="text-gable">Single accountable counterparty.</strong> ARIA contracts AIA. AIA carries cash-flow risk and absorbs staged-payment timing for the subcontractors.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileCheck size={16} className="text-turq-text mt-0.5 shrink-0" />
                <div>
                  <strong className="text-gable">Back-to-back terms.</strong> Each sub contracts on harmonised day rate (£1,600 named-lead, see /cost) and IP terms identical to ARIA &lt;&gt; AIA.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileCheck size={16} className="text-turq-text mt-0.5 shrink-0" />
                <div>
                  <strong className="text-gable">Substitution plan declared.</strong> If a sub fails financial due diligence or withdraws, AIA absorbs the role with a named replacement within 30 days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PARTNERS */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The four organisations"
            title="Legal entities, registered addresses, and what each does."
            lede="No mystery, no marketing-only entities. Companies House numbers and registered offices on the record."
          />

          <div className="space-y-4">
            {PARTNERS.map((p, i) => (
              <div key={p.org} className={`card ${i === 0 ? "border-l-4 !border-l-turq" : ""}`}>
                <div className="md:flex gap-6 items-start">
                  <div className="md:w-1/3 mb-3 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={16} className="text-gable/40" />
                      <span className="text-[10px] uppercase tracking-wider text-gable/50">
                        {p.role}
                      </span>
                    </div>
                    <h3 className="h-card text-xl mb-1">{p.org}</h3>
                    <div className="text-xs font-mono text-gable/60 mb-2">{p.legal}</div>
                    <div className="text-xs text-gable/50 leading-relaxed">{p.address}</div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm text-gable/70 leading-relaxed mb-3">{p.body}</p>
                    <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">
                      Year 1 duties
                    </div>
                    <ul className="space-y-1">
                      {p.duties.map((d) => (
                        <li key={d} className="text-[13px] text-gable/70 flex gap-2">
                          <Network size={12} className="text-gable/30 mt-1 shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>
                    {p.note && (
                      <div className="mt-3 p-3 bg-yellow-50 border-l-2 border-yellow-400 text-[12px] text-gable/70 leading-relaxed rounded-r">
                        <strong className="text-gable">Declared conflict:</strong> {p.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3 flex-wrap">
            <Link href="/team" className="btn-ghost">
              Meet the people
            </Link>
            <Link href="/aria/governance" className="btn-ghost">
              Read the conflicts &amp; IP statement
            </Link>
            <Link href="/aria/cost" className="btn-ghost">
              See the cost shape
            </Link>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/team", label: "The Team" }}
        next={{ href: "/evidence", label: "Evidence" }}
      />
    </>
  );
}
