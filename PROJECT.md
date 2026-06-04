# Dutch Dog 🐕 — Learn Dutch

A web app to learn Dutch in a structured, gamified way. Currently focused on
**A1** (A2 and B1 are shown but greyed out / locked).

Explanations and translations target **English-speaking learners**.

## A1 structure

- **20 levels**, each with its own topic.
- Three **categories** per level: **Vocabulary** · **Grammar** · **Verbs**.
- Per category you choose one or more **learning styles** (multi-select). When
  several are picked, questions are **randomly mixed**:
  - ⌨️ **Typing** · 🔘 **Multiple choice** · 🔊 **Audio** (browser text-to-speech,
    Dutch `nl-NL` voice) · 🃏 **Flashcard** (flip & self-rate).

### Content rules
- **Vocabulary:** 25 words per level → ~500 words across A1.
- **Verbs:** 5 verbs per level; every conjugation **and** the infinitive are
  tested separately (e.g. `ik ga → I go`, `gaan → to go`).
- **Grammar:** 10 sentence structures in A1; grammar sentences use **only** the
  vocab + verbs of that same level (no new content words).

### Gamification
- Correct answer: **+10** points. Wrong answer: **−5** points.
- Total score is saved in the browser and shown in the header.

### Answer checking
- **Lenient by default:** capitalization, punctuation and accents are ignored,
  so `hallo ik ben esmee` is accepted for `Hallo, ik ben Esmee.`
- Toggle **strict** checking in Settings (on the home page) to require exact
  spelling and punctuation.

## Accounts & leaderboard
- **Login** (client-side) for three users: `esmee`, `francesca`, `bass`
  (passwords `<name>123`). Only these may log in. See the security note in
  `DEPLOY.md` — this gating is not real security.
- Each user's **points and last-opened level are remembered** per user in the
  browser, and persist across visits.
- **Leaderboard** ranks all three by points for **today / this week / this
  month / all time**, synced via **Supabase** (see `DEPLOY.md`). Without cloud
  config it falls back to showing your own local score.

## Status
- ✅ Full engine: login, style selection, mixed quizzes, scoring, settings,
  per-user persistence, cloud leaderboard, navigation.
- ✅ **All 20 A1 levels** fully authored — each has exactly 25 vocabulary words,
  5 verbs (every form + infinitive), and a grammar structure whose sentences
  use only that level's own words (≈500 words and 100 verbs total).

## Hosting
See **DEPLOY.md** for connecting the repo to Netlify (continuous deploy) and
setting up the free Supabase leaderboard.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

## Project structure
```
src/
├─ data/
│  ├─ types.ts                 # data model (A1Level, VocabItem, VerbItem, …)
│  └─ a1/
│     ├─ level-01.ts           # fully authored level
│     ├─ levels.ts             # 20 levels (topics) + authored ones
│     └─ grammarStructures.ts  # the 10 A1 grammar structures
├─ lib/
│  ├─ quiz.ts                  # builds mixed question sessions
│  ├─ match.ts                 # lenient/strict answer checking
│  ├─ score.ts                 # points scorecard (localStorage)
│  ├─ settings.ts              # settings (strict matching)
│  └─ tts.ts                   # Dutch text-to-speech
├─ components/                 # StyleSelector, QuestionRunner, ScoreBadge, SettingsPanel
├─ pages/                      # Home, LevelList, Level, Practice
├─ state.tsx                   # shared score + settings context
└─ App.tsx                     # routes + layout
```

## Adding a level
1. Create `src/data/a1/level-02.ts` exporting an `A1Level` (use `level-01.ts`
   as the template): 25 vocab, 5 verbs, grammar sentences using only those words.
2. Register it in the `authored` map in `src/data/a1/levels.ts`.

That's it — the level’s categories, quizzes and scoring work automatically.
