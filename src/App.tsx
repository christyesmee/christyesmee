import { Link, Route, Routes } from "react-router-dom";
import { AppProviders, UserScope, useAuthState } from "./state";
import { displayName } from "./lib/auth";
import ScoreBadge from "./components/ScoreBadge";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LevelListPage from "./pages/LevelListPage";
import LevelPage from "./pages/LevelPage";
import PracticePage from "./pages/PracticePage";
import LeaderboardPage from "./pages/LeaderboardPage";

function AuthedApp({ user }: { user: string }) {
  const { logout } = useAuthState();
  return (
    <UserScope username={user}>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
            <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
              <span className="text-xl">🇳🇱</span>
              <span className="hidden sm:inline">Nederlands Leren</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/leaderboard"
                className="text-sm font-medium text-slate-500 hover:text-orange-500"
              >
                🏆 Leaderboard
              </Link>
              <ScoreBadge />
              <span className="hidden text-sm text-slate-500 sm:inline">{displayName(user)}</span>
              <button
                onClick={logout}
                className="rounded-lg border border-slate-200 px-3 py-1 text-sm text-slate-600 transition hover:bg-slate-50"
              >
                Log out
              </button>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a1" element={<LevelListPage />} />
            <Route path="/a1/:num" element={<LevelPage />} />
            <Route path="/a1/:num/:category" element={<PracticePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </UserScope>
  );
}

function Gate() {
  const { user } = useAuthState();
  return user ? <AuthedApp user={user} /> : <LoginPage />;
}

export default function App() {
  return (
    <AppProviders>
      <Gate />
    </AppProviders>
  );
}
