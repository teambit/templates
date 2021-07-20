import React from 'react';
import { render } from '@testing-library/react';
import { BasicPage } from './page.composition';

it('should render correct Heading', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('Welcome to Bit');
  expect(rendered).toBeTruthy();
});

it('should render correct text', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('Edit this component and see it change');
  expect(rendered).toBeTruthy();
});

it('should render some cards', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('Docs');
  expect(rendered).toBeTruthy();
});

it('should render another heading', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('Bit CLI');
  expect(rendered).toBeTruthy();
});

it('should render another text', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText("Understanding Bit's commands better");
  expect(rendered).toBeTruthy();
});

it('should render some more cards', () => {
  const { getByText } = render(<BasicPage />);
  const rendered = getByText('Templates');
  expect(rendered).toBeTruthy();
});
