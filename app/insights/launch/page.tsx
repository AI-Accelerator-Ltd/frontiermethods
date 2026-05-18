import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "@/lib/nav";

export const metadata = {
  title: "Launch · why we built Frontier Methods",
  description:
    "Why we built Frontier Methods and why now. By Mike Chatterton, founder of AI Accelerator.",
};

export default function LaunchPostPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights · 20 May 2026"
        title={<>Why we built Frontier Methods.</>}
        lede="A short read on the AI capability gap inside UK frontier R&D, the political moment, and what we mean by 'techniques over tools'. — Mike Chatterton"
        meta="Launch piece · ~5 min read"
      />

      {/* PLACEHOLDER NOTE TO MIKE */}
      <section className="py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="card border-l-4 !border-l-dodger mb-12">
            <div className="text-[10px] uppercase tracking-wider text-dodger font-semibold mb-2">
              Placeholder
            </div>
            <p className="text-sm text-gable/80 leading-relaxed">
              Mike — this is a scaffolded placeholder for your launch piece.
              Suggested structure below mirrors the four arguments most likely
              to land with the launch audience (Creators, funders, OSS, policy).
              Replace the lorem-shape paragraphs with your voice. Keep it
              under 1,500 words; the launch ought to be readable in five
              minutes.
            </p>
          </div>

          <article className="prose-frontier">
            <h2 className="h-section text-2xl md:text-3xl mt-8 mb-4">
              1. The problem hiding in plain sight
            </h2>
            <p className="text-base text-gable/80 leading-relaxed mb-5">
              Every funder of UK research has spent the last 18 months talking
              about AI. Most of the spend has gone on tools and on training.
              Almost none has gone on the thing that actually moves the needle
              inside a research workflow: techniques that transfer from one
              domain to another, governance that scales without slowing the
              team, and operational skills you can pick up and run. That is
              the gap. [Mike — your voice goes here. A worked example from
              Virgin Red or Morgan Sindall pays off well in this paragraph.]
            </p>

            <h2 className="h-section text-2xl md:text-3xl mt-10 mb-4">
              2. Techniques compound. Tools depreciate.
            </h2>
            <p className="text-base text-gable/80 leading-relaxed mb-5">
              Every six weeks a model release changes what AI is useful for
              by a factor of a hundred. Curricula that teach the current tool
              date in weeks. Curricula that teach the technique survive,
              because the technique describes what the human is doing. That
              is the pedagogical bet baked into Frontier Methods.
              [Mike — the voice transcription &gt; QS site visits example is
              the canonical illustration here. Add it.]
            </p>

            <h2 className="h-section text-2xl md:text-3xl mt-10 mb-4">
              3. The political moment, and the answer to it.
            </h2>
            <p className="text-base text-gable/80 leading-relaxed mb-5">
              UK public R&D money flowing to US firms is a problem that&apos;s
              not going to fix itself. ARIA is under live scrutiny on this
              question and the Treasury is watching. Frontier Methods&apos;
              answer is unsubtle: UK-domiciled prime, UK-resident staff,
              UK-only delivery, open-source UK outputs from day one. We make
              this commitment as a public-good initiative not because
              it&apos;s expected, but because we believe sovereign UK AI
              capability is the right outcome — and because what
              we&apos;re building is the asset that delivers it.
            </p>

            <h2 className="h-section text-2xl md:text-3xl mt-10 mb-4">
              4. Where we go from here.
            </h2>
            <p className="text-base text-gable/80 leading-relaxed mb-5">
              The first skill — peer-review-pre-check — is on GitHub today.
              The platform demo is live; the methodology is walkable. The
              first vertical is being built. If you are a UK researcher
              looking for AI capability in your team, a funder looking to
              back a vertical, or a contributor who wants to ship a skill,
              find us at frontiermethods.com or message me directly.
            </p>

            <p className="text-base text-gable/80 leading-relaxed mt-8 italic">
              — Mike Chatterton, founder, AI Accelerator
            </p>
          </article>

          <div className="mt-16 card text-center">
            <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
              Read next
            </div>
            <h3 className="h-card text-lg mb-4">
              See the platform, walk the methods, browse the skills.
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/platform" className="btn-primary">
                Try the platform <ArrowRight size={14} />
              </Link>
              <Link href="/skills" className="btn-ghost">
                Browse the skills <ArrowRight size={14} />
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-ghost"
              >
                <Mail size={14} /> Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/about", label: "About" }}
        next={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
