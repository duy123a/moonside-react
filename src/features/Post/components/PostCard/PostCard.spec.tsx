import { truncateText } from '@/utils';
import { fireEvent, render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import PostCard from './PostCard';
describe('PostCard', () => {
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
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SnackbarProvider>
          <PostCard post={mockData}></PostCard>
        </SnackbarProvider>
      </BrowserRouter>
    );
  });
  it('renders title, author and description of the card', () => {
    const descTrunc = truncateText(mockData.description, 115);
    const myReg = new RegExp(descTrunc as string, 'i');
    expect(screen.getByText(new RegExp(mockData.author, 'i'))).toBeInTheDocument();
    expect(screen.getByText(myReg)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockData.title, 'i'))).toBeInTheDocument();
  });
  it('render edit and delete button', () => {
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
  });
  it('show modal to delete post', () => {
    fireEvent.click(screen.getByText(/delete/i));
    expect(screen.getByText(/do you want to delete this post?/i)).toBeInTheDocument();
  });
});
