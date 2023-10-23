import React from 'react'
import LoginPage from '../pages/login-page';
import MainLayout from './main-layout';
import HomePage from '../pages/home-page';
import AuthenticatedLayout from './authenticated-layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const AppRouter = () => {
  const paths = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<AuthenticatedLayout />}>
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Route>
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
