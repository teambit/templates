import React from 'react';
import classNames from 'classnames';
import { Heading } from '@my-scope/ui.heading';
import { Text } from '@my-scope/ui.text';
import styles from './card.module.scss';

export type CardProps = {
  /**
   * link for the card
   */
  link?: string;
  /**
   * heading for the card
   */
  heading?: string;
  /**
   * text for the card
   */
  text?: string;
} & React.HTMLAttributes<HTMLElement>;

export function Card({ heading, className, text, link, children }: CardProps) {
  return (
    <div className={classNames(styles.card, className)}>
      <Heading element="h3" className={styles.heading}>
        {heading}
      </Heading>
      <Text className={styles.text} text={text} />
      {children}
    </div>
  );
}
