import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  describe('starts at home page', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>
      );
    });
    it('renders home button', () => {
      expect(screen.getByLabelText('homeButton')).toBeInTheDocument();
    });
    it('renders post button', () => {
      expect(screen.getByRole('button', { name: /posts/i })).toBeInTheDocument();
    });
    it('render 404 button', () => {
      expect(screen.getByRole('button', { name: /404/i })).toBeInTheDocument();
    });
  });

  it('renders add new post button at localhost/posts', () => {
    render(
      <MemoryRouter initialEntries={['/posts']}>
        <Header></Header>
      </MemoryRouter>
    );
    expect(screen.getByText(/add new post/i)).toBeInTheDocument();
  });

  it('renders edit post button at localhost/posts/:postId', () => {
    render(
      <MemoryRouter initialEntries={['/posts/:postId']}>
        <Header></Header>
      </MemoryRouter>
    );
    expect(screen.getByText(/edit post/i)).toBeInTheDocument();
  });
});
