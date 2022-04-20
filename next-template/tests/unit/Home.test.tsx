import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../../pages';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('Renders', async () => {
    render(<Main />);
    const headingElements = await screen.findAllByRole('heading');
    const headingText = headingElements[0].textContent;
    expect(headingText).toBe('Hello World!');
  });
});
