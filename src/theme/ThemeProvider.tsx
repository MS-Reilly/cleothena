import React, { createContext } from 'react';
import { theme as defaultTheme } from './style/theme'; // Import default theme

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode; theme?: Partial<typeof defaultTheme> }> = ({
  children,
  theme = {},
}) => {
  const mergedTheme = { ...defaultTheme, ...theme }; // ✅ Merge custom theme with defaults

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};
