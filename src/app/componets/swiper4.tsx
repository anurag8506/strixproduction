"use client";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Correct way to import Autoplay
import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';

const AutoSwiper = () => {
  const items = [
    { text: "Akash Verma", subtext:'Business Development Head', imgUrl: "/assets/image (22).png" },
    { text: "Rajnandan soni",  subtext:'Founder',imgUrl: "/assets/image (23).png" },
    { text: "Kirti fore",  subtext:'Management', imgUrl: "/assets/image (24).png" },
    { text: "Rohan Rana",   subtext:'Design Head',imgUrl: "/assets/image (25).png" },
    { text: "Akash Verma", subtext:'Business Development Head', imgUrl: "/assets/image (22).png" },
    { text: "Rajnandan soni",  subtext:'Founder',imgUrl: "/assets/image (23).png" },
    { text: "Kirti fore",  subtext:'Management', imgUrl: "/assets/image (24).png" },
    { text: "Rohan Rana",   subtext:'Design Head',imgUrl: "/assets/image (25).png" },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000, 
        disableOnInteraction: false, // Keep autoplay active after interaction
      }}
      loop={true} // Enable infinite scrolling
      spaceBetween={20} // Add space between slides
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 }, 
        768: { slidesPerView: 4, spaceBetween: 15 }, 
        1024: { slidesPerView: 6, spaceBetween: 5 }, 
      }}
      className="w-full text-green-500 text-lg flex items-center"
    >
      {items.map((item, index) => (
   <SwiperSlide key={index} className="flex flex-col items-center">
   <div>
     <div>
     <Image
         src={item.imgUrl}
         className="object-contain mb-2 w-full"
         width={10800}
         height={10800}
         alt="Image"
       />
              <p className="mx-2 text-[#fff] font-[cd-m] text-[22px] pt-4">{item.text}</p>
       <p className="text-[18px] font-[cd-r] text-[#B8B8B8] mx-2 ">{item.subtext}</p>
     </div>
     <div>
    

     </div>
  
   </div>
 
 </SwiperSlide>
 
      ))}
    </Swiper>
  );
};

export default AutoSwiper;
