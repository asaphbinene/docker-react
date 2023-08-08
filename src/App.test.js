import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn More about KATBIN Enterprises (Pta) Ltd./i);
  const textElement = screen.getByText(/All about services to cut the waste of time, as time is money/i);
  expect(linkElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

