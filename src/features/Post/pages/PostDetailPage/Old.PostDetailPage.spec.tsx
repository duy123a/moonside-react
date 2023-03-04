import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import PostDetailPage from './PostDetailPage';
import postApi from '@/apis/postsApi';
import { AxiosHeaders } from 'axios';

jest.mock('@/apis/postsApi');
const mockedAxios = jest.mocked(postApi);
const mockedAxiosGet = jest.mocked(mockedAxios.getById);

describe('PostDetailPage', () => {
  beforeEach(() => {
    mockedAxiosGet.mockResolvedValue({
      data: {
        id: 'lea2aa9l7x3a5th',
        title: 'Error amet sit',
        author: 'Kira Schroeder',
        description:
          'dolorum aliquam id nesciunt aut recusandae molestiae ut voluptatem libero nulla laboriosam sit quidem ut harum dignissimos exercitationem nesciunt animi maiores quasi molestiae omnis est eligendi vero minus quia nostrum ea facilis quia assumenda doloribus accusamus ullam ut quas sequi voluptas et facere quo quis consequatur quae possimus tenetur tempora',
        createdAt: 1662885819124,
        updatedAt: 1662885819124,
        imageUrl: 'https://picsum.photos/id/214/1368/400',
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: new AxiosHeaders(),
      },
    });
  });
  describe('has valid data', () => {
    it('should call postApi to get the post', async () => {
      render(
        <BrowserRouter>
          <SnackbarProvider>
            <PostDetailPage></PostDetailPage>
          </SnackbarProvider>
        </BrowserRouter>
      );
      await waitFor(() => expect(mockedAxiosGet).toHaveBeenCalledTimes(1));
    });
    it('skeleton loading should disappear after loading', async () => {
      render(
        <BrowserRouter>
          <SnackbarProvider>
            <PostDetailPage></PostDetailPage>
          </SnackbarProvider>
        </BrowserRouter>
      );
      await waitForElementToBeRemoved(() => screen.queryByLabelText('loadingPostDetail'));
    });
  });
});
