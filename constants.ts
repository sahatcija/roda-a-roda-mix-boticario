import type { Prize } from './types';

export const PRIZES: Prize[] = [
  { id: 1, text: 'Kit Malbec', color: '#006437' },
  { id: 2, text: 'Vale R$50', color: '#00A99D' },
  { id: 3, text: 'Nativa SPA\nAmeixa', color: '#7E3F98' },
  { id: 4, text: 'Tente\nOutra Vez', color: '#E4A3B4' },
  { id: 5, text: 'Kit Lily', color: '#D4AF37' },
  { id: 6, text: 'Cacau show', color: '#C04B86' },
  { id: 7, text: 'Churros', color: '#007F5F' },
];

export const SPIN_DURATION_MS = 6000; // 6 seconds for a nice long spin
