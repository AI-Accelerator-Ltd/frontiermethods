type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  meta?: string;
};

export default function PageHeader({ eyebrow, title, lede, meta }: Props) {
  return (
    <section className="bg-gable text-white pt-20 pb-16">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="tag tag-on-dark-turq">{eyebrow}</span>
            {meta && (
              <span className="tag tag-on-dark-white">{meta}</span>
            )}
          </div>
          <h1 className="h-display text-4xl md:text-6xl mb-5">{title}</h1>
          {lede && (
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl">
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
