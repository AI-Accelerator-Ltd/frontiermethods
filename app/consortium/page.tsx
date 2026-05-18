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
        lede="ARIA's procurement and contracts function will read for a named legal prime, named back-to-back flow-down terms, clean conflicts handling, and supplier resilience. This page is structured exactly for that read."
        meta="Procurement · contracts · CFO"
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
            <svg
              viewBox="0 0 900 520"
              className="w-full h-auto max-w-4xl mx-auto"
              role="img"
              aria-label="Consortium contracting structure: ARIA contracts AIA as prime; AIA contracts Orbit-RRI, SimplyBD, and HFBAC on back-to-back terms."
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill="rgba(27,47,60,0.35)" />
                </marker>
                <marker
                  id="arrowhead-turq"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill="#00B1FF" />
                </marker>
              </defs>

              {/* ARIA box */}
              <g>
                <rect
                  x="320"
                  y="20"
                  width="260"
                  height="70"
                  rx="10"
                  fill="#1B2F3C"
                />
                <text
                  x="450"
                  y="42"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  FUNDER
                </text>
                <text
                  x="450"
                  y="63"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="700"
                >
                  ARIA · DSIT
                </text>
                <text
                  x="450"
                  y="80"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="11"
                >
                  UK government R&amp;D funder
                </text>
              </g>

              {/* ARIA → AIA contract line */}
              <line
                x1="450"
                y1="90"
                x2="450"
                y2="150"
                stroke="#00B1FF"
                strokeWidth="2"
                markerEnd="url(#arrowhead-turq)"
              />
              <text
                x="460"
                y="123"
                fill="#0080BA"
                fontSize="10"
                fontWeight="600"
              >
                Prime contract
              </text>

              {/* AIA box */}
              <g>
                <rect
                  x="280"
                  y="155"
                  width="340"
                  height="90"
                  rx="10"
                  fill="#0E1A23"
                  stroke="#00FFBC"
                  strokeWidth="2"
                />
                <text
                  x="450"
                  y="180"
                  textAnchor="middle"
                  fill="#00FFBC"
                  fontSize="9"
                  fontWeight="700"
                  letterSpacing="1.5"
                >
                  PRIME CONTRACTOR · ACCOUNTABLE LEAD
                </text>
                <text
                  x="450"
                  y="206"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="700"
                >
                  AI Accelerator Limited
                </text>
                <text
                  x="450"
                  y="226"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.55)"
                  fontSize="11"
                >
                  UK Ltd · London · Mike Chatterton, founder
                </text>
              </g>

              {/* Branching lines AIA → 3 subs */}
              <path
                d="M450 245 L450 290 L170 290 L170 340"
                stroke="rgba(27,47,60,0.4)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M450 245 L450 340"
                stroke="rgba(27,47,60,0.4)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <path
                d="M450 245 L450 290 L730 290 L730 340"
                stroke="rgba(27,47,60,0.4)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <text
                x="455"
                y="278"
                fill="rgba(27,47,60,0.5)"
                fontSize="10"
                fontWeight="600"
              >
                Back-to-back subcontracts
              </text>

              {/* Sub 1 — Orbit */}
              <g>
                <rect
                  x="65"
                  y="345"
                  width="210"
                  height="85"
                  rx="8"
                  fill="white"
                  stroke="rgba(27,47,60,0.2)"
                />
                <rect x="65" y="345" width="4" height="85" fill="#00B1FF" />
                <text
                  x="170"
                  y="370"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.5)"
                  fontSize="8"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  SUBCONTRACTOR LEAD
                </text>
                <text
                  x="170"
                  y="392"
                  textAnchor="middle"
                  fill="#1B2F3C"
                  fontSize="15"
                  fontWeight="700"
                >
                  Orbit-RRI Ltd
                </text>
                <text
                  x="170"
                  y="410"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.6)"
                  fontSize="11"
                >
                  Academic / RRI /
                </text>
                <text
                  x="170"
                  y="423"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.6)"
                  fontSize="11"
                >
                  Trusted Research
                </text>
              </g>

              {/* Sub 2 — SimplyBD */}
              <g>
                <rect
                  x="345"
                  y="345"
                  width="210"
                  height="85"
                  rx="8"
                  fill="white"
                  stroke="rgba(27,47,60,0.2)"
                />
                <rect x="345" y="345" width="4" height="85" fill="#00B1FF" />
                <text
                  x="450"
                  y="370"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.5)"
                  fontSize="8"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  SUBCONTRACTOR LEAD
                </text>
                <text
                  x="450"
                  y="392"
                  textAnchor="middle"
                  fill="#1B2F3C"
                  fontSize="15"
                  fontWeight="700"
                >
                  SimplyBD Ltd
                </text>
                <text
                  x="450"
                  y="410"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.6)"
                  fontSize="11"
                >
                  Nuclear / industry /
                </text>
                <text
                  x="450"
                  y="423"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.6)"
                  fontSize="11"
                >
                  convening
                </text>
              </g>

              {/* Sub 3 — HFBAC */}
              <g>
                <rect
                  x="625"
                  y="345"
                  width="210"
                  height="85"
                  rx="8"
                  fill="white"
                  stroke="rgba(27,47,60,0.2)"
                />
                <rect x="625" y="345" width="4" height="85" fill="#00B1FF" />
                <text
                  x="730"
                  y="370"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.5)"
                  fontSize="8"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  SUBCONTRACTOR LEAD
                </text>
                <text
                  x="730"
                  y="392"
                  textAnchor="middle"
                  fill="#1B2F3C"
                  fontSize="15"
                  fontWeight="700"
                >
                  HFBAC · TalentJet
                </text>
                <text
                  x="730"
                  y="410"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.6)"
                  fontSize="11"
                >
                  Fellowship operations
                </text>
                <text
                  x="730"
                  y="423"
                  textAnchor="middle"
                  fill="rgba(27,47,60,0.6)"
                  fontSize="11"
                >
                  Chemistry First
                </text>
              </g>

              {/* Open source outflow arrow */}
              <path
                d="M620 200 L820 200"
                stroke="#00FFBC"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead-turq)"
              />
              <text
                x="720"
                y="190"
                textAnchor="middle"
                fill="#007A5E"
                fontSize="10"
                fontWeight="700"
                letterSpacing="0.5"
              >
                Open-source skills · MIT
              </text>
              <text
                x="720"
                y="215"
                textAnchor="middle"
                fill="rgba(0, 122, 94, 0.7)"
                fontSize="10"
              >
                to any UK research team
              </text>

              {/* Co-investment annotation */}
              <text
                x="80"
                y="200"
                fill="rgba(27,47,60,0.5)"
                fontSize="10"
                fontWeight="600"
              >
                In-kind from AIA:
              </text>
              <text x="80" y="215" fill="rgba(27,47,60,0.6)" fontSize="10">
                · Platform
              </text>
              <text x="80" y="228" fill="rgba(27,47,60,0.6)" fontSize="10">
                · ~1,000 use cases
              </text>
              <text x="80" y="241" fill="rgba(27,47,60,0.6)" fontSize="10">
                · Highest Tide methodology
              </text>

              {/* Year 1 envelope label */}
              <g>
                <rect
                  x="370"
                  y="465"
                  width="160"
                  height="32"
                  rx="16"
                  fill="rgba(0, 122, 94, 0.10)"
                />
                <text
                  x="450"
                  y="485"
                  textAnchor="middle"
                  fill="#007A5E"
                  fontSize="11"
                  fontWeight="700"
                >
                  £3m · Year 1 envelope · phase-gated
                </text>
              </g>
            </svg>

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
