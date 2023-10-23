import React from 'react'
import Footer from './footer'

const MainLayout = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        {/* navbar */}
        <header></header>

        {/* main content */}
        <main className='flex-grow'></main>

        {/* footer */}
        <Footer />
      </div>
    </>
  )
}

export default MainLayout;
