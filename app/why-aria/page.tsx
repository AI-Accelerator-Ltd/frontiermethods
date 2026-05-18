import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { AlertTriangle, ArrowRight, Crosshair, Globe2, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Why ARIA, why now",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="01 · The opportunity"
        title={<>Why ARIA. Why now. Why us.</>}
        lede="The Cohort 2 brief explicitly opens a new partner category for AI capability. Cohort 1 contains no enablement layer for the Creators ARIA has already funded. The political moment, the cost-collapse of building, and ARIA's unique funding shape converge on the same answer: a UK-led, UK-built, UK-owned platform that runs alongside ARIA's Programme Directors and inside Creator teams."
        meta="Programme · Chair · CEO"
      />

      {/* THE COHORT 2 OPENING */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The Cohort 2 opening"
            title="ARIA has explicitly named a new partner category — and we map onto it."
            lede="The Cohort 2 RFP introduces a new pillar alongside frontier R&D translation: bringing AI capabilities to ARIA-funded researchers. ARIA's analogue is Amodo Design — 'this is what we want to emulate with AI capabilities.' That is precisely the gap our consortium fills."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                Pillar 1
              </div>
              <h3 className="h-card text-lg mb-3">
                Doubling down on what works (translation)
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-3">
                Supporting frontier R&amp;D translation through talent
                pipelines, engineering support, and organisation building.
                Most Cohort 1 partners sit here.
              </p>
              <div className="tag tag-gable">Cohort 1 dominant</div>
            </div>
            <div className="card border-l-4 !border-l-turq">
              <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-2">
                Pillar 2 · NEW for Cohort 2
              </div>
              <h3 className="h-card text-lg mb-3">
                Bringing advanced AI capabilities into ARIA-funded research
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-3">
                AI for Science tools, AI Scientist systems, autonomous labs,
                AI-focused talent programmes, infrastructure that gives
                researchers access. ARIA states explicitly: <em>&quot;this doesn&apos;t
                mean every partner needs an AI focus — but we&apos;re opening the
                door to a new category of partner that wasn&apos;t a primary focus
                in the first cohort.&quot;</em>
              </p>
              <div className="tag tag-turq">Our category</div>
            </div>
          </div>

          <div className="mt-8 card bg-gable !text-white">
            <div className="text-[10px] uppercase tracking-wider text-white/40 mb-2">
              Verbatim · ARIA Cohort 2 FAQ
            </div>
            <p className="text-base md:text-lg text-white leading-relaxed">
              &ldquo;Following the success of our founding cohort, we&apos;re
              launching a call for a second cohort of Activation Partners…
              we&apos;re expanding our work across two pillars… we&apos;re
              opening the door to a new category of partner that wasn&apos;t a
              primary focus in the first cohort.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The Cohort 1 gap"
            title="Nine partners. None of them an enablement layer."
            lede="Pillar VC, Renaissance Philanthropy, Convergent Research, Cambridge NeuroWorks, Fifty Years, Amodo Design, Nucleate UK, DeepMind, Venture Café. Heavy weighting toward VCs, deeptech communities, frontier R&D orgs. No partner whose job is to make AI usable inside the labs ARIA has already funded."
          />

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="card">
              <Crosshair size={20} className="text-turq-text mb-3" />
              <h3 className="h-card text-base mb-2">
                The hardware analogue exists
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                Amodo Design builds bespoke equipment for ARIA-funded research
                teams. Accelerated Sangtera timelines 6–12 months. We are the
                AI-capability equivalent of Amodo for the software stack.
              </p>
            </div>
            <div className="card">
              <Crosshair size={20} className="text-turq-text mb-3" />
              <h3 className="h-card text-base mb-2">
                The talent piece is partial
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                Pillar VC&apos;s Encode places AI researchers into labs.
                Excellent — but it&apos;s VC-anchored, US-headquartered, and
                doesn&apos;t produce shared technique cards or open-source
                skills the wider UK ecosystem can reuse.
              </p>
            </div>
            <div className="card">
              <Crosshair size={20} className="text-turq-text mb-3" />
              <h3 className="h-card text-base mb-2">
                Nobody runs cross-tenant insight
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                The single highest-leverage thing a UK research platform can do
                — surface a technique invented in fusion into a drug-discovery
                workflow — has no commercial funder. Only ARIA&apos;s mission
                pays for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE POLITICAL MOMENT */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-dodger mb-3">
              The political moment
            </span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              ARIA needs a UK-led answer to the £50m question.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              April 2025: Democracy for Sale revealed ARIA had allocated
              <strong className="text-white"> £50m+ of UK public money to US
              tech and VC firms</strong> — including four Cohort 1 Activation
              Partners (Pillar VC, Renaissance Philanthropy, Venture Café, Fifty
              Years). Chi Onwurah MP called for greater UK-economic-benefit
              accountability. The 2025 Spending Review tied ARIA to demonstrable
              UK delivery through 2029.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card-dark">
              <Globe2 size={20} style={{ color: "#00FFBC" }} className="mb-3" />
              <h3 className="h-card text-lg text-white mb-2">
                UK-domiciled prime
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                AI Accelerator Limited. UK Ltd. London-based five-person team.
                One accountable contracting entity.
              </p>
            </div>
            <div className="card-dark">
              <Globe2 size={20} style={{ color: "#00FFBC" }} className="mb-3" />
              <h3 className="h-card text-lg text-white mb-2">
                UK-resident subcontractors
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Orbit-RRI (Oxford / De Montfort), SimplyBD (UK Ltd, nuclear
                sector), HFBAC (TalentJet Group, UK Ltd). All UK Ltd or CLG.
              </p>
            </div>
            <div className="card-dark">
              <Globe2 size={20} style={{ color: "#00FFBC" }} className="mb-3" />
              <h3 className="h-card text-lg text-white mb-2">
                UK-owned outputs
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Open-source skills released MIT-licensed under ARIA
                co-branding. UK Creators served and named in quarterly
                reporting. UK-attributable jobs and capability uplift quantified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Why now"
            title="The cost of building has collapsed. The cost of the human network around it has not."
            lede="As an AI-first organisation, AIA builds with AI at every layer. What used to be a £5m platform build is now an in-kind contribution. That moves ARIA's £10m from 'build the platform' to 'fund the human network around it' — the vertical leads, the champions, the cross-pollination events, the fellowships."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card border-l-4 !border-l-dodger">
              <TrendingUp size={20} className="text-dodger mb-3" />
              <h3 className="h-card text-lg mb-2">
                Platform asset already exists
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                AIA is already building a commercial, per-client, white-labelled
                version. That commercial reality is what makes it possible to
                contribute a working platform as in-kind co-investment — ARIA
                doesn&apos;t need to fund a build from zero.
              </p>
            </div>
            <div className="card border-l-4 !border-l-turq">
              <Sparkles size={20} className="text-turq-text mb-3" />
              <h3 className="h-card text-lg mb-2">
                ~1,000 use cases ready to seed
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                AIA&apos;s existing enterprise use case library populates the
                platform from Day 1. ARIA Creators land on a populated library,
                not an empty one. The technique taxonomy has substance from the
                first session.
              </p>
            </div>
            <div className="card border-l-4 !border-l-gable">
              <AlertTriangle size={20} className="text-gable mb-3" />
              <h3 className="h-card text-lg mb-2">
                The window is now
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                Cohort 3 Programme Directors apply August 2026, start May 2027.
                The platform needs to be live and proven by the time those PDs
                come online — Cohort 2 Activation Partners ship it.
              </p>
            </div>
            <div className="card border-l-4 !border-l-gable">
              <AlertTriangle size={20} className="text-gable mb-3" />
              <h3 className="h-card text-lg mb-2">
                Risk is genuinely phase-gated
              </h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                Year 1 is £3m for six verticals and three PD partnerships. If
                Phase 1 doesn&apos;t demonstrate Creator value, ARIA does not
                commit Phase 2. ARIA&apos;s CFO can pull at four named
                milestones. No tail risk.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/aria/cost" className="btn-ghost">
              See the phase-gated commercials <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria", label: "ARIA bid overview" }}
        next={{ href: "/solution", label: "The Solution" }}
      />
    </>
  );
}
