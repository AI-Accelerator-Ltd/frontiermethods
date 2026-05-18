import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageNav from "@/components/PageNav";
import { ArrowRight, Beaker, Github, Mail, PoundSterling, Users2 } from "lucide-react";
import { SITE } from "@/lib/nav";

export const metadata = {
  title: "Get in touch",
  description:
    "Three ways into Frontier Methods — for UK researchers, funders, and contributors.",
};

const AUDIENCES = [
  {
    icon: <Beaker size={22} />,
    title: "For UK researchers",
    subtitle: "Want Frontier Methods inside your team?",
    body: "Whether you're an ARIA Creator, a UKRI-funded PI, a Catapult lead, or anyone else doing UK research that could use AI capability — get in touch. The first quarter is free to explore. We come to you.",
    cta: "Researcher · register interest",
    subject: "Researcher interest in Frontier Methods",
  },
  {
    icon: <PoundSterling size={22} />,
    title: "For funders & policy",
    subtitle: "Want to back a vertical?",
    body: "We run the platform on a phase-gated model with named milestone deliverables. UKRI, the Catapults, Wellcome, the Royal Society, and ARIA-adjacent funders are all in scope. Standard funder reporting; commercially clean IP terms.",
    cta: "Funder · open conversation",
    subject: "Funder conversation about Frontier Methods",
  },
  {
    icon: <Users2 size={22} />,
    title: "For contributors & developers",
    subtitle: "Want to ship a skill?",
    body: "PRs welcomed against any of our repositories. We co-author, co-publish, attribute. If you have a working AI skill that solves a real research workflow problem, we want it in the library.",
    cta: "Contributor · pitch a skill",
    subject: "Skill contribution to Frontier Methods",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Three ways in.</>}
        lede="Frontier Methods is built around partnerships. If you're a researcher who wants AI capability in your team, a funder who wants to back a vertical, or a contributor who wants to ship a skill — we want to hear from you."
      />

      {/* THREE AUDIENCES */}
      <section className="py-20 bg-paper">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="card flex flex-col h-full">
                <div className="text-turq-text mb-3">{a.icon}</div>
                <h3 className="h-card text-xl mb-1">{a.title}</h3>
                <p className="text-sm text-gable/60 italic mb-3">{a.subtitle}</p>
                <p className="text-sm text-gable/70 leading-relaxed mb-5 flex-grow">
                  {a.body}
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(a.subject)}`}
                  className="btn-primary text-sm justify-center"
                >
                  <Mail size={14} /> {a.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="py-20 bg-cream">
        <div className="max-w-8xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                General enquiries
              </div>
              <h3 className="h-card text-xl mb-3">Email Frontier Methods</h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-4">
                A real human reads everything that comes to this address. We
                respond within two working days.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-lg font-mono text-turq-text hover:text-gable transition"
              >
                {SITE.email}
              </a>
            </div>
            <div className="card">
              <div className="text-[10px] uppercase tracking-wider text-gable/50 mb-2">
                Founder direct
              </div>
              <h3 className="h-card text-xl mb-3">Email Mike</h3>
              <p className="text-sm text-gable/70 leading-relaxed mb-4">
                For strategic conversations, funder discussions, or
                Programme-Director-shaped partnerships, Mike will pick this
                up personally.
              </p>
              <a
                href={`mailto:${SITE.founderEmail}`}
                className="text-lg font-mono text-turq-text hover:text-gable transition"
              >
                {SITE.founderEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GITHUB / SOCIAL */}
      <section className="py-20 bg-gable text-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <span className="tag tag-on-dark-turq mb-3">Or come find us</span>
          <h2 className="h-section text-3xl md:text-5xl mt-3 mb-5 text-white">
            We&apos;re mostly on GitHub.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-8">
            Open issues, send PRs, fork things. The open-source repos are the
            best way to engage technically.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-turq !text-gable hover:!bg-white"
            >
              <Github size={14} /> {SITE.github}
            </a>
            <Link href="/skills" className="btn-ghost-dark">
              Browse the skills <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ARIA REVIEWER BACK-DOOR */}
      <section className="py-12 bg-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="card border-l-4 !border-l-turq text-center">
            <p className="text-sm text-gable/70">
              Reviewing our ARIA Activation Partners Cohort 2 application?{" "}
              <Link
                href="/aria"
                className="text-turq-text font-semibold hover:text-gable transition"
              >
                Open the bid companion →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <PageNav
        prev={{ href: "/skills", label: "Skills" }}
        next={{ href: "/", label: "Home" }}
      />
    </>
  );
}
