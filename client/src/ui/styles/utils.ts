import { TTheme } from './themes/types';
import { TColor } from './types';

export function changeRgbaOpacity(color: string, newOpacity: number): string | null {
  if (!color.includes('rgba')) return null;

  const splitted = color.trim().split(',');
  splitted[splitted.length - 1] = `${newOpacity})`;
  
  return splitted.join(',');
}

export function getColor(color: TColor, theme: TTheme): string {
  if (typeof color === 'string') return color;

  return color(theme);
}
