import React from 'react';
import b1 from "./public/b1.png"
import b2 from "./public/b2.png"
import b3 from "./public/b3.jpg"

const Services = () => {
  return (
    <div>
      <div className='text-center mt-12 px-6 md:flex md:justify-between md:mx-12'>
        <div className='font-bold text-3xl mb-3 md:max-w-[304px]'>
          Our Excellent Services
        </div>
        <p className='text-[#C4C4C4] text-lg md:max-w-[561px]'>
          Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services
        </p>
      </div>


      <div className='flex ml-5 mt-5  overflow-x-auto gap-8 md:ml-[5rem] md:gap-10 md:mt-12'>
        <div className='grid place-content-center min-w-[16.25rem]'>
          <div className='md:mb-12'>
            <img src={b1} className='shadow-md md:w-[368px]' alt="" />
          </div>
          <h2 className='font-bold text-2xl my-6'>Commercial</h2>
          <div className='text-[#C4C4C4] max-w-[23rem] text-lg md:mt-12 '>
            Our experience building in the
            Commercial field includes Showrooms,
            Supermalls and Office Buildings
          </div>
        </div>

        <div className='grid place-content-center min-w-[16.25rem]'>
          <div className='md:mb-12'>
            <img src={b2} className='shadow-md md:w-[368px]' alt="" />
          </div>
          <h2 className='font-bold text-2xl my-6'>Resedential</h2>
          <div className='text-[#C4C4C4] max-w-[23rem] text-lg md:mt-12'>
            Residential development is the
            beginning that has shaped us to this
            day. Our development includes
            Houses & Apartments
          </div>
        </div>

        <div className='grid place-content-center min-w-[16.25rem]'>
          <div className='md:mb-12'>
            <img src={b3} className='shadow-md md:w-[368px]' alt="" />
          </div>
          <h2 className='font-bold text-2xl my-6'>Industrial</h2>
          <div className='text-[#C4C4C4] max-w-[23rem] text-lg md:mt-12'>Industrial development is our main
            line of business. We do Factory
            Construction, Warehouse and others</div>
        </div>
      </div>
    </div>
  )
}

export default Services