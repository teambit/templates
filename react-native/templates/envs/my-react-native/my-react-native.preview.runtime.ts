import { PreviewRuntime } from '@teambit/preview';
import { ReactNativeAspect, ReactNativePreview } from '@teambit/react-native';
// create your theme and import it here
// import { ThemeCompositions } from '@my-company/my-scope.theme.theme-compositions';
import { MyReactNativeAspect } from './my-react-native.aspect';

export class MyReactNativePreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactNativeAspect];

  static async provider([reactNative]: [ReactNativePreview]) {
    const myReactNativePreviewMain = new MyReactNativePreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // reactNative.registerProvider([ThemeCompositions]);

    return myReactNativePreviewMain;
  }
}

MyReactNativeAspect.addRuntime(MyReactNativePreviewMain);
