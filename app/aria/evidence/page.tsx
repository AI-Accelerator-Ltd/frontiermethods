import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Evidence",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const SEED_CASES = [
  { id: "S1", title: "Data Verification & Assurance", theme: "Compliance & Risk", original: "Major-projects programme team's verification engine across reports, decks, conversations. ~30 hrs/week saved, discrepancies caught pre-submission.", analogue: "Claim-checker layer over lab notebooks, preprints, grant reports. Flags numbers that no longer reconcile after a model rerun." },
  { id: "S2", title: "Legislative Analysis & Summarisation", theme: "Compliance & Risk", original: "Accountancy firm tracking HMRC, IFRS, ICAEW changes. NLP analyses regulations, generates tailored client newsletters and explainer videos.", analogue: "Tracks UKRI guidance, MHRA, HSE, export controls, dual-use, ethics frameworks. Tailored summaries by lab profile." },
  { id: "S3", title: "Peer Review", theme: "Research", original: "AI-assisted report quality checks against past reports and best-practice guidelines. Surveyors / professional services.", analogue: "**Hero use case.** AI pre-reviewer for grant submissions, milestone reports, manuscript drafts. Checks against ARIA's evaluation rubric. Ships as the first open-source skill." },
  { id: "S4", title: "Data Extraction from Heterogeneous Documents", theme: "Data Analysis", original: "Pre-configured GPT extracting structured tabular data from any invoice format. Software / marketing.", analogue: "Any-format-in, structured-data-out for scientific PDFs — methods sections, supplementary tables, instrument output. Bedrock pattern for meta-analysis." },
  { id: "S5", title: "Legislation Review & Notifications", theme: "Compliance & Risk", original: "AI alerts for relevant legal changes.", analogue: "Continuous monitoring agent on preprint servers (arXiv, bioRxiv, ChemRxiv), funder calls, equipment safety bulletins, standards bodies. One push, not a daily firehose." },
  { id: "S6", title: "Custom AI Agents for Task Routing", theme: "Development", original: "AI automates task assignments and follow-ups.", analogue: "Lab-team coordination agents that route experimental tasks, equipment bookings, reagent reorders, post-doc handovers. Particularly valuable in distributed multi-site teams." },
  { id: "S7", title: "Email Drafting & Outreach", theme: "Communication", original: "Stylistically consistent drafting at scale.", analogue: "Drafting cross-lab collaboration outreach, sponsor updates, Creator-to-PD communications. Stylistic guard-rails for consistent ARIA voice." },
  { id: "S8", title: "Client Value-Add on Sustainability", theme: "Customer & Client Interaction", original: "AI surfaces decision-support content on sustainability options at point of client interaction. Decarbonisation / professional services.", analogue: "Embedding sustainability and life-cycle thinking into research design choices. Greener synthesis routes, lower-energy characterisation methods. Plays into ARIA PAS 440 + sustainability lens." },
  { id: "S9", title: "Inclusive Workplace Chatbot", theme: "HR & Recruitment", original: "Conversational interface for DEI policy, inclusive language, hiring practice, accommodation routes.", analogue: "EDI and research-culture support in Creator teams. Helps PIs navigate accommodation, neurodivergence support, parental leave during a phase boundary." },
  { id: "S10", title: "Definitions and Glossary", theme: "Education & Training", original: "AI reviews project documentation, identifies technical terms, generates a project-specific glossary.", analogue: "Cross-disciplinary glossary for ARIA's deliberately interdisciplinary teams. Stops three meetings being lost to defining 'robust'." },
  { id: "S11", title: "Project Work Centralisation", theme: "Operations", original: "Centralises tasks across systems, identifies priorities, proposes scheduling.", analogue: "Programme-level visibility for Programme Directors across a Creator cohort. Highest-leverage intervention surfaces ahead of the loudest email." },
  { id: "S12", title: "Writing Proposals (Grant Writing)", theme: "Sales & Marketing", original: "AI captures standard elements and contextual variables to streamline proposal drafting.", analogue: "Grant and follow-on funding application drafting. Standard elements once; novel scientific case gets the team's attention. **Self-eating-dogfood skill — used to draft platform-generated bids too.**" },
  { id: "S13", title: "Technical Writing & Living Documentation", theme: "IT & Technical Support", original: "Generates and maintains codebase + tech-stack documentation to support human onboarding and AI-assisted dev.", analogue: "Living documentation of experimental protocols, computational pipelines, instrument configurations. **Directly addresses the reproducibility crisis ARIA partly exists to fix.**" },
  { id: "S14", title: "Rapid Mind-Mapping & Concept Exploration", theme: "Research", original: "Rapid mind-mapping to expand discovery space and surface unconsidered connections.", analogue: "**Sits closest to the ARIA Creator's actual day job.** Phase 0 / Phase 1 problem-framing. AI co-researcher that helps stress-test programme shape, surface adjacent fields, identify assumptions worth attacking first." },
];

const CLIENT_TRACK = [
  { client: "Virgin Red (Virgin Group)", what: "Highest Tide governance methodology in production. Launched 23 February 2026." },
  { client: "Morgan Sindall (FTSE 250)", what: "Six-month enablement programme. Confirmed 26 February 2026. AIA-authored Eleven AI Forces analysis was the intellectual backbone of the 23 April 2026 keynote to 100+ senior leaders." },
  { client: "Tokio Marine HCC", what: "Active engagement. AI adoption work in regulated insurance environment." },
  { client: "MJS Tax", what: "Active engagement. Professional services AI adoption." },
  { client: "Arrive / Parkopedia", what: "Active engagement. AI adoption across a global data product." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Evidence"
        title={<>Real use cases. Real clients. Real track record.</>}
        lede="Fourteen seed use cases drawn from AIA's enterprise library, each mapped to its research analogue. Plus the FTSE-250 client list AIA delivers against today."
        meta="For Aayush · external reviewer · PDs"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="14 seed use cases"
            title="From AIA's enterprise library, mapped to ARIA Creator contexts."
            lede="These aren't hypothetical. Each is a real record in AIA's Notion-hosted use case database (six are fully-structured records with all fields populated; the rest carry descriptions, theme, NIST and industry tags). The research analogue is mapped on the right of each card. This is the substance behind the technique library's day-1 seed."
          />

          <div className="grid lg:grid-cols-2 gap-3">
            {SEED_CASES.map((c) => (
              <div key={c.id} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical size={14} className="text-turq-text" />
                  <span className="font-mono text-xs text-turq-text font-semibold">{c.id}</span>
                  <span className="tag tag-gable">{c.theme}</span>
                </div>
                <h3 className="font-bold text-base mb-2">{c.title}</h3>
                <div className="grid md:grid-cols-2 gap-3 mt-3 text-[12px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gable/40 font-semibold mb-1">Original (commercial)</div>
                    <p className="text-gable/70 leading-relaxed">{c.original}</p>
                  </div>
                  <div className="bg-cream rounded p-3 -m-1">
                    <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">Research analogue</div>
                    <p className="text-gable leading-relaxed" dangerouslySetInnerHTML={{ __html: c.analogue.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="AIA client track record"
            title="Who AIA already delivers for."
            lede="The platform isn't theoretical because AIA isn't theoretical. Five named clients today, including a FTSE 250 and a Virgin Group operating company."
          />
          <div className="grid md:grid-cols-2 gap-3">
            {CLIENT_TRACK.map((c) => (
              <div key={c.client} className="card flex items-start gap-3">
                <CheckCircle2 size={16} className="text-turq-text mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-base mb-1">{c.client}</h3>
                  <p className="text-sm text-gable/70 leading-relaxed">{c.what}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/open-source", label: "Open-source commitment" }}
        next={{ href: "/aria/programme-directors", label: "Programme Directors" }}
      />
    </>
  );
}
