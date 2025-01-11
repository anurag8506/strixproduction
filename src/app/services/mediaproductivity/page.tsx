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
                        <Image src='/assets/mediaBanner.svg' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[120px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b]">Media <span className="text-[#EA9A4A]">Productivity</span></p>
                                        <p className="font-[cd-r]  sm:text-[18px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">Turn your raw content into captivating media that resonates with your audience.”
                                            At Strix Productions, we understand the power of exceptional media in driving engagement and success. Our Media Productivity services cater to creators, influencers, and businesses looking to stand out in today’s competitive digital landscape. From stunning video edits to perfectly crafted photo enhancements, we help transform your creative ideas into polished masterpieces.
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
                                    <li>Video Editing:</li>
                                    <li>
                                        Whether you’re creating YouTube content, promotional videos, or cinematic storytelling, we bring your footage to life with seamless transitions, color grading, and dynamic effects.
                                    </li>
                                </ul>
                            </div>

                            <div className="text-[#C5C5C5] pt-4 ">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>YouTube Content Creation:</li>
                                <li>Boost your channel’s performance with custom thumbnails, channel art, intros, and outros.</li>
                                <li>Eye-catching designs tailored to maximize clicks, views, and audience retention.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="text-[#C5C5C5] ">
       <ul  className="list-disc pl-5 space-y-2">
        <li>We work with all formats and tailor the editing style to suit your brand’s identity.</li>
        <li>Photo Editing:</li>
        <li>Perfect your visuals with professional photo retouching, color correction, and enhancements. </li>
        <li>From social media images to corporate photography, we deliver sharp, stunning results.</li>
       </ul>
                            </div>
                            <div>
                                <p className="text-[#EA9A4A] text-[25px] pt-4">Why Choose Us?
                                </p>
                            </div>
                            <div className="pt-4 text-[#C5C5C5]">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Creative solutions tailored to your audience.</li>
                    <li>Quick turnaround times without compromising quality.</li>
                    <li>Expertise across platforms to meet all your media needs.</li>
                    <li>Elevate your media game and leave a lasting impression on your audience with Strix Productions</li>
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
