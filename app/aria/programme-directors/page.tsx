import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { Clock, Target } from "lucide-react";

export const metadata = {
  title: "Programme Director partnerships",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const PDS = [
  {
    name: "Suraj Bramhavar",
    space: "Scaling Compute / Nature Computes Better",
    cohort: "Cohort 1 PD",
    why: "Compute-AI integration is the most direct technical fit for Frontier Methods. His Creator cohort already operates at the intersection of novel computing and AI workloads.",
    y1: "Co-design 5+ technique cards on novel computing architectures · embed 2 Fellows · co-author one impact piece",
  },
  {
    name: "David Dalrymple",
    space: "Safeguarded AI",
    cohort: "Cohort 1 PD",
    why: "Governance-by-competency methodology is the natural complement to Safeguarded AI's evaluation work. Dalrymple's published priors on formal methods + AI safety align directly with how Highest Tide is structured.",
    y1: "Co-design the Trusted Research lens specification · 1 Fellow placed in a Creator team · joint workshop on safe deployment",
  },
  {
    name: "Brian Wang or Yannick Wurm",
    space: "Sculpting Innate Immunity (Wang) OR Collective Flourishing — biosecurity (Wurm)",
    cohort: "Cohort 2 PD · choice locked by 31 August 2026",
    why: "A Cohort 2 PD by design — partnership scope grows with their portfolio. Wang for biomedical translation, Wurm for biosecurity-applied AI.",
    y1: "2-3 Fellows embedded across the cohort · monthly office hours · biomedical-specific or biosecurity-specific technique cards",
  },
];

const FIRST_90 = [
  { week: "Week 1–2", action: "Mike + named operator meet PD. Read PD's published opportunity space document end-to-end. Quote it back at the kick-off." },
  { week: "Week 3–4", action: "Identify 2–3 named Creators in the PD's cohort for the Year-1 engagement. Light intros." },
  { week: "Week 5–6", action: "First Fellow placement begins (recruited in parallel from month 1 of Year 1)." },
  { week: "Week 7–8", action: "First technique card co-authored with a Creator." },
  { week: "Week 9", action: "Joint co-publication on the platform announcing the partnership." },
  { week: "Week 10–12", action: "First quarterly review. Adjust plan based on Creator feedback." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Programme Director partnerships"
        title={<>Three named PD partnerships in Year 1. Time-bound. Low-overhead. Creator-led.</>}
        lede="Each PD partnership is a year-long engagement with a low time-commitment ask on the PD and a high concentration of value flowing back. Two hours/month minimum. One day/month maximum. Written into the contract explicitly, so neither side is surprised."
        meta="For PDs · Activation Partners team · external reviewer"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Year 1 working targets"
            title="The three PDs we'll work with in Year 1."
          />

          <div className="space-y-4">
            {PDS.map((p, i) => (
              <div key={p.name} className={`card ${i === 0 ? "border-l-4 !border-l-turq" : "border-l-4 !border-l-dodger"}`}>
                <div className="md:flex gap-8 items-start">
                  <div className="md:w-1/3 mb-3 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={14} className="text-gable/40" />
                      <span className="text-[10px] uppercase tracking-wider text-gable/50">PD partnership · {i + 1}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-1 leading-tight">{p.name}</h3>
                    <div className="text-sm text-gable/70 mb-1">{p.space}</div>
                    <span className="tag tag-gable">{p.cohort}</span>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-[10px] uppercase tracking-wider text-gable/50 font-semibold mb-1">Why this PD</div>
                    <p className="text-sm text-gable/80 leading-relaxed mb-3">{p.why}</p>
                    <div className="text-[10px] uppercase tracking-wider text-turq-text font-semibold mb-1">Year 1 deliverables</div>
                    <p className="text-sm text-gable/80 leading-relaxed">{p.y1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Engagement model"
            title="Min 2 hrs/month, max 1 day/month. Quarterly written reviews."
            lede="Explicit minimum and maximum, as RFP §3 asks for. Contract names the PD's commitment so neither side is surprised."
          />
          <div className="grid md:grid-cols-3 gap-3">
            <div className="card">
              <Clock size={18} className="text-turq-text mb-3" />
              <h3 className="h-card text-base mb-2">Minimum: 2 hours/month per PD</h3>
              <p className="text-sm text-gable/70 leading-relaxed">One 30-minute check-in, one 90-minute quarterly review. Light verbal review with the PD; the heavy lifting is done by the Fellow and the Creator.</p>
            </div>
            <div className="card">
              <Clock size={18} className="text-turq-text mb-3" />
              <h3 className="h-card text-base mb-2">Maximum: 1 day/month per PD</h3>
              <p className="text-sm text-gable/70 leading-relaxed">Hard ceiling. If a PD wants to engage more, that&apos;s by mutual agreement and outside the contracted scope.</p>
            </div>
            <div className="card">
              <Clock size={18} className="text-turq-text mb-3" />
              <h3 className="h-card text-base mb-2">Quarterly written input</h3>
              <p className="text-sm text-gable/70 leading-relaxed">Structured written input from the Fellow and Creator team before the verbal review. PD reads, signs off or redirects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gable text-white">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="tag tag-on-dark-turq mb-3">First 90 days · per PD</span>
            <h2 className="h-section text-3xl md:text-5xl mt-3 mb-4 text-white">
              The concrete first quarter the PD persona asks for.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              The Programme Director&apos;s test lands in one place: <em>what
              specifically would you do for my Creators in my space in my
              first quarter?</em> Here&apos;s the answer.
            </p>
          </div>
          <div className="space-y-3">
            {FIRST_90.map((f) => (
              <div key={f.week} className="card-dark md:flex gap-4 items-start">
                <div className="md:w-1/4 text-[11px] uppercase tracking-wider text-turq font-semibold mb-2 md:mb-0">{f.week}</div>
                <div className="md:w-3/4 text-sm text-white/80 leading-relaxed">{f.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/evidence", label: "Evidence" }}
        next={{ href: "/aria/faq", label: "Reviewer FAQ" }}
      />
    </>
  );
}
