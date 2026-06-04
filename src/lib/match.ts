// Answer checking. Lenient by default: ignores capitalization, punctuation,
// accents and extra spaces. Strict mode requires an exact (trimmed) match.

function normalize(value: string, strict: boolean): string {
  let s = value.trim().replace(/\s+/g, " ");
  if (strict) return s;
  s = s.toLowerCase();
  // strip accents (é -> e) so beginners aren't punished for them
  s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  // drop punctuation
  s = s.replace(/[.,!?;:'"()\-]/g, "");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

/**
 * Check a user's answer against the expected answer(s).
 * @param input what the user typed/selected
 * @param answer the canonical correct answer
 * @param alternates other accepted answers (e.g. "go" for "to go")
 * @param strict when true, require exact capitalization & punctuation
 */
export function isAnswerCorrect(
  input: string,
  answer: string,
  alternates: string[] = [],
  strict = false,
): boolean {
  const normalizedInput = normalize(input, strict);
  if (!normalizedInput) return false;
  return [answer, ...alternates].some((a) => normalize(a, strict) === normalizedInput);
}
