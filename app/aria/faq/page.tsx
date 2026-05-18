import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Reviewer FAQ",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const FAQS = [
  {
    persona: "Pranay Shah · counterfactual",
    q: "Would this catalyse activity that wouldn't happen otherwise?",
    a: "Yes. AIA is building the commercial version of this platform for individual enterprises today. The shared, public-good UK platform with cross-tenant insight — where a technique discovered in fusion can travel into drug discovery — is something no commercial customer ever pays for. ARIA is the only possible funder of that shape. The platform also produces UK-attributable open-source skills available to any UK research team funded by any funder, which directly addresses the wider ecosystem additionality test.",
  },
  {
    persona: "Pranay Shah · differentiation from Cohort 1",
    q: "How is this different from Renaissance Philanthropy, Pillar VC, Convergent Research, etc?",
    a: "Cohort 1 contains world-class translators of frontier R&D into ventures and talent. None of them is an enablement layer. Pillar VC's Encode places fellows but is VC-anchored and US-headquartered. Renaissance Philanthropy builds new R&D org types. Convergent Research pioneers the FRO model. Frontier Methods plugs the missing enablement layer: making AI usable inside the labs ARIA has already funded. We complement Cohort 1; we don't compete with them.",
  },
  {
    persona: "Aayush Chadha · AI substance",
    q: "Where's the AI capability, not just the change-management?",
    a: "Three places. (1) 30+ open-source AI skills shipped Year 1, each with an evaluation rig. The first one (peer-review-pre-check) is on GitHub today. (2) Embedded AI Practitioner Fellows inside Creator teams, 3–4 days/week at the bench. (3) Three named Programme Director partnerships co-designing technique cards in their opportunity spaces — Scaling Compute (Bramhavar), Safeguarded AI (Dalrymple), and one Cohort 2 PD locked by 31 August 2026.",
  },
  {
    persona: "Aayush Chadha · lab integration",
    q: "Have you ever actually deployed an AI system into a lab?",
    a: "AIA's enterprise track record is in regulated and operationally-complex environments (Virgin Red, Morgan Sindall, Tokio Marine HCC) rather than wet labs. HFBAC's 10-year embed at Shadow Robot Company gives the consortium an inside view of an ARIA-funded Creator team's working pattern. Year 1 places 8–12 Fellows directly inside Creator labs. We are honest about the gap and pair the platform with embedded operators specifically because the lab integration story has to be earned, not claimed.",
  },
  {
    persona: "Kathleen Fisher · technical surprise",
    q: "Where is the technical surprise? This sounds like adoption coaching dressed up.",
    a: "The technical surprise is that governance by user competency — Highest Tide — produces a finite, auditable lens-set that triages a near-infinite use-case space. It's the operational answer to the EU AI Act in research contexts. The open-source skill releases compound a UK-built capability stack visible on GitHub, not on a slide. And the platform's cross-tenant insight architecture is structurally invisible to commercial AI providers, who optimise for single-tenant value.",
  },
  {
    persona: "Kathleen Fisher · concentration vs spread",
    q: "Why not 8–10 deep partnerships rather than 100 verticals?",
    a: "Year 1 IS the concentrated phase: 6 founding verticals + 3 named PD partnerships. Phase 2 and 3 only scale conditionally on demonstrated Year 1 value, gated on milestones the CFO can pull. We share Fisher's DARPA conviction that concentrated bets beat portfolio diversification — Phase 1 is exactly that. Scale beyond Phase 1 is conditional, not promised.",
  },
  {
    persona: "Antonia Jenkinson · unit economics",
    q: "Do the numbers work?",
    a: "Year 1 £3m across 8 work packages. Worked unit economics published on /aria/cost. Cost per Creator engaged drops from ~£8k Q1 to ~£3k Q4 as the platform's recommendation engine refines and onboarding compounds. Cost per Fellow placement stable at ~£75k fully loaded. Cost per skill shipped drops from ~£40k to ~£15k as templates mature. Year 2 and 3 are conditional on Year 1 milestones, so the £10m total is not a commitment ARIA makes upfront.",
  },
  {
    persona: "Antonia Jenkinson · IP & conflicts",
    q: "What's the IP position? What about HFBAC's Shadow Robot conflict?",
    a: "Zero foreground IP claim by the consortium. Creators retain everything. Open-source skills MIT-licensed. Platform, methodology, and seed library remain AIA-owned and contributed in kind — no licence-fee implications for ARIA. HFBAC's 10-year Shadow Robot embed is declared as a Section 9 conflict with an explicit Chinese-wall: no Fellow placed at Shadow Robot under the ARIA contract; her commercial Shadow Robot work continues outside ARIA scope with no cross-subsidisation.",
  },
  {
    persona: "Matt Clifford · UK economic benefit",
    q: "What's the UK economic-benefit story?",
    a: "UK-domiciled prime (AIA Ltd, London). UK-resident staff. UK-only delivery (RFP requirement). UK-resident named operators (Orbit-RRI in Oxford/De Montfort, SimplyBD UK Ltd, HFBAC UK Ltd). Open-source UK outputs from Year 1. Fellows placed in UK Creator teams. The April 2025 £50m-to-US-firms criticism is answered cleanly: every pound goes to UK organisations and produces UK-owned public-good outputs.",
  },
  {
    persona: "Matt Clifford · founder quality",
    q: "Where's the named obsessed founder?",
    a: "Mike Chatterton, named bid lead, founder of AI Accelerator, author of every layer of the methodology this bid runs on. Personally underwrites the proposal. AIA is the single accountable contracting entity. Three named operators (Martin de Heaver, Alix Johnstone-Morfoisse, Helen Wingrove-Sanders) carry domain delivery scope. No steering committee. The bid is structured for EF-style underwriting.",
  },
  {
    persona: "Tammy Thomas-Brown · procurement",
    q: "Is the consortium structure clean enough to contract?",
    a: "One named legal prime (AIA Ltd, UK Ltd, London). Three subcontractor leads on back-to-back terms harmonised on day rate (£1,600 named-lead) and IP terms. Substitution plan named: if any sub fails financial DD or withdraws, AIA absorbs the role with a named replacement within 30 days. Modern Slavery, GDPR, infosec, Trusted Research all addressed in the bid annex. Cost line per work package, not blended.",
  },
  {
    persona: "Olivia Donovan · clause-level clarity",
    q: "Is the bid internally consistent?",
    a: "FTEs in the cost sheet match the named team in the bid. Eight work packages in the narrative match eight cost lines. Day rates harmonised across the consortium (£1,600 named-lead). Social value / sustainability statement specific to this engagement, not boilerplate (Orbit-RRI delivers PAS 440 sustainability lens). Single point of contact for ARIA contracting: Jeremy Steer (COO, AIA).",
  },
  {
    persona: "External academic reviewer · credibility",
    q: "Where are the academic relationships?",
    a: "Orbit-RRI is embedded in two EPSRC CDTs (Oxford AIMS, Heriot-Watt Applied Photonics) with named relationships into Surrey, Nottingham, De Montfort, Imperial via H2020/SHERPA. Martin's founder track (Ipsotek, GEOMii, Safewise) sits inside academic translation. Scientific Advisory Board target: Marina Jirotka (Orbit's founding academic), a Manchester graphene network member (Aayush-adjacent), a Cohort 1 partner alumnus, and a senior UKRI/Royal Society figure. Established by month 6.",
  },
  {
    persona: "Programme Director · Creator value Q1",
    q: "What would you do for MY Creators in MY space in MY first quarter?",
    a: "First 90 days mapped per PD partnership (see /aria/programme-directors). Week 1: we read your opportunity space document end-to-end and quote it back. Week 3: we identify 2–3 named Creators for the engagement. Week 5: first Fellow placement begins. Week 7: first technique card co-authored. Week 9: joint co-publication on the platform. Week 10: first quarterly review with you, where the plan adjusts based on Creator feedback.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Reviewer FAQ"
        title={<>The questions our nine personas ask, with our direct answers.</>}
        lede="We modelled nine reviewers — Pranay Shah, Aayush Chadha, Tammy Thomas-Brown, Olivia Donovan, Kathleen Fisher, Antonia Jenkinson, Matt Clifford, an external academic expert, and a Programme Director. The questions below are theirs. The answers are ours."
        meta="14 questions · 9 personas"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The questions"
            title="Reviewer-by-reviewer."
          />

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={f.q} className="card group" {...(i < 3 ? { open: true } : {})}>
                <summary className="cursor-pointer list-none flex items-start gap-3">
                  <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold w-32 shrink-0 pt-1">
                    {f.persona}
                  </div>
                  <h3 className="font-bold text-base flex-1 group-hover:text-turq-text transition">
                    {f.q}
                  </h3>
                  <div className="text-gable/30 text-xl shrink-0 group-open:rotate-45 transition leading-none">+</div>
                </summary>
                <div className="mt-4 pt-4 border-t border-gable/10 text-sm text-gable/80 leading-relaxed pl-0 md:pl-32">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/programme-directors", label: "Programme Directors" }}
        next={{ href: "/aria/documents", label: "Documents" }}
      />
    </>
  );
}
