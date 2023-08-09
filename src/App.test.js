import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KATBIN Enterprises link', () => {
  render(<App />);
  const linkElement = screen.getByText(/KATBIN Enterprises/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about services text', () => {
  render(<App />);
  const textElement = screen.getByText(/All about services to cut the waste of time, as time is money/i);
  expect(textElement).toBeInTheDocument();
});

