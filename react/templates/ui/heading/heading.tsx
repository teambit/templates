import React from 'react';
import classNames from 'classnames';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * html tag to be rendered
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, tag, className }: HeadingProps) {
  const Tag = tag || 'h1';
  return (
    <Tag className={classNames(styles.heading, className)}>{children}</Tag>
  );
}
