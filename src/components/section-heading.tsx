type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const TitleTag = titleAs;

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="label-xs">{eyebrow}</span>
      <TitleTag className="font-display text-3xl font-bold leading-tight text-(--text-strong) sm:text-4xl">
        {title}
      </TitleTag>
      <p className="text-base leading-7 text-(--text-muted)">{description}</p>
    </div>
  );
}
