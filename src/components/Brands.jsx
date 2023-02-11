import React from 'react';
import l1 from './public/l1.png'
import l2 from './public/l2.png'

const Brands = () => (

  <div className='flex gap-5 items-center px-6 overflow-x-auto md:p-[2rem] md:justify-between' >
    <div className='grid place-content-center'>
      <img className='min-w-[7.5rem] md:w-[146px]' src={l1} alt="" />
    </div>
    <div className='grid place-content-center'>
      <img className='min-w-[7.5rem] md:w-[146px]' src={l2} alt="" />
    </div>
    <div className='grid place-content-center'>
      <img className='min-w-[7.5rem] md:w-[146px]' src={l1} alt="" />
    </div>
    <div className='grid place-content-center'>
      <img className='min-w-[7.5rem] md:w-[146px]' src={l2} alt="" />
    </div>
    <div className='grid place-content-center'>
      <img className='min-w-[7.5rem] md:w-[146px]' src={l1} alt="" />
    </div>
  </div>


)


export default Brands