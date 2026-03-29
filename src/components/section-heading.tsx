type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center rounded-full border border-(--border-strong) bg-(--surface-soft) px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-(--accent)">
        {eyebrow}
      </span>
      <h2 className="font-display text-2xl uppercase leading-10 lg:leading-12 text-(--text-strong) sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-(--text-muted) sm:text-lg">
        {description}
      </p>
    </div>
  );
}
