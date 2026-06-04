import { useSettingsState } from "../state";

/** Compact settings card. Currently: strict vs. lenient answer checking. */
export default function SettingsPanel() {
  const { settings, setStrictMatching } = useSettingsState();
  return (
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
            <em>"hallo ik ben esmee"</em> is accepted for <em>"Hallo, ik ben Esmee."</em> Turn on to
            require exact spelling and punctuation.
          </span>
        </span>
      </label>
    </div>
  );
}
