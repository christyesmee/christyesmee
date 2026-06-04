import type { LearningStyle } from "../data/types";
import { canSpeak } from "../lib/tts";

const STYLES: { key: LearningStyle; label: string; icon: string; desc: string }[] = [
  { key: "typing", label: "Typing", icon: "⌨️", desc: "Type the answer" },
  { key: "multiple-choice", label: "Multiple choice", icon: "🔘", desc: "Pick from 4 options" },
  { key: "audio", label: "Audio", icon: "🔊", desc: "Listen, then answer" },
  { key: "flashcard", label: "Flashcard", icon: "🃏", desc: "Flip & self-rate" },
];

interface Props {
  selected: LearningStyle[];
  onToggle: (style: LearningStyle) => void;
}

/** Multi-select checkboxes for the learning styles. */
export default function StyleSelector({ selected, onToggle }: Props) {
  const speech = canSpeak();
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {STYLES.map((s) => {
        const isOn = selected.includes(s.key);
        const disabled = s.key === "audio" && !speech;
        return (
          <button
            key={s.key}
            disabled={disabled}
            onClick={() => onToggle(s.key)}
            className={[
              "flex items-center gap-3 rounded-xl border p-4 text-left transition",
              disabled
                ? "cursor-not-allowed border-slate-100 bg-slate-50 opacity-50"
                : isOn
                  ? "border-orange-400 bg-orange-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs",
                isOn ? "border-orange-500 bg-orange-500 text-white" : "border-slate-300 text-transparent",
              ].join(" ")}
            >
              ✓
            </span>
            <span className="text-xl">{s.icon}</span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-800">{s.label}</span>
              <span className="block text-xs text-slate-400">
                {disabled ? "Not supported in this browser" : s.desc}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
