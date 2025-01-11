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
                        <Image src='/assets/brandingbanner.svg' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[120px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b]"><span className="text-[#EA9A4A]">Branding</span>& Identity</p>
                                        <p className="font-[cd-r]  sm:text-[18px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">Your brand isn’t just what you sell—it’s what people remember.”
                                            Building a strong and recognizable brand is key to standing out in a crowded market. At Strix Productions, we specialize in branding and identity design, helping businesses define who they are and how they want to be perceived.
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
                                    <li>Logo Design:</li>
                                    <li>Crafting unique and timeless logos that encapsulate your brand’s essence.</li>
                                    <li> Custom-designed for versatility across all platforms and media.</li>
                                </ul>
                            </div>

                            <div className="text-[#C5C5C5] pt-4 ">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Visual Identity Development:</li>
                                    <li>Comprehensive branding kits, including typography, color schemes, and design guidelines.</li>
                                    <li>Cohesive visuals that reflect your brand’s personality and values.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="text-[#C5C5C5] ">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Brand Storytelling:</li>
                                    <li>Aligning your visual identity with compelling messaging to create a consistent brand narrative.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[#EA9A4A] text-[25px] pt-4">Why Choose Us?
                                </p>
                            </div>
                            <div className="pt-4 text-[#C5C5C5]">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Extensive market research to ensure your brand stands out.</li>
                                    <li>Designs that inspire trust and resonate with your audience.</li>
                                    <li>A holistic approach to building a brand that’s ready for the future. Unleash your brand’s potential with a visual identity that speaks volumes.</li>
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
