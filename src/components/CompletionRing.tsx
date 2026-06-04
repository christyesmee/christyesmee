/** A circular progress ring that fills by the given fraction (0–1).
 *  Used to show level completion in thirds (one per category). */
export default function CompletionRing({
  fraction,
  size = 40,
  stroke = 4,
  label,
}: {
  fraction: number;
  size?: number;
  stroke?: number;
  label?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const filled = Math.max(0, Math.min(1, fraction));
  const complete = filled >= 1;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={complete ? "#22c55e" : "#f97316"}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - filled)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={size * 0.3}
        fontWeight="700"
        fill={complete ? "#16a34a" : "#475569"}
      >
        {complete ? "✓" : (label ?? "")}
      </text>
    </svg>
  );
}
