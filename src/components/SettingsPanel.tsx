import { useSettingsState } from "../state";
import type { Direction } from "../lib/settings";

export default function SettingsPanel() {
  const { settings, setStrictMatching, setDirection } = useSettingsState();

  const directions: { key: Direction; label: string; desc: string }[] = [
    { key: "nl-en", label: "Dutch → English", desc: "See Dutch, answer in English (recognise)" },
    { key: "en-nl", label: "English → Dutch", desc: "See English, answer in Dutch (produce)" },
  ];

  return (
    <div className="space-y-4">
      {/* Language direction */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="font-medium text-slate-800">Practice direction</p>
        <p className="mb-3 text-sm text-slate-500">Which language you see, and which you answer in.</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {directions.map((d) => {
            const active = settings.direction === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setDirection(d.key)}
                className={[
                  "rounded-lg border p-3 text-left transition",
                  active
                    ? "border-orange-400 bg-orange-50"
                    : "border-slate-200 hover:border-slate-300",
                ].join(" ")}
              >
                <span className="block font-medium text-slate-800">{d.label}</span>
                <span className="block text-xs text-slate-400">{d.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Strict matching */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={settings.strictMatching}
            onChange={(e) => setStrictMatching(e.target.checked)}
            className="mt-1 h-4 w-4 accent-orange-500"
          />
          <span>
            <span className="block font-medium text-slate-800">Strict answer checking</span>
            <span className="block text-sm text-slate-500">
              When off (default), capitalization and punctuation are ignored — so{" "}
              <em>"hallo ik ben esmee"</em> is accepted for <em>"Hallo, ik ben Esmee."</em> Turn on
              to require exact spelling and punctuation.
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
