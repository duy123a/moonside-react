import '@fontsource/roboto';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Post from './features/Post';
import MainLayout from './layouts/MainLayout';

function App() {
  const elements = useRoutes([
    {
      path: '/posts/*',
      element: <Post></Post>,
    },
    {
      path: '/',
      element: <Dashboard></Dashboard>,
    },
    {
      path: '*',
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="App">
      <MainLayout>{elements}</MainLayout>
    </div>
  );
}

export default App;
