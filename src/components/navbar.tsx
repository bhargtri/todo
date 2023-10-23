import React from 'react'
import { CommandIcon } from 'lucide-react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='shadow-xl'>
        <nav className='flex items-center justify-between max-w-screen-lg mx-auto w-11/12 py-5'>
          {/* Left side */}
          <ul>
            <Link to={'/'} className='flex items-center gap-2'>
              <CommandIcon size={30} />
              <h1 className='font-bold text-2xl'>Todo App.</h1>
            </Link>

          </ul>

          {/* Right side */}
          <ul>
            <Link to={'/login'}>
              <button className='px-5 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-700'>Login</button>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
