import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer'
import Navbar from './navbar';

const MainLayout = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        {/* navbar */}
        <header>
          <Navbar />
        </header>

        {/* main content */}
        <main className='flex-grow'>
          {/* children */}
          <Outlet />
        </main>

        {/* footer */}
        <Footer />
      </div>
    </>
  )
}

export default MainLayout;
