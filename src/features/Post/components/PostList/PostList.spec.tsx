import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import PostList from './PostList';

it('it should render a list with 3 items', () => {
  const mockData = [
    {
      id: 'lea2aa9l7x3a5tg',
      title: 'Iure aperiam unde',
      author: 'Freddie Zieme',
      description:
        'dolor fuga animi dolore voluptatum aliquam qui doloremque quibusdam similique et officiis sit alias rerum et dolorem necessitatibus rerum quisquam iusto nostrum ut officiis inventore velit voluptates possimus laudantium rerum dolores aut sint velit nisi odio laborum ut tempora nisi hic omnis consequatur et atque voluptas possimus officia voluptatum animi',
      createdAt: 1662885819124,
      updatedAt: 1662885819124,
      imageUrl: 'https://picsum.photos/id/624/1368/400',
    },
    {
      id: 'lea2aa9l7x3a5th',
      title: 'Error amet sit',
      author: 'Kira Schroeder',
      description:
        'dolorum aliquam id nesciunt aut recusandae molestiae ut voluptatem libero nulla laboriosam sit quidem ut harum dignissimos exercitationem nesciunt animi maiores quasi molestiae omnis est eligendi vero minus quia nostrum ea facilis quia assumenda doloribus accusamus ullam ut quas sequi voluptas et facere quo quis consequatur quae possimus tenetur tempora',
      createdAt: 1662885819124,
      updatedAt: 1662885819124,
      imageUrl: 'https://picsum.photos/id/214/1368/400',
    },
    {
      id: 'lea2aa9l7x3a5ti',
      title: 'Officia recusandae ad',
      author: 'Issac Rolfson',
      description:
        'ut eum iure aut rerum eaque dignissimos sed sed ab corporis et ad eaque soluta atque ut quasi est odio eum quia voluptatem quia est est dolorem est velit et aut quam dolore vitae deserunt aperiam voluptatem reiciendis non iusto dolor id sed velit et rerum possimus occaecati unde molestiae',
      createdAt: 1662885819124,
      updatedAt: 1662885819124,
      imageUrl: 'https://picsum.photos/id/559/1368/400',
    },
  ];
  render(
    <BrowserRouter>
      <SnackbarProvider>
        <PostList data={mockData}></PostList>
      </SnackbarProvider>
    </BrowserRouter>
  );
  const postList = screen.getAllByLabelText('postCard');
  expect(postList.length).toBe(3);
});

it('it should render a list with 0 items', () => {
  render(
    <BrowserRouter>
      <SnackbarProvider>
        <PostList></PostList>
      </SnackbarProvider>
    </BrowserRouter>
  );
  let postList = [];
  try {
    postList = screen.getAllByLabelText('postCard');
  } catch (error) {
    console.log(error);
  }
  expect(postList.length).toBe(0);
});
