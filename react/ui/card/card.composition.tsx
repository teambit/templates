import React from 'react';
import { Card } from './card';
import { Heading } from '@my-scope/ui.heading';
import { Text } from '@my-scope/ui.text';

export const BasicCard = () => (
  <Card>
    <Heading>Welcome</Heading>
    <Text text="welcome some more" />
  </Card>
);
