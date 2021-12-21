import React from 'react';
import { Text as BaseText, StyleSheet } from 'react-native';

export type TextProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Text({ text }: TextProps) {
  return <BaseText style={styles.text}>{text}</BaseText>;
}

const styles = StyleSheet.create({
  text: {},
});
