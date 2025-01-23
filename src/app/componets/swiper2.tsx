import Image from "next/image";

const AutoSwiper = () => {
  const items = [

    { imgUrl: "/assets/1.svg" },
    { imgUrl: "/assets/2.svg" },


    { imgUrl: "/assets/5.svg" },
    { imgUrl: "/assets/6.svg" },
    { imgUrl: "/assets/7.svg" },
    { imgUrl: "/assets/8.svg" },
    { imgUrl: "/assets/9.svg" },
    { imgUrl: "/assets/1.svg" },
    { imgUrl: "/assets/2.svg" },


    { imgUrl: "/assets/5.svg" },
    { imgUrl: "/assets/6.svg" },
    { imgUrl: "/assets/7.svg" },
    { imgUrl: "/assets/8.svg" },
    { imgUrl: "/assets/9.svg" },
    { imgUrl: "/assets/1.svg" },
    { imgUrl: "/assets/2.svg" },


    { imgUrl: "/assets/5.svg" },
    { imgUrl: "/assets/6.svg" },
    { imgUrl: "/assets/7.svg" },
    { imgUrl: "/assets/8.svg" },
    { imgUrl: "/assets/9.svg" },
    { imgUrl: "/assets/1.svg" },
    { imgUrl: "/assets/2.svg" },


    { imgUrl: "/assets/5.svg" },
    { imgUrl: "/assets/6.svg" },
    { imgUrl: "/assets/7.svg" },
    { imgUrl: "/assets/8.svg" },
    { imgUrl: "/assets/9.svg" }
  ];

  return (
    <div className="relative overflow-hidden bg-transparent py-4">
      {/* <div className="flex animate-marquee">

        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center  min-w-[200px]"
          >
            <Image
              src={item.imgUrl}
              alt="Image"
              width={1080}
              height={1080}
              className="object-contain sm:w-[120px] w-[30px] "
              priority
            />

          </div>
        ))}
      </div> */}
   
      <section className="bg-[#000] overflow-hidden">
        <div className="w-[100vw]"><div className="flex justify-start items-center marquee-anim w-[400vw]">
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center  min-w-[200px]"
          >
            <Image
              src={item.imgUrl}
              alt="Image"
              width={1080}
              height={1080}
              className="object-contain sm:w-[160px] w-[120px]   "
              priority
            />
          </div>
        ))}
   </div>        
    </div>
          </section>
   
   
    </div>
  );
};

export default AutoSwiper;
