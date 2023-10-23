import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className='text-center py-10'>
        <p>&copy; {year} All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer;
