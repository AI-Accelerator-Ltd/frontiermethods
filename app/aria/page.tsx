import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Beaker,
  CircuitBoard,
  Compass,
  FileText,
  Flame,
  Github,
  Layers,
  PoundSterling,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ARIA Cohort 2 bid companion",
  description:
    "Frontier Methods · ARIA Activation Partners Cohort 2 bid companion. For evaluators.",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

export default function AriaBidHome() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gable text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div
            className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,188,0.4) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,177,255,0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-8xl mx-auto px-5 lg:px-8 relative">
          <div className="flex flex-wrap items-center gap-2 mb-7">
            <span className="tag tag-on-dark-turq">
              ARIA Cohort 2 · Bid companion
            </span>
            <span className="tag tag-on-dark-dodger">
              Bid lead · Mike Chatterton
            </span>
            <span className="tag tag-on-dark-white">
              Phase-gated · £10m / 3 years
            </span>
          </div>

          <h1 className="h-display text-5xl md:text-7xl lg:text-[5.5rem] mb-7 max-w-6xl">
            <span style={{ color: "#00FFBC" }}>Frontier Methods</span>
            <br />
            for ARIA Activation Partners Cohort 2.
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed mb-10">
            ARIA&apos;s Creators don&apos;t need more AI tools. They need a way
            to <em>adopt</em> AI inside research workflows still moving at the
            pace of frontier R&amp;D. This is the bid companion — for the
            reviewers, for the procurement team, for the Programme Directors
            who will read our application.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <Link
              href="/solution"
              className="btn-primary bg-turq !text-gable hover:!bg-white"
            >
              Start with the solution <ArrowRight size={16} />
            </Link>
            <Link href="/platform" className="btn-ghost-dark">
              Try the platform demo <Sparkles size={14} />
            </Link>
            <Link href="/aria/documents" className="btn-ghost-dark">
              Or jump to the documents <FileText size={14} />
            </Link>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-xl overflow-hidden max-w-6xl">
            <div className="stat-block">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#00FFBC" }}
              >
                6
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Founding verticals · Year 1
              </div>
            </div>
            <div className="stat-block">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#00FFBC" }}
              >
                3
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Named PD partnerships · Year 1
              </div>
            </div>
            <div className="stat-block">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#00FFBC" }}
              >
                30+
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Open-source skills shipped · Year 1
              </div>
            </div>
            <div className="stat-block">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#00FFBC" }}
              >
                8&ndash;12
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Embedded AI Practitioner Fellows
              </div>
            </div>
            <div className="stat-block">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#00FFBC" }}
              >
                £3m
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Year 1 ask · phase-gated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE PARAGRAPH SUMMARY */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <p className="text-xl md:text-2xl leading-relaxed text-gable">
            Frontier Methods surfaces{" "}
            <strong>techniques, not tools</strong>, across vertical boundaries
            — releasing <strong>open-source AI skills</strong> UK Creators can
            run today, and embedding{" "}
            <strong>AI Practitioner Fellows</strong> inside Creator teams.
            Year 1 delivers six founding verticals plus three named Programme
            Director partnerships. Year 2 and Year 3 scale conditionally on
            demonstrated Creator value, against milestones the ARIA CFO can
            pull on.
          </p>
        </div>
      </section>

      {/* REVIEWER ROADMAP */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tag tag-turq mb-3">For the evaluator</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              Where to start, depending on what you&apos;re looking for.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              We&apos;ve designed each page to answer one of the questions a
              real reviewer would ask. Jump to the part that matters to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROUTES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="card card-hover group"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="glyph">{r.icon}</div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gable/50">
                      For
                    </div>
                    <div className="text-sm font-semibold">{r.audience}</div>
                  </div>
                </div>
                <h3 className="h-card text-lg mt-3 mb-1.5">{r.title}</h3>
                <p className="text-sm text-gable/70 leading-relaxed mb-3">
                  {r.lede}
                </p>
                <div className="text-[12px] font-semibold text-turq-text group-hover:text-gable transition flex items-center gap-1">
                  {r.cta} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE SEVEN CRITIQUE VECTORS */}
      <section className="bg-gable text-white py-20">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-on-dark-turq mb-3">
              Stress-tested · 9 reviewer personas
            </span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              The seven questions that decide this bid.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              We modelled nine reviewers — Pranay, Aayush, Tammy, Olivia,
              Kathleen Fisher, Antonia Jenkinson, Matt Clifford, an external
              academic expert, and a Programme Director. Across all of them,
              the same seven critique vectors recur. Here&apos;s where the bid
              concentrates its answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {CRITIQUES.map((c, i) => (
              <div key={c.title} className="card-dark">
                <div className="flex items-center gap-3 mb-3">
                  <div className="glyph-dark">{i + 1}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40">
                    Critique vector
                  </div>
                </div>
                <h3 className="h-card text-xl mb-1.5 text-white">{c.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-3">
                  <span className="text-white/40 uppercase text-[10px] tracking-wider mr-2">
                    Reviewer
                  </span>
                  {c.who}
                </p>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  <span
                    style={{ color: "#00FFBC" }}
                    className="uppercase text-[10px] tracking-wider mr-2 font-semibold"
                  >
                    How we answer
                  </span>
                  {c.answer}
                </p>
                <Link
                  href={c.href}
                  className="text-[12px] text-turq hover:text-white transition flex items-center gap-1"
                >
                  Read in full <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE THINGS YEAR 1 */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-turq mb-3">Year 1 commitments</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              Three statements we&apos;ll make on the record.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              Each is measurable, milestone-gated, supported by named
              operators with public track records, and falls inside the £3m
              Year 1 envelope. None is &quot;help with adoption&quot;.
            </p>
          </div>

          <div className="space-y-4">
            {YEAR_ONE.map((c, i) => (
              <div
                key={c.headline}
                className="card lg:flex gap-6 items-start border-l-4 !border-l-turq"
              >
                <div className="text-[11px] uppercase tracking-wider text-turq-text font-bold w-24 shrink-0 mb-3 lg:mb-0">
                  Commitment {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 leading-snug">
                    {c.headline}
                  </h3>
                  <p className="text-sm text-gable/70 leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TEASERS */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-on-dark-turq mb-3">For the curious</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              Two things we built for you.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Click through the methods and the platform itself. Both are
              working — not screenshots, not concept art.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/methods"
              className="card-dark hover:bg-white/[0.04] transition group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Compass size={24} style={{ color: "#00FFBC" }} />
                <span className="tag tag-on-dark-turq">Interactive</span>
              </div>
              <h3 className="h-card text-2xl mb-2 text-white">
                The methods walkthrough
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Step through the Creator&apos;s Day-1-to-Month-6 journey. See
                the triage logic, the cross-vertical pollination flow, and the
                Highest Tide governance lenses in action.
              </p>
              <div className="text-[13px] text-turq flex items-center gap-1 group-hover:text-white transition">
                Walk the methods <ArrowRight size={13} />
              </div>
            </Link>

            <Link
              href="/platform"
              className="card-dark hover:bg-white/[0.04] transition group"
            >
              <div className="flex items-center gap-3 mb-4">
                <CircuitBoard size={24} style={{ color: "#00FFBC" }} />
                <span className="tag tag-on-dark-turq">Interactive</span>
              </div>
              <h3 className="h-card text-2xl mb-2 text-white">
                The platform demo
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                A working mock of Frontier Methods. Pick a Creator profile,
                describe their work, watch in-vertical and cross-vertical
                techniques surface, and pull a skill that ships open-source on
                day 1.
              </p>
              <div className="text-[13px] text-turq flex items-center gap-1 group-hover:text-white transition">
                Try the platform <ArrowRight size={13} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <span className="tag tag-turq mb-3">For ARIA reviewers</span>
          <h2 className="h-section text-3xl md:text-5xl mt-3 mb-5">
            Want the source documents?
          </h2>
          <p className="text-lg text-gable/70 leading-relaxed max-w-3xl mx-auto mb-8">
            The full bid, the cost sheet, the solution design, the reviewer
            stress-test, and the partner research files are all available in
            one place. Take whatever helps you score this fairly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/aria/documents" className="btn-primary">
              <FileText size={16} /> Open the documents library
            </Link>
            <Link href="/aria/faq" className="btn-ghost">
              Or read the reviewer FAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const ROUTES = [
  {
    audience: "Pranay Shah — counterfactual",
    title: "Why ARIA, why now",
    lede: "The Cohort 2 capability gap, the political moment, and the counterfactual: cross-tenant insight no commercial customer ever pays for.",
    cta: "Why ARIA, why now",
    href: "/why-aria",
    icon: <Flame size={16} />,
  },
  {
    audience: "Aayush Chadha — AI substance",
    title: "Platform & methods",
    lede: "Working demo of cross-vertical technique surfacing, plus the methods walkthrough. AI capability, not adoption coaching.",
    cta: "Open the platform demo",
    href: "/platform",
    icon: <CircuitBoard size={16} />,
  },
  {
    audience: "Kathleen Fisher — technical surprise",
    title: "Solution architecture",
    lede: "Eight operational components, four data objects, the open-source release cycle, evaluation rigs on every skill.",
    cta: "Read the solution design",
    href: "/solution",
    icon: <Layers size={16} />,
  },
  {
    audience: "Antonia Jenkinson — unit economics",
    title: "Cost & commercials",
    lede: "Phase-gated £3m + £3.5m + £3.5m envelope. Worked unit economics. Clean prime/sub structure. Zero foreground-IP.",
    cta: "Read the commercials",
    href: "/aria/cost",
    icon: <PoundSterling size={16} />,
  },
  {
    audience: "Tammy Thomas-Brown — procurement",
    title: "Risks & governance",
    lede: "Named risks, named mitigations. Highest Tide governance methodology. Shadow Robot Chinese-wall. Substitution plan.",
    cta: "Read the risk register",
    href: "/aria/risks",
    icon: <ShieldCheck size={16} />,
  },
  {
    audience: "Matt Clifford — UK benefit + founder",
    title: "Team & founder spotlight",
    lede: "Mike personally underwrites the bid. Three named operators. No four-logo committee. The single accountable lead Clifford asks for.",
    cta: "Meet the team",
    href: "/team",
    icon: <Users size={16} />,
  },
  {
    audience: "External reviewer — academic credibility",
    title: "Programme Directors & evidence",
    lede: "Three named PD partnerships in Year 1 (Bramhavar, Dalrymple, Wang/Wurm). Fourteen seeded use cases. Named first Creators.",
    cta: "See the evidence",
    href: "/aria/evidence",
    icon: <Beaker size={16} />,
  },
  {
    audience: "Programme Director — Creator value",
    title: "Programme & timeline",
    lede: "Month-by-month Year 1 launch sequence. Time-bound first-quarter commitments. Two hours/month minimum, one day max.",
    cta: "Read the programme",
    href: "/programme",
    icon: <Target size={16} />,
  },
  {
    audience: "Anyone — the spirit of the thing",
    title: "Open-source commitment",
    lede: "Every operational skill ships open-source from Year 1 under ARIA co-branding. 30+ in Year 1. The political answer to the £50m question.",
    cta: "See the open-source plan",
    href: "/aria/open-source",
    icon: <Github size={16} />,
  },
];

const CRITIQUES = [
  {
    title: "Counterfactual / additionality",
    who: "Pranay Shah · Matt Clifford · Kathleen Fisher · external reviewer",
    answer:
      "AIA already builds the commercial version of this platform for individual enterprises. The shared, public-good UK platform with cross-tenant insight is something no commercial customer ever pays for. ARIA is the only possible funder.",
    href: "/why-aria",
  },
  {
    title: "AI capability vs adoption coaching",
    who: "Aayush Chadha · Kathleen Fisher · external reviewer",
    answer:
      "30+ open-source AI skills shipped Year 1, each with an evaluation rig. Embedded AI Practitioner Fellows inside Creator teams. Three named Programme Director partnerships co-designing technique cards at the bench, not in workshops.",
    href: "/aria/open-source",
  },
  {
    title: "Named founder vs four-logo committee",
    who: "Matt Clifford · Kathleen Fisher",
    answer:
      "Mike Chatterton is named bid lead and personally underwrites the proposal. Three named operators (Martin de Heaver, Alix Johnstone-Morfoisse, Helen Wingrove-Sanders) carry delivery scope. One accountable contracting entity (AIA Ltd).",
    href: "/team",
  },
  {
    title: "Cost realism & unit economics",
    who: "Antonia Jenkinson · Tammy Thomas-Brown · Olivia Donovan",
    answer:
      "Phase-gated trajectory: £3m Y1 (6 verticals), £3.5m Y2 (~30 verticals, conditional), £3.5m Y3 (~100 verticals, conditional). Marginal cost per vertical drops as AI-assisted onboarding compounds. Worked unit economics published.",
    href: "/aria/cost",
  },
  {
    title: "IP & conflicts of interest",
    who: "Antonia Jenkinson · Tammy Thomas-Brown",
    answer:
      "Zero foreground-IP claim by the consortium. Skills MIT-licensed. Platform, methodology, and seed library remain AIA-contributed in-kind. HFBAC's 10-year Shadow Robot embed declared with explicit Chinese-wall: no fellow placed at Shadow Robot under the ARIA contract.",
    href: "/aria/governance",
  },
  {
    title: "UK economic benefit",
    who: "Matt Clifford · Pranay Shah · Kathleen Fisher",
    answer:
      "UK-domiciled prime. UK-resident staff. UK-only delivery. Open-source UK outputs released from Year 1 — directly answering the April 2025 £50m-to-US-firms criticism. UK-attributable jobs, fellowships, and capability uplift quantified quarterly.",
    href: "/aria/open-source",
  },
  {
    title: "Concrete first quarter for a named space",
    who: "Programme Directors · Pranay Shah",
    answer:
      "First 90 days mapped per PD partnership. We read the opportunity space document end-to-end at week 1 and quote it back at kick-off. Named first Creators by week 4. First technique card co-authored by week 8. Joint publication by week 9.",
    href: "/aria/programme-directors",
  },
];

const YEAR_ONE = [
  {
    headline:
      "Release at least 30 open-source AI skills — ARIA-co-branded, MIT-licensed, each with an evaluation rig — directly applicable to the existing Creator cohort.",
    detail:
      "Ships on a public GitHub repository (github.com/frontier-methods). Two skills released in Q4 events. Adversarial review window on each release. Quality bar owned by the Year-1 senior hire.",
  },
  {
    headline:
      "Place 8–12 AI Practitioner Fellows inside Creator teams using HFBAC's Chemistry First methodology — proven by their 10-year embed at Shadow Robot Company.",
    detail:
      "12-month placements, 3–4 days/week in the Creator team, 1 day/week on cross-cohort training. Orbit-RRI delivers a 2-day Trusted Research + PAS 440 module to each cohort. Shadow Robot conflict declared with explicit Chinese-wall.",
  },
  {
    headline:
      "Run quarterly cross-pollination events; secure adoption of the open-source skills by 10+ non-ARIA UK research organisations; bind three Programme Directors to a structured 12-month engagement.",
    detail:
      "Q1 London, Q2 Cambridge, Q3 Manchester, Q4 Oxford. Bramhavar (Scaling Compute), Dalrymple (Safeguarded AI), and one Cohort 2 PD (Wang or Wurm). Engagement minimum 2 hours/month, maximum 1 day/month — explicit in the contract.",
  },
];
