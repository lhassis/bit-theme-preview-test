import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ThemedReactAspect } from './themed-react.aspect';
// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');

export class ThemedReactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.overrideTsConfig(tsconfig),
      // react.useWebpack({
      //   previewConfig: [previewConfigTransformer],
      //   devServerConfig: [devServerConfigTransformer],
      // }),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          }
        ]
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          }
        ]
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        dependencies: {
          react: '-',
          'react-dom': '-',
          'react-is': '-',
          'styled-components': '-',
          '@lhassis/theme-test.themes.plasma-theme-provider': '-'
        },
        devDependencies: {
          react: '-',
          'react-dom': '-',
          'react-is': '-',
          'styled-components': '-',
          '@lhassis/theme-test.themes.plasma-theme-provider': '-'
        },
        peerDependencies: {
          react: {
            version: "17.0.2",
            resolveFromEnv: true,
          },
          "react-dom": {
            version: "17.0.2",
            resolveFromEnv: true,
          },
          "react-is": {
            version: "17.0.2",
            resolveFromEnv: true,
          },
          "styled-components": {
            version: "5.3.3",
            resolveFromEnv: true,
          },
          '@lhassis/theme-test.themes.plasma-theme-provider': {
            version: 'latest',
            resolveFromEnv: true,
          }
        },
      })
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ThemedReactMain();
  }
}

ThemedReactAspect.addRuntime(ThemedReactMain);
