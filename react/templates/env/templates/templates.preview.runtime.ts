import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { TemplatesAspect } from './templates.aspect';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

export class TemplatesPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const templatesPreviewMain = new TemplatesPreviewMain();
    // register a new provider to wrap all compositions in the react environment with a custom theme.
    react.registerProvider([ThemeCompositions]);

    return templatesPreviewMain;
  }
}

TemplatesAspect.addRuntime(TemplatesPreviewMain);
