import React from 'react';
import { Card } from './card';

export const BasicCard = () => (
  <Card
    link="https://bit.dev/docs/scope/running-a-scope-server"
    heading="Self Host"
    text="lean how to self host these components"
  />
);

export const CardWithCopyBox = () => (
  <Card
    link="https://bit.dev/docs/dev-services-overview/generator/generator-overview"
    heading="Templates"
    text="to see a list of available templates"
    command="bit templates"
  />
);
