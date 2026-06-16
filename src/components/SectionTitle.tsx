interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  serif?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  serif = true,
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-ink-500">
          <span className="h-px w-8 bg-ink-300" />
          <span className="font-display">{eyebrow}</span>
          <span className="h-px w-8 bg-ink-300" />
        </div>
      ) : null}
      <h2
        className={`${
          serif ? "font-serif" : "font-sans"
        } text-3xl sm:text-4xl md:text-5xl text-ink-800 leading-tight`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-ink-500 text-base sm:text-lg leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
