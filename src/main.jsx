import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './index.css';
import Root from './Component/Root/Root';
import Loader from './Component/Loader/Loader';

// Lazy load components
const Home = lazy(() => import('./Component/Home/Home'));
const Contacts = lazy(() => import('./Component/Contacts/Contacts'));
const About = lazy(() => import('./Component/About/About'));
const Work = lazy(() => import('./Component/Work/Work'));
const Tech = lazy(() => import('./Component/Tech/Tech'));
const ErrorPage = lazy(() => import('./Component/ErrorPage/ErrorPage'));

// Detect dark mode
const getDarkMode = () => {
  return localStorage.getItem('theme') === 'dark';
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/tech', element: <Tech /> },
    ],
  },
]);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getDarkMode());

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <StrictMode>
      <Suspense fallback={<Loader isDarkMode={isDarkMode} />}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
