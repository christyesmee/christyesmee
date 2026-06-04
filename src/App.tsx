import { Link, Route, Routes } from "react-router-dom";
import { AppProviders } from "./state";
import ScoreBadge from "./components/ScoreBadge";
import HomePage from "./pages/HomePage";
import LevelListPage from "./pages/LevelListPage";
import LevelPage from "./pages/LevelPage";
import PracticePage from "./pages/PracticePage";

export default function App() {
  return (
    <AppProviders>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
              <span className="text-xl">🇳🇱</span> Nederlands Leren
            </Link>
            <ScoreBadge />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a1" element={<LevelListPage />} />
            <Route path="/a1/:num" element={<LevelPage />} />
            <Route path="/a1/:num/:category" element={<PracticePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </AppProviders>
  );
}
