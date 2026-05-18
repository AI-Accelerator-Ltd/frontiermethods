import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import SectionHeader from "@/components/SectionHeader";
import { FileSpreadsheet, FileText, FileType2, Lock, Mail } from "lucide-react";

export const metadata = {
  title: "Documents",
  robots: { index: false, follow: false, nocache: true, noimageindex: true },
};

const PRIMARY = [
  { name: "Full bid · v6 (final submitted)", file: "14-BID-v6.pdf", icon: <FileText size={16} />, body: "The full Cohort 2 application, as submitted to ARIA on 21 May 2026. The reference document for any cross-check." },
  { name: "Cost sheet · v3 (final)", file: "14-BID-COST-SHEET-v3.xlsx", icon: <FileSpreadsheet size={16} />, body: "Eight work packages × three years. Day-rate harmonised £1,600 named-lead. FTEs reconcile to the named team." },
  { name: "Bid · v6 (Word source)", file: "14-BID-v6.docx", icon: <FileType2 size={16} />, body: "Editable source for ARIA's contracting team if redlines or schedules need to be drafted from the bid text." },
];

const SUPPORTING = [
  { name: "Solution design · v1", file: "11-SOLUTION-DESIGN-v1.md", body: "Operational detail: 8 components, 14 seed use cases, 12-month launch sequence, named risks. The reference for everything we&apos;ve built on this site." },
  { name: "Platform narrative · v2", file: "05-PLATFORM-NARRATIVE-v2.md", body: "The 5 platform functions and the phase-gated trajectory. The narrative-shape that drives the bid sections." },
  { name: "Reviewer personas + stress test · v1", file: "03-REVIEWER-PERSONAS-v1.md", body: "The 9 reviewer profiles we modelled and the seven critique vectors we concentrate answers on." },
  { name: "Critical review · v1", file: "17-CRITICAL-REVIEW-v1.md", body: "The internal red-team pass on v1 of the bid before v6 was finalised." },
];

const SOURCE_RFP = [
  { name: "ARIA Cohort 2 RFP · v2 (latest)", file: "ARIA-Cohort-2-RFP-v2.pdf", body: "The latest published version of the ARIA RFP." },
  { name: "RFP v2 change log", file: "16-RFP-v2-CHANGE-LOG-v1.md", body: "Our parsed log of what changed between v1 and v2 of the RFP." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Documents"
        title={<>Everything for the file.</>}
        lede="The full bid, the cost sheet, the solution design, our reviewer stress-test, and the source RFP. Take whatever helps you score this fairly."
        meta="For evaluators · noindex"
      />

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Primary submission"
            title="The bid and the cost sheet, as ARIA receives them."
          />

          <div className="grid md:grid-cols-3 gap-3">
            {PRIMARY.map((d) => (
              <div key={d.file} className="card flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-gable/50">
                  {d.icon}
                  <span className="font-mono text-[11px]">{d.file}</span>
                </div>
                <h3 className="font-bold text-base mb-2">{d.name}</h3>
                <p className="text-sm text-gable/70 leading-relaxed mb-4 flex-grow">{d.body}</p>
                <a
                  href={`mailto:mike@aiaccelerator.uk?subject=${encodeURIComponent(`ARIA bid · request: ${d.name}`)}&body=${encodeURIComponent(`Hi Mike,\n\nPlease send me the latest copy of ${d.name} (${d.file}) for review.\n\nThanks.`)}`}
                  className="btn-primary text-sm justify-center"
                >
                  <Mail size={13} /> Request copy
                </a>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gable/40 mt-4">
            Documents are sent on request to keep them current and version-controlled. Each &ldquo;Request copy&rdquo; button drafts an email to Mike with the right document name pre-filled — reply usually within an hour during UK working hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Supporting working documents"
            title="The strategic working files behind the bid."
            lede="Internal but shareable. These are the documents the consortium worked from. They show our thinking, our stress-tests, and where the bid converged."
          />

          <div className="grid md:grid-cols-2 gap-3">
            {SUPPORTING.map((d) => (
              <div key={d.file} className="card">
                <div className="flex items-center gap-2 mb-2 text-gable/50">
                  <FileText size={14} />
                  <span className="font-mono text-[11px]">{d.file}</span>
                </div>
                <h3 className="font-bold text-base mb-2">{d.name}</h3>
                <p className="text-sm text-gable/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <SectionHeader
            eyebrow="Source RFP"
            title="ARIA's published call."
          />
          <div className="grid md:grid-cols-2 gap-3">
            {SOURCE_RFP.map((d) => (
              <div key={d.file} className="card">
                <div className="flex items-center gap-2 mb-2 text-gable/50">
                  <FileText size={14} />
                  <span className="font-mono text-[11px]">{d.file}</span>
                </div>
                <h3 className="font-bold text-base mb-2">{d.name}</h3>
                <p className="text-sm text-gable/70 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="card border-l-4 !border-l-yellow-400 flex items-start gap-3">
            <Lock size={16} className="text-yellow-700 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-base mb-1">Reviewer access</h3>
              <p className="text-sm text-gable/70 leading-relaxed">
                This document library is part of the noindexed /aria zone.
                Available via direct URL to reviewers. Not surfaced in search
                engines. If you need additional source material (partner
                research files, the ten-options review, the stress-test
                annex), email{" "}
                <a
                  href="mailto:mike@aiaccelerator.uk"
                  className="text-turq-text font-semibold hover:text-gable transition"
                >
                  mike@aiaccelerator.uk
                </a>{" "}
                directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/aria/faq", label: "Reviewer FAQ" }}
        next={{ href: "/aria", label: "Back to bid overview" }}
      />
    </>
  );
}
