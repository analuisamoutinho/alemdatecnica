import type { CSSProperties } from 'react';

/** Fonte de verdade do sistema Horizonte, aplicado à landing e ao catálogo. */
export const system = {
  name: 'Além da Técnica · Horizonte',
  color: {
    canvas: '#F3F4F6', surface: '#FFFFFF', ink: '#141B22', muted: '#57636D',
    ocean: '#568D9F', oceanText: '#376579', deep: '#203B46', pale: '#E4EEF1',
    border: '#CFD8DC', control: '#7E929B', focus: '#376579',
    success: '#25624F', danger: '#A1353D', warning: '#79581B',
  },
  font: { sans: "'Helvetica Neue', Helvetica, 'Inter', Arial, sans-serif", mono: "'IBM Plex Mono', monospace" },
  type: { hero: 'clamp(2.65rem, 6.3vw, 5.5rem)', title: 'clamp(2rem, 4.3vw, 3.75rem)', body: '1rem', label: '.875rem' },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  radius: { field: 12, card: 24, panel: 32, pill: 999 },
  motion: { press: 160, interface: 220, reveal: 600, phrase: 650, interval: 4000, easeOut: 'cubic-bezier(0.23, 1, 0.32, 1)', easeInOut: 'cubic-bezier(0.77, 0, 0.175, 1)' },
} as const;
export const systemVariables = {
  '--background': system.color.canvas, '--foreground': system.color.ink,
  '--card': system.color.surface, '--card-foreground': system.color.ink,
  '--destructive': system.color.danger, '--success': system.color.success, '--warning': system.color.warning,
  '--primary': system.color.deep, '--primary-foreground': '#FFFFFF',
  '--secondary': system.color.pale, '--secondary-foreground': system.color.deep,
  '--muted': system.color.pale, '--muted-foreground': system.color.muted,
  '--border': system.color.border, '--input': system.color.control, '--ring': system.color.focus,
  '--font-body': system.font.sans, '--font-display': system.font.sans,
  '--ocean': system.color.ocean, '--ocean-text': system.color.oceanText,
  '--radius-control': `${system.radius.field}px`, '--radius-card': `${system.radius.card}px`,
  '--radius-panel': `${system.radius.panel}px`, '--ease-out': system.motion.easeOut,
  '--ease-in-out': system.motion.easeInOut, '--duration-fast': `${system.motion.press}ms`,
  '--duration-ui': `${system.motion.interface}ms`, '--duration-reveal': `${system.motion.reveal}ms`,
  '--duration-phrase': `${system.motion.phrase}ms`, '--type-hero': system.type.hero, '--type-title': system.type.title,
} as CSSProperties;
export function exportSystem() {
  const url = URL.createObjectURL(new Blob([JSON.stringify(system, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a'); a.href = url; a.download = 'alem-da-tecnica-horizonte.tokens.json'; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
