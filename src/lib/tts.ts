// Text-to-speech for the "audio" learning style, using the browser's built-in
// SpeechSynthesis API with a Dutch (nl-NL) voice. No audio files needed.

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickDutchVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang.toLowerCase().startsWith("nl"));
}

/** Speak Dutch text aloud. Safe to call even if speech isn't supported. */
export function speakDutch(text: string): void {
  if (!canSpeak()) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  const voice = pickDutchVoice();
  if (voice) utterance.voice = voice;
  utterance.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
