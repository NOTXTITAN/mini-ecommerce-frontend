import React from 'react';
import { Link, Links } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-3 sticky text-opacity-55 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">REACT WEBSITE</h1>
        <nav>
          <ul className="flex space-x-5">
            <li className='className="text-white hover:text-blue-200"'>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li  className='className="text-white hover:text-blue-200"'>
                <Link to='/about'>
                About
                </Link>

              </li>

            <li className='className="text-white hover:text-blue-200"'>
                <Link to='/login'>
                Login
                </Link>
            </li>
          
           <li className='className="text-white hover:text-blue-200"'>
            <Link to='/signup'>
            Signup
            </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;