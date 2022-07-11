export type TColorVariants = {
  primary: string;
  secondary: string;
  tertiary: string;
  contrast: string;
  highlight: string;
};

export type TTheme = {
  colors: {
    bg: Partial<TColorVariants>;
    text: Partial<TColorVariants> & Partial<{ placeholder: string }>;
    border: Partial<TColorVariants>;
    accent: string;
  };
};
