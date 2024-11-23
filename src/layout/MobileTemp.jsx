import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sabor from "../assets/img/sabour.png";
import hacker from "../assets/img/hacker.jfif";
import programmer from "../assets/img/programmer.jfif";
import hosh from "../assets/img/hosh.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ResponsiveMenu from "../components/ResponsiveMenu";
import BlackLayer from "../components/BlackLayer";
const MobileTemp = () => {
  const showResMenu = () => {
    let menu = document.getElementById("ResMenu");
    let bars = document.getElementById("bars");
    let blackLayer = document.getElementById("blackLayer");
    let close = document.getElementById("close");
    let root = document.getElementById("root");
    if (Array.from(menu.classList).includes("-mr-[1200px]")) {
      blackLayer.classList.remove("bg-opacity-0");
      blackLayer.classList.add("bg-opacity-80");
      blackLayer.classList.remove("-z-10");
      blackLayer.classList.add("!z-20");
      bars.classList.add("hidden");
      close.classList.remove("hidden");
      root.classList.add("overflow-hidden");
      menu.classList.remove("-mr-[1200px]");
    } else {
      blackLayer.classList.remove("bg-opacity-80");
      blackLayer.classList.remove("!z-20");
      blackLayer.classList.add("-z-10");
      blackLayer.classList.add("bg-opacity-0");
      bars.classList.remove("hidden");
      close.classList.add("hidden");
      root.classList.remove("overflow-hidden");
      menu.classList.add("-mr-[1200px]");
    }
  };
  useEffect(()=>{
    let body = document.getElementById('root')
    body.classList.remove('bg-gray-900')
  },[])
  return (
    <>
      <ResponsiveMenu />
      <main className='xl:hidden !z-30 !bg-white'>
        <nav className='p-2 !z-30 bg-gray-800 overflow-x-hidden text-white px-8 flex justify-between items-center'>
          <div className='flex items-center justify-center'>
            <div className='w-12 h-12 rounded-full bg-emerald-500'>
              <img className='rounded-full' src={sabor} alt='' />
            </div>
            <div className='mx-4'>
              <h1 className='font-bold text-sm'>مهندس صبور</h1>
            </div>
          </div>
          <div className=''>
            <button onClick={showResMenu} id='showResMenu'>
              <span id='bars' className='fa fa-bars'></span>
              <span id='close' className='fa fa-close hidden'></span>
            </button>
          </div>
        </nav>
        <BlackLayer />
        <div className='w-full my-5 flex items-center justify-center'>
          <h2
            className='w-fit font-bold px-2 relative
         before:contents-[" "] before:left-[100%] before:top-[50%] before:rounded-full
         before:border before:border-blue-500
         before:h-[4px] before:w-[80px] before:bg-sky-300 before:absolute
         after:contents-[" "] after:right-[100%] after:top-[50%] after:rounded-full
         after:border after:border-blue-500
         after:h-[4px] after:w-[80px] after:bg-sky-300 after:absolute
        
        
        '
          >
            به وبسایت من خوش امدید
          </h2>
        </div>
        <div className='my-10'>
          <div className='w-[95%] lg:w-[65%] mx-auto rounded-lg bg-purple-500 h-72'>
            <Swiper
              className='w-full h-full rounded-lg'
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
            >
              <SwiperSlide className='bg-green-400 w-full h-full'>
                <img className='w-full h-full' src={hosh} alt='' />
              </SwiperSlide>
              <SwiperSlide className='bg-purple-400 w-full h-full'>
                <img className='w-full h-full' src={programmer} alt='' />
              </SwiperSlide>
              <SwiperSlide className='bg-sky-400 w-full h-full'>
                <img className='w-full h-full' src={hacker} alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className='flex justify-center space-x-8 space-x-reverse my-5 w-[95%] mx-auto
         p-2 rounded-lg [&_>a]:text-4xl items-center'
          >
            <a href={"https://github.com/Arminsbss"}>
              <span className='text-green-500 fab fa-github'></span>
            </a>
            <a
              href={
                "https://www.linkedin.com/in/armin-sabour-moghaddam-44495783/"
              }
            >
              <span className='text-blue-600 fab fa-linkedin'></span>
            </a>
            <a href={"https://t.me/Engineer_sabour"}>
              <span className='text-sky-500 fab fa-telegram'></span>
            </a>
            <a href={"https://www.youtube.com/@arminsbss/featured"}>
              <span className=' text-red-500 fab fa-youtube'></span>
            </a>
          </div>
        </div>
        <div className='flex shadow-lg  border-gray-100 border  w-[95%] flex-col mx-auto my-5'>
          <div className='p-7 '>
            <p className='text-justify leading-9'>
              من فردی وقت شناس، قاطع و تحلیل گر هستم و این ویژگی ها را در طول
              فعالیت های تحصیلی و حرفه ای خود به طور مداوم نشان می دهم. با کسب
              بالاترین معدل در بین دانشجویان کارشناسی ارشد، عمیقاً به تعالی
              متعهد هستم. تمایل من به تجربیات جدید، اشتیاق من را برای کشف فرصت
              های متنوع تحریک می کند. با نگاهی به آینده، من بر روی دنبال کردن
              حرفه ای در تجزیه و تحلیل داده های بزرگ متمرکز هستم، جایی که هدفم
              استفاده از تکنیک های یادگیری ماشین برای مقابله با چالش های پیچیده
              است. من در جنبه های مختلف تجزیه و تحلیل داده ها مهارت دارم، مهارت
              های پیش پردازش داده ها، آموزش مدل های یادگیری ماشینی و تجسم بینش
              ها را به طور موثر دارم. می‌توانید ویترینی از پروژه‌های من، از جمله
              تقویت داده‌ها، استفاده از چارچوب‌های علم داده مانند NumPy، Pandas،
              و scikit-learn، و همچنین تکنیک‌های تجسم با ابزارهایی مانند
              Tableau، TSQL، ML، و Deep Learning را در GitHub من بیابید. مشخصات.
              در طی یک دوره کارآموزی بازاریابی دیجیتال در شرکت Smart Expert، با
              سازمان های محترمی مانند Young و Job همکاری کردم و با استفاده از
              Google Analytics تجزیه و تحلیل های کاملی انجام دادم. در حال حاضر،
              من به عنوان یک تحلیلگر اختصاصی داده در آینده سازان خدمت می کنم،
              جایی که در استخراج و پردازش داده های خام از پایگاه های داده
              PostgreSQL تخصص دارم. من در مورد چشم انداز مشارکت با تخصص خود در
              پروژه های تأثیرگذار و ادامه رشد در زمینه پویا تجزیه و تحلیل داده
              هیجان زده هستم."
            </p>
          </div>
          <div className=' flex-col p-3 my-5'>
            <div className='flex justify-between px-5 py-3 border-b border-gray-200 items-center'>
              <div className='flex justify-center  items-center'>
                <span className='text-2xl w-12 h-12 flex justify-center items-center shadow-xl border-purple-500 border  rounded-full fab fa-black-tie ' />
                <a
                  href='https://projects.esabour.ir/'
                  className='mx-3 font-bold'
                >
                  پروژه های من
                </a>
              </div>
              <div className=''>
                <span className='	fas fa-angle-double-left mx-2 text-sm'></span>
              </div>
            </div>
            <div className='flex justify-between px-5 py-3 border-b border-gray-200 items-center'>
              <div className='flex items-center'>
                <span className='text-2xl w-12 h-12 flex justify-center items-center shadow-xl border-purple-500 border  rounded-full fas fa-robot' />
                <a href='https://bots.esabour.ir/' className='mx-3 font-bold'>
                  ربات های تلگرام من
                </a>
              </div>
              <div className=''>
                <span className='	fas fa-angle-double-left mx-2 text-sm'></span>
              </div>
            </div>
            <div className='flex justify-between px-5 py-3 border-b border-gray-200 items-center'>
              <div className='flex items-center'>
                <span className='text-2xl w-12 h-12 flex justify-center items-center shadow-xl border-purple-500 border  rounded-full fab fa-chrome' />
                <a
                  href='https://websites.esabour.ir/'
                  className='mx-3 font-bold'
                >
                  وبسایت های من
                </a>
              </div>
              <div className=''>
                <span className='	fas fa-angle-double-left mx-2 text-sm'></span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-800 text-white p-3 justify-center items-center flex'>
          <p>طراح و برنامه نویس امیرسجاد نوری</p>
          <a href='https://instagram.com/amirsajjad_nouri'>
            <span className='fab fa-instagram text-3xl text-orange-500 mx-2'></span>
          </a>
        </div>
      </main>
    </>
  );
};

export default MobileTemp;
