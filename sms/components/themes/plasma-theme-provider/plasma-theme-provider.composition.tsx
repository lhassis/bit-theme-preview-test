import React from 'react';
import { PlasmaThemeProvider } from './plasma-theme-provider';

export function MockComponent() {

  return <div>this should be</div>;
}

export const BasicThemeProvider = () => (
  <PlasmaThemeProvider><MockComponent /></PlasmaThemeProvider>
);
