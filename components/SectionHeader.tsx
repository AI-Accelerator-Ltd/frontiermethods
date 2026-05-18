type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "centre";
};

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
}: Props) {
  return (
    <div
      className={`max-w-3xl mb-10 ${align === "centre" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="tag tag-turq mb-3">{eyebrow}</span>}
      <h2 className="h-section text-3xl md:text-5xl mt-2 mb-4">{title}</h2>
      {lede && (
        <p className="text-base md:text-lg text-gable/70 leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
}
