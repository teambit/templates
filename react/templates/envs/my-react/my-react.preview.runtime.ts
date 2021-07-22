import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { MyReactAspect } from './my-react.aspect';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

export class MyReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreviewMain = new MyReactPreviewMain();
    // register a new provider to wrap all compositions in the react environment with a custom theme.
    react.registerProvider([ThemeCompositions]);

    return myReactPreviewMain;
  }
}

MyReactAspect.addRuntime(MyReactPreviewMain);
