import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';
import { defaultThemeDimensions } from './plasma-theme-provider';
import { ThemeDimensions } from './types';
import { buildTheme } from './utils';

// import { buildTheme, defaultThemeDimensions, ThemeDimensions } from '../../styles';

const PlasmaThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeString = localStorage.getItem('@sms:theme');
  const theme = themeString ? (JSON.parse(themeString) as ThemeDimensions) : defaultThemeDimensions;
  const currentTheme = buildTheme(theme);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default (PlasmaThemeProvider);
