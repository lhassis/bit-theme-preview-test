import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
import { PlasmaThemeProvider } from '@lhassis/theme-test.themes.plasma-theme-provider';

import { ThemedReactAspect } from './themed-react.aspect';

export class ThemedReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const themedReactPreviewMain = new ThemedReactPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([PlasmaThemeProvider]);

    return themedReactPreviewMain;
  }
}

ThemedReactAspect.addRuntime(ThemedReactPreviewMain);
