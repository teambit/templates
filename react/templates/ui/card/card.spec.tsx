import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard, CardWithCopyBox } from './card.composition';

it('should render something inside it', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('Templates');
  expect(rendered).toBeTruthy();
});

it('should contain a command that can be copied', () => {
  const { getByText } = render(<CardWithCopyBox />);
  const rendered = getByText('bit templates');
  expect(rendered).toBeTruthy();
});
