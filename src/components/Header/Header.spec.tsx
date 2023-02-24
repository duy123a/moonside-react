import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from './Header';

it('show home, post and 404 button at default', () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
  );
  const postButton = screen.getByRole('button', { name: /post/i });
  const notFoundButton = screen.getByRole('button', { name: /404/i });
  const homeButton = screen.getByLabelText('homeButton');
  expect(postButton).toBeInTheDocument();
  expect(notFoundButton).toBeInTheDocument();
  expect(homeButton).toBeInTheDocument();
});

it('show add new post button at localhost/posts', () => {
  render(
    <MemoryRouter initialEntries={['/posts']}>
      <Header></Header>
    </MemoryRouter>
  );
  const addButton = screen.getByText(/Add new post/i);
  expect(addButton).toBeInTheDocument();
});

it('show edit post button at localhost/posts/:postId', () => {
  render(
    <MemoryRouter initialEntries={['/posts/:postId']}>
      <Header></Header>
    </MemoryRouter>
  );
  const editButton = screen.getByText(/Edit post/i);
  expect(editButton).toBeInTheDocument();
});
