// "Dutch Dog" logo: a black whippet/greyhound head in profile on a yellow
// rounded square. The ear flicks and the eye blinks (SMIL animation).
export default function DogLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Dutch Dog logo">
      <rect x="0" y="0" width="64" height="64" rx="15" fill="#FFC400" />
      <g fill="#111111">
        {/* whippet head, profile facing right */}
        <path
          d="M16 41 C12 31 17 20 28 19 C33 18 36 20 38 25 C39 27 41 29 44 31
             L53 40 C55 42 55 44 52 44 L46 44 C44 47 40 49 35 48
             C27 47 20 46 16 41 Z"
        />
        {/* ear (rose ear), flicks back and forth */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 27 21; -14 27 21; 0 27 21"
            dur="2.6s"
            repeatCount="indefinite"
          />
          <path d="M27 21 C22 12 32 10 33 18 C32 22 29 23 27 21 Z" />
        </g>
      </g>
      {/* eye (cut-out), blinks occasionally */}
      <ellipse cx="40" cy="31" rx="2.1" ry="2.1" fill="#FFC400">
        <animate
          attributeName="ry"
          values="2.1;2.1;0.2;2.1"
          keyTimes="0;0.9;0.95;1"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  );
}
