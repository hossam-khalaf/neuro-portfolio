export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={`flex items-center gap-6 mb-2 ${centered ? "justify-center" : ""}`}>
        <h2
          style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 600, lineHeight: 1.04, whiteSpace: "nowrap" }}
          className="text-[#080808]"
        >
          {title}
        </h2>
        {!centered && <div className="flex-1 h-px bg-[#0f766e]" />}
      </div>
      {subtitle && (
        <p
          style={{ fontSize: "20px", fontWeight: 400, color: "#64748b", marginBottom: "40px", textAlign: centered ? "center" : undefined }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
