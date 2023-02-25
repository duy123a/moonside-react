import { render, screen } from '@testing-library/react';
import PostForm from './PostForm';

it('it should render all form input', () => {
  render(<PostForm></PostForm>);
  const titleInput = screen.getByRole('textbox', {
    name: /title/i,
  });
  const authorInput = screen.getByRole('textbox', {
    name: /author/i,
  });
  const descriptionInput = screen.getByRole('textbox', {
    name: /description/i,
  });
  expect(titleInput).toBeInTheDocument();
  expect(authorInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
});

it('it should add all button in the DOM tree', () => {
  render(<PostForm></PostForm>);
  const changePostButton = screen.getByRole('button', { name: /change post image/i });
  const uploadFileButton = screen.getByText(/upload file/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(changePostButton).toBeInTheDocument();
  expect(uploadFileButton).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it('it should render 2 radio choices', () => {
  render(<PostForm></PostForm>);
  const randomRadio = screen.getByRole('radio', {
    name: /random image/i,
  });
  const uploadRadio = screen.getByRole('radio', {
    name: /upload picture/i,
  });
  expect(randomRadio).toBeInTheDocument();
  expect(uploadRadio).toBeInTheDocument();
});
