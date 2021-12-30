import { merge } from 'lodash';
import { defaultThemeDimensions, defaultThemes } from './plasma-theme-provider';
import { Theme, ThemeDimensions, ThemeLayoutConfig, ThemeModeConfig, Themes } from './types';

export const buildTheme = (theme: ThemeDimensions, themes?: Themes): Theme => {
  const mergedThemes = merge(defaultThemes, themes);

  const mode = theme.mode && (mergedThemes.modes as Record<string, ThemeModeConfig>)[theme.mode];
  const layout = theme.layout && (mergedThemes.layouts as Record<string, ThemeLayoutConfig>)[theme.layout];

  const defaultMode = (defaultThemes.modes as Record<string, ThemeModeConfig>)[defaultThemeDimensions.mode];
  const defaultLayout = (defaultThemes.layouts as Record<string, ThemeLayoutConfig>)[defaultThemeDimensions.layout];

  return {
    ...mergedThemes,
    mode: mode || defaultMode,
    layout: layout || defaultLayout,
  };
};
