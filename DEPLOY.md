# Deploying to Netlify + enabling the shared leaderboard (Supabase)

The app is a static Vite/React site, so hosting is just "connect the repo to
Netlify". The shared leaderboard needs a small free Supabase database.

---

## Part A — Host on Netlify (continuous deploy from GitHub)

1. Push your code to GitHub (already done on the working branch).
2. Go to <https://app.netlify.com> and log in (sign up with GitHub is easiest).
3. **Add new site → Import an existing project → GitHub** and pick the
   `christyesmee/christyesmee` repository.
4. Netlify reads `netlify.toml`, so the build settings are filled in already:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Branch to deploy:** choose the branch you want live. To deploy the
     current work, set the production branch to
     `claude/dutch-learning-webapp-CkfXs` (or merge it into `main` first and
     deploy `main`).
5. Click **Deploy**. After ~1 minute you get a live URL like
   `https://your-site.netlify.app`. Every push to that branch redeploys
   automatically.

> Deep links (e.g. `/leaderboard`) work because `netlify.toml` redirects all
> routes to `index.html`.

---

## Part B — Enable the shared leaderboard with Supabase (free)

Without this, the app still works but the leaderboard only shows your own score
on your own device. To let Esmee, Francesca and Bass see each other's scores:

1. Go to <https://supabase.com> → **New project** (free tier). Pick any name and
   a database password (you won't need it in the app).
2. When the project is ready, open the **SQL Editor**, paste the script below
   and click **Run**:

   ```sql
   create table if not exists public.score_events (
     id bigint generated always as identity primary key,
     username text not null,
     points integer not null,
     created_at timestamptz not null default now()
   );

   alter table public.score_events enable row level security;

   -- The app uses the public "anon" key, so allow it to read + insert.
   create policy "anon can read scores"
     on public.score_events for select to anon using (true);

   create policy "anon can add scores"
     on public.score_events for insert to anon with check (true);
   ```

3. In Supabase go to **Project Settings → API** and copy:
   - **Project URL** (e.g. `https://abcd1234.supabase.co`)
   - **anon public** key (the long `eyJ...` string — NOT the service_role key)

4. In Netlify open **Site settings → Environment variables** and add:
   - `VITE_SUPABASE_URL` = the Project URL
   - `VITE_SUPABASE_ANON_KEY` = the anon public key

5. Trigger a redeploy (**Deploys → Trigger deploy → Deploy site**) so the new
   variables are baked into the build.

That's it — scores now sync to the cloud and the leaderboard shows everyone,
filtered by today / this week / this month / all time.

### Local development with the cloud
Copy `.env.example` to `.env`, fill in the same two values, then `npm run dev`.

---

## Security note
The three logins are checked in the browser (client-side), so the
usernames/passwords are technically readable in the site's code. That's fine for
a private app among friends, but don't reuse these passwords anywhere important.
The Supabase **anon** key is meant to be public; just never commit the
**service_role** key.
