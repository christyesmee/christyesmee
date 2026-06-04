import { useState } from "react";
import type { VocabItem } from "../data/types";

/** A flip card: Dutch word on the front, English + example on the back. */
export default function Flashcard({ item }: { item: VocabItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="group relative h-40 w-full rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      {!flipped ? (
        <div className="flex h-full flex-col justify-center">
          <span className="text-xs uppercase tracking-wide text-slate-400">Dutch</span>
          <span className="text-2xl font-semibold text-slate-800">
            {item.article && <span className="text-orange-500">{item.article} </span>}
            {item.dutch}
          </span>
          <span className="mt-2 text-xs text-slate-400">Tap to flip</span>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-center">
          <span className="text-xs uppercase tracking-wide text-slate-400">English</span>
          <span className="text-xl font-medium text-slate-800">{item.english}</span>
          {item.example && (
            <p className="mt-2 text-sm text-slate-500">
              <span className="italic">{item.example}</span>
              {item.exampleTranslation && (
                <span className="block text-slate-400">{item.exampleTranslation}</span>
              )}
            </p>
          )}
        </div>
      )}
    </button>
  );
}
