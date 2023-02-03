import { PostRequest, SearchParams } from '@/types/postsType';
import axiosClient from './axiosClient';

// cancelToken Api of axios is deprecated, use AbortController instead

const postApi = {
  getAll(params: SearchParams, signal?: AbortSignal) {
    const url = '/posts';
    return axiosClient.get(url, { params, signal });
  },
  getById(id: string, signal?: AbortSignal) {
    const url = `/posts/${id}`;
    return axiosClient.get(url, { signal });
  },
  remove(id: string, signal?: AbortSignal) {
    const url = `posts/${id}`;
    return axiosClient.delete(url, { signal });
  },
  // JSON data
  add(data: PostRequest, signal?: AbortSignal) {
    const url = '/posts';
    return axiosClient.post(url, data, { signal });
  },
  update(data: PostRequest, signal?: AbortSignal) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url, data, { signal });
  },
  // Form data
  addFormData(data: FormData, signal?: AbortSignal) {
    const url = '/with-thumbnail/posts/';
    return axiosClient.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      signal,
    });
  },
  updateFormData(data: FormData, signal?: AbortSignal) {
    const url = `/with-thumbnail/posts/${data.get('id')}`;
    return axiosClient.patch(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      signal,
    });
  },
};

export default postApi;
