import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gradient-to-l from-neutral-800 to-black fixed top-0 left-0 w-[100%] z-[1000]'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <div className='ml-[10%]'>
            <div className='font-bold text-white text-3xl italic'>
              <span className='text-teal-400 text-[50px]'>R</span>ajeshwari
            </div>
          </div>
          <div className='md:hidden'>
            <button
              className='text-white focus:outline-none'
              onClick={toggleMenu}
            >
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex'>
            <ul className='flex text-white'>
              <li className='mx-5 px-2 py-4 text-lg md:text-xl font-bold hover:text-teal-500 cursor-pointer'>
                <Link to="/">Home</Link>
              </li>
              <li className='mx-5 px-2 py-4 text-lg md:text-xl font-bold hover:text-teal-500 cursor-pointer'>
                <Link to="/about">About</Link>
              </li>
              <li className='mx-5 px-2 py-4 text-lg md:text-xl font-bold hover:text-teal-500 cursor-pointer'>
                <Link to="/skills">Skills</Link>
              </li>
              <li className='mx-5 px-2 py-4 text-lg md:text-xl font-bold hover:text-teal-500 cursor-pointer'>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`md:hidden fixed top-16 right-0 bg-neutral-800 w-64 h-screen z-10 transform transition-transform ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='flex flex-col text-white pt-8'>
          <li className='my-2'>
            <Link
              to="/"
              className='block px-4 py-2 text-lg font-bold hover:text-teal-500 cursor-pointer'
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className='my-2'>
            <Link
              to="/about"
              className='block px-4 py-2 text-lg font-bold hover:text-teal-500 cursor-pointer'
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className='my-2'>
            <Link
              to="/skills"
              className='block px-4 py-2 text-lg font-bold hover:text-teal-500 cursor-pointer'
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li className='my-2'>
            <Link
              to="/projects"
              className='block px-4 py-2 text-lg font-bold hover:text-teal-500 cursor-pointer'
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
