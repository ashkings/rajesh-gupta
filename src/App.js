import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/header';

// Lazy load components
const Home = lazy(() => import('./components/Home/home'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>,
  })),
);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
