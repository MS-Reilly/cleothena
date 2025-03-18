// src/theme/types.ts

import React from 'react';

export interface Theme {
  primaryColor: string;
  secondaryColor?: string;
  fontFamily?: string;
  // Add other theme properties as needed
}

export interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}