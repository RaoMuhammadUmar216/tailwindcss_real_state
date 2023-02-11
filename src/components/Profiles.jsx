import React from 'react';
import p1 from './public/p1.png';
import p2 from './public/p2.png';
import e from './public/e.png';
import story from './public/story.png';



const Profiles = () => (

  <>
    <div className='md:max-w-[1280px] md:flex gap-14 md:mb-[6rem]'>
      <div className='flex justify-center flex-col items-center relative'>
        <img src={p1} className="md:w-[505px] md:h-[540px] md:ml-[8rem]" alt="" />
        <div className='absolute -bottom-[4rem] md:-right-[8rem] md:bottom-[8rem] bg_grad_profile w-[250px] h-[250px]'>
          <div className='flex-col text-center text-white'>
            <div className='flex justify-center my-4 pt-4'>
              <img src={p2} className="w-[5.6819rem] " alt="" />
            </div>
            <div className='font-bold text-2xl'>Dianne Russell</div>
            <div className='flex justify-center'>
              <div className='w-[13.9375rem] text-[14px] mt-3 text-[#C4C4C4] text-center'>
                More than 20 years of experience in the fieldarchitecture and has
                worked on project up to 100+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[8.5rem] mb-6 p-5 md:ml-[5.5rem]'>
        <div className='font-bold text-[1.4rem] md:text-[46px] md:w-[493px]  w-[14rem]'>Meet and talk with
          our best architecture</div>
        <p className='text-[#C4C4C4] w-[27rem]'>All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result.</p>

        <div className='mt-6 flex justify-between' >
          <button className='bg-[#0A72AD] shadow_btn px-5 py-2 text-white font-semibold'>
            See all team
          </button>
          <button className='flex items-center gap-2'>
            How it works
            <img src={e} alt="" />
          </button>
        </div>
      </div>
    </div>

    <div className='md:flex md:flex-row-reverse md:ml-[10rem]'>
      <div className='w-full flex justify-center'>
        <img className='w-[321px] md:w-[575px] shadow' src={story} alt="" />
      </div>

      <div className='my-3 px-4'>
        <h1 className='font-bold md:mb-12 text-2xl md:text-[46px] md:w-[275px] md:leading-[3rem] w-[9rem] '>
          Our Story
          Who we are
        </h1>
        <p className='text-[#C4C4C4] md:mb-12 my-3 w-[25rem]'>
          Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta.
          As the company grows, now we are present as a reliable...
        </p>
        <button className='bg-[#0A72AD] shadow_btn px-6 py-2 text-white font-semibold'>See More</button>
      </div>
    </div>
  </>
);


export default Profiles