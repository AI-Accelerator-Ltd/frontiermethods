"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Download,
  Eye,
  Layers,
  MessageSquare,
  Recycle,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";

type JourneyStage = {
  id: string;
  when: string;
  title: string;
  whatHappens: string;
  inputs: string[];
  outputs: string[];
  icon: React.ReactNode;
};

const JOURNEY: JourneyStage[] = [
  {
    id: "day-1",
    when: "Day 1",
    title: "Creator lands. Conversation starts.",
    whatHappens:
      "Creator lands on the platform. The platform asks 'tell me what you do' in plain English. Captures the structured profile in the background. Within 90 seconds, returns three in-vertical techniques, three cross-vertical parallels, and one downloadable skill to try this week.",
    inputs: ["Free-text Creator description", "Linked Creator profile from ARIA's directory (where consented)"],
    outputs: ["3 in-vertical technique cards", "3 cross-vertical technique cards", "1 open-source skill download"],
    icon: <MessageSquare size={18} />,
  },
  {
    id: "week-1",
    when: "Week 1",
    title: "Creator tries the skill. Platform asks how it went.",
    whatHappens:
      "Creator pulls the recommended skill into their workflow. Platform sends one short follow-up: did it land, what did it unblock, did the technique transfer. Plural value capture: time saved, quality improved, new approach unlocked, knowledge captured.",
    inputs: ["Creator's first session of skill use", "Optional Fellow shadow if placement underway"],
    outputs: ["Feedback record", "Refined Creator profile", "Updated recommendations for week 2+"],
    icon: <Sparkles size={18} />,
  },
  {
    id: "month-1",
    when: "Month 1",
    title: "Recommendations refine. Micro-learning lands.",
    whatHappens:
      "Recommendation engine refines on observed Creator behaviour. Creator has watched 4–6 micro-learning nuggets, applied 1–2 techniques, given feedback on 1. The platform stops being a search engine and starts being a coach.",
    inputs: ["Behavioural signal from session activity", "First feedback responses"],
    outputs: ["Personalised recommendation feed", "1–2 fully-applied techniques", "Pattern flagged for cross-vertical surfacing"],
    icon: <Compass size={18} />,
  },
  {
    id: "month-3",
    when: "Month 3",
    title: "Creator submits their first redacted use case.",
    whatHappens:
      "Creator describes a technique they applied in their own work. Redacted by default: technique, workflow, value — without exposing data, customer, or IP. Cross-vertical recommendations now reach into 2 unfamiliar verticals. The platform starts giving back to the community.",
    inputs: ["Creator-authored use case draft", "Optional Fellow co-authorship"],
    outputs: ["Redacted use case in the library", "Cross-vertical recommendation extension", "Contributor attribution to Creator"],
    icon: <Send size={18} />,
  },
  {
    id: "month-6",
    when: "Month 6",
    title: "Creator becomes a contributor. Group-level patterns appear.",
    whatHappens:
      "Creator is named as a contributor. If they have the social capital, they are sounded out as a vertical champion. Their research group has 3+ Creators active. Platform suggests lab-group-level patterns and — where relevant — HFBAC Fellowship placement is offered.",
    inputs: ["Six months of Creator and group-level activity", "PD-level visibility for the relevant Programme Director"],
    outputs: ["Vertical Champion candidacy", "Lab-group-level technique adoption plan", "Fellowship placement offer (if applicable)"],
    icon: <Users size={18} />,
  },
];

const TIERS = [
  {
    tier: "Researcher self-serve",
    target: "80%+ of use cases",
    body: "Use case the individual researcher can apply this week with existing AI access. Literature deep-research, transcription of lab notes, prompt-based simulation, knowledge capture from lab books.",
    delivered: "Platform — micro-learning + downloadable open-source skill",
    governance: "Auto-approve via the Highest Tide lenses (all green)",
  },
  {
    tier: "Lab / group level",
    target: "15–20% of use cases",
    body: "Needs the whole research group to adopt. Automation across multiple postdocs, an agent running across team data, a fellowship-trained AI Practitioner to embed and operate.",
    delivered: "Platform + AIA coaching + HFBAC Fellowship placement",
    governance: "Lab-group review (Fellow + PI) within 5 working days",
  },
  {
    tier: "Cross-lab / institutional",
    target: "1–3% of use cases",
    body: "Needs the host institution. Shared compute, ethics committee, data-sharing MOU, IP arrangement, export-control review.",
    delivered: "Platform surfaces the pattern; Orbit (RRI + Trusted Research), SimplyBD (industry / regulated), HFBAC (talent) execute",
    governance: "Consortium governance board review monthly",
  },
];

const LENSES = [
  {
    name: "Data confidentiality",
    body: "Is sensitive data exposed? To which models? Under what DPA?",
    aligns: "GDPR · UK DPA 2018",
    owner: "AIA governance reviewer",
  },
  {
    name: "Ethical risk",
    body: "Could the use case cause harm? Who decides? Where's the review board?",
    aligns: "EU AI Act Article 50 disclosure · ISO 42001",
    owner: "AIA governance reviewer · Orbit-RRI escalation",
  },
  {
    name: "Sustainability",
    body: "What's the compute cost? Carbon footprint? Energy budget?",
    aligns: "BSI PAS 440 (Orbit-led) · ARIA sustainability lens",
    owner: "Orbit-RRI",
  },
  {
    name: "IP",
    body: "Whose foreground IP is generated? Whose background IP is used?",
    aligns: "ARIA's founder-friendly default · no foreground IP claim",
    owner: "AIA governance reviewer",
  },
  {
    name: "Trusted Research",
    body: "Are export controls / dual-use considerations engaged?",
    aligns: "UKRI Trusted Research framework",
    owner: "Orbit-RRI",
  },
];

const POLLINATION_MECHANISMS = [
  {
    mode: "Platform-driven (automated)",
    body: "The NIST-based taxonomy recommends techniques across domain boundaries based on shared structure, surfacing parallels a researcher couldn't find on their own. The longer the platform runs, the better its surfacing.",
    icon: <Compass size={18} />,
  },
  {
    mode: "Human-driven (events)",
    body: "AIA runs cross-pollination events — accelerators, workshops, conferences, meetups — where vertical champions meet, share, and carry techniques across boundaries. The platform records what comes out.",
    icon: <Users size={18} />,
  },
];

const ONBOARDING_FLOW = [
  { step: 1, title: "Champion selection", body: "Vertical lead with social capital, technical credibility, and cross-pollination instinct. Paid £1,200/day, ~2 days/month commitment." },
  { step: 2, title: "Vertical seeding", body: "Platform pre-populates the new vertical from the wider library, filtered by NIST taxonomy. The vertical is never empty on day one." },
  { step: 3, title: "AI-assisted asset production", body: "Platform generates bootstrap onboarding content, technique guides, and governance lenses adapted to the vertical's regulatory shape." },
  { step: 4, title: "Continuous community feed", body: "Vertical events, chatbot FAQs, and contributed feedback all pulled in automatically. The vertical grows from launch." },
];

export const dynamic = "force-static";

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Methods · Interactive"
        title={<>Walk the Frontier Methods.</>}
        lede="Click through the four methodology layers: the researcher's Day-1-to-Month-6 journey, the three-tier triage model, the five Highest Tide governance lenses, and the AI-assisted onboarding flow that makes scale credible."
      />

      <CreatorJourney />
      <TriageModel />
      <PollinationMechanism />
      <GovernanceLenses />
      <VerticalOnboarding />

      <PageNav
        prev={{ href: "/solution", label: "The Solution" }}
        next={{ href: "/platform", label: "Platform demo" }}
      />
    </>
  );
}

/* -------------------------- INTERACTIVE: JOURNEY -------------------------- */

function CreatorJourney() {
  const [active, setActive] = useState(0);
  const stage = JOURNEY[active];

  return (
    <section className="py-20 bg-paper">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="tag tag-turq mb-3">Layer 1 of 4 · The Creator journey</span>
          <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4">
            Day 1 to Month 6, from the Creator&apos;s point of view.
          </h2>
          <p className="text-base text-gable/70 leading-relaxed">
            Click each stage. The platform compounds: the longer a Creator engages, the more value
            travels both ways between them and the wider library.
          </p>
        </div>

        {/* Timeline */}
        <div className="card overflow-x-auto">
          <div className="grid grid-cols-5 gap-1 min-w-[700px] mb-6">
            {JOURNEY.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`text-left p-3 rounded-lg transition relative ${
                  i === active
                    ? "bg-gable text-white"
                    : "bg-cream text-gable hover:bg-paper border border-transparent hover:border-gable/15"
                }`}
              >
                <div
                  className={`text-[10px] uppercase tracking-wider mb-1 ${
                    i === active ? "text-turq" : "text-gable/50"
                  }`}
                >
                  Stage {i + 1}
                </div>
                <div className="font-semibold text-sm leading-snug">{s.when}</div>
                <div
                  className={`text-[11px] leading-tight mt-1 ${
                    i === active ? "text-white/70" : "text-gable/60"
                  }`}
                >
                  {s.title.slice(0, 38)}…
                </div>
              </button>
            ))}
          </div>

          {/* Active stage detail */}
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gable/10 animate-fade-in" key={stage.id}>
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="glyph">{stage.icon}</div>
                <span className="tag tag-turq">{stage.when}</span>
              </div>
              <h3 className="h-card text-2xl mb-3">{stage.title}</h3>
              <p className="text-base text-gable/80 leading-relaxed">
                {stage.whatHappens}
              </p>
            </div>
            <div>
              <div className="bg-cream rounded-lg p-4 mb-3">
                <div className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold mb-2">
                  Inputs
                </div>
                <ul className="space-y-1.5">
                  {stage.inputs.map((i) => (
                    <li key={i} className="text-[12px] text-gable/70 flex gap-2 leading-snug">
                      <ChevronRight size={11} className="text-dodger mt-1 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gable rounded-lg p-4 text-white">
                <div className="text-[10px] uppercase tracking-wider text-turq font-semibold mb-2">
                  Outputs
                </div>
                <ul className="space-y-1.5">
                  {stage.outputs.map((i) => (
                    <li key={i} className="text-[12px] text-white/80 flex gap-2 leading-snug">
                      <ChevronRight size={11} className="text-turq mt-1 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex justify-between mt-6 pt-6 border-t border-gable/10">
            <button
              type="button"
              disabled={active === 0}
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <div className="text-sm text-gable/50 self-center">
              {active + 1} / {JOURNEY.length}
            </div>
            <button
              type="button"
              disabled={active === JOURNEY.length - 1}
              onClick={() => setActive((a) => Math.min(JOURNEY.length - 1, a + 1))}
              className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next stage <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- INTERACTIVE: TIERS -------------------------- */

function TriageModel() {
  const [active, setActive] = useState(0);
  const t = TIERS[active];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="tag tag-turq mb-3">Layer 2 of 4 · Triage model</span>
          <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4">
            Three tiers. Each one unlocks a different part of the consortium.
          </h2>
          <p className="text-base text-gable/70 leading-relaxed">
            Use cases triage by what they need to be delivered, not by what data they touch. The
            governance assessment travels with the use case across tiers — no re-bottling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 mb-6">
          {TIERS.map((tier, i) => (
            <button
              key={tier.tier}
              type="button"
              onClick={() => setActive(i)}
              className={`card text-left transition cursor-pointer ${
                i === active ? "border-turq-text bg-white shadow-md" : "hover:border-gable/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="glyph">{i + 1}</div>
                <span className="tag tag-turq">{tier.target}</span>
              </div>
              <h3 className="h-card text-lg mb-1">{tier.tier}</h3>
              <div className={`text-xs ${i === active ? "text-turq-text font-semibold" : "text-gable/50"}`}>
                Click to expand →
              </div>
            </button>
          ))}
        </div>

        <div className="card animate-fade-in" key={t.tier}>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                What it looks like
              </div>
              <p className="text-sm text-gable/80 leading-relaxed">{t.body}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-dodger mb-2">
                How it gets delivered
              </div>
              <p className="text-sm text-gable/80 leading-relaxed">{t.delivered}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-turq-text mb-2">
                Governance route
              </div>
              <p className="text-sm text-gable/80 leading-relaxed">{t.governance}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- POLLINATION ----------------- */

function PollinationMechanism() {
  return (
    <section className="py-20 bg-gable text-white">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="tag tag-on-dark-turq mb-3">Layer 3 of 4 · Cross-vertical pollination</span>
          <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4 text-white">
            Two parallel mechanisms. They reinforce each other.
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            The most valuable thing the platform does is moving the same idea between unrelated
            verticals. It happens automatically — and it happens at events. Together, they compound.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {POLLINATION_MECHANISMS.map((m) => (
            <div key={m.mode} className="card-dark">
              <div className="flex items-center gap-3 mb-3">
                <div className="glyph-dark">{m.icon}</div>
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">
                  Mechanism
                </span>
              </div>
              <h3 className="h-card text-xl mb-2 text-white">{m.mode}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        {/* Worked example */}
        <div className="card-dark mt-6">
          <div className="flex items-center gap-3 mb-3">
            <Recycle size={18} style={{ color: "#00FFBC" }} />
            <span className="text-[10px] uppercase tracking-wider text-turq font-semibold">
              Worked example
            </span>
          </div>
          <h3 className="h-card text-xl mb-2 text-white">
            Voice transcription: stadium walkdowns → QS site visits
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Voice transcription was invented for stadium walkdowns at major events — operators
            recording hazard call-outs while walking the bowl. The same technique transferred unchanged
            into Quantity Surveying site visits, reducing repeat visits and surfacing missed items.
            Same technique, two unrelated verticals. The platform makes that jump deliberate, not
            accidental.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------- GOVERNANCE LENSES ----------------- */

function GovernanceLenses() {
  const [active, setActive] = useState(0);
  const l = LENSES[active];

  return (
    <section className="py-20 bg-paper">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="tag tag-turq mb-3">Layer 4 of 4 · Highest Tide governance</span>
          <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4">
            Five lenses. Each use case scores RAG on each.
          </h2>
          <p className="text-base text-gable/70 leading-relaxed">
            Governance attaches to the use case, not the data source. The lens with the highest tide
            sets the route. Click each lens to see what it covers.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-3 mb-6">
          {LENSES.map((lens, i) => (
            <button
              key={lens.name}
              type="button"
              onClick={() => setActive(i)}
              className={`card text-left transition ${
                i === active ? "bg-gable text-white" : "hover:border-gable/20"
              }`}
            >
              <ShieldCheck
                size={20}
                className={`mb-2 ${i === active ? "text-turq" : "text-gable/40"}`}
              />
              <div
                className={`text-[10px] uppercase tracking-wider mb-1 ${
                  i === active ? "text-white/40" : "text-gable/50"
                }`}
              >
                Lens {i + 1}
              </div>
              <div className={`font-semibold text-sm ${i === active ? "text-white" : "text-gable"}`}>
                {lens.name}
              </div>
            </button>
          ))}
        </div>

        <div className="card animate-fade-in" key={l.name}>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                The question
              </div>
              <p className="text-base text-gable/80 leading-relaxed">{l.body}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-dodger mb-2">
                Alignment
              </div>
              <p className="text-sm text-gable/80 leading-relaxed">{l.aligns}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-turq-text mb-2">
                Owner
              </div>
              <p className="text-sm text-gable/80 leading-relaxed">{l.owner}</p>
            </div>
          </div>
        </div>

        {/* Throughput */}
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          <div className="card text-center">
            <div className="text-3xl font-bold text-turq-text">80%+</div>
            <div className="text-xs text-gable/60 mt-1 leading-snug">
              Triage as researcher self-serve, auto-approve
            </div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-dodger">15-20%</div>
            <div className="text-xs text-gable/60 mt-1 leading-snug">
              Lab-group review (Fellow + PI)
            </div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-gable">1-3%</div>
            <div className="text-xs text-gable/60 mt-1 leading-snug">
              Institutional review (Orbit + AIA + Creator RTO)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- ONBOARDING ----------------- */

function VerticalOnboarding() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="tag tag-turq mb-3">Bonus · How scale works</span>
          <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4">
            AI-assisted vertical onboarding.
          </h2>
          <p className="text-base text-gable/70 leading-relaxed">
            The mechanism that makes one-vertical-per-week credible at full run-rate in Year 3. Each new
            vertical spins up via a repeatable flow. The cost of vertical 80 is much less than the cost
            of vertical 8.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {ONBOARDING_FLOW.map((s) => (
            <div key={s.step} className="card">
              <div className="text-2xl font-bold text-turq-text mb-2">0{s.step}</div>
              <h3 className="h-card text-base mb-2">{s.title}</h3>
              <p className="text-sm text-gable/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
