import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('show some credit lines at the footer', () => {
  render(<Footer></Footer>);
  const authorElement = screen.getByText(/duy123a/i);
  const licenseElement = screen.getByText(/Creative Commons Attribution-NonCommercial-ShareAlike/i);
  expect(authorElement).toBeInTheDocument();
  expect(licenseElement).toBeInTheDocument();
});
