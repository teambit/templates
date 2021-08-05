import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { MyAppAspect } from './my-app.aspect';

export class MyAppMain {
  static slots = [];

  static dependencies = [ReactAspect];

  static runtime = MainRuntime;

  static async provider([react]: [ReactMain]) {
    react.registerReactApp({
      name: 'my-app',
      entry: [require.resolve('./my-app.app-root')],
    });
    return new MyAppMain();
  }
}

MyAppAspect.addRuntime(MyAppMain);
