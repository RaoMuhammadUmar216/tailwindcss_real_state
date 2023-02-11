import React from 'react';
import heroBuilding from "./public/heroBuilding.png"

const Hero = () => {
  return (

    <div className=' text-white bg_hero_grad '>
      <div className='px-6 py-16 md:max-w-[563px] md:ml-14 '>
        <div className='leading-9 w-55 text-4xl mb-6 md:text-[54px] md:leading-[4rem] md:mt-16 '>
          We Provide Architectural desgin and Construction
        </div>
        <p className='mb-5 leading-6 text-[#C4C4C4] md:text-[18px] md:my-[6rem]'>
          More than 100 building and housing project that we have built.
          The building owner choose us over other constractor in Jakarta, Because our work is different.
        </p>
        <button className='bg_grad text-lg font-bold px-5 py-2'>Discover More</button>
      </div>
      <div className='md:flex flex-row-reverse justify-between'>
        <div className='flex justify-end -mt-36 md:-mt-[50rem]'>
          <img src={heroBuilding} className="md:w-[600px]" alt="" />
        </div>
      </div>
    </div>

  )
}

export default Hero