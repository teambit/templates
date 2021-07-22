import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { TemplatesAspect } from './templates.aspect';
// const tsconfig = require('./typescript/tsconfig');
// const eslintconfig = require('./eslint/eslintconfig');
// const webpackConfig = require('./webpack/webpack.config');

export class TemplatesMain {
  static slots = [];
  static dependencies = [ReactAspect, EnvsAspect];
  static runtime = MainRuntime;
  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      // react.overrideTsConfig(tsconfig),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),
      // react.overrideDevServerConfig(webpackConfig),
      // react.overrideEslintConfig(eslintconfig),
      react.overrideDependencies({
        devDependencies: {
          '@types/react': '17.0.3'
        }
      })
    ]);
    envs.registerEnv(templatesReactEnv);
    return new TemplatesMain();
  }
}
TemplatesAspect.addRuntime(TemplatesMain);
