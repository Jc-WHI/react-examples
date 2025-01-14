import { render, screen } from '@testing-library/react';
import prac from './prac1';

test('renders learn react link', () => {
  render(<prac />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
