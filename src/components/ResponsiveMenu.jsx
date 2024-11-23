import React from "react";
import { Link } from "react-router-dom";
import sabor from "../assets/img/sabour.png";
const ResponsiveMenu = () => {
  return (
    <>
      <section
        id='ResMenu'
        className='w-[70%] md:w-[40%] lg:w-[25%] 2xl:hidden -mr-[1200px] flex flex-col justify-between h-full transition-all duration-700 absolute bg-gray-800 !z-50'
      >
        <div className=''>
          <div className='flex px-8 items-center py-2 bg-gray-800 justify-between border-b border-white'>
            <strong className='text-white'>آرمین صبور</strong>
            <div className='w-12 h-12 rounded-full bg-emerald-500'>
              <img className='rounded-full' src={sabor} alt='' />
            </div>
          </div>
          <ul className='p-5 text-white'>
            <li className='flex items-center p-3 border-b border-gray-700'>
              <span className=' text-xl text-gray-300 mt-1 fas fa-robot'></span>
              <a href="https://bots.esabour.ir/" className='mx-3 font-bold'>ربات های من</a>
            </li>
            <li className='flex items-center p-3 border-b border-gray-700'>
              <span className='text-xl text-gray-300 mt-1 fab fa-chrome'></span>
              <a href="https://websites.esabour.ir/" className='mx-3 font-bold'>وبسایت های من</a>
            </li>
            <li className='flex items-center p-3 border-b border-gray-700'>
              <span className='text-xl text-gray-300 mt-1 fab fa-black-tie'></span>
              <a href="https://projects.esabour.ir/" className='mx-3 font-bold'>پروژه های من</a>
            </li>
          </ul>
          <div
            className='flex justify-center px-5 space-x-8 space-x-reverse my-5 mx-auto
           rounded-lg [&_>a]:text-3xl items-center'
          >
            <a href={"https://github.com/Arminsbss"}>
              <span className='text-green-500 fab fa-github'></span>
            </a>
            <a href={"https://t.me/Engineer_sabour"}>
              <span className='text-sky-500 fab fa-telegram'></span>
            </a>
            <a href={"https://www.youtube.com/@arminsbss/featured"}>
              <span className=' text-red-500 fab fa-youtube'></span>
            </a>
            <a href={"https://www.linkedin.com/in/armin-sabour-moghaddam-44495783/"}>
              <span className='text-blue-600 fab fa-linkedin'></span>
            </a>
          </div>
        </div>
        <div className='w-full bg-gray-900 text-white p-3 justify-center items-center flex'>
          <p className='text-sm'>طراح و برنامه نویس امیرسجاد نوری</p>
          <a href="https://instagram.com/amirsajjad_nouri">
            <span className='fab fa-instagram text-3xl text-orange-500 mx-2'></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ResponsiveMenu;
