import React from 'react';
import classNames from 'classnames';
import { colors as themeColors } from '@teambit/react.templates.styles.colors';

export type ThemeProps = {
  /**
   * colors to override the default theme colors
   */
  colors?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Theme({ children, colors = themeColors }: ThemeProps) {
  return <div className={classNames(colors || themeColors)}>{children}</div>;
}
