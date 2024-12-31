"use client";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct way to import Autoplay
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';


const AutoSwiper = () => {
  const items = [
    { text: "FLEXIBLE", imgUrl: "/assets/Vector (4).png" },
    { text: "PROFESSIONAL", imgUrl: "/assets/Vector (6).png" },
    { text: "PROACTIVE", imgUrl: "/assets/Vector (5).png" },
    { text: "BRUTAL", imgUrl: "/assets/Vector (6).png" },
    { text: "COMPREHENSIVE", imgUrl: "/assets/Vector (4).png" },

    { text: "REBELLIOUS", imgUrl: "/assets/Vector (5).png" },
    { text: "DEDICATED", imgUrl: "/assets/Vector (6).png" },
    { text: "INNOVATIVE", imgUrl: "/assets/Vector (5).png" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000, // 4-second auto-slide
        disableOnInteraction: false, // Keep autoplay active after interaction
      }}
      loop={true} // Enable infinite scrolling
      spaceBetween={20} // Add space between slides
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 }, // Show 2 slides on small screens
        768: { slidesPerView: 2, spaceBetween: 10 }, // Show 4 slides on tablets
        1024: { slidesPerView: 6, spaceBetween: 20 }, // Show 6 slides on larger screens
      }}
      className="w-full text-green-500 text-lg flex items-center"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="flex flex-col items-center">
            <div className='d-flex align-items-center gap-2'>
            <Image
            src={item.imgUrl}
            className="object-contain mb-2 sm:w-[50px] w-[30px] "
            width={50}
            height={50}
            alt="Image"
          />
          <span className="mx-2 text-[#77FB38] font-[cd-m] sm:text-[18px] text-[16px]">{item.text}</span>
            </div>
     
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoSwiper;
