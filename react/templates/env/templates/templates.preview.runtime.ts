import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { TemplatesAspect } from './templates.aspect';
import { ThemeContext } from '@teambit/design.theme.theme-context';

export class TemplatesPreviewMain {

  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];
  
  static async provider([react]: [ReactPreview]) {
    const templatesPreviewMain = new TemplatesPreviewMain();
    // register a new provider to wrap all compositions in the react environment with a custom theme.
    react.registerProvider([ThemeContext]);

    return templatesPreviewMain;
  }
}

TemplatesAspect.addRuntime(TemplatesPreviewMain);

