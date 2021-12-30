import * as layouts from './layouts';
import * as modes from './modes';
import { ThemeDimensions, Themes } from './types';

export * from './types';

export const defaultThemeDimensions: Required<ThemeDimensions> = { mode: 'light', layout: 'cozy' };

export const defaultThemes: Themes = {
  fontFamily: "'Roboto', sans-serif",
  modes,
  layouts,
};

export { default as PlasmaThemeProvider } from './PlasmaThemeProvider';
