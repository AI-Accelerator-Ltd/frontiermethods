import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, CheckCircle2, Github, Globe2, TrendingUp } from "lucide-react";
import { SITE } from "@/lib/nav";

export const metadata = {
  title: "Open-source commitment",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Open-source commitment"
        title={<>Every operational skill ships open-source. From Year 1. ARIA co-branded.</>}
        lede="This is the cleanest possible answer to the April 2025 £50m-to-US-firms criticism. UK-built skills, MIT-licensed, on a public UK-led GitHub organisation, available to any UK research team funded by anyone. This is what UK economic benefit looks like operationalised."
        meta="For Chair · Programme · AI-in-Science"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Why open source"
            title="Three reasons, in order of weight for ARIA."
          />

          <div className="grid md:grid-cols-3 gap-3">
            <div className="card border-l-4 !border-l-turq">
              <div className="glyph mb-3">01</div>
              <h3 className="h-card text-base mb-2">The political moment</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                ARIA was criticised in April 2025 for ~£50m of UK public
                money flowing to US firms — including four Cohort 1
                Activation Partners. Chi Onwurah MP called for greater UK
                economic accountability. Open-source UK outputs are the
                cleanest possible answer.
              </p>
            </div>
            <div className="card border-l-4 !border-l-dodger">
              <div className="glyph mb-3">02</div>
              <h3 className="h-card text-base mb-2">No-foreground-IP alignment</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                ARIA&apos;s no-foreground-IP policy is a foundational design
                choice. Open-source release operationalises it visibly. No
                ambiguity, no licence-fee implications later.
              </p>
            </div>
            <div className="card border-l-4 !border-l-gable">
              <div className="glyph mb-3">03</div>
              <h3 className="h-card text-base mb-2">Compounds adoption</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                A UK research team funded by anyone — ARIA, UKRI, Catapults,
                Wellcome, self-funded — can pick up the skills. The
                community grows beyond ARIA&apos;s contract. UK
                capability uplift is the outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BOUNDARY */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="The boundary"
            title="Operational artefacts open. Curation and operating model commercial."
            lede="A clean line we commit to in the contract. Releases are individual skills, evaluation rigs, prompt scaffolds, and integration guides. What stays AIA-owned is the curated taxonomy that makes the discovery experience work."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-3">Open-source from Year 1</div>
              <h3 className="h-card text-lg mb-3">What gets released</h3>
              <ul className="space-y-2 text-sm text-gable/70">
                {["Claude skills, agent harnesses, prompt scaffolds","Evaluation rigs and benchmarks","Technique card templates (markdown)","Reference implementations for the 6 founding verticals","Documentation, examples, integration guides"].map(x => (
                  <li key={x} className="flex gap-2 leading-relaxed">
                    <CheckCircle2 size={13} className="text-turq-text mt-0.5 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="text-[10px] uppercase tracking-wider text-gable font-semibold mb-3">AIA-owned, contributed in-kind</div>
              <h3 className="h-card text-lg mb-3">What stays commercial</h3>
              <ul className="space-y-2 text-sm text-gable/70">
                {["The curated taxonomy (the technique library structure)","Highest Tide governance methodology","AI Adoption Framework (the operating manual)","The ~1,000-use-case seed library","The platform operating layer (curation + recommendations + community)"].map(x => (
                  <li key={x} className="flex gap-2 leading-relaxed">
                    <CheckCircle2 size={13} className="text-gable/50 mt-0.5 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELEASE TARGET */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="tag tag-on-dark-turq mb-3">Year 1 target</span>
              <h2 className="h-section text-3xl md:text-4xl mt-3 mb-5 text-white">
                30+ skills by August 2027. Public GitHub organisation. Two releases per cross-pollination event.
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-4">
                The release cadence is 4–6 weeks. The pipeline draws from
                platform-feedback (top-requested technique with no current
                skill) and from Fellows shipping things they&apos;ve built
                inside Creator teams. Every release ships with an
                evaluation rig as a precondition.
              </p>
              <a
                href={`https://${SITE.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark"
              >
                <Github size={14} /> {SITE.github}
              </a>
            </div>
            <div className="md:col-span-5 card-dark text-center">
              <Github size={32} className="text-turq mx-auto mb-3" />
              <div className="text-6xl font-bold text-white mb-2">30+</div>
              <div className="text-white/60 text-sm">Open-source skills Year 1</div>
              <div className="text-white/40 text-[11px] uppercase tracking-wider mt-3">First skill live today</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <Link href="/skills" className="btn-primary">
            See the public skills directory <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/governance", label: "Governance" }}
        next={{ href: "/aria/evidence", label: "Evidence" }}
      />
    </>
  );
}
