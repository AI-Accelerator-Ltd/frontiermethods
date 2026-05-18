// Mock data for the /platform demo.
// Real-shaped, real-grounded: derived from AIA's seed library + the
// research analogues mapped in 11-SOLUTION-DESIGN-v1.md.

export type Creator = {
  id: string;
  name: string;
  role: string;
  vertical: string;
  arias: string;
  profile: string;
  prompt: string;
  techniqueIds: string[];
  crossVerticalIds: string[];
  skillId: string;
};

export type Technique = {
  id: string;
  title: string;
  vertical: string;
  nist: string;
  whatItDoes: string;
  inputs: string[];
  outputs: string[];
  useCases: string[]; // useCase ids
  skills: string[]; // skill ids
  lensRag: Record<string, "G" | "A" | "R">;
};

export type UseCase = {
  id: string;
  title: string;
  technique: string;
  vertical: string;
  value: string;
  redactedNarrative: string;
  unredactedNarrative: string;
  measures: string[];
};

export type Skill = {
  id: string;
  name: string;
  repo: string;
  description: string;
  language: string;
  modelAgnostic: boolean;
  evalRig: boolean;
  license: "MIT";
  downloads: number;
  releaseDate: string;
};

export const CREATORS: Creator[] = [
  {
    id: "fusion-pi",
    name: "Dr Alice Mendez (illustrative)",
    role: "PI · fusion materials",
    vertical: "Nuclear / fusion",
    arias: "Scaling Compute — Bramhavar adjacent",
    profile:
      "Running tokamak first-wall materials testing. Generating ~3 TB/week of experimental data across X-ray diffraction, micro-CT, and ion irradiation runs. Two postdocs spending half their week on data cleaning and figure preparation.",
    prompt:
      "I'm trying to scale up our materials characterisation workflow. We're drowning in instrument output and the team can't keep up with literature on radiation-tolerant alloys.",
    techniqueIds: ["t-data-verification", "t-lit-monitoring", "t-tech-writing"],
    crossVerticalIds: ["t-data-extraction", "t-peer-review", "t-glossary"],
    skillId: "s-peer-review",
  },
  {
    id: "biomed-creator",
    name: "Prof Theo Konstantopoulos (illustrative)",
    role: "Creator · organ-on-chip platforms",
    vertical: "Biomedical / organ-on-chip",
    arias: "Sculpting Innate Immunity — Wang adjacent",
    profile:
      "Building immune-cell organoid platforms with cross-institutional collaborators in Manchester and QMUL. Grant reporting deadlines are crushing the team. ML-trained postdoc just joined.",
    prompt:
      "I have a research team across three institutions, all working on slightly different protocols. We're publishing more slowly than we should because nothing is reproducible across labs.",
    techniqueIds: ["t-tech-writing", "t-glossary", "t-mindmap"],
    crossVerticalIds: ["t-data-verification", "t-grant-writing", "t-routing"],
    skillId: "s-living-docs",
  },
  {
    id: "safeguarded-ai-creator",
    name: "Dr Yusuf Rahman (illustrative)",
    role: "Creator · Safeguarded AI",
    vertical: "Mathematics for Safe AI",
    arias: "Safeguarded AI — Dalrymple",
    profile:
      "Formal-methods researcher working on bounded model checking for ML-controlled cyber-physical systems. Needs a way to track which industry partners have raised what concerns, and to keep up with the regulatory landscape.",
    prompt:
      "Standards bodies are moving fast on AI assurance, and I'm trying to write a proposal that lands inside three or four different framework constraints simultaneously. I keep missing things.",
    techniqueIds: ["t-legislative", "t-grant-writing", "t-lit-monitoring"],
    crossVerticalIds: ["t-peer-review", "t-mindmap", "t-data-verification"],
    skillId: "s-grant-writing",
  },
  {
    id: "materials-creator",
    name: "Dr Priya Anand (illustrative)",
    role: "Creator · 2D materials",
    vertical: "Novel materials",
    arias: "Nature Computes Better — Bramhavar",
    profile:
      "Graphene-derived materials lab at Manchester. Onboarding new postdocs every six months and watching most of their first month go to learning lab tooling and ESHIA protocols.",
    prompt:
      "New people join our team every term and onboarding kills our first month. Lab tooling, safety, who-asks-whom — nothing is written down in one place.",
    techniqueIds: ["t-tech-writing", "t-routing", "t-glossary"],
    crossVerticalIds: ["t-peer-review", "t-data-extraction", "t-mindmap"],
    skillId: "s-living-docs",
  },
];

export const TECHNIQUES: Record<string, Technique> = {
  "t-data-verification": {
    id: "t-data-verification",
    title: "Data Verification & Assurance",
    vertical: "Major Projects · cross-industry",
    nist: "Detection",
    whatItDoes:
      "Extracts figures from documents, cross-checks against trusted internal systems and external benchmarks, flags discrepancies, provides real-time validation summaries and a 'data trust score'.",
    inputs: ["Documents containing figures (decks, reports, manuscripts)", "Trusted source systems (lab notebooks, instrument logs)"],
    outputs: ["Per-figure trust score", "Discrepancy flags", "Validated summary"],
    useCases: ["u-data-verification"],
    skills: ["s-data-verification"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "A" },
  },
  "t-lit-monitoring": {
    id: "t-lit-monitoring",
    title: "Literature & Legislation Monitoring",
    vertical: "Research · cross-industry",
    nist: "Monitoring",
    whatItDoes:
      "Continuous monitoring agent watching preprint servers (arXiv, bioRxiv, ChemRxiv), funder calls, equipment safety bulletins, standards bodies. Pushes one update the project actually needs.",
    inputs: ["Project profile + research keywords", "Trusted source list (per vertical)"],
    outputs: ["Daily filtered digest", "Critical alerts (push, not pull)"],
    useCases: ["u-lit-monitoring"],
    skills: ["s-lit-monitoring"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-tech-writing": {
    id: "t-tech-writing",
    title: "Living technical documentation",
    vertical: "Engineering · cross-industry",
    nist: "Content Creation",
    whatItDoes:
      "Generates and maintains documentation of codebase, protocols, and tech stack. New team members and AI tools can find what they need. Updates as the code changes.",
    inputs: ["Codebase / protocol library", "Commit log / change log"],
    outputs: ["Always-current docs", "Onboarding handbook", "AI-assistant-readable schema"],
    useCases: ["u-tech-writing"],
    skills: ["s-living-docs"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-data-extraction": {
    id: "t-data-extraction",
    title: "Data Extraction from Heterogeneous Documents",
    vertical: "Software · cross-industry",
    nist: "Information Retrieval",
    whatItDoes:
      "Extracts structured tabular data from any document format. 'Any format in, structured data out' — works on invoices, scientific PDFs, instrument output reports, methods sections.",
    inputs: ["Heterogeneous source documents", "Target schema"],
    outputs: ["Structured tabular data (CSV / JSON)", "Confidence scores"],
    useCases: ["u-data-extraction"],
    skills: ["s-data-extraction"],
    lensRag: { conf: "A", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-peer-review": {
    id: "t-peer-review",
    title: "AI Pre-Reviewer",
    vertical: "Surveyors / Professional Services",
    nist: "Content Synthesis",
    whatItDoes:
      "AI-assisted quality checks against past work and best-practice guidelines. Pre-reviews submissions before they reach the human reviewer, raising the floor on submitted quality.",
    inputs: ["Draft submission", "Rubric (e.g. ARIA evaluation rubric or grant scoring criteria)"],
    outputs: ["Per-criterion feedback", "Improvement suggestions ranked by impact"],
    useCases: ["u-peer-review"],
    skills: ["s-peer-review"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-glossary": {
    id: "t-glossary",
    title: "Cross-disciplinary Glossary",
    vertical: "Major Projects · cross-industry",
    nist: "Information Retrieval",
    whatItDoes:
      "Reviews project documentation, identifies technical terms, generates a project-specific glossary as a manual review or as an in-workspace tool that surfaces definitions on hover.",
    inputs: ["Project documentation corpus", "Team discipline list"],
    outputs: ["Maintained glossary", "On-hover definitions in shared docs"],
    useCases: ["u-glossary"],
    skills: ["s-glossary"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-routing": {
    id: "t-routing",
    title: "Lab-team Coordination Agent",
    vertical: "Engineering · cross-industry",
    nist: "Digital Assistance",
    whatItDoes:
      "Routes experimental tasks, equipment bookings, reagent reorders, and post-doc handovers across a distributed multi-site team. Eliminates coordination overhead.",
    inputs: ["Team availability + skills matrix", "Equipment / reagent inventory"],
    outputs: ["Suggested task assignments", "Booking confirmations", "Handover packs"],
    useCases: ["u-routing"],
    skills: ["s-routing"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-grant-writing": {
    id: "t-grant-writing",
    title: "Grant & Proposal Drafting",
    vertical: "Sales & Marketing → Grant Writing",
    nist: "Content Creation",
    whatItDoes:
      "Captures the standard elements of a grant or proposal (project background, team CVs, Gantt, risk register, EDI statement) once, so each new bid focuses team time on the genuinely novel scientific case.",
    inputs: ["Past proposals corpus", "Funder rubric / form template"],
    outputs: ["First-draft application", "Re-usable section library"],
    useCases: ["u-grant-writing"],
    skills: ["s-grant-writing"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
  "t-legislative": {
    id: "t-legislative",
    title: "Legislative & Standards Analysis",
    vertical: "Compliance · Professional Services",
    nist: "Content Synthesis",
    whatItDoes:
      "Automates extraction and summarisation from regulators and standards bodies. Generates structured summaries tailored to the team's domain — internal briefs, client newsletters, technical specs.",
    inputs: ["Regulator / standards body source list", "Team domain profile"],
    outputs: ["Structured summaries", "Plain-English briefs", "Cross-reference index"],
    useCases: ["u-legislative"],
    skills: ["s-legislative"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "A" },
  },
  "t-mindmap": {
    id: "t-mindmap",
    title: "Rapid Mind-Mapping & Concept Exploration",
    vertical: "Research · cross-industry",
    nist: "Discovery",
    whatItDoes:
      "AI co-researcher that helps stress-test the shape of a programme, surface adjacent fields, and identify the assumptions worth attacking first. Phase 0 / Phase 1 problem-framing.",
    inputs: ["Problem statement (free text)", "Optional: starting domain or constraints"],
    outputs: ["Concept map", "Adjacent-field cross-references", "Assumption ranking"],
    useCases: ["u-mindmap"],
    skills: ["s-mindmap"],
    lensRag: { conf: "G", ethical: "G", sustain: "G", ip: "G", trusted: "G" },
  },
};

export const USE_CASES: Record<string, UseCase> = {
  "u-data-verification": {
    id: "u-data-verification",
    title: "Programme decisions, audited at source",
    technique: "t-data-verification",
    vertical: "Major Projects",
    value: "~30 hours/week saved across the programme team. Discrepancies caught before submission.",
    redactedNarrative:
      "A FTSE-250 client (REDACTED) runs major capital programmes where every steering decision rests on numbers. Their team built a verification engine that extracts figures from any presented document, cross-references trusted internal systems (REDACTED ×3) and external benchmarks, and outputs a real-time data trust score on every figure before approval.",
    unredactedNarrative:
      "Morgan Sindall (FTSE 250) runs major capital programmes where every steering decision rests on numbers across decks, reports and conversations. Their team built a verification engine that extracts figures from any presented document, cross-references Ecosys, Theo and Risk Hive, and outputs a real-time data trust score on every figure before approval.",
    measures: [
      "% discrepancies flagged + corrected pre-submission",
      "Reduction in governance escalations",
      "Documents passing first review without challenge",
    ],
  },
  "u-lit-monitoring": {
    id: "u-lit-monitoring",
    title: "One alert, not a daily firehose",
    technique: "t-lit-monitoring",
    vertical: "Research",
    value: "~8 hours/week reclaimed by the postdoc on monitoring duty.",
    redactedNarrative:
      "Tracking regulatory and standards changes that affect a research domain — UKRI guidance, MHRA, HSE, export controls, dual-use, ethics frameworks — without losing productive hours to legal reading. One alert, when something material actually happens, instead of a daily firehose.",
    unredactedNarrative:
      "Tracking regulatory and standards changes that affect a research domain — UKRI guidance, MHRA, HSE, export controls, dual-use, ethics frameworks — without losing productive hours to legal reading. One alert, when something material actually happens, instead of a daily firehose.",
    measures: ["Time-to-relevant-alert", "False-positive rate", "Items missed (target: zero)"],
  },
  "u-tech-writing": {
    id: "u-tech-writing",
    title: "Living documentation: post-doc handover in 1 day, not 2 weeks",
    technique: "t-tech-writing",
    vertical: "Engineering",
    value: "~2 weeks of lost time per leaver removed. Directly addresses the reproducibility crisis.",
    redactedNarrative:
      "Generates and maintains documentation of experimental protocols, computational pipelines and instrument configurations for a research lab. When a post-doc leaves, the next person — and the lab's AI assistant — can pick up the work without two weeks of archaeology.",
    unredactedNarrative:
      "Generates and maintains documentation of experimental protocols, computational pipelines and instrument configurations for a research lab. When a post-doc leaves, the next person — and the lab's AI assistant — can pick up the work without two weeks of archaeology.",
    measures: ["Time from leaver to next person productive", "% protocols with current docs", "AI-assistant retrieval accuracy"],
  },
  "u-data-extraction": {
    id: "u-data-extraction",
    title: "Heterogeneous PDFs → structured data",
    technique: "t-data-extraction",
    vertical: "Software",
    value: "Manual data entry workload reduced ~75%.",
    redactedNarrative:
      "Extracting structured data from heterogeneous scientific PDFs — methods sections, supplementary tables, instrument output reports — into a normalised schema. The same 'any format in, structured data out' pattern that powers procurement automation.",
    unredactedNarrative:
      "Extracting structured data from heterogeneous scientific PDFs — methods sections, supplementary tables, instrument output reports — into a normalised schema. The same 'any format in, structured data out' pattern that powers procurement automation.",
    measures: ["Extraction accuracy", "Time per document", "Failure-mode rate"],
  },
  "u-peer-review": {
    id: "u-peer-review",
    title: "AI pre-reviewer for grant submissions",
    technique: "t-peer-review",
    vertical: "Research",
    value: "Submitted quality consistently above the historical baseline.",
    redactedNarrative:
      "AI pre-reviewer for grant submissions, milestone reports, and manuscript drafts. Checks against the funder's evaluation rubric and prior accepted work before the human reviewer ever sees it, raising the floor on submitted quality.",
    unredactedNarrative:
      "AI pre-reviewer for grant submissions, milestone reports, and manuscript drafts. Checks against the funder's evaluation rubric and prior accepted work before the human reviewer ever sees it, raising the floor on submitted quality.",
    measures: ["% submissions improved on first pass", "Reviewer satisfaction with submission quality"],
  },
  "u-glossary": {
    id: "u-glossary",
    title: "Cross-disciplinary glossary",
    technique: "t-glossary",
    vertical: "Major Projects",
    value: "Three meetings shortened to one. Onboarding compresses by ~40%.",
    redactedNarrative:
      "When a biologist, materials scientist and ML researcher share a project, an AI-maintained shared glossary stops them spending the first three meetings discovering they each meant different things by 'robust'.",
    unredactedNarrative:
      "When a biologist, materials scientist and ML researcher share a project, an AI-maintained shared glossary stops them spending the first three meetings discovering they each meant different things by 'robust'.",
    measures: ["Time-to-shared-vocabulary on a new project", "Term-collision incidents"],
  },
  "u-routing": {
    id: "u-routing",
    title: "Distributed lab coordination",
    technique: "t-routing",
    vertical: "Engineering",
    value: "PI's email volume down ~40%. Coordination meetings down by half.",
    redactedNarrative:
      "Lab-team coordination agents that route experimental tasks, equipment bookings, reagent reorders, and post-doc handovers. Particularly valuable in distributed multi-site Creator teams where coordination overhead can swallow a meaningful share of productive research time.",
    unredactedNarrative:
      "Lab-team coordination agents that route experimental tasks, equipment bookings, reagent reorders, and post-doc handovers. Particularly valuable in distributed multi-site Creator teams where coordination overhead can swallow a meaningful share of productive research time.",
    measures: ["PI email volume", "Coordination meetings/week", "Equipment booking failure rate"],
  },
  "u-grant-writing": {
    id: "u-grant-writing",
    title: "Grant drafting, freed up for novelty",
    technique: "t-grant-writing",
    vertical: "Research",
    value: "Standard elements of grant writing reduced to <1 day. Team time concentrated on the novel scientific case.",
    redactedNarrative:
      "Grant and follow-on funding application drafting. Captures the standard elements (project background, team CVs, Gantt, risk register, EDI statement) once, so each new bid focuses Creator time on the novel scientific case. The platform self-eats-dogfood — used to draft platform-generated bids too.",
    unredactedNarrative:
      "Grant and follow-on funding application drafting. Captures the standard elements (project background, team CVs, Gantt, risk register, EDI statement) once, so each new bid focuses Creator time on the novel scientific case. The platform self-eats-dogfood — used to draft platform-generated bids too.",
    measures: ["Time-to-first-draft", "Reviewer-quality score on submitted draft", "Number of bids written per team-month"],
  },
  "u-legislative": {
    id: "u-legislative",
    title: "Standards & legislation, summarised",
    technique: "t-legislative",
    vertical: "Compliance",
    value: "Quarterly compliance briefings produced in hours, not weeks.",
    redactedNarrative:
      "Tracking regulatory and standards changes that affect a Creator's domain — UKRI guidance, MHRA, HSE, export controls, dual-use, ethics frameworks. Tailored summaries by team profile so Creators don't lose productive hours on legal reading.",
    unredactedNarrative:
      "Originating client (REDACTED, accountancy firm). Originally automated extraction and summarisation from HMRC, IFRS, ICAEW. NLP analyses regulations, highlights relevant points, generates structured summaries — internal reports, client newsletters, podcasts, explainer videos. Tailored by client profile.",
    measures: ["Coverage % of in-scope regulators", "Time-to-actionable-brief", "Items missed in audit"],
  },
  "u-mindmap": {
    id: "u-mindmap",
    title: "Phase-0 problem framing",
    technique: "t-mindmap",
    vertical: "Research",
    value: "Faster problem framing. Adjacent field surfacing the team would not have found alone.",
    redactedNarrative:
      "Sits closest to the ARIA Creator's actual day job — Phase 0 / Phase 1 problem-framing support. An AI co-researcher that helps a Creator stress-test the shape of a programme, surface adjacent fields, identify the assumptions worth attacking first.",
    unredactedNarrative:
      "Sits closest to the ARIA Creator's actual day job — Phase 0 / Phase 1 problem-framing support. An AI co-researcher that helps a Creator stress-test the shape of a programme, surface adjacent fields, identify the assumptions worth attacking first.",
    measures: ["Time-to-framed-problem", "Quality of adjacent-field links surfaced (peer-reviewed)", "Number of assumptions explicitly tested"],
  },
};

export const SKILLS: Record<string, Skill> = {
  "s-peer-review": {
    id: "s-peer-review",
    name: "peer-review-pre-check",
    repo: "github.com/uk-technique-library/peer-review-pre-check",
    description:
      "Claude skill + eval harness for pre-reviewing grant submissions, milestone reports, or manuscript drafts against a funder rubric.",
    language: "Claude skill · Python eval rig",
    modelAgnostic: true,
    evalRig: true,
    license: "MIT",
    downloads: 247,
    releaseDate: "Month 2 · Oct 2026",
  },
  "s-living-docs": {
    id: "s-living-docs",
    name: "living-docs-pipeline",
    repo: "github.com/uk-technique-library/living-docs-pipeline",
    description:
      "Cursor rule pack + agent harness for keeping experimental protocol and codebase documentation always-current. Hooks into git history.",
    language: "Cursor rule + Python agent",
    modelAgnostic: true,
    evalRig: true,
    license: "MIT",
    downloads: 132,
    releaseDate: "Month 3 · Nov 2026",
  },
  "s-grant-writing": {
    id: "s-grant-writing",
    name: "grant-drafting-skill",
    repo: "github.com/uk-technique-library/grant-drafting-skill",
    description:
      "Claude skill for capturing the standard elements of a grant (team CVs, Gantt, EDI, risk register, project background) so new bids focus on the novel scientific case.",
    language: "Claude skill",
    modelAgnostic: true,
    evalRig: true,
    license: "MIT",
    downloads: 189,
    releaseDate: "Month 2 · Oct 2026",
  },
  "s-data-verification": {
    id: "s-data-verification",
    name: "data-trust-score",
    repo: "github.com/uk-technique-library/data-trust-score",
    description: "Cross-references figures against trusted source systems and outputs a per-figure trust score before approval.",
    language: "Python · LangGraph",
    modelAgnostic: true,
    evalRig: true,
    license: "MIT",
    downloads: 92,
    releaseDate: "Month 5 · Jan 2027",
  },
  "s-lit-monitoring": { id: "s-lit-monitoring", name: "lit-monitor", repo: "github.com/uk-technique-library/lit-monitor", description: "Continuous monitoring agent for preprints, regulators, and standards bodies.", language: "Python · cron-friendly", modelAgnostic: true, evalRig: true, license: "MIT", downloads: 64, releaseDate: "Month 5 · Jan 2027" },
  "s-data-extraction": { id: "s-data-extraction", name: "any-pdf-to-csv", repo: "github.com/uk-technique-library/any-pdf-to-csv", description: "Heterogeneous PDF → structured data with confidence scores.", language: "Python", modelAgnostic: true, evalRig: true, license: "MIT", downloads: 215, releaseDate: "Month 6 · Feb 2027" },
  "s-glossary": { id: "s-glossary", name: "team-glossary", repo: "github.com/uk-technique-library/team-glossary", description: "Cross-disciplinary glossary generator + on-hover definitions.", language: "Claude skill", modelAgnostic: true, evalRig: true, license: "MIT", downloads: 71, releaseDate: "Month 4 · Dec 2026" },
  "s-routing": { id: "s-routing", name: "lab-routing-agent", repo: "github.com/uk-technique-library/lab-routing-agent", description: "Routes lab-team coordination across distributed sites.", language: "Python · agentic", modelAgnostic: true, evalRig: true, license: "MIT", downloads: 38, releaseDate: "Month 7 · Mar 2027" },
  "s-legislative": { id: "s-legislative", name: "legislative-summariser", repo: "github.com/uk-technique-library/legislative-summariser", description: "Standards & legislation summariser with team-domain tailoring.", language: "Claude skill", modelAgnostic: true, evalRig: true, license: "MIT", downloads: 47, releaseDate: "Month 8 · Apr 2027" },
  "s-mindmap": { id: "s-mindmap", name: "concept-explorer", repo: "github.com/uk-technique-library/concept-explorer", description: "Phase-0 problem framing co-researcher.", language: "Claude skill", modelAgnostic: true, evalRig: true, license: "MIT", downloads: 58, releaseDate: "Month 6 · Feb 2027" },
};

export const LENS_LABELS = {
  conf: "Data confidentiality",
  ethical: "Ethical risk",
  sustain: "Sustainability",
  ip: "IP",
  trusted: "Trusted Research",
};
