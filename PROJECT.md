# Nederlands Leren — Learn Dutch 🇳🇱

A web app to learn Dutch in a structured way, split into three learning tracks —
**vocabulary**, **grammar** and **verbs** (stem + endings) — across the CEFR
levels **A1**, **A2** and **B1**. Each CEFR level has **10 levels**.

Explanations and translations are aimed at **English-speaking learners**.

## Status

This is a working skeleton:

- ✅ Full app structure, routing, progress tracking, and quiz engine.
- ✅ **A1 — Level 1** is fully written as the reference lesson (vocabulary,
  grammar, verbs with stem + endings, and a graded quiz).
- 🚧 The other 29 levels have titles and themes (see `src/data/catalog.ts`) and
  show as "soon" until their content is written.

## Run locally

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
```

## How it works

- Pick a CEFR level (A1/A2/B1) → see its 10 levels.
- Each lesson has tabs: **Vocabulary** (flip cards), **Grammar** (rules +
  examples), **Verbs** (stem + endings tables) and **Practice** (a quiz).
- Score **80%+** on the practice quiz to unlock the next level.
- Progress is saved in the browser via `localStorage`.

## Project structure

```
src/
├─ data/
│  ├─ types.ts          # data model (Lesson, VocabItem, VerbConjugation, …)
│  ├─ catalog.ts        # titles + themes for all 30 levels
│  ├─ lessons.ts        # combines authored lessons + placeholders
│  └─ a1/level-01.ts    # fully written example lesson
├─ components/          # Flashcard, GrammarCard, VerbTable, Quiz
├─ pages/               # HomePage, LevelOverviewPage, LessonPage
├─ lib/progress.ts      # localStorage progress + unlock logic
└─ App.tsx              # routes + layout
```

## Adding a new lesson

1. Create a file like `src/data/a1/level-02.ts` exporting a `Lesson` (use
   `src/data/a1/level-01.ts` as a template).
2. Import it in `src/data/lessons.ts` and add it to the `authoredLessons` array.

The title/theme shown in the overview come from `src/data/catalog.ts`, so edit
those if you want to rename a level.

## Tech stack

React + Vite + TypeScript, styled with Tailwind CSS, routing via React Router.
