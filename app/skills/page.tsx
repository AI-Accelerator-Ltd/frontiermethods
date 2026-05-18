import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import { ArrowRight, CheckCircle2, Download, Github, Layers, Star } from "lucide-react";
import { SITE } from "@/lib/nav";

export const metadata = {
  title: "Open-source skills",
  description:
    "Frontier Methods releases AI skills as open-source MIT-licensed packages, each with an evaluation rig. Browse the catalogue and the roadmap.",
};

const SHIPPED = [
  {
    name: "peer-review-pre-check",
    title: "Peer review pre-check",
    description:
      "AI pre-reviewer for grant submissions, milestone reports, and manuscript drafts. Checks against any rubric (ARIA criteria, UKRI, internal panel) before the human reviewer sees it. Raises the floor on submitted quality.",
    status: "Shipped",
    statusColor: "turq",
    license: "MIT",
    language: "Claude skill + Python eval rig",
    released: "May 2026 · launch",
    repoSuffix: "/peer-review-pre-check",
    techniques: ["Content Synthesis"],
    nist: "Content Synthesis",
  },
];

const ROADMAP = [
  { q: "Q3 2026", name: "grant-drafting-skill", title: "Grant & proposal drafting", body: "Captures standard elements so each new bid focuses team time on the novel scientific case." },
  { q: "Q4 2026", name: "living-docs-pipeline", title: "Living technical documentation", body: "Always-current docs for codebases and lab protocols. Hooks into git history." },
  { q: "Q4 2026", name: "team-glossary", title: "Cross-disciplinary glossary", body: "AI-maintained shared vocabulary for multi-discipline teams." },
  { q: "Q1 2027", name: "data-trust-score", title: "Data verification & assurance", body: "Per-figure trust score across documents and trusted source systems." },
  { q: "Q1 2027", name: "lit-monitor", title: "Literature & legislation monitoring", body: "Continuous agent watching preprints, regulators, and standards bodies. One alert, not a daily firehose." },
  { q: "Q2 2027", name: "any-pdf-to-csv", title: "Data extraction from heterogeneous documents", body: "Any-format-in, structured-data-out for scientific PDFs." },
  { q: "Q2 2027", name: "concept-explorer", title: "Rapid mind-mapping & concept exploration", body: "Phase-0 problem framing co-researcher. Surface adjacent fields and key assumptions." },
  { q: "Q3 2027", name: "lab-routing-agent", title: "Lab-team coordination", body: "Routes tasks, equipment bookings, and handovers across distributed multi-site teams." },
];

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Open-source skills"
        title={<>Skills are the operational artefact. They ship open-source by default.</>}
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
                <div className="font-mono text-lg text-white">
                  {SITE.github}
                </div>
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

      {/* SHIPPED */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tag tag-turq mb-3">Shipped today</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              The first skill is in the repo.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              Frontier Methods launched with one real, working open-source
              skill on day one — not vaporware. More skills are released on
              the schedule below, with the evaluation rig published in the
              same commit as the skill itself.
            </p>
          </div>

          {SHIPPED.map((s) => (
            <div key={s.name} className="card border-l-4 !border-l-turq mb-3">
              <div className="md:flex justify-between gap-6 items-start">
                <div className="md:w-2/3 mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Github size={14} className="text-gable/50" />
                    <span className="font-mono text-xs text-gable/70">
                      {SITE.github}{s.repoSuffix}
                    </span>
                    <span
                      className="tag"
                      style={{
                        background: "rgba(0, 122, 94, 0.12)",
                        color: "#007A5E",
                      }}
                    >
                      {s.status}
                    </span>
                  </div>
                  <h3 className="h-card text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-gable/70 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-0.5">
                        Licence
                      </div>
                      <div className="font-mono text-gable">{s.license}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-0.5">
                        Language
                      </div>
                      <div className="text-gable">{s.language}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-0.5">
                        Released
                      </div>
                      <div className="text-gable">{s.released}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-0.5">
                        NIST
                      </div>
                      <div className="text-gable">{s.nist}</div>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://${SITE.github}${s.repoSuffix}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0"
                >
                  <Download size={14} /> Pull from GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tag tag-turq mb-3">Release roadmap</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              30+ open-source skills by August 2027.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              Two skills released per cross-pollination event. Eight skills by
              month 6, additional 22+ by month 12. Each ships with: README,
              SKILL.md, evaluation rig, sample inputs, expected outputs, and
              an MIT licence. Contributions welcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ROADMAP.map((r) => (
              <div key={r.name} className="card">
                <div className="flex items-center justify-between mb-2">
                  <span className="tag tag-gable">{r.q}</span>
                  <Layers size={14} className="text-gable/30" />
                </div>
                <div className="font-mono text-xs text-gable/60 mb-1">
                  {r.name}
                </div>
                <h3 className="font-bold text-[15px] leading-snug mb-2">{r.title}</h3>
                <p className="text-[12px] text-gable/70 leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
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
              { title: "Evaluation rig", body: "Repeatable benchmark against the human or non-AI baseline. Published as code." },
              { title: "MIT licence", body: "Permissive. Re-use without restriction. Attribution welcomed, not required." },
              { title: "Model-agnostic", body: "Built against an interface, not a single vendor. Works with Claude, GPT, Gemini." },
              { title: "Frontier Methods README", body: "Plain-English explanation, install instructions, what's in scope, what isn't." },
            ].map((x) => (
              <div key={x.title} className="card-dark">
                <CheckCircle2 size={18} style={{ color: "#00FFBC" }} className="mb-2" />
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
            attribute. The goal is to compound UK AI capability — yours
            counts.
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
