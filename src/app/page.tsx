"use client"
import Swiper1 from "./componets/swiper1";
import Swiper2 from "./componets/swiper2";
import Footer from './componets/footer'
import Header from "./componets/header";
import Contact from "./componets/contact"
import MyTeam from "./componets/myteam"
import AOS from 'aos';
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
            <Header activePage="HomePage" />

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6  sm:pt-[100px] pt-[100px]">
                <div className="container-fluid p-0" >
                    <section className="relative w-full  overflow-hidden">
                        <div className="d-flex justify-center pt-5">
                            <div className="col-md-5 mb-4">
                            <video
                                className="relative   w-full  rounded-[100%]" 
                                autoPlay
                                loop
                                muted
                            >
                                <source src="/assets/videobannner.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            </div>

                        </div>

                        <div className="absolute z-10 flex items-center justify-center w-full h-full top-0">
                            <div className="row">
                                <div >
                                    <p className="font-[cd-b] text-center text-[#FEFEFE85] flex items-center justify-center sm:text-[110px] text-[30px]  sm:leading-[120px] leading-[80px] ">
                                        STRIX PRODUCTION
                                    </p>

                                    <div className="d-flex justify-center">
                                        <div className="col-md-8 mb-4">
                                            <p className="text-center font-[cd-r] text-[#fff] sm:text-[20px] text-[16px]">We are a branding & digital studio based  in India – tackling complex visual and technological challenges for bold brands.</p>

                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>



                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
                <div className="container-fluid p-0">
                    <Swiper2 />

                </div>
            </section>
            <section className="flex items-center justify-center bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[10px] py-[10px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-4" >
                                    <div className="col-md-12">
                                        <video
                                            className=" w-full h-full "
                                            autoPlay
                                            loop
                                            muted
                                        >
                                            <source src="/assets/bgbanner.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">Welcome to STRIX PRODUCTION, born in iNDIA.</p>
                                    <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">We are a unity of professionals who believe in the revolutionary and transformative power of design. Our mission is to create innovative and effective design solutions that meet our clients’ business needs and help them succeed.
                                    </p>
                                    <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">We’ve completed over 150 successful projects, helping businesses worldwide enhance their digital presence Our expertise spans UX/UI design, web & mobile application design, and brand identity creation.
                                    </p>
                                    <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">STRIX PRODUCTION is your guide on a journey to the horizon of changes where design unlocks endless possibilities and partnership drives the results. Get world-class design your business.

                                    </p>
                                    <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">Let’s  collaborate</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
                <div className="container-fluid p-0">
                    <Swiper1 />

                </div>
            </section>

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-12">
                            <div className="d-flex justify-between align-items-center">
                                <p className="text-[#fff]  text-[16px] p-0 m-0">SERVICES</p>
                                <p className="text-[#EA9A4A] p-0 m-0 align-items-center d-flex gap-2 text-[16px] ">MORE SERVICES
                                    <svg width="16" height="16" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#EA9A4A" />
                                    </svg>
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-10 sm:pt-[50px] pt-[30px]">
                                    <div className="flex">
                                        <div className="col-md-8 mb-4">
                                            <p className="text-[#fff] p-0 m-0 align-items-center d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m]  sm:leading-[38px] ">MEDIA PRODUCTIVITY <svg width="25" height="25" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.892377 0.97998H56V56.0876H53.476V5.28874L1.78475 56.98L0 55.1952L51.6912 3.504H0.892377V0.97998Z" fill="#EA9A4A" />
                                            </svg>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 mb-4 sm:pt-[50px] pt-[30px]">
                                    <div className="row align-items-center sm:justify-end justify-center">
                                        <div className="col-md-6 text-end">
                                            <div className="d-flex justify-content-end">
                                                <p
                                                    className="text-[#fff] p-0 m-0 align-items-center d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m] sm:leading-[38px] justify-end"
                                                >
                                                    <span >CREATIVE DESIGN</span>
                                                    <svg
                                                        width="25"
                                                        height="25"
                                                        className="sm:w-[60px] w-[20px]"
                                                        viewBox="0 0 56 57"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z"
                                                            fill="#EA9A4A"
                                                        />
                                                    </svg>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-center sm:justify-center justify-center">
                                    <div className="col-md-10 sm:pt-[100px] pt-[30px]">
                                        <div className="col-md-8">
                                            <p className='text-[#fff] p-0 m-0 align-items-start d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m]  sm:leading-[40px]'> SOCIAL MEDIA MARKETING<br /> & MANAGEMENT  <svg width="25" height="25" className="sm:w-[60px] w-[20px]" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#EA9A4A" />
                                            </svg></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row">
                                {/* First Section */}
                                <div className="col-md-10 sm:pt-[50px] pt-[30px]">
                                    <div className="flex">
                                        <div className="col-md-8 mb-4">
                                            <p className="text-[#fff] p-0 m-0 align-items-center d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m] sm:leading-[38px]" data-aos="fade-up"
                                                data-aos-anchor-placement="center-bottom " data-aos-duration="3000">
                                                MEDIA PRODUCTIVITY
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 56 57"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0.892377 0.97998H56V56.0876H53.476V5.28874L1.78475 56.98L0 55.1952L51.6912 3.504H0.892377V0.97998Z"
                                                        fill="#EA9A4A"
                                                    />
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Section */}
                                <div className="col-md-10 mb-4 sm:pt-[50px] pt-[30px]" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="row align-items-center sm:justify-end justify-center">
                                        <div className="col-md-6 text-end">
                                            <div className="d-flex justify-content-end">
                                                <p className="text-[#fff] p-0 m-0 align-items-center d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m] sm:leading-[38px] justify-end">
                                                    <span>CREATIVE DESIGN</span>
                                                    <svg
                                                        width="25"
                                                        height="25"
                                                        className="sm:w-[60px] w-[20px]"
                                                        viewBox="0 0 56 57"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z"
                                                            fill="#EA9A4A"
                                                        />
                                                    </svg>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Section */}
                                <div className="row align-items-center sm:justify-center justify-center">
                                    <div
                                        className="col-md-10 sm:pt-[100px] pt-[30px]"
                                        data-aos="fade-left"
                                        data-aos-duration="3000"
                                    >
                                        <div className="col-md-8">
                                            <p className="text-[#fff] p-0 m-0 align-items-start d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m] sm:leading-[40px]">
                                                SOCIAL MEDIA MARKETING
                                                <br />
                                                & MANAGEMENT
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    className="sm:w-[60px] w-[20px]"
                                                    viewBox="0 0 56 57"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z"
                                                        fill="#EA9A4A"
                                                    />
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-12">
                            <div className="d-flex justify-between align-items-center">
                                <p className="text-[#fff]  text-[16px] p-0 m-0">RECENT WORKS</p>
                                <p className="text-[#EA9A4A] p-0 m-0 align-items-center d-flex gap-2 text-[16px] ">MORE PROJECT
                                    <svg width="16" height="16" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#EA9A4A" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="row sm:pt-[50px] pt-[50px] ">
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">TECHNOVA</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">CODESPHERE</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">BYTELOGIC</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">CLOUDMATRIX VIRTUCORE</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">CYBEREDGE INNOSOFT</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">DATAPULSE SMARTGRID</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center hover:text-[#EA9A4A]">NETFUSION INNOSOFT</p>
                            </div>
                        </div>



                    </div>


                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-12">
                            <div className="d-flex justify-between align-items-center">
                                <p className="text-[#fff]  text-[16px] p-0 m-0 font-[cd-r]">WHY WORK WITH US</p>

                            </div>
                        </div>
                        <div className="row sm:pt-[10px] pt-[10px] sm:justify-end justify-center ">
                            <div className="col-md-8 ">
                                <div className="row"  >
                                    <div className="col-md-6 mb-4 " data-aos="fade-up" data-aos-duration="3000" >
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 001</p>
                                        <p className="text-[#ffff]  text-[20px] font-[cd-se]  pt-[10px] "><span className="text-[#EA9A4A]">BUSINESS-FOCUSED DESIGN </span> FOR A COMPETITIVE ADVANTAGE
                                        </p>
                                    </div>
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="3000">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 002</p>

                                        <p className="text-[#ffff]  text-[20px] font-[cd-se]  pt-[10px] "> STRATEGIES COMBINING  <span className="text-[#EA9A4A]">  DESIGN , MARKETING AND CONSULTING  </span>
                                        </p>
                                    </div>
                                    {/*  */}
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="3000">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 003</p>
                                        <p className="text-[#ffff]  text-[20px] font-[cd-se]  pt-[10px] "><span className="text-[#EA9A4A]">
                                            DATA-DRIVEN INSIGHTS </span> THAT SHAPE SMART DECISIONS
                                        </p>
                                    </div>
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="3000">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 004</p>

                                        <p className="text-[#ffff]  text-[20px] font-[cd-se]  pt-[10px] ">  <span className="text-[#EA9A4A]">
                                            VERSATILE INDUSTRY EXPERIENCE   </span>TO MEET YOUR GOALS
                                        </p>
                                    </div>
                                    {/*  */}
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="3000">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 005</p>
                                        <p className="text-[#ffff]  text-[20px] font-[cd-se]  pt-[10px] ">  <span className="text-[#EA9A4A]">

                                            FULL TRANSPARENCY   </span>ACROSS EVERY STAGE OF THE PROCES
                                        </p>
                                    </div>
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="3000">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 006</p>

                                        <p className="text-[#ffff]  text-[20px] font-[cd-se]  pt-[10px] "><span className="text-[#EA9A4A]">
                                            A TEAM OF PROFESSIONALS </span>
                                            DEDICATED TO QUALITY AND RESULTS
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>


                </div>
            </section>



            <MyTeam />
            <Contact />

            <Footer />






        </>
    );
}
