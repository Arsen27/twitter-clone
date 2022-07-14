import { TTheme } from './themes/types';

export type TColor = (theme: TTheme) => string | string;
export type TWithThemeProp = { theme: TTheme };
