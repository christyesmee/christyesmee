import { Link, Route, Routes } from "react-router-dom";
import { AppProviders, UserScope, useAuthState } from "./state";
import { displayName } from "./lib/auth";
import DogLogo from "./components/DogLogo";
import ScoreBadge from "./components/ScoreBadge";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LearnPage from "./pages/LearnPage";
import LevelListPage from "./pages/LevelListPage";
import LevelPage from "./pages/LevelPage";
import PracticePage from "./pages/PracticePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import SettingsPage from "./pages/SettingsPage";

function AuthedApp({ user }: { user: string }) {
  const { logout } = useAuthState();
  return (
    <UserScope username={user}>
      <div className="min-h-full bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
            <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
              <DogLogo className="h-8 w-8" />
              <span className="hidden sm:inline">Dutch Dog</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/leaderboard"
                className="text-sm font-medium text-slate-500 hover:text-orange-500"
              >
                🏆 <span className="hidden sm:inline">Leaderboard</span>
              </Link>
              <ScoreBadge />
              <span className="hidden text-sm text-slate-500 sm:inline">{displayName(user)}</span>
              <Link
                to="/settings"
                title="Settings"
                className="rounded-lg px-2 py-1 text-lg leading-none text-slate-500 transition hover:bg-slate-100"
              >
                ⚙️
              </Link>
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
            <Route path="/" element={<DashboardPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/a1" element={<LevelListPage />} />
            <Route path="/a1/:num" element={<LevelPage />} />
            <Route path="/a1/:num/:category" element={<PracticePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<DashboardPage />} />
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
