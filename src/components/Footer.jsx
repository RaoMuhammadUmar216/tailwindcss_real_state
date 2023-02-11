import React from "react";
import icon1 from './public/icon1.png'
import icon2 from './public/icon2.png'
import icon3 from './public/icon3.png'
import icon4 from './public/icon4.png'


const Footer = () => (

  <footer className="footer_gradient ">
    <div className="mx-auto max-w-[1280px] h-[37.375rem] md:h-[25rem] text-white p-8 pt-12 flex flex-col md:flex-row gap-8 md:ml-14">
      <div className="max-w-[34.375rem] md:mt-[2rem]">
        <div className='cursor-pointer font-bold py-5'>LOGO</div>
        <p className="font-thin">
          Is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.
        </p>
        <div className="flex gap-3 my-9 cursor-pointer">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
        </div>
      </div>

      <div className="flex gap-[7rem] md:mt-[3rem]" >
        <div>
          <h1 className="font-bold text-xl mb-6">
            Company
          </h1>

          <ul>
            <li className="mb-6">About</li>
            <li className="mb-6">How it Works</li>
            <li className="mb-6">Terms</li>
            <li className="mb-6">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-xl mb-6">
            Company
          </h1>
          <ul>
            <li className="mb-6">Docmentation</li>
            <li className="mb-6">License</li>
          </ul>
        </div>
      </div>
    </div>
  </footer >
);

export default Footer;