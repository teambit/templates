import { MainRuntime } from '@teambit/cli';
import { MyReactAspect } from './my-react.aspect';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
const tsconfig = require('./typescript/tsconfig');
// const eslintconfig = require('./eslint/eslintconfig');
// const webpackConfig = require('./webpack/webpack.config');

export class MyReactMain {
  static slots = [];
  static dependencies = [ReactAspect, EnvsAspect];
  static runtime = MainRuntime;
  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      react.overrideTsConfig(tsconfig),
      react.overrideJestConfig(require.resolve('./jest/jest.config')),
      // react.overrideDevServerConfig(webpackConfig),
      // react.overrideEslintConfig(eslintconfig),
      react.overrideDependencies({
        devDependencies: {
          '@types/react': '17.0.3'
        }
      })
    ]);
    envs.registerEnv(templatesReactEnv);
    return new MyReactMain();
  }
}

MyReactAspect.addRuntime(MyReactMain);
