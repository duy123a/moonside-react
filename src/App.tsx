import { useRoutes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard></Dashboard>,
    },
    {
      path: '/post',
      element: <></>,
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
