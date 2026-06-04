import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LevelOverviewPage from "./pages/LevelOverviewPage";
import LessonPage from "./pages/LessonPage";

export default function App() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="text-xl">🇳🇱</span> Nederlands Leren
          </Link>
          <span className="text-sm text-slate-400">Learn Dutch</span>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/level/:cefr" element={<LevelOverviewPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}
