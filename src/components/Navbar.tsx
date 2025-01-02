import React from 'react';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Samna</div>
        <ul className='flex gap-10 lg:gap-16 hidden md:flex'>
          <li className='menu-link'><a href='#hero'>Home</a></li>
          <li className='menu-link'><a href='#about'>About</a></li>
          <li className='menu-link'><a href='#skills'>Skills</a></li>
          <li className='menu-link'><a href='#projects'>Projects</a></li>
          <li className='menu-link'><a href='#contact'>Contact</a></li>
        </ul>
        <IoMdMenu className='md:hidden' size={30}/>
      </div>
    </div>
  );
}

export default Navbar;
