import React from 'react';

const Navbar = () => {
  return (

    <nav className='bg-[#2B2B2B] text-white  w-full h-[2.5rem] px-5'>
      <div className=' md:hidden w-full flex justify-between items-center'>
        <div className='cursor-pointer font-bold mt-3'>LOGO</div>
        <div className='cursor-pointer '>&#9776;</div>
      </div>

      <div className='md:flex md:justify-between md:ml-[8rem]  sm:hidden'>
        <div className='cursor-pointer font-bold md:mt-2'>LOGO</div>
        <ul className='w-full flex gap-12 ml-[10rem] md:mt-2'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Find a Team</li>
          <li className='cursor-pointer'>About Us</li>
          <li className='cursor-pointer'>Articles</li>
          <li className='cursor-pointer'>Portofolio</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </nav>

  )
};

export default Navbar