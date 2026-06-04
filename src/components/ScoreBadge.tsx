import { useScoreState } from "../state";

/** Shows the running total score in the header. */
export default function ScoreBadge() {
  const { score } = useScoreState();
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
      ⭐ {score.totalPoints} pts
    </span>
  );
}
