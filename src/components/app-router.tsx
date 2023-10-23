import React from 'react'
import LoginPage from '../pages/login-page';
import MainLayout from './main-layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const AppRouter = () => {
  const paths = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={paths} />
    </>
  )
}

export default AppRouter
