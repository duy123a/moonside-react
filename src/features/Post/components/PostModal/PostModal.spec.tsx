import { fireEvent, render, screen } from '@testing-library/react';
import PostModal from './PostModal';
describe('PostModal', () => {
  const mockData = {
    id: 'lea2aa9l7x3a5tg',
    title: 'Iure aperiam unde',
    author: 'Freddie Zieme',
    description:
      'dolor fuga animi dolore voluptatum aliquam qui doloremque quibusdam similique et officiis sit alias rerum et dolorem necessitatibus rerum quisquam iusto nostrum ut officiis inventore velit voluptates possimus laudantium rerum dolores aut sint velit nisi odio laborum ut tempora nisi hic omnis consequatur et atque voluptas possimus officia voluptatum animi',
    createdAt: 1662885819124,
    updatedAt: 1662885819124,
    imageUrl: 'https://picsum.photos/id/624/1368/400',
  };
  const handleClose = jest.fn();
  const handleDeletePost = jest.fn();
  beforeEach(() => {
    render(
      <PostModal
        openState={true}
        post={mockData}
        handleClose={handleClose}
        handleDeletePost={handleDeletePost}
      ></PostModal>
    );
  });
  it('modals show the content and agreee/cancel buttons', () => {
    expect(screen.getByText(new RegExp(mockData.title, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /agree/i })).toBeInTheDocument();
  });
  it('click cancel buttons will fire cancel button event', () => {
    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it('click agree buttons will fire delete button event', () => {
    fireEvent.click(screen.getByRole('button', { name: /agree/i }));
    expect(handleDeletePost).toHaveBeenCalledTimes(1);
  });
});
