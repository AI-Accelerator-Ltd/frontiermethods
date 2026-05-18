"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import {
  ArrowRight,
  Beaker,
  Bot,
  Brain,
  CheckCircle2,
  ChevronRight,
  Compass,
  Download,
  Eye,
  EyeOff,
  Github,
  Layers,
  Lock,
  MessagesSquare,
  Send,
  ShieldCheck,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  User,
} from "lucide-react";
import {
  CREATORS,
  TECHNIQUES,
  USE_CASES,
  SKILLS,
  LENS_LABELS,
  type Creator,
  type Technique,
} from "@/lib/platform-data";

export default function PlatformDemo() {
  const [creatorId, setCreatorId] = useState<string>(CREATORS[0].id);
  const [selectedTechId, setSelectedTechId] = useState<string | null>(null);
  const [redactToggle, setRedactToggle] = useState<boolean>(true);

  const creator = useMemo(
    () => CREATORS.find((c) => c.id === creatorId)!,
    [creatorId],
  );
  const tech = selectedTechId ? TECHNIQUES[selectedTechId] : null;
  const skill = SKILLS[creator.skillId];

  return (
    <>
      <PageHeader
        eyebrow="Platform demo · Interactive"
        title={<>The Frontier Methods platform.</>}
        lede="A live mock of Frontier Methods. Pick a researcher profile. Read their prompt. Watch the platform return three in-vertical techniques, three cross-vertical parallels, and one open-source skill. Open any technique to see use cases, redaction controls, and the Highest Tide governance lens."
      />

      {/* TOP-LEVEL CREATOR PICKER */}
      <section className="py-12 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-6">
            <span className="tag tag-turq mb-3">Step 1 · Pick a Creator profile</span>
            <h2 className="h-section text-2xl md:text-3xl mt-2 mb-2">
              Four illustrative ARIA Creators.
            </h2>
            <p className="text-sm text-gable/70">
              Each profile is illustrative — the platform onboards real Creators
              by conversation, not picker. The picker exists here so you can
              jump between worked examples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {CREATORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCreatorId(c.id);
                  setSelectedTechId(null);
                }}
                className={`card text-left transition ${
                  c.id === creator.id
                    ? "bg-gable text-white"
                    : "hover:border-gable/20"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <User
                    size={16}
                    className={c.id === creator.id ? "text-turq" : "text-gable/50"}
                  />
                  <span
                    className={`text-[10px] uppercase tracking-wider ${
                      c.id === creator.id ? "text-white/40" : "text-gable/50"
                    }`}
                  >
                    {c.vertical}
                  </span>
                </div>
                <div
                  className={`font-bold text-sm leading-tight mb-0.5 ${
                    c.id === creator.id ? "text-white" : "text-gable"
                  }`}
                >
                  {c.name}
                </div>
                <div
                  className={`text-xs ${
                    c.id === creator.id ? "text-white/60" : "text-gable/60"
                  }`}
                >
                  {c.role}
                </div>
                <div
                  className={`text-[11px] mt-2 ${
                    c.id === creator.id ? "text-turq" : "text-turq-text"
                  }`}
                >
                  {c.arias}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* THE CONVERSATION + PROFILE */}
      <section className="py-12 bg-cream" key={creator.id}>
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-6">
            <span className="tag tag-turq mb-3">Step 2 · Tell the platform what you do</span>
            <h2 className="h-section text-2xl md:text-3xl mt-2 mb-2">
              Plain-English onboarding.
            </h2>
            <p className="text-sm text-gable/70">
              The platform asks one question. No forms. The conversation captures
              the structured profile behind the scenes.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-7 card animate-fade-in">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gable/10">
                <div className="w-8 h-8 rounded-full bg-gable text-white flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <div className="font-semibold text-sm">Frontier Methods</div>
                  <div className="text-xs text-gable/50">frontiermethods.com · Day 1 session</div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-cream flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-gable" />
                  </div>
                  <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
                    Hi, I&apos;m Frontier Methods. Tell me what you&apos;re
                    working on in your own words — what you spend most of your
                    time on, what&apos;s stuck, what would be unblocked if you
                    had a few more hours back.
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-gable text-white rounded-lg p-3 text-sm leading-relaxed max-w-md">
                    {creator.prompt}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gable flex items-center justify-center shrink-0">
                    <User size={14} className="text-white" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-cream flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-gable" />
                  </div>
                  <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
                    Got it. Based on that, I&apos;ll surface three techniques
                    from your vertical, three from deliberately adjacent fields
                    that solve a shaped-similar problem, and one open-source
                    skill you can try this week. Scroll down to see what
                    I found.
                  </div>
                </div>
              </div>

              <div className="bg-paper border border-gable/10 rounded-lg p-3 text-xs text-gable/60 flex items-center gap-2">
                <Sparkles size={12} className="text-turq-text" />
                Captured structured profile (visible to the Creator at any point):
                <code className="font-mono text-[11px] text-gable">vertical={creator.vertical.toLowerCase().replace(/[ ]+/g, "_")} · arias={creator.arias.toLowerCase().replace(/[ —]+/g, "_")}</code>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="card bg-gable text-white">
                <div className="flex items-center gap-3 mb-3">
                  <User size={16} className="text-turq" />
                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    Creator profile
                  </span>
                </div>
                <h3 className="h-card text-lg mb-1 text-white">{creator.name}</h3>
                <div className="text-sm text-white/70 mb-3">{creator.role}</div>
                <div className="text-[12px] text-white/60 leading-relaxed mb-4">
                  {creator.profile}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-white/40 text-[10px] uppercase tracking-wider">
                      Vertical
                    </div>
                    <div className="text-white font-semibold">
                      {creator.vertical}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <div className="text-white/40 text-[10px] uppercase tracking-wider">
                      ARIA space
                    </div>
                    <div className="text-white font-semibold leading-tight text-[11px]">
                      {creator.arias}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SURFACED TECHNIQUES + SKILL */}
      <section className="py-12 bg-paper" key={creator.id + "-techs"}>
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-6">
            <span className="tag tag-turq mb-3">Step 3 · Surfaced in 90 seconds</span>
            <h2 className="h-section text-2xl md:text-3xl mt-2 mb-2">
              Three in-vertical. Three cross-vertical. One skill to try.
            </h2>
            <p className="text-sm text-gable/70">
              The platform&apos;s differentiator — the cross-vertical column
              consistently has the highest acted-on rate, because the strongest
              reuse sits outside the researcher&apos;s home field. Click any
              technique to open the detail panel.
            </p>
          </div>

          <div className="grid lg:grid-cols-7 gap-4">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5 bg-turq rounded-sm" />
                <span className="text-[10px] uppercase tracking-wider text-turq-text font-semibold">
                  From your vertical
                </span>
              </div>
              <div className="space-y-2">
                {creator.techniqueIds.map((tid) => (
                  <TechniqueCard
                    key={tid}
                    tech={TECHNIQUES[tid]}
                    isActive={tid === selectedTechId}
                    onClick={() => setSelectedTechId(tid === selectedTechId ? null : tid)}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5 bg-dodger rounded-sm" />
                <span className="text-[10px] uppercase tracking-wider text-dodger font-semibold">
                  Cross-vertical · the differentiator
                </span>
              </div>
              <div className="space-y-2">
                {creator.crossVerticalIds.map((tid) => (
                  <TechniqueCard
                    key={tid}
                    tech={TECHNIQUES[tid]}
                    cross
                    isActive={tid === selectedTechId}
                    onClick={() => setSelectedTechId(tid === selectedTechId ? null : tid)}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5 bg-gable rounded-sm" />
                <span className="text-[10px] uppercase tracking-wider text-gable font-semibold">
                  Try this week
                </span>
              </div>
              <div className="card bg-gradient-to-br from-paper to-cream border-gable/15">
                <Github size={20} className="text-gable mb-3" />
                <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-1">
                  Open-source skill
                </div>
                <h4 className="font-bold text-sm leading-tight mb-2">{skill.name}</h4>
                <p className="text-[12px] text-gable/70 leading-relaxed mb-3">
                  {skill.description}
                </p>
                <div className="space-y-1 text-[11px] text-gable/60">
                  <div className="flex justify-between">
                    <span>Licence</span>
                    <span className="font-mono">{skill.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eval rig</span>
                    <span className="text-turq-text font-semibold">
                      {skill.evalRig ? "yes" : "no"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Released</span>
                    <span>{skill.releaseDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Downloads</span>
                    <span>{skill.downloads.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-primary w-full mt-3 text-xs justify-center"
                >
                  <Download size={12} /> Pull this skill
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNIQUE DETAIL */}
      {tech ? (
        <section className="py-12 bg-cream" key={tech.id}>
          <div className="max-w-8xl mx-auto px-5 lg:px-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="tag tag-turq mb-2">Step 4 · Technique detail</span>
                <h2 className="h-section text-2xl md:text-3xl mt-2 mb-1">
                  {tech.title}
                </h2>
                <div className="flex items-center gap-3 text-[12px] text-gable/60">
                  <span>Vertical: <strong className="text-gable">{tech.vertical}</strong></span>
                  <span className="text-gable/30">·</span>
                  <span>NIST: <strong className="text-gable">{tech.nist}</strong></span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTechId(null)}
                className="btn-ghost text-xs"
              >
                Close <ChevronRight size={12} />
              </button>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              {/* The Technique */}
              <div className="md:col-span-8 space-y-4">
                <div className="card">
                  <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                    What it does
                  </div>
                  <p className="text-base text-gable/80 leading-relaxed">
                    {tech.whatItDoes}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gable/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-dodger mb-2 font-semibold">
                        Inputs
                      </div>
                      <ul className="space-y-1.5">
                        {tech.inputs.map((x) => (
                          <li key={x} className="text-sm text-gable/70 flex gap-2">
                            <ChevronRight size={12} className="text-dodger mt-1 shrink-0" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-turq-text mb-2 font-semibold">
                        Outputs
                      </div>
                      <ul className="space-y-1.5">
                        {tech.outputs.map((x) => (
                          <li key={x} className="text-sm text-gable/70 flex gap-2">
                            <ChevronRight size={12} className="text-turq-text mt-1 shrink-0" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Use case */}
                {tech.useCases.length > 0 && (
                  <div className="card border-l-4 !border-l-gable">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Eye size={16} className="text-gable/50" />
                        <span className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold">
                          Use case
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRedactToggle((r) => !r)}
                        className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full transition ${
                          redactToggle
                            ? "bg-gable text-white"
                            : "bg-cream text-gable border border-gable/10"
                        }`}
                      >
                        {redactToggle ? <Lock size={11} /> : <EyeOff size={11} />}
                        {redactToggle ? "Redacted view (Creator default)" : "Unredacted (contributor consent only)"}
                      </button>
                    </div>

                    {tech.useCases.map((uid) => {
                      const u = USE_CASES[uid];
                      return (
                        <div key={uid}>
                          <h3 className="h-card text-lg mb-2">{u.title}</h3>
                          <p className="text-sm text-gable/80 leading-relaxed mb-3">
                            {redactToggle ? u.redactedNarrative : u.unredactedNarrative}
                          </p>
                          <div className="bg-cream rounded-lg p-3">
                            <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">
                              Value
                            </div>
                            <p className="text-sm text-gable">{u.value}</p>
                          </div>

                          <div className="mt-3 text-[10px] uppercase tracking-wider text-gable/40 font-semibold mb-1">
                            Measures
                          </div>
                          <ul className="text-[12px] text-gable/70 space-y-1">
                            {u.measures.map((m) => (
                              <li key={m} className="flex gap-2">
                                <CheckCircle2 size={11} className="text-turq-text mt-1 shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Governance + Skill */}
              <div className="md:col-span-4 space-y-3">
                {/* Lens panel */}
                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={16} className="text-gable/50" />
                    <span className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold">
                      Highest Tide · governance lenses
                    </span>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(LENS_LABELS).map(([key, label]) => {
                      const rag = tech.lensRag[key as keyof typeof tech.lensRag];
                      return (
                        <div
                          key={key}
                          className="flex items-center justify-between gap-2 text-sm"
                        >
                          <span className="text-gable/70 text-[13px]">{label}</span>
                          <RagBadge value={rag} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gable/10 text-[11px] text-gable/50 leading-relaxed">
                    The lens with the highest tide sets the route. If any goes
                    red, the use case escalates from self-serve to institutional
                    review.
                  </div>
                </div>

                {/* Skill repo card */}
                {tech.skills.length > 0 && tech.skills.map((sid) => {
                  const sk = SKILLS[sid];
                  if (!sk) return null;
                  return (
                    <div key={sid} className="card-dark">
                      <div className="flex items-center gap-2 mb-2">
                        <Github size={14} className="text-turq" />
                        <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">
                          Operationalised by
                        </span>
                      </div>
                      <div className="font-mono text-xs text-white mb-1">
                        {sk.name}
                      </div>
                      <div className="text-[11px] text-white/50 mb-3 font-mono break-all">
                        {sk.repo}
                      </div>
                      <p className="text-[12px] text-white/70 leading-relaxed mb-3">
                        {sk.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-white/5 rounded p-2">
                          <div className="text-white/40 text-[10px] uppercase">License</div>
                          <div className="text-white font-mono">{sk.license}</div>
                        </div>
                        <div className="bg-white/5 rounded p-2">
                          <div className="text-white/40 text-[10px] uppercase">Eval rig</div>
                          <div className="text-turq font-semibold">{sk.evalRig ? "yes" : "no"}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-cream">
          <div className="max-w-8xl mx-auto px-5 lg:px-8 text-center">
            <Brain size={32} className="text-gable/30 mx-auto mb-3" />
            <h3 className="font-semibold text-gable/60">
              Pick a technique above to open the detail panel.
            </h3>
            <p className="text-sm text-gable/50 mt-2 max-w-xl mx-auto">
              You&apos;ll see what the technique does, a redacted use case, the
              Highest Tide governance lens scores, and the open-source skill
              that operationalises it.
            </p>
          </div>
        </section>
      )}

      {/* WHAT YOU JUST SAW */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="tag tag-on-dark-turq mb-3">What you just saw</span>
            <h2 className="h-section text-3xl md:text-4xl mt-3 mb-4 text-white">
              That experience, multiplied across ~60 Creators in Year 1.
            </h2>
            <p className="text-base text-white/70 leading-relaxed">
              Multiply that by ~60 Creators in Year 1, and by ~600 in Year 3.
              Every interaction feeds back into the library. The longer the
              platform runs, the better its cross-vertical surfacing gets, and
              the more skills can be released as open-source — UK-built,
              UK-owned, ARIA-co-branded.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="card-dark">
              <Compass size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-1.5">
                Cross-vertical surfacing
              </h3>
              <p className="text-[13px] text-white/70 leading-relaxed">
                The middle column above. Recommends a technique invented in one
                vertical to a researcher in another. No commercial platform
                pays for this — only ARIA&apos;s mission funds it.
              </p>
            </div>
            <div className="card-dark">
              <Layers size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-1.5">
                Governance that travels
              </h3>
              <p className="text-[13px] text-white/70 leading-relaxed">
                The lens panel above. The Highest Tide assessment attaches to
                the use case and travels across labs, institutions, and
                external collaborators. No re-bottling at every step.
              </p>
            </div>
            <div className="card-dark">
              <Github size={18} style={{ color: "#00FFBC" }} className="mb-2" />
              <h3 className="h-card text-base text-white mb-1.5">
                Open-source skill, ready Day 1
              </h3>
              <p className="text-[13px] text-white/70 leading-relaxed">
                The right-hand column. Every released skill ships MIT-licensed
                with an evaluation rig and an ARIA-co-branded README. That is
                the cleanest possible answer to the UK-economic-benefit
                question.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/methodology", label: "Methodology" }}
        next={{ href: "/programme", label: "Programme" }}
      />
    </>
  );
}

/* ---------------- helpers ---------------- */

function TechniqueCard({
  tech,
  cross,
  isActive,
  onClick,
}: {
  tech: Technique;
  cross?: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left card card-hover ${
        isActive
          ? cross
            ? "border-dodger ring-1 ring-dodger/20"
            : "border-turq-text ring-1 ring-turq-text/20"
          : ""
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div>
          <div className="text-[10px] uppercase tracking-wider mb-1">
            {cross ? (
              <span className="text-dodger font-semibold">Cross-vertical</span>
            ) : (
              <span className="text-turq-text font-semibold">In-vertical</span>
            )}
          </div>
          <h4 className="font-bold text-[15px] leading-tight">{tech.title}</h4>
        </div>
        <ChevronRight size={14} className="text-gable/30 mt-1 shrink-0" />
      </div>
      <div className="text-[11px] text-gable/50 mb-2">
        {tech.vertical} · NIST {tech.nist}
      </div>
      <p className="text-[12px] text-gable/70 leading-snug line-clamp-3">
        {tech.whatItDoes}
      </p>
    </button>
  );
}

function RagBadge({ value }: { value: "G" | "A" | "R" }) {
  const map = {
    G: { label: "Green · auto-approve", color: "#007A5E", bg: "rgba(0, 122, 94, 0.12)" },
    A: { label: "Amber · review", color: "#A06B00", bg: "rgba(245, 158, 11, 0.12)" },
    R: { label: "Red · escalate", color: "#a93232", bg: "rgba(217, 75, 75, 0.12)" },
  } as const;
  const c = map[value];
  return (
    <span
      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
      style={{ color: c.color, background: c.bg }}
    >
      {c.label}
    </span>
  );
}
