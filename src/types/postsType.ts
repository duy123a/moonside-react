export interface QuillContent {
  attributes?: Record<string, string>;
  insert: string;
}

export interface Post {
  id: string;
  author: string;
  description?: string | Array<QuillContent>;
  imageUrl: string;
  title: string;
  createdAt: number;
  updateAt: number;
}

export type PostRequest = Pick<Post, 'id' | 'author' | 'description' | 'imageUrl' | 'title'>;

export interface Pagination {
  _limit: string | number;
  _page: string | number;
  _totalRow: string | number;
}

export interface PostList {
  data: Post[];
  pagination: Pagination;
}

export interface SearchParams {
  _limit?: string | number;
  _page?: string | number;
}
