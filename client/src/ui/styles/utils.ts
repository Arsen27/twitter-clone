export function changeRgbaOpacity(color: string, newOpacity: number): string | null {
  if (!color.includes('rgba')) return null;

  const splitted = color.trim().split(',');
  splitted[splitted.length - 1] = `${newOpacity})`;
  
  return splitted.join(',');
}
