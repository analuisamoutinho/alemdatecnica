export const tokens = {
  color: {
    background: '#F5F1E8', surface: '#FFFEFB', elevated: '#FFFFFF',
    ink: '#20382D', muted: '#636B63', border: '#DADDD3', controlBorder: '#858E83',
    primary: '#283D32', primaryHover: '#172B21', primaryText: '#FFFFFF',
    secondary: '#E7EDDF', secondaryText: '#283D32', accent: '#E9CD79', accentText: '#30290F',
    sage: '#ACBBA2', terracotta: '#B86F52', focus: '#487452',
    success: '#28633D', successSurface: '#EAF3E9', warning: '#765509', warningSurface: '#FCF1CE',
    danger: '#A13232', dangerSurface: '#FBECEC', info: '#315A7C', infoSurface: '#EAF1F8',
    disabled: '#E4E5DE', disabledText: '#686E66'
  },
  font: {display: "'Playfair Display', Georgia, serif", body: "'Inter', Arial, sans-serif", code:"'IBM Plex Mono', monospace"},
  type: {display: '48px / 1.12', heading: '32px / 1.2', subheading: '24px / 1.3', body: '16px / 1.6', label: '14px / 1.4', caption: '12px / 1.5', code: '14px / 1.6'},
  space: [4,8,12,16,20,24,32,40,48,64],
  radius: {small:4, control:8, card:12, panel:16, pill:999},
  shadow: {small:'0 2px 6px #20382D08', medium:'0 8px 24px #20382D10', large:'0 24px 64px #20382D24'},
  icon: {family:'Lucide', size:[16,20,24], stroke:1.5},
  motion: {fast:150, normal:220},
} as const;
export function downloadTokens(){ const blob=new Blob([JSON.stringify(tokens,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url;a.download='alem-da-tecnica.tokens.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); }
