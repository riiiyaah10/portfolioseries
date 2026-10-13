import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />


        {project.motif === 'candle' && (
          <g transform="translate(240 50)" fill="none" stroke={a}>
            {/* flame */}
            <path d="M50 8 C42 22 38 34 38 44 C38 56 43 64 50 64 C57 64 62 56 62 44 C62 34 58 22 50 8 Z" fill={a} fillOpacity="0.3" stroke={a} strokeWidth="2" />
            <path d="M50 24 C46 32 44 38 44 44 C44 50 47 54 50 54 C53 54 56 50 56 44 C56 38 54 32 50 24 Z" fill={a} fillOpacity="0.75" />
            <line x1="50" y1="64" x2="50" y2="76" strokeWidth="2.5" strokeLinecap="round" />
            {/* candle cylinder */}
            <rect x="24" y="76" width="52" height="96" rx="8" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="24" x2="76" y1="102" y2="102" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="50" cy="130" r="14" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="50" cy="130" r="4" fill={a} strokeOpacity="0.8" />
          </g>
        )}

        {project.motif === 'crm' && (
          <g transform="translate(195 48)" fill="none" stroke={a}>
            <rect x="44" y="16" width="84" height="46" rx="8" strokeWidth="2" strokeOpacity="0.9" fill={a} fillOpacity="0.16" />
            <circle cx="86" cy="34" r="8" strokeWidth="1.5" />
            <path d="M74 48 c0 -4 4 -6 12 -6 s12 2 12 6" strokeWidth="1.5" strokeOpacity="0.8" />
            <path d="M86 62 V92 M86 92 H26 V114 M86 92 H146 V114" strokeWidth="2" strokeOpacity="0.75" />
            <rect x="0" y="114" width="52" height="36" rx="6" strokeWidth="1.6" strokeOpacity="0.75" />
            <rect x="60" y="114" width="52" height="36" rx="6" strokeWidth="1.6" strokeOpacity="0.75" />
            <rect x="120" y="114" width="52" height="36" rx="6" strokeWidth="1.6" strokeOpacity="0.75" />
          </g>
        )}

        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Fictional platform mark used in the nav and on cards: R mark for Riya. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path
          d="M6 26 V6 h8 c4 0 6 2 6 5.5 s-2 5.5-6 5.5 H6 m7 0 l6 9"
          fill="none"
          stroke="#e5132b"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
