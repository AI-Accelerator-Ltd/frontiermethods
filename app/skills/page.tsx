"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Layers,
  Mail,
  Sparkles,
} from "lucide-react";
import { SITE } from "@/lib/nav";

type Skill = {
  name: string;
  title: string;
  description: string;
  status: "live" | "this-week" | "this-quarter" | "next-quarter" | "later";
  quarter: string;
  category: string;
  language: string;
  repoSuffix?: string;
};

const SKILLS: Skill[] = [
  {
    name: "peer-review-pre-check",
    title: "Peer review pre-check",
    description:
      "AI pre-reviewer for grant submissions, milestone reports, and manuscript drafts. Checks against any rubric (ARIA, UKRI, internal panel) before the human reviewer sees it.",
    status: "this-week",
    quarter: "Launch · May 2026",
    category: "Content Synthesis",
    language: "Claude skill + Python eval rig",
    repoSuffix: "/peer-review-pre-check",
  },
  {
    name: "grant-drafting-skill",
    title: "Grant & proposal drafting",
    description:
      "Captures standard grant elements so each new bid focuses team time on the novel scientific case.",
    status: "this-quarter",
    quarter: "Q3 2026",
    category: "Content Creation",
    language: "Claude skill",
  },
  {
    name: "living-docs-pipeline",
    title: "Living technical documentation",
    description:
      "Always-current docs for codebases and lab protocols. Hooks into git history.",
    status: "this-quarter",
    quarter: "Q4 2026",
    category: "Content Creation",
    language: "Cursor rule + Python agent",
  },
  {
    name: "team-glossary",
    title: "Cross-disciplinary glossary",
    description:
      "AI-maintained shared vocabulary for multi-discipline teams. On-hover definitions.",
    status: "this-quarter",
    quarter: "Q4 2026",
    category: "Information Retrieval",
    language: "Claude skill",
  },
  {
    name: "data-trust-score",
    title: "Data verification & assurance",
    description:
      "Per-figure trust score across documents and trusted source systems.",
    status: "next-quarter",
    quarter: "Q1 2027",
    category: "Detection",
    language: "Python · LangGraph",
  },
  {
    name: "lit-monitor",
    title: "Literature & legislation monitoring",
    description:
      "Continuous agent watching preprints, regulators, and standards bodies. One alert, not a daily firehose.",
    status: "next-quarter",
    quarter: "Q1 2027",
    category: "Monitoring",
    language: "Python · cron-friendly",
  },
  {
    name: "concept-explorer",
    title: "Rapid mind-mapping & concept exploration",
    description:
      "Phase-0 problem framing co-researcher. Surface adjacent fields and key assumptions.",
    status: "next-quarter",
    quarter: "Q1 2027",
    category: "Discovery",
    language: "Claude skill",
  },
  {
    name: "any-pdf-to-csv",
    title: "Data extraction from heterogeneous documents",
    description:
      "Any-format-in, structured-data-out for scientific PDFs.",
    status: "next-quarter",
    quarter: "Q2 2027",
    category: "Information Retrieval",
    language: "Python",
  },
  {
    name: "lab-routing-agent",
    title: "Lab-team coordination",
    description:
      "Routes tasks, equipment bookings, and handovers across distributed multi-site teams.",
    status: "later",
    quarter: "Q3 2027",
    category: "Digital Assistance",
    language: "Python · agentic",
  },
  {
    name: "legislative-summariser",
    title: "Standards & legislation summariser",
    description:
      "Standards and legislation summariser with team-domain tailoring.",
    status: "later",
    quarter: "Q4 2027",
    category: "Content Synthesis",
    language: "Claude skill",
  },
];

const STATUS_LABEL: Record<Skill["status"], string> = {
  live: "Live",
  "this-week": "Releasing this week",
  "this-quarter": "This quarter",
  "next-quarter": "Next quarter",
  later: "Year 2",
};

const STATUS_COLOUR: Record<Skill["status"], { bg: string; fg: string }> = {
  live: { bg: "rgba(0, 122, 94, 0.18)", fg: "#005A45" },
  "this-week": { bg: "rgba(0, 122, 94, 0.12)", fg: "#007A5E" },
  "this-quarter": { bg: "rgba(0, 177, 255, 0.14)", fg: "#0080BA" },
  "next-quarter": { bg: "rgba(27, 47, 60, 0.10)", fg: "#1B2F3C" },
  later: { bg: "rgba(27, 47, 60, 0.06)", fg: "#5A6E7A" },
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "this-week", label: "Releasing now" },
  { id: "this-quarter", label: "This quarter" },
  { id: "next-quarter", label: "Next quarter" },
  { id: "later", label: "Year 2" },
] as const;

export default function SkillsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const filtered = useMemo(
    () => (filter === "all" ? SKILLS : SKILLS.filter((s) => s.status === filter)),
    [filter]
  );

  const launchSkill = SKILLS[0];

  return (
    <>
      <PageHeader
        eyebrow="Open-source skills"
        title={
          <>
            Skills are the operational artefact. They ship open-source by default.
          </>
        }
        lede="Frontier Methods releases working, MIT-licensed AI skills — each with an evaluation rig — so any UK research team can pull them and apply them. Public good by design. UK-built. The library compounds with every release."
      />

      {/* GITHUB STRIP */}
      <section className="py-12 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="card-dark md:flex items-center justify-between gap-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Github size={32} className="text-white" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                  Public GitHub organisation
                </div>
                <div className="font-mono text-lg text-white">{SITE.github}</div>
              </div>
            </div>
            <a
              href={`https://${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark"
            >
              Open on GitHub <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* LAUNCH SKILL — featured */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tag tag-turq mb-3">Launch skill</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              The first skill is built and ready.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              The first Frontier Methods skill — README, SKILL.md, evaluation
              rig, MIT licence — is complete and queued for release this week.
              More skills follow on the schedule below.
            </p>
          </div>

          <div className="card border-l-4 !border-l-turq">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3 mb-4 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Github size={14} className="text-gable/50" />
                  <span className="font-mono text-xs text-gable/70">
                    {SITE.github}/{launchSkill.name}
                  </span>
                  <StatusBadge status={launchSkill.status} />
                </div>
                <h3 className="h-card text-2xl mb-2">{launchSkill.title}</h3>
                <p className="text-sm text-gable/70 leading-relaxed mb-4">
                  {launchSkill.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
                  <KV label="Licence">MIT</KV>
                  <KV label="Language">{launchSkill.language}</KV>
                  <KV label="Eval rig">
                    <span className="text-turq-text font-semibold">Yes</span>
                  </KV>
                  <KV label="Category">{launchSkill.category}</KV>
                </div>
              </div>
              <a
                href={`https://${SITE.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                <Github size={14} /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE WITH FILTER */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tag tag-turq mb-3">Skill catalogue · 30+ by Aug 2027</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              The release roadmap.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              Two skills released per cross-pollination event. Eight skills by
              month 6 of operation, additional 22+ by month 12. Each ships
              with README, SKILL.md, evaluation rig, sample inputs, expected
              outputs, and an MIT licence. Contributions welcome.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-6">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition ${
                  filter === f.id
                    ? "bg-gable text-white"
                    : "bg-white text-gable border border-gable/15 hover:border-gable/40"
                }`}
              >
                {f.label}
                <span
                  className={`ml-2 text-[10px] ${
                    filter === f.id ? "text-white/50" : "text-gable/40"
                  }`}
                >
                  {f.id === "all"
                    ? SKILLS.length
                    : SKILLS.filter((s) => s.status === f.id).length}
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((s) => (
              <div key={s.name} className="card animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <StatusBadge status={s.status} />
                  <Layers size={14} className="text-gable/30" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gable/40 mb-1">
                  {s.quarter}
                </div>
                <div className="font-mono text-[11px] text-gable/60 mb-2">
                  {s.name}
                </div>
                <h3 className="font-bold text-[15px] leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-[12px] text-gable/70 leading-relaxed mb-3">
                  {s.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-gable/40 pt-2 border-t border-gable/10">
                  <Sparkles size={10} />
                  <span>{s.category}</span>
                  <span className="text-gable/20">·</span>
                  <span>{s.language}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="card text-center text-gable/60">
              No skills match this filter.
            </div>
          )}
        </div>
      </section>

      {/* WHAT EVERY SKILL SHIPS WITH */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-on-dark-turq mb-3">Quality bar</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              What every released skill ships with.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: "Evaluation rig",
                body: "Repeatable benchmark against the human or non-AI baseline. Published as code.",
              },
              {
                title: "MIT licence",
                body: "Permissive. Re-use without restriction. Attribution welcomed, not required.",
              },
              {
                title: "Model-agnostic",
                body: "Built against an interface, not a single vendor. Works with Claude, GPT, Gemini.",
              },
              {
                title: "Frontier Methods README",
                body: "Plain-English explanation, install instructions, what's in scope, what isn't.",
              },
            ].map((x) => (
              <div key={x.title} className="card-dark">
                <CheckCircle2
                  size={18}
                  style={{ color: "#00FFBC" }}
                  className="mb-2"
                />
                <h3 className="h-card text-base text-white mb-1.5">{x.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRIBUTE */}
      <section className="py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <span className="tag tag-turq mb-3">Contribute</span>
          <h2 className="h-section text-3xl md:text-5xl mt-3 mb-5">
            Shipped a skill that should be here?
          </h2>
          <p className="text-lg text-gable/70 leading-relaxed max-w-3xl mx-auto mb-8">
            Frontier Methods is open infrastructure. PRs welcomed against any
            of our repositories. We&apos;ll co-author, co-publish, and
            attribute. The goal is to compound UK AI capability — yours counts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={14} /> Open on GitHub
            </a>
            <a
              href="mailto:hello@frontiermethods.com?subject=Skill%20contribution%20to%20Frontier%20Methods"
              className="btn-ghost"
            >
              <Mail size={14} /> Pitch a skill <ArrowRight size={14} />
            </a>
            <Link href="/contact" className="btn-ghost">
              Or get in touch <ArrowRight size={14} />
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

function StatusBadge({ status }: { status: Skill["status"] }) {
  const c = STATUS_COLOUR[status];
  return (
    <span
      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
      style={{ color: c.fg, background: c.bg }}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function KV({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-0.5">
        {label}
      </div>
      <div className="text-gable">{children}</div>
    </div>
  );
}
