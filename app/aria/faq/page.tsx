"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";

type Faq = {
  lens: string;
  category: "why" | "technical" | "commercial" | "delivery";
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    lens: "Counterfactual",
    category: "why",
    q: "Would this catalyse activity that wouldn't happen otherwise?",
    a: "Yes. AIA is building the commercial version of this platform for individual enterprises today. The shared, public-good UK platform with cross-tenant insight — where a technique discovered in fusion can travel into drug discovery — is something no commercial customer ever pays for. ARIA is the only possible funder of that shape. The platform also produces UK-attributable open-source skills available to any UK research team funded by any funder, which directly addresses the wider ecosystem additionality test.",
  },
  {
    lens: "Differentiation from Cohort 1",
    category: "why",
    q: "How is this different from Renaissance Philanthropy, Pillar VC, Convergent Research, etc?",
    a: "Cohort 1 contains world-class translators of frontier R&D into ventures and talent. None of them is an enablement layer. Pillar VC's Encode places fellows but is VC-anchored and US-headquartered. Renaissance Philanthropy builds new R&D org types. Convergent Research pioneers the FRO model. Frontier Methods plugs the missing enablement layer: making AI usable inside the labs ARIA has already funded. We complement Cohort 1; we don't compete with them.",
  },
  {
    lens: "AI substance",
    category: "technical",
    q: "Where's the AI capability, not just the change-management?",
    a: "Three places. (1) 30+ open-source AI skills shipped Year 1, each with an evaluation rig. The first one (peer-review-pre-check) is on GitHub today. (2) Embedded AI Practitioner Fellows inside Creator teams, 3–4 days/week at the bench. (3) Three named Programme Director partnerships co-designing technique cards in their opportunity spaces — Scaling Compute (Bramhavar), Safeguarded AI (Dalrymple), and one Cohort 2 PD locked by 31 August 2026.",
  },
  {
    lens: "Lab integration",
    category: "technical",
    q: "Have you ever actually deployed an AI system into a lab?",
    a: "AIA's enterprise track record is in regulated and operationally-complex environments (Virgin Red, Morgan Sindall, Tokio Marine HCC) rather than wet labs. HFBAC's 10-year embed at Shadow Robot Company gives the consortium an inside view of an ARIA-funded Creator team's working pattern. Year 1 places 8–12 Fellows directly inside Creator labs. We are honest about the gap and pair the platform with embedded operators specifically because the lab integration story has to be earned, not claimed.",
  },
  {
    lens: "Technical surprise",
    category: "technical",
    q: "Where is the technical surprise? Could this read as adoption coaching dressed up?",
    a: "The technical surprise is that governance by user competency — Highest Tide — produces a finite, auditable lens-set that triages a near-infinite use-case space. It's the operational answer to the EU AI Act in research contexts. The open-source skill releases compound a UK-built capability stack visible on GitHub, not on a slide. And the platform's cross-tenant insight architecture is structurally invisible to commercial AI providers, who optimise for single-tenant value.",
  },
  {
    lens: "Concentration vs spread",
    category: "technical",
    q: "Why not 8–10 deep partnerships rather than 100 verticals?",
    a: "Year 1 IS the concentrated phase: 6 founding verticals + 3 named PD partnerships. Phase 2 and 3 only scale conditionally on demonstrated Year 1 value, gated on milestones the ARIA CFO can pull. We share the DARPA conviction that concentrated bets beat portfolio diversification — Phase 1 is exactly that. Scale beyond Phase 1 is conditional, not promised.",
  },
  {
    lens: "Unit economics",
    category: "commercial",
    q: "Do the numbers work?",
    a: "Year 1 £3m across 8 work packages. Worked unit economics published on /aria/cost. Cost per Creator engaged drops from ~£8k Q1 to ~£3k Q4 as the platform's recommendation engine refines and onboarding compounds. Cost per Fellow placement stable at ~£75k fully loaded. Cost per skill shipped drops from ~£40k to ~£15k as templates mature. Year 2 and 3 are conditional on Year 1 milestones, so the £10m total is not a commitment ARIA makes upfront.",
  },
  {
    lens: "IP & conflicts",
    category: "commercial",
    q: "What's the IP position? What about HFBAC's Shadow Robot conflict?",
    a: "Zero foreground IP claim by the consortium. Creators retain everything. Open-source skills MIT-licensed. Platform, methodology, and seed library remain AIA-owned and contributed in kind — no licence-fee implications for ARIA. HFBAC's 10-year Shadow Robot embed is declared as a Section 9 conflict with an explicit Chinese-wall: no Fellow placed at Shadow Robot under the ARIA contract; her commercial Shadow Robot work continues outside ARIA scope with no cross-subsidisation.",
  },
  {
    lens: "UK economic benefit",
    category: "why",
    q: "What's the UK economic-benefit story?",
    a: "UK-domiciled prime (AIA Ltd, London). UK-resident staff. UK-only delivery (RFP requirement). UK-resident named operators (Orbit-RRI in Oxford/De Montfort, SimplyBD UK Ltd, HFBAC UK Ltd). Open-source UK outputs from Year 1. Fellows placed in UK Creator teams. The April 2025 £50m-to-US-firms criticism is answered cleanly: every pound goes to UK organisations and produces UK-owned public-good outputs.",
  },
  {
    lens: "Founder quality",
    category: "delivery",
    q: "Where's the named accountable founder?",
    a: "Mike Chatterton, named bid lead, founder of AI Accelerator, author of every layer of the methodology this bid runs on. Personally underwrites the proposal. AIA is the single accountable contracting entity. Three named operators (Martin de Heaver, Alix Johnstone-Morfoisse, Helen Wingrove-Sanders) carry domain delivery scope. No steering committee. The bid is structured for EF-style underwriting.",
  },
  {
    lens: "Procurement defensibility",
    category: "commercial",
    q: "Is the consortium structure clean enough to contract?",
    a: "One named legal prime (AIA Ltd, UK Ltd, London). Three subcontractor leads on back-to-back terms harmonised on day rate (£1,600 named-lead) and IP terms. Substitution plan named: if any sub fails financial DD or withdraws, AIA absorbs the role with a named replacement within 30 days. Modern Slavery, GDPR, infosec, Trusted Research all addressed in the bid annex. Cost line per work package, not blended.",
  },
  {
    lens: "Clause-level clarity",
    category: "commercial",
    q: "Is the bid internally consistent?",
    a: "FTEs in the cost sheet match the named team in the bid. Eight work packages in the narrative match eight cost lines. Day rates harmonised across the consortium (£1,600 named-lead). Social value / sustainability statement specific to this engagement, not boilerplate (Orbit-RRI delivers PAS 440 sustainability lens). Single point of contact for ARIA contracting: Jeremy Steer (COO, AIA).",
  },
  {
    lens: "Academic credibility",
    category: "technical",
    q: "Where are the academic relationships?",
    a: "Orbit-RRI is embedded in two EPSRC CDTs (Oxford AIMS, Heriot-Watt Applied Photonics) with named relationships into Surrey, Nottingham, De Montfort, Imperial via H2020/SHERPA. Martin's founder track (Ipsotek, GEOMii, Safewise) sits inside academic translation. Scientific Advisory Board target: Marina Jirotka (Orbit's founding academic), a Manchester nanomaterials network member, a Cohort 1 partner alumnus, and a senior UKRI/Royal Society figure. Established by month 6.",
  },
  {
    lens: "Creator value, first quarter",
    category: "delivery",
    q: "What would Frontier Methods do for my Creators in my space in my first quarter?",
    a: "First 90 days mapped per PD partnership (see /aria/programme-directors). Week 1: we read your opportunity space document end-to-end and quote it back. Week 3: we identify 2–3 named Creators for the engagement. Week 5: first Fellow placement begins. Week 7: first technique card co-authored. Week 9: joint co-publication on the platform. Week 10: first quarterly review with you, where the plan adjusts based on Creator feedback.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All questions", description: "Every lens, in order." },
  {
    id: "why",
    label: "Why this bid",
    description: "Counterfactual, differentiation, UK economic benefit.",
  },
  {
    id: "technical",
    label: "Technical credibility",
    description: "AI substance, lab integration, concentration, academic depth.",
  },
  {
    id: "commercial",
    label: "Commercial",
    description: "Unit economics, IP & conflicts, procurement, clause-level clarity.",
  },
  {
    id: "delivery",
    label: "Delivery",
    description: "Founder accountability, first-quarter offer for Creator teams.",
  },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export default function FaqPage() {
  const [category, setCategory] = useState<CategoryId>("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? FAQS
        : FAQS.filter((f) => f.category === category),
    [category]
  );

  return (
    <>
      <PageHeader
        eyebrow="Reviewer FAQ"
        title={<>Fourteen questions, fourteen lenses, fourteen direct answers.</>}
        lede="We modelled the bid against nine reviewer lenses: the Activation Partners product team, the AI-in-Science specialist, ARIA's procurement and contracts function, the CEO, the CFO, the Chair, an external academic reviewer, and a Programme Director. The questions below are the ones each of those lenses will press hardest on. The answers are ours."
        meta="14 questions · 9 lenses"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The questions"
            title="Lens by lens."
            lede="Filter by lens cluster. Each entry leads with the lens descriptor and is independently linkable."
          />

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition ${
                  category === c.id
                    ? "bg-gable text-white"
                    : "bg-white text-gable border border-gable/15 hover:border-gable/40"
                }`}
              >
                {c.label}
                <span
                  className={`ml-2 text-[10px] ${
                    category === c.id ? "text-white/50" : "text-gable/40"
                  }`}
                >
                  {c.id === "all"
                    ? FAQS.length
                    : FAQS.filter((f) => f.category === c.id).length}
                </span>
              </button>
            ))}
          </div>

          <div className="text-[12px] text-gable/50 italic mb-8">
            {CATEGORIES.find((c) => c.id === category)?.description}
          </div>

          <div className="space-y-3">
            {filtered.map((f, i) => (
              <details
                key={f.q}
                className="card group animate-fade-in"
                {...(i < 2 && category === "all" ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none flex items-start gap-3">
                  <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold w-32 shrink-0 pt-1">
                    {f.lens}
                  </div>
                  <h3 className="font-bold text-base flex-1 group-hover:text-turq-text transition">
                    {f.q}
                  </h3>
                  <div className="text-gable/30 text-xl shrink-0 group-open:rotate-45 transition leading-none">
                    +
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-gable/10 text-sm text-gable/80 leading-relaxed pl-0 md:pl-32">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="card text-center text-gable/60">
              No questions in this lens cluster.
            </div>
          )}
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/programme-directors", label: "Programme Directors" }}
        next={{ href: "/aria/documents", label: "Documents" }}
      />
    </>
  );
}
