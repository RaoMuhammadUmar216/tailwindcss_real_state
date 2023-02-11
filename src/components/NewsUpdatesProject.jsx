import React from 'react';
import n1 from './public/n1.png';
import project1 from './public/project1.png';
import project2 from './public/project2.png';
import project3 from './public/project3.png';
import project4 from './public/project4.png';
import big1 from './public/big1.png';
import big2 from './public/big2.png';
import big3 from './public/big3.png';
import big4 from './public/big4.png';

const NewsUpdatesProject = () => {
  return (
    <div>

      <div className='md:mx-[5rem] overflow-y-auto h-[680px] md:max-w-[1280px] '>

        <h1 className='my-8 ml-10 md:ml-10 font-bold text-2xl md:text-3xl'>News & Update</h1>
        <div className='flex '>
          <div className='ml-6 h-[26.1875rem]'>
            <div className='my-8'>
              <img src={n1} className="w-[280px] shadow md:w-[370px]" alt="" />
            </div>
            <div className='flex font-bold '>
              <div>
                <h1 className='text-3xl'>12</h1>
                <h3 className='ml-3'>Jan</h3>
              </div>
              <div className='ml-3 text-lg w-[12.25rem]'>
                <h1>
                  Elements of Content in Epoxy Paint
                </h1>
              </div>
            </div>
            <div>
              <p className='text-[#C4C4C4] w-[245px]'>
                Epoxy paint and epoxy floor
                contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                f resin...
                <a href="#" className='text-[#0A72AD] font-semibold'>See More</a>
              </p>
            </div>
          </div>

          <div className='ml-6 h-[26.1875rem]'>
            <div className=' my-8'>
              <img src={n1} className="w-[280px] shadow md:w-[370px]" alt="" />
            </div>
            <div className='flex font-bold '>
              <div>
                <h1 className='text-3xl'>12</h1>
                <h3 className='ml-3'>Jan</h3>
              </div>
              <div className='ml-3 text-lg w-[12.25rem]'>
                <h1>
                  Elements of Content in Epoxy Paint
                </h1>
              </div>
            </div>
            <div>
              <p className='text-[#C4C4C4] w-[245px]'>
                Epoxy paint and epoxy floor
                contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                f resin...
                <a href="#" className='text-[#0A72AD] font-semibold'>See More</a>
              </p>
            </div>
          </div>
          <div className='ml-6 h-[26.1875rem]'>
            <div className=' my-8'>
              <img src={n1} className="w-[280px] shadow md:w-[370px]" alt="" />
            </div>
            <div className='flex font-bold '>
              <div>
                <h1 className='text-3xl'>12</h1>
                <h3 className='ml-3'>Jan</h3>
              </div>
              <div className='ml-3 text-lg w-[12.25rem]'>
                <h1>
                  Elements of Content in Epoxy Paint
                </h1>
              </div>
            </div>
            <div>
              <p className='text-[#C4C4C4] w-[245px]'>
                Epoxy paint and epoxy floor
                contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type o
                f resin...
                <a href="#" className='text-[#0A72AD] font-semibold'>See More</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='my-10 md:mb-[10rem] flex flex-col'>
        <h2 className='font-bold text-2xl md:text-3xl ml-20 w-[13rem] mb-10 md:ml-15 md:max-w-[80rem]'>
          Our collection
          best project
        </h2>
        <div className='w-full flex justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 shadow md:max-w-[80rem] mx-auto'>
            <picture>
              <source media="(max-width: 799px)" srcset={project1} />
              <source media="(min-width: 800px)" srcset={big1} />
              <img src={project1} alt="Chris standing up holding his daughter Elva" />
            </picture>
            <picture>
              <source media="(max-width: 799px)" srcset={project2} />
              <source media="(min-width: 800px)" srcset={big2} />
              <img src={project2} alt="Chris standing up holding his daughter Elva" />
            </picture>
            <picture>
              <source media="(max-width: 799px)" srcset={project3} />
              <source media="(min-width: 800px)" srcset={big3} />
              <img src={project3} alt="Chris standing up holding his daughter Elva" />
            </picture>
            <picture>
              <source media="(max-width: 799px)" srcset={project4} />
              <source media="(min-width: 800px)" srcset={big4} />
              <img src={project4} alt="Chris standing up holding his daughter Elva" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsUpdatesProject