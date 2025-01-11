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
                        <Image src='/assets/socailmediaBannner.svg' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[120px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b]"><span className="text-[#EA9A4A]">Social Media </span>Management</p>
                                        <p className="font-[cd-r]  sm:text-[18px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">Creativity that connects, visuals that inspire.”
Build your brand, grow your audience, and create meaningful connections.”
Social media is more than just a platform—it’s where your audience lives. At Strix Productions, we provide end-to-end social media management services, ensuring your brand thrives across platforms.
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
                        <div className="col-md-6 mb-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="text-[#C5C5C5]">
                                <ul className="list-disc pl-5 space-y-2">
                          <li>Content Creation:</li>
                          <li>High-quality posts, videos, and graphics tailored for maximum engagement.</li>
                          <li>Captivating captions and hashtags to boost visibility.</li>
                                </ul>
                            </div>

                            <div className="text-[#C5C5C5] pt-4 ">
                                <ul className="list-disc pl-5 space-y-2">
           <li>Account Management:</li>
           <li>Regular posting schedules, audience interaction, and community building.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="text-[#C5C5C5] ">
                                <ul className="list-disc pl-5 space-y-2">
                 <li>Keeping your profiles active and engaging while tracking performance.</li>
                 <li>Ad Campaigns & Strategy:</li>
                 <li>Running targeted ad campaigns that drive traffic, leads, and conversions.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[#EA9A4A] text-[25px] pt-4">Why Choose Us?
                                </p>
                            </div>
                            <div className="pt-4 text-[#C5C5C5]">
                                <ul className="list-disc pl-5 space-y-2">
<li>Experienced team with proven results in audience growth and engagement.</li>
<li>Custom strategies tailored to your business and goals.</li>
<li>Data-driven decisions to optimize every aspect of your social. </li>
<li>Focus on your business while we build your online community.</li>
</ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <Slider />



            <Contact />


            <Footer />






        </>
    );
}
