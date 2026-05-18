import Link from "next/link";
import { ArrowRight, Compass, Github, HelpCircle, Home } from "lucide-react";
import { SITE } from "@/lib/nav";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-gable text-white min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-7">
          <HelpCircle size={20} className="text-turq" />
          <span className="tag tag-on-dark-turq">404 · page not found</span>
        </div>

        <h1 className="h-display text-5xl md:text-7xl mb-6">
          That technique
          <br />
          <span style={{ color: "#00FFBC" }}>hasn&apos;t been surfaced.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mb-10">
          Either the page you&apos;re looking for doesn&apos;t exist, or it&apos;s
          been moved. Frontier Methods is still finding its shape — here&apos;s
          where to go next.
        </p>

        <div className="grid md:grid-cols-2 gap-3 mb-10">
          <Link href="/" className="card-dark hover:bg-white/[0.04] transition group">
            <Home size={20} style={{ color: "#00FFBC" }} className="mb-3" />
            <div className="font-bold text-lg text-white mb-1">Frontier Methods home</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Start at the top — what we do, who it&apos;s for, where the
              platform sits.
            </p>
            <div className="text-[12px] text-turq mt-3 flex items-center gap-1 group-hover:text-white transition">
              Open <ArrowRight size={12} />
            </div>
          </Link>

          <Link href="/methodology" className="card-dark hover:bg-white/[0.04] transition group">
            <Compass size={20} style={{ color: "#00FFBC" }} className="mb-3" />
            <div className="font-bold text-lg text-white mb-1">Walk the methods</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Click through the methodology — Day 1 to Month 6, the triage
              model, governance, cross-vertical pollination.
            </p>
            <div className="text-[12px] text-turq mt-3 flex items-center gap-1 group-hover:text-white transition">
              Open <ArrowRight size={12} />
            </div>
          </Link>

          <Link href="/aria" className="card-dark hover:bg-white/[0.04] transition group">
            <div
              className="mb-3 w-5 h-5 rounded"
              style={{ background: "#00FFBC" }}
            />
            <div className="font-bold text-lg text-white mb-1">ARIA bid companion</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Reviewing our Activation Partners Cohort 2 application? Start
              here.
            </p>
            <div className="text-[12px] text-turq mt-3 flex items-center gap-1 group-hover:text-white transition">
              Open <ArrowRight size={12} />
            </div>
          </Link>

          <a
            href={`https://${SITE.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark hover:bg-white/[0.04] transition group"
          >
            <Github size={20} style={{ color: "#00FFBC" }} className="mb-3" />
            <div className="font-bold text-lg text-white mb-1">GitHub</div>
            <p className="text-sm text-white/60 leading-relaxed">
              The repos, the open-source skills, the evaluation rigs. UK-built.
            </p>
            <div className="text-[12px] text-turq mt-3 flex items-center gap-1 group-hover:text-white transition">
              Open <ArrowRight size={12} />
            </div>
          </a>
        </div>

        <p className="text-sm text-white/40">
          If you reached this via a link from a document or email, let us know at{" "}
          <a
            href="mailto:mike@aiaccelerator.uk"
            className="text-turq hover:text-white transition"
          >
            mike@aiaccelerator.uk
          </a>{" "}
          so we can fix it.
        </p>
      </div>
    </section>
  );
}
