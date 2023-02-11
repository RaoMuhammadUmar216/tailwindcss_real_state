import React from 'react';
import e1 from './public/e1.png'
import e2 from './public/e2.png'
import e3 from './public/e3.png'
import e4 from './public/e4.png'

const Experience = () => (

  <div className='mt-12 px-7'>
    <div className='w-[90px] h-[4px] md:h-[9px] bg_bar md:mx-[7.5rem]' />
    <div className='md:flex justify-between md:mx-[7.5rem]' >
      <div className='font-bold text-3xl my-4 max-w-[270px] md:max-w-[370px] md:leading-[4rem] md:text-[46px] '>
        What Make Us
        Different?
      </div>

      <div className='text-lg max-w-[25rem] text-[#C4C4C4] md:leading-[2rem]'>
        Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services
      </div>
    </div>

    <div className='md:flex md:gap-12 md:mx-[8rem] items-start'>
      <div className='my-12 flex flex-col text-center justify-center items-center'>
        <div><img src={e1} alt="" /></div>
        <div className='font-bold text-2xl my-4'>Experienced</div>
        <div className=' text-[#C4C4C4] max-w-[14.62rem] text-lg'>Our experience of 25 years of building and making achievements in the world of development</div>
      </div>

      <div className='my-12 flex flex-col text-center justify-center items-center'>
        <div><img src={e2} alt="" /></div>
        <div className='font-bold text-2xl my-4'>competitive price</div>
        <div className=' text-[#C4C4C4] max-w-[14.62rem] text-lg'>The prices we offer you are very competitive without reducing the quality of the company's work in the slightest</div>
      </div>

      <div className='my-12 flex flex-col text-center justify-center items-center'>
        <div><img src={e3} alt="" /></div>
        <div className='font-bold text-2xl my-4'>On Time</div>
        <div className=' text-[#C4C4C4] max-w-[14.62rem] text-lg'>We prioritize the quality of our work and finish it on time</div>
      </div>

      <div className='my-12 flex flex-col text-center justify-center items-center'>
        <div><img src={e4} alt="" /></div>
        <div className='font-bold text-2xl my-4'>Best Materials</div>
        <div className=' text-[#C4C4C4] max-w-[14.62rem] text-lg'>The material determines the building itself so we recommend that you use the best & quality materials in its class.</div>
      </div>
    </div>
  </div>

);


export default Experience