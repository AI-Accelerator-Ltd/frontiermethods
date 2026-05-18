import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  CircuitBoard,
  Compass,
  FlaskConical,
  Github,
  Hammer,
  Layers,
  Lock,
  Microscope,
  Sparkles,
  Users2,
} from "lucide-react";
import { SITE } from "@/lib/nav";
import CrossVerticalDiagram from "@/components/visuals/CrossVerticalDiagram";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gable text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div
            className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,188,0.45) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,177,255,0.32) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-8xl mx-auto px-5 lg:px-8 relative">
          <div className="flex flex-wrap items-center gap-2 mb-7">
            <span className="tag tag-on-dark-turq">
              Open-source · UK-built · founder-led
            </span>
            <span className="tag tag-on-dark-dodger">
              An AI Accelerator initiative
            </span>
            <span className="tag tag-on-dark-white">
              In application · ARIA Cohort 2
            </span>
          </div>

          <h1 className="h-display text-5xl md:text-7xl lg:text-[5.5rem] mb-7 max-w-6xl">
            AI methods for the people building the next{" "}
            <span style={{ color: "#00FFBC" }}>frontier of science</span>.
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-4xl leading-relaxed mb-10">
            Frontier Methods is the UK platform for AI-accelerated research.
            We surface AI <em>techniques</em>, not tools, across vertical
            boundaries; we release open-source skills UK researchers can run
            today; and we embed AI Practitioner Fellows inside research teams.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <Link
              href="/methods"
              className="btn-primary bg-turq !text-gable hover:!bg-white"
            >
              See the methods <ArrowRight size={16} />
            </Link>
            <Link href="/platform" className="btn-ghost-dark">
              Try the platform <Sparkles size={14} />
            </Link>
            <a
              href={`https://${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark"
            >
              <Github size={14} /> GitHub
            </a>
          </div>

          {/* The promise grid */}
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden max-w-6xl">
            <div className="stat-block">
              <div className="text-[10px] uppercase tracking-wider text-turq mb-2">
                The differentiator
              </div>
              <div className="font-bold text-lg text-white leading-tight mb-2">
                Cross-vertical surfacing
              </div>
              <div className="text-sm text-white/60 leading-relaxed">
                The strongest AI reuse sits outside a researcher&apos;s home
                domain. Voice transcription invented for stadium walkdowns is
                now the QS site-visit standard. We make those jumps
                deliberate.
              </div>
            </div>
            <div className="stat-block">
              <div className="text-[10px] uppercase tracking-wider text-dodger mb-2">
                The pedagogical bet
              </div>
              <div className="font-bold text-lg text-white leading-tight mb-2">
                Techniques over tools
              </div>
              <div className="text-sm text-white/60 leading-relaxed">
                Model utility shifts daily. A fellowship-trained researcher
                remains useful three years out because the technique transfers
                across whatever model they end up running.
              </div>
            </div>
            <div className="stat-block">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-2">
                The commitment
              </div>
              <div className="font-bold text-lg text-white leading-tight mb-2">
                Open-source UK outputs
              </div>
              <div className="text-sm text-white/60 leading-relaxed">
                Every skill MIT-licensed, with an evaluation rig. Public
                GitHub repository. Available to any UK research team funded
                by anyone — not just by us.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <p className="text-xl md:text-2xl leading-relaxed text-gable">
            UK research teams don&apos;t need more AI tools. They need a way to
            <strong> adopt</strong> AI inside workflows still moving at the
            pace of frontier R&amp;D — where techniques compound faster than
            tools, where the binding constraint is competency rather than data
            access, and where the most powerful use cases often come from{" "}
            <strong>outside</strong> a researcher&apos;s home domain.
          </p>
        </div>
      </section>

      {/* CROSS-VERTICAL VISUAL */}
      <section className="bg-gable py-16 text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <span className="tag tag-on-dark-turq mb-3">The differentiator, drawn</span>
            <h2 className="h-section text-3xl md:text-4xl mt-3 mb-3 text-white">
              Techniques travel across vertical boundaries.
            </h2>
            <p className="text-base text-white/65 leading-relaxed">
              The strongest AI reuse consistently sits outside a
              researcher&apos;s home domain. The platform makes those jumps
              deliberate — surfacing techniques discovered in one vertical
              into the workflows of another.
            </p>
          </div>
          <div className="card-dark p-4 md:p-6">
            <CrossVerticalDiagram />
          </div>
        </div>
      </section>

      {/* THREE AUDIENCES */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="tag tag-turq mb-3">For three groups, today</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              Built for the people doing the work.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              Frontier Methods is shaped for three audiences that the
              commercial AI market under-serves: UK researchers, funders of
              UK research, and contributors who want to ship open-source skills
              into the ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/methods" className="card card-hover">
              <Microscope size={22} className="text-turq-text mb-3" />
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-1">
                For UK researchers
              </div>
              <h3 className="h-card text-lg mb-2">
                Get AI techniques you can use this week
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-3">
                Describe your work in plain English. We return three techniques
                from your domain, three from deliberately unrelated fields, and
                one open-source skill to try this week. Five minutes to a
                first try.
              </p>
              <div className="text-[12px] font-semibold text-turq-text flex items-center gap-1">
                Walk the methods <ArrowRight size={12} />
              </div>
            </Link>
            <Link href="/skills" className="card card-hover">
              <Hammer size={22} className="text-dodger mb-3" />
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-1">
                For contributors and developers
              </div>
              <h3 className="h-card text-lg mb-2">
                Ship a skill. Stand it up next to our evaluation rig.
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-3">
                Every released skill is MIT-licensed and carries a published
                evaluation rig. Contribute new skills, fork existing ones, or
                run our rigs against your own AI tooling. Open
                infrastructure, by design.
              </p>
              <div className="text-[12px] font-semibold text-dodger flex items-center gap-1">
                Browse the skills <ArrowRight size={12} />
              </div>
            </Link>
            <Link href="/about" className="card card-hover">
              <Users2 size={22} className="text-gable mb-3" />
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-1">
                For funders and policy
              </div>
              <h3 className="h-card text-lg mb-2">
                A UK platform that compounds across grants
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-3">
                Cross-tenant insight no commercial customer pays for. UK-built,
                UK-owned, governed by competency rather than data access. The
                operating model is designed to compound across UKRI, the
                Catapults, Wellcome, and ARIA in parallel.
              </p>
              <div className="text-[12px] font-semibold text-gable flex items-center gap-1">
                Read the story <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IT IS — VISUAL EXPLAINER */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-turq mb-3">How it works</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
              Five things the platform does.
            </h2>
            <p className="text-lg text-gable/70 leading-relaxed">
              The architecture isn&apos;t theoretical. It draws on AI
              Accelerator&apos;s enterprise work with Virgin Red, Morgan
              Sindall, and ~1,000 real use cases AIA contributes in kind. The
              platform converts that into UK public-good infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FIVE.map((t, i) => (
              <div key={t.title} className="card card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="glyph">0{i + 1}</div>
                  <div className="text-turq-text">{t.icon}</div>
                </div>
                <h3 className="h-card text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-gable/70 leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
            <Link
              href="/methods"
              className="card card-hover bg-gable !text-white flex flex-col justify-between group"
            >
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-3">
                  Walk through interactively
                </div>
                <h3 className="h-card text-lg mb-2 text-white">
                  Click through the methods
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  The Creator&apos;s Day-1 to Month-6 journey, the three-tier
                  triage model, the five governance lenses, and the
                  AI-assisted vertical onboarding flow.
                </p>
              </div>
              <div className="text-[12px] text-turq mt-4 flex items-center gap-1 group-hover:text-white transition">
                Walk the methods <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* OPEN SOURCE STRIP */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <span className="tag tag-on-dark-turq mb-3">Open source</span>
              <h2 className="h-section text-3xl md:text-4xl mt-3 mb-5 text-white">
                Every skill ships open-source.
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                MIT-licensed. Public GitHub repository. Evaluation rig on every
                release. Any UK research team funded by anyone &mdash; ARIA,
                UKRI, the Catapults, Wellcome, or self-funded &mdash; can pick
                up a Frontier Methods skill and apply it. Public good by
                design.
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://${SITE.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                >
                  <Github size={14} /> {SITE.github}
                </a>
                <Link href="/skills" className="btn-ghost-dark">
                  Browse the skills <ArrowRight size={13} />
                </Link>
              </div>
            </div>
            <div className="md:col-span-7 card-dark font-mono text-[12px] leading-relaxed">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white/40 ml-2 text-[10px] uppercase tracking-wider">
                  Terminal · skill release
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="text-white/40">$ git clone {SITE.github}/peer-review-pre-check</div>
                <div className="text-white/40">$ cd peer-review-pre-check &amp;&amp; ls</div>
                <div className="text-white/70 pl-4">README.md  SKILL.md  evals/  LICENSE  CONTRIBUTING.md</div>
                <div className="text-white/40">$ cat SKILL.md | head -3</div>
                <div className="text-turq">---</div>
                <div className="text-turq">name: peer-review-pre-check</div>
                <div className="text-turq">description: AI pre-reviewer for grant submissions...</div>
                <div className="text-white/40 mt-3">$ python evals/run.py --rubric=aria-criteria.yaml</div>
                <div className="text-white/70 pl-4">
                  ✓ 5 / 5 acceptance criteria covered
                </div>
                <div className="text-white/70 pl-4">
                  ✓ benchmark vs human reviewer: 91% agreement
                </div>
                <div className="text-white/70 pl-4">
                  ✓ MIT-licensed · UK-built
                </div>
                <div className="text-turq mt-1">→ ready to ship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="md:flex items-end justify-between gap-8 mb-10">
            <div className="max-w-3xl">
              <span className="tag tag-turq mb-3">The team</span>
              <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4">
                One founder. Three named operators.
              </h2>
              <p className="text-lg text-gable/70 leading-relaxed">
                Frontier Methods is founder-led by Mike Chatterton (AI
                Accelerator). Delivery scope sits with three named operators —
                each with a public track record in their domain.
              </p>
            </div>
            <Link href="/team" className="btn-ghost shrink-0 mt-4 md:mt-0">
              Meet the team <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map((p) => (
              <div key={p.name} className="card">
                <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                  {p.role}
                </div>
                <div className="font-bold text-lg leading-tight">{p.name}</div>
                <div className="text-sm text-gable/70 mb-3">{p.org}</div>
                <p className="text-[13px] text-gable/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARIA REVIEWER ENTRANCE */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="card bg-gable !text-white border-t-4 !border-t-turq">
            <div className="md:flex items-start gap-10">
              <div className="md:w-2/3 mb-5 md:mb-0">
                <div className="flex items-center gap-2 mb-3">
                  <Lock size={14} className="text-turq" />
                  <span className="tag tag-on-dark-turq">
                    For ARIA reviewers
                  </span>
                  <span className="tag tag-on-dark-white">Bid companion</span>
                </div>
                <h2 className="h-section text-2xl md:text-3xl mb-4 text-white">
                  Reviewing our ARIA Activation Partners Cohort 2 application?
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-2">
                  Step inside the bid. Reviewer roadmap, the seven critique
                  vectors we&apos;ve modelled, the full programme detail, cost
                  shape, risk register, governance methodology, Programme
                  Director engagement plans, and the document library.
                </p>
                <p className="text-[12px] text-white/40">
                  Bid companion content is discoverable via direct URL but
                  not indexed in search engines.
                </p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <Link
                  href="/aria"
                  className="inline-flex items-center gap-2 bg-turq !text-gable hover:bg-white px-5 py-3 rounded-lg font-semibold"
                >
                  Open the bid companion <ArrowRight size={15} />
                </Link>
                <div className="text-[11px] text-white/40 mt-3">
                  Decision · 12 August 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <span className="tag tag-turq mb-3">Want to get involved?</span>
          <h2 className="h-section text-3xl md:text-5xl mt-3 mb-5">
            Three ways in.
          </h2>
          <p className="text-lg text-gable/70 leading-relaxed max-w-3xl mx-auto mb-8">
            Frontier Methods is built around partnerships. If you&apos;re a
            researcher who wants AI capability in your team, a funder who wants
            to back a vertical, or a contributor who wants to ship a skill — we
            want to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="btn-ghost">
              Read the longer story
            </Link>
            <a
              href={`https://${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={14} /> See the repo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const FIVE = [
  {
    icon: <Compass size={18} />,
    title: "Cross-vertical technique surfacing",
    body: "A researcher describes their work. We return three in-domain techniques, three cross-domain parallels, and one open-source skill to try this week. The strongest reuse always sits outside the home field.",
  },
  {
    icon: <Layers size={18} />,
    title: "Techniques over tools",
    body: "Model utility shifts daily. Teaching the current tool dates the curriculum in weeks. Techniques survive because they describe what the human is doing — and transfer across whatever model the researcher ends up running.",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "Use cases as redacted shareable IP",
    body: "Use cases submit in redacted form by default. Contributors share technique, workflow, value — without exposing data, customer, or IP. The most defensive contributors finally have a way in.",
  },
  {
    icon: <Beaker size={18} />,
    title: "Governance by user competency",
    body: "Risk is about competency, not data or tool access. Highest Tide attaches governance to the use case, not the data source. The assessment travels across labs and institutions — auditable, escalateable, and aligned to UKRI Trusted Research and BSI PAS 440.",
  },
  {
    icon: <CircuitBoard size={18} />,
    title: "Micro-learning + feedback loops",
    body: "Five-minute videos paired with one downloadable skill each. Recommendation engine refines on observed behaviour. Every artefact carries a feedback prompt — time saved, quality improved, new approach unlocked, knowledge captured.",
  },
];

const TEAM = [
  {
    name: "Mike Chatterton",
    role: "Founder · AI Accelerator",
    org: "AI Accelerator Limited",
    body: "Author of the AI Adoption Framework, Highest Tide governance methodology, and the Eleven AI Forces analysis. Founded AI Accelerator in 2024.",
  },
  {
    name: "Martin de Heaver",
    role: "Academic & RRI lead",
    org: "Orbit-RRI",
    body: "Director of Orbit-RRI. Embedded in the Oxford AIMS CDT and Heriot-Watt Applied Photonics CDT. Founder track: Ipsotek, GEOMii, Safewise.ai.",
  },
  {
    name: "Alix Johnstone-Morfoisse",
    role: "Nuclear / industry lead",
    org: "SimplyBD",
    body: "Founder of SimplyBD, a nuclear-sector market-access consultancy. PhD on radiation effects on robots, Birmingham. WNA member.",
  },
  {
    name: "Helen Wingrove-Sanders",
    role: "Fellowship operations lead",
    org: "HFBAC · TalentJet",
    body: "Author of Hire Ready. Chemistry First recruitment methodology. 10-year embedded recruitment partnership with Shadow Robot Company.",
  },
];
