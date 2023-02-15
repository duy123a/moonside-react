export interface QuillContent {
  attributes?: Record<string, string | undefined>;
  insert: string;
}

export interface Post {
  id: string;
  author: string;
  description?: string | QuillContent[];
  imageUrl: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

export interface Pagination {
  _limit: string | number;
  _page: string | number;
  _totalRows: string | number;
}

export interface PostReponse {
  data: Post[];
  pagination: Pagination;
}

export interface SearchParams {
  _limit?: string | number;
  _page?: string | number;
  title_like?: string;
}
