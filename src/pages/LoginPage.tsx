import { useState } from "react";
import { useAuthState } from "../state";

export default function LoginPage() {
  const { login } = useAuthState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!login(username, password)) {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="mb-6 text-center">
          <div className="text-4xl">🇳🇱</div>
          <h1 className="mt-2 text-2xl font-bold text-slate-800">Nederlands Leren</h1>
          <p className="text-sm text-slate-500">Log in to continue</p>
        </div>

        <label className="mb-1 block text-sm font-medium text-slate-600">Username</label>
        <input
          autoFocus
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError(false);
          }}
          className="mb-4 w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
          placeholder="esmee"
        />

        <label className="mb-1 block text-sm font-medium text-slate-600">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          className="mb-4 w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
          placeholder="••••••••"
        />

        {error && (
          <p className="mb-4 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
            Wrong username or password.
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
        >
          Log in
        </button>

        <p className="mt-4 text-center text-xs text-slate-400">
          This platform is private — only invited users can log in.
        </p>
      </form>
    </div>
  );
}
