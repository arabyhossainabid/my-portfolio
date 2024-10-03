import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // Make sure you import the CSS here
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Contacts from './Component/Contacts/Contacts';
import About from './Component/About/About';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Work from './Component/Work/Work';
import Tech from './Component/Tech/Tech';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/tech', element: <Tech /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
