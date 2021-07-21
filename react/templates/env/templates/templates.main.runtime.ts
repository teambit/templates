import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { TemplatesAspect } from './templates.aspect';

export class TemplatesMain {
  static slots = [];
  static dependencies = [ReactAspect, EnvsAspect];
  static runtime = MainRuntime;
  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
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

