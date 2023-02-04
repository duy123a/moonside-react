import NotFound from '@/components/NotFound';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';

export interface PostProps {}

export default function Post(props: PostProps) {
  return (
    <Routes>
      <Route path="/" element={<PostListPage></PostListPage>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
