import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { SnackbarProvider } from 'notistack';

it('full app rendering/navigating', async () => {
  render(
    <BrowserRouter>
      <SnackbarProvider>
        <App></App>
      </SnackbarProvider>
    </BrowserRouter>
  );
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByRole('button', { name: /posts/i }));
  expect(screen.getByText(/latest posts/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/add new post/i));
  expect(screen.getByText(/add a post/i)).toBeInTheDocument();

  // should back to home page now
  await user.click(screen.getByLabelText('homeButton'));
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

it('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to 404 route
  expect(screen.getByText(/The page you’re looking for doesn’t exist./i)).toBeInTheDocument();
});
