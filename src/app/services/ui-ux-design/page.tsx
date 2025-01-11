"use client"
import Image from "next/image";
import Footer from '@/app/componets/footer'
import Header from '@/app/componets/header'
import Contact from "@/app/componets/contact"

import AOS from 'aos';
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from '@/app/componets/slider5'

export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>

            <Header activePage="servicesPage" />
            <section className="bg-[#000] overflow-hidden min-h-[100vh]">
                <div className="container-fluid p-0 min-h-[100vh]">
                    <div className="relative sm:min-h-[100vh]">
                        <Image src='/assets/uiBannner.svg' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[120px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b]"><span className="text-[#EA9A4A]">UI/UX  </span> Design</p>
                                        <p className="font-[cd-r]  sm:text-[18px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">Designs that delight users and drive business success.
                                        The digital world revolves around user experiences, and we’re here to make them exceptional. At Strix Productions, our UI/UX Design services are crafted to blend creativity with functionality, ensuring your digital products not only look amazing but also work seamlessly.
                                        </p>

                                        <div className="framer-box">

                                            <div className="pt-4 pb-4 relative text-scroll">
                                                <p className="text-white rotate-90 p-0 m-0">SCROLL</p>
                                            </div>


                                            <div className="lineContainer">
                                                <motion.div
                                                    className="animatedLine"
                                                    initial={{ top: "-60%" }}
                                                    animate={{ top: "100%" }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                ></motion.div>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px] " >
                <div className="container-fluid p-0">
                    <div className="row  " data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <p className="text-[#EA9A4A] text-[25px]">Our Services Include</p>
                        <div className="col-md-6 mb-4"  data-aos="fade-up"
     data-aos-duration="3000">
                            <div className="text-[#C5C5C5] ">
                                <li >Website UI/UX Design:</li>
                                <li>Custom, responsive designs tailored for your audience and industry.</li>
                                <li>Intuitive layouts that enhance usability and keep visitors engaged.</li>
                            </div>
                            <div className="text-[#C5C5C5] pt-4 ">
                                <li>Mobile-first designs to ensure optimal performance on any device.</li>
                                <li>App UI/UX Design:</li>
                                <li>Interactive prototypes and user-friendly interfaces that deliver a flawless experience.</li>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                            <div className="text-[#C5C5C5] ">
                                <li>Attention to detail in every element, from navigation menus to animations.</li>
                                <li>Wireframing & Prototyping:</li>
                                <li>Comprehensive planning to map out user journeys and key interactions before development.</li>
                            </div>
                            <div>
                                <p className="text-[#EA9A4A] text-[25px] pt-4">Why Choose Us?
                                </p>
                            </div>
                            <div className="pt-4 text-[#C5C5C5]">
                                <li>Expertise in creating designs that align with your brand and business goals.</li>
                                <li>Focus on user behavior and psychology to maximize engagement.</li>
                                <li>Delivering visually stunning and technically sound solutions.</li>
                                <li>Let’s create digital experiences that your users will love, and your business will thrive on.</li>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
          
      
<Slider/>


           
            <Contact />


            <Footer />






        </>
    );
}
