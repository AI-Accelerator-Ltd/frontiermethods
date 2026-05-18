import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Crumb = { href: string; label: string };

type Props = {
  prev?: Crumb;
  next?: Crumb;
};

export default function PageNav({ prev, next }: Props) {
  return (
    <div className="max-w-8xl mx-auto px-5 lg:px-8 mt-16">
      <div className="grid md:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={prev.href}
            className="card card-hover flex items-center gap-3 text-sm group"
          >
            <ArrowLeft size={18} className="text-gable/40 group-hover:text-gable transition" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gable/40">
                Previous
              </div>
              <div className="font-semibold">{prev.label}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={next.href}
            className="card card-hover flex items-center gap-3 text-sm group md:text-right md:justify-end"
          >
            <div className="md:order-1">
              <div className="text-[10px] uppercase tracking-wider text-gable/40">
                Next
              </div>
              <div className="font-semibold">{next.label}</div>
            </div>
            <ArrowRight size={18} className="text-gable/40 group-hover:text-gable transition md:order-2" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
