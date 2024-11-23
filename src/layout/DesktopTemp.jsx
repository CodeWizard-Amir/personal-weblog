import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from '../assets/img/image.svg'
import armin from "../assets/img/sabour.png";
const DesktopTemp = () => {
  useEffect(()=>{
    let body = document.getElementById('root')
    body.classList.add('bg-gray-900')
  },[])
  return (
    <>
      <main className='absolute w-full h-full  hidden  xl:flex flex-col justify-between'>
        <div className='w-full flex  justify-center'>
          <div className='2xl:w-1/2 xl:w-2/3 h-full text-white pt-20 flex-col flex justify-center items-center'>
            <h2 className='text-4xl '>مهندس صبور</h2>
            <div
              className='w-full px-20 [&_>a>img]:w-[60px] [&_>a>img]:object-contain [&_>a]:w-[32%]
            [&_>a>img]:mix-blend-color-burn  flex justify-between p-5 my-5'
            >
              <a href="https://bots.esabour.ir/"  className='p-5 flex flex-col justify-center hover:bg-indigo-800  items-center bg-indigo-500  hover:ring-2 hover:ring-gray-100 rounded-xl'>
                <span className=' text-4xl fas fa-robot'></span>
                <a href="https://bots.esabour.ir/" className='text-xl my-3'>ربات های من</a>
              </a>
              <a href="https://websites.esabour.ir/" className='p-5 flex flex-col justify-center items-center hover:bg-purple-800 bg-purple-500 hover:ring-2 hover:ring-gray-100  rounded-xl'>
                <span className='text-4xl fab fa-chrome'></span>
                <a href="https://websites.esabour.ir/" className='text-xl my-3'>وبسایت های من </a>
              </a>
              <a href="https://projects.esabour.ir/" className='p-5 flex flex-col justify-center items-center hover:bg-blue-800 bg-blue-500  hover:ring-2 hover:ring-gray-100  rounded-xl'>
                <span className='text-4xl fab fa-black-tie'></span>
                <a href="https://projects.esabour.ir/" className='text-xl my-3'>پروژه های من</a>
              </a>
            </div>
            <div className='w-full px-20'>
              <p className='text-md leading-9 text-justify'>
                من فردی وقت شناس، قاطع و تحلیل گر هستم و این ویژگی ها را در طول
                فعالیت های تحصیلی و حرفه ای خود به طور مداوم نشان می دهم. با کسب
                بالاترین معدل در بین دانشجویان کارشناسی ارشد، عمیقاً به تعالی
                متعهد هستم. تمایل من به تجربیات جدید، اشتیاق من را برای کشف فرصت
                های متنوع تحریک می کند. با نگاهی به آینده، من بر روی دنبال کردن
                حرفه ای در تجزیه و تحلیل داده های بزرگ متمرکز هستم، جایی که هدفم
                استفاده از تکنیک های یادگیری ماشین برای مقابله با چالش های
                پیچیده است. من در جنبه های مختلف تجزیه و تحلیل داده ها مهارت
                دارم، مهارت های پیش پردازش داده ها، آموزش مدل های یادگیری ماشینی
                و تجسم بینش ها را به طور موثر دارم. می‌توانید ویترینی از
                پروژه‌های من، از جمله تقویت داده‌ها، استفاده از چارچوب‌های علم
                داده مانند NumPy، Pandas، و scikit-learn، و همچنین تکنیک‌های
                تجسم با ابزارهایی مانند Tableau، TSQL، ML، و Deep Learning را در
                GitHub من بیابید. مشخصات. در طی یک دوره کارآموزی بازاریابی
                دیجیتال در شرکت Smart Expert، با سازمان های محترمی مانند Young و
                Job همکاری کردم و با استفاده از Google Analytics تجزیه و تحلیل
                های کاملی انجام دادم. در حال حاضر، من به عنوان یک تحلیلگر
                اختصاصی داده در آینده سازان خدمت می کنم، جایی که در استخراج و
                پردازش داده های خام از پایگاه های داده PostgreSQL تخصص دارم. من
                در مورد چشم انداز مشارکت با تخصص خود در پروژه های تأثیرگذار و
                ادامه رشد در زمینه پویا تجزیه و تحلیل داده هیجان زده هستم."
              </p>
            </div>
          </div>
          <div className='w-1/3 h-full flex flex-col items-center justify-center'>
            <img
            id="bigImg"
              className='w-80 h-80 mx-auto mt-12 border-4 border-orange-500 rounded-full'
              src={armin}
              alt=''
            />
            <div
              className='flex justify-center space-x-8 space-x-reverse my-5 w-[95%] mx-auto
         p-2 rounded-lg [&_>a]:text-4xl items-center'
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
        </div>
          <div className='w-full bg-gray-900 border-t-2 border-sky-500  text-white p-3 justify-center items-center flex'>
            <p>طراح و برنامه نویس امیرسجاد نوری</p>
            <a href="https://instagram.com/amirsajjad_nouri">
              <span className='fab fa-instagram text-3xl text-orange-500 mx-2'></span>
            </a>
          </div>
      </main>
    </>
  );
};

export default DesktopTemp;
