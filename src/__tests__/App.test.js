import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders subheading', () => {
  render(<App />);
  const h2Element = screen.getByText(/Surreal Estate/i);
  expect(h2Element).toBeInTheDocument();
});
