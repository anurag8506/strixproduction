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
                        <Image src='/assets/digital.svg' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[120px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b]"><span className="text-[#EA9A4A]">Digital  </span>Marketing</p>
                                        <p className="font-[cd-r]  sm:text-[18px] text-[16px] text-[#C5C5C5] mb-4 pt-4 ">Creativity that connects, visuals that inspire.”
                                        Accelerate your growth with data-driven digital strategies.
                                        In the competitive digital landscape, reaching the right audience at the right time is essential. At Strix Productions, we specialize in creating and managing impactful digital marketing campaigns designed to boost your brand’s visibility, drive engagement, and deliver measurable results.
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
                               <li>Search Engine Optimization (SEO):</li>
                               <li>Get found where it matters most—on the first page of search engines.</li>
                               <li>Comprehensive on-page and off-page optimization to drive organic traffic.</li>
                               <li>Keyword strategies and content alignment to increase rankings and user engagement.</li>
                                </ul>
                            </div>

                            <div className="text-[#C5C5C5] pt-4 ">
                                <ul className="list-disc pl-5 space-y-2">
                             <li>Pay-Per-Click (PPC) Advertising:</li>
                             <li>Google Ads: Launch targeted campaigns with high ROI, from search ads to display and video ads.</li>
                             <li> Meta Ads (Facebook & Instagram): Engage audiences with dynamic, visually appealing ads tailored to their.</li>
                                </ul>
                            </div>
                            <p className="text-[#EA9A4A] text-[25px] pt-4">interests and behavior</p>
                            <div className="text-[#C5C5C5] pt-4 ">
                                <ul className="list-disc pl-5 space-y-2">
                      <li>LinkedIn Ads: B2B campaigns that reach decision-makers and professionals in your niche.</li>
                      
                      <li>Social Media Ad Campaigns:</li>
                      <li>Run powerful ad campaigns on platforms like X (formerly Twitter), and Pinterest, tailored to engage your target audience and generate leads.</li>
                      <li>Strategic audience segmentation to optimize reach and performance.</li>
                      <li>Real-time analytics and adjustments to maximize ad efficiency and ROI.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="text-[#C5C5C5] ">
                                <ul className="list-disc pl-5 space-y-2">
                           <li>Retargeting Campaigns:</li>
                           <li>Re-engage users who’ve shown interest in your brand but haven’t converted.</li>
                           <li>Custom-designed retargeting ads across Google, Meta, and other social media platforms.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[#EA9A4A] text-[25px] pt-4">Why Choose Us?
                                </p>
                            </div>
                            <div className="pt-4 text-[#C5C5C5]">
                                <ul className="list-disc pl-5 space-y-2">
                                 <li>Expert Campaign Management: Our experienced team crafts strategies that align with your goals and audience.</li>
                                 <li>Data-Driven Optimization: We continuously analyze and refine campaigns to ensure maximum results.</li>
                                 <li> Cross-Platform Expertise: From Google to Meta and beyond, we know where your audience lives—and how to reach them effectively.</li>
                                </ul>
                            </div>
                            <p className="text-[#EA9A4A] text-[25px] pt-4">The Results You Can Expect</p>
                            <div className="pt-4 text-[#C5C5C5]">
                                <ul className="list-disc pl-5 space-y-2">
                             <li>Increased brand awareness and visibility.</li>
                             <li>Higher engagement rates and audience growth.</li>
                             <li>Measurable ROI through targeted, impactful campaigns.</li>
                                </ul>
                            </div>
                            <p className="text-[#fff]">Partner with Strix Productions and let’s create digital marketing campaigns that not only perform but exceed your expectations.
                            </p>
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
