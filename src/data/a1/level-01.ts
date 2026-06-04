import type { Lesson } from "../types";

// A1 — Level 1: fully worked-out example lesson.
// Theme: greetings and introducing yourself.
const lesson: Lesson = {
  id: "a1-01",
  level: "A1",
  number: 1,
  title: "Hallo! — Greetings & introducing yourself",
  theme: "Say hello, introduce yourself and ask someone's name.",

  vocabulary: [
    {
      dutch: "hallo",
      english: "hello",
      example: "Hallo, ik ben Esmee.",
      exampleTranslation: "Hello, I am Esmee.",
    },
    {
      dutch: "goedemorgen",
      english: "good morning",
      example: "Goedemorgen! Hoe gaat het?",
      exampleTranslation: "Good morning! How are you?",
    },
    {
      dutch: "goedemiddag",
      english: "good afternoon",
      example: "Goedemiddag, mevrouw.",
      exampleTranslation: "Good afternoon, madam.",
    },
    {
      dutch: "goedenavond",
      english: "good evening",
      example: "Goedenavond, meneer.",
      exampleTranslation: "Good evening, sir.",
    },
    {
      dutch: "dag",
      english: "bye / hi",
      example: "Dag! Tot morgen.",
      exampleTranslation: "Bye! See you tomorrow.",
    },
    {
      dutch: "tot ziens",
      english: "goodbye (see you)",
      example: "Tot ziens en bedankt!",
      exampleTranslation: "Goodbye and thank you!",
    },
    {
      dutch: "de naam",
      english: "the name",
      article: "de",
      example: "Wat is je naam?",
      exampleTranslation: "What is your name?",
    },
    {
      dutch: "ja",
      english: "yes",
      example: "Ja, dat klopt.",
      exampleTranslation: "Yes, that's right.",
    },
    {
      dutch: "nee",
      english: "no",
      example: "Nee, dank je.",
      exampleTranslation: "No, thank you.",
    },
    {
      dutch: "alsjeblieft",
      english: "please / here you go",
      example: "Een koffie, alsjeblieft.",
      exampleTranslation: "A coffee, please.",
    },
    {
      dutch: "dank je wel",
      english: "thank you",
      example: "Dank je wel voor je hulp.",
      exampleTranslation: "Thank you for your help.",
    },
  ],

  grammar: [
    {
      title: "Personal pronouns (subject)",
      explanation:
        "These are the words for the person doing the action. You will use them with every verb. Note that Dutch has an informal 'jij/je' and a formal 'u' for 'you'.",
      examples: [
        { dutch: "ik", english: "I" },
        { dutch: "jij / je", english: "you (informal)" },
        { dutch: "u", english: "you (formal)" },
        { dutch: "hij", english: "he" },
        { dutch: "zij / ze", english: "she / they" },
        { dutch: "wij / we", english: "we" },
        { dutch: "jullie", english: "you (plural)" },
      ],
    },
    {
      title: "Asking and giving your name",
      explanation:
        "Use the verb 'heten' (to be called) or 'zijn' (to be) to introduce yourself. 'Hoe heet jij?' literally means 'How are you called?'.",
      examples: [
        { dutch: "Hoe heet jij?", english: "What is your name?" },
        { dutch: "Ik heet Esmee.", english: "My name is Esmee." },
        { dutch: "Ik ben Esmee.", english: "I am Esmee." },
        { dutch: "Wat is je naam?", english: "What is your name?" },
      ],
    },
  ],

  verbs: [
    {
      infinitive: "zijn",
      english: "to be",
      stem: "—",
      irregular: true,
      forms: [
        { pronoun: "ik", form: "ben", note: "irregular" },
        { pronoun: "jij / je", form: "bent", note: "irregular" },
        { pronoun: "u", form: "bent / is", note: "formal" },
        { pronoun: "hij / zij / het", form: "is", note: "irregular" },
        { pronoun: "wij / jullie / zij", form: "zijn", note: "= infinitive" },
      ],
    },
    {
      infinitive: "heten",
      english: "to be called",
      stem: "heet",
      forms: [
        { pronoun: "ik", form: "heet", note: "stem" },
        { pronoun: "jij / je", form: "heet", note: "stem + t, but t already there" },
        { pronoun: "hij / zij / het", form: "heet", note: "stem + t" },
        { pronoun: "wij / jullie / zij", form: "heten", note: "= infinitive" },
      ],
    },
  ],

  exercises: [
    {
      type: "multiple-choice",
      question: "How do you say 'good morning' in Dutch?",
      options: ["Goedenavond", "Goedemorgen", "Goedemiddag", "Tot ziens"],
      answer: "Goedemorgen",
      explanation: "'Morgen' means morning, so 'goedemorgen' = good morning.",
    },
    {
      type: "fill-blank",
      question: "Ik ___ Esmee. (to be)",
      hint: "Use the correct form of 'zijn' for 'ik'.",
      answer: "ben",
      explanation: "With 'ik', the verb 'zijn' becomes 'ben'.",
    },
    {
      type: "fill-blank",
      question: "Hoe ___ jij? (to be called)",
      hint: "Use the correct form of 'heten' for 'jij'.",
      answer: "heet",
      explanation:
        "The stem of 'heten' is 'heet'. With 'jij' you add -t, but the stem already ends in -t, so it stays 'heet'.",
    },
    {
      type: "multiple-choice",
      question: "Which word means 'thank you'?",
      options: ["Alsjeblieft", "Dank je wel", "Tot ziens", "Hallo"],
      answer: "Dank je wel",
      explanation: "'Dank je wel' is the everyday way to say thank you.",
    },
    {
      type: "translate",
      question: "Translate to Dutch: 'Hello, I am Esmee.'",
      hint: "Use 'hallo' and the verb 'zijn'.",
      answer: "Hallo, ik ben Esmee.",
      explanation: "'ik ben' = 'I am'.",
    },
    {
      type: "multiple-choice",
      question: "Which pronoun means 'we'?",
      options: ["jullie", "wij", "zij", "jij"],
      answer: "wij",
      explanation: "'wij' (or 'we') means 'we'.",
    },
  ],
};

export default lesson;
