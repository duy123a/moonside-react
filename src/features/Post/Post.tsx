import NotFound from '@/components/NotFound';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostAddPage from './pages/PostAddPage';
import PostDetailPage from './pages/PostDetailPage';
import PostEditPage from './pages/PostEditPage';
import PostListPage from './pages/PostListPage';

export interface PostProps {}

export default function Post(props: PostProps) {
  return (
    <Routes>
      <Route path="/" element={<PostListPage></PostListPage>}></Route>
      <Route path="/:postId" element={<PostDetailPage></PostDetailPage>}></Route>
      <Route path="/add" element={<PostAddPage></PostAddPage>}></Route>
      <Route path="/edit/:postId" element={<PostEditPage></PostEditPage>}></Route>
      <Route path="/edit" element={<NotFound></NotFound>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
