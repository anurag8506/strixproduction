"use client"
import Image from "next/image";
import Footer from '../componets/footer'
import Header from "../componets/header";
import Contact from "@/app/componets/contact"

import AOS from 'aos';
import { motion } from "framer-motion";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>

            <Header activePage="ProjectPage" />
            <section className="bg-[#000] overflow-hidden min-h-[100vh]">
                <div className="container-fluid p-0 min-h-[100vh]">
                    <div className="relative sm:min-h-[100vh]">
                        <Image src='/assets/aaap.png' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-6" >
                                        <p className="text-[#ffff] font-[600] sm:text-[65px] text-[35px] sm:leading-[70px] leading-[40px] font-[cd-b]">Our Projects </p>
                                        <p className="font-[cd-r]  sm:text-[22px] text-[16px] text-[#FEFEFE] mb-4 ">From coming up with creative concepts to delivering outstanding campaigns, we&apos;re your friendly, fun-loving crew ready to turn your project dreams into reality!
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



            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[10px]">
                <div className="container-fluid p-0">
                <div className="d-flex justify-center">
                    <div className="col-md-6 " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div className="d-flex justify-center">
          <Link href="/">
                        <Image
                            src="/assets/logoweb.svg"
                            className="p-0 m-0 w-[200px]"
                            width={1080}
                            height={1080}
                            alt="Image"
                        />
                    </Link>
          </div>
    
                    <p className="text-[#ffff] font-[600] sm:text-[40px] text-[35px] sm:leading-[45px] text-center leading-[40px] font-[cd-b] sm:pt-[50px] pt-[30px]">  Not <span className="text-[#EA9A4A]"> limited to video,</span>we&apos;re your<span className="text-[#EA9A4A]"> creative comrades.</span></p>
                    <p className="text-center text-[16px] text-[#C5C5C5]">Got questions, porject ideas, or just want to say hi? We&apos;re all ears!</p>
                    <div className="d-flex justify-center">
                        <div className="col-md-8 pt-3">
          <Link href="/contact" className="no-underline w-full">
                     <div className="border border-white align-items-center font-[cd-m] px-1 rounded-full text-[#fff] d-flex justify-between text-center bg-gradient-to-l from-[#0B0B0B] to-[#EA9A4A] w-full  py-1" > <span className="ml-2 ">Lets’s Collaborate</span>
                     <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.4876" cy="32.1999" r="31.8871" fill="#535353" fillOpacity="0.56"/>
<path d="M40.0612 26.6197C40.0612 25.9593 39.5259 25.4239 38.8655 25.4239L28.1036 25.4239C27.4432 25.4239 26.9078 25.9593 26.9078 26.6197C26.9078 27.2801 27.4432 27.8155 28.1036 27.8155L37.6697 27.8155L37.6697 37.3816C37.6697 38.042 38.2051 38.5773 38.8655 38.5773C39.5259 38.5773 40.0612 38.042 40.0612 37.3816L40.0612 26.6197ZM26.159 41.0172L39.711 27.4652L38.0199 25.7742L24.4679 39.3262L26.159 41.0172Z" fill="white"/>
</svg>

                     </div>
                    </Link>

                        </div>
                    
                    
          </div>
                    </div>
      
                </div>



                </div>
            </section>

            <section className="bg-[#000]  sm:px-20 px-6 sm:py-[50px] py-[10px]">
                <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-3 mb-4 sticky top-[140px] max-h-screen">
                <p className="text-[#ffff] font-[600] sm:text-[45px] text-[30px] sm:leading-[50px] leading-[35px] font-[cd-b]">Our<span className="text-[#EA9A4A]"><br/> Portfolio</span></p>
                <p className="text-[18px] text-[#fff] pt-4">Strix Production</p>
                <div className="text-[#C5C5C5]">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>UI/UX Design</li>
                                    <li>Social Media Management</li>
                                    <li>Branding & Identity</li>
                                    <li>Video Editing</li>
                                    <li>Thumbnails</li>
                                    <li>Creative Design</li>
                                </ul>
                            </div>
                </div>
                <div className="col-md-9 mb-4">
                    <p className="text-[25px] text-[#fff] font-[cd-m]">PureRx Formulas</p>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            
                        <Image
                            src="/assets/loa.svg"
                            className="w-full"
                            width={1080}
                            height={1080}
                            alt="Image"
                        /> 
                        </div>
                        <div className="col-md-12 mb-4">
                        <Image
                            src="/assets/loam.svg"
                            className="w-full"
                            width={1080}
                            height={1080}
                            alt="Image"
                        /> 
                        </div>
                        <div className="col-md-12 mb-4">
                        <Image
                            src="/assets/lok.svg"
                            className="w-full"
                            width={1080}
                            height={1080}
                            alt="Image"
                        /> 
                        </div>
                    </div>
                </div>
              </div>



                </div>
            </section>


            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
            <Contact />

            </section>
       
           

            <Footer />






        </>
    );
}
