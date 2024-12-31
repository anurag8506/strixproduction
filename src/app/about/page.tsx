
import Image from "next/image";

import Swiper1 from "../componets/swiper1";
import Swiper2 from "../componets/swiper2";
import Swiper3 from "../componets/swiper3";
import Swiper4 from "../componets/swiper4";
import Footer from '../componets/footer'
import Header from "../componets/header";


import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <Header />

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px] sm:pt-[160px] pt-[140px]">
                <div className="container-fluid p-0">
                    <div className="row ">
                        <div className="col-md-5 pb-4">
                            <div >
                                <p className="text-[#ffff] font-[600] sm:text-[60px] text-[35px] sm:leading-[63px] leading-[40px] font-[cd-b]">ABOUT<span className="text-[#77FB38]">STRIX PRODUCTION</span> </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <p className="font-[cd-r]  sm:text-[25px] text-[25px]  text-[#FEFEFE]  sm:leading-[28px] leading-[28px]">Welcome to Strix Productions – where creativity meets strategy to deliver outstanding digital solutions. Founded in May 2024, we began as a passionate freelance venture and quickly transformed into a thriving agency. Our commitment to excellence, innovation, and client satisfaction has allowed us to make a significant impact in the digital creative space.</p>
                        </div>
                    </div>
                    <div className="row justify-center sm:pt-[150] pt-[30px]">
                        <div className="col-md-8 b-4">
                            <Image
                                src="/assets/Container.png"
                                className="w-full rounded-[30%]"
                                width={1080}
                                height={1080}
                                alt="no-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px] ">
                <div className="container-fluid p-0">
                    <div className="row justify-center ">
                        <div className="col-md-6 pb-4">
                            <div >
                                <p className="text-[#ffff] font-[cd-m] text-[20px] text-center">Who We Are </p>
                                <p className="text-[#ffff] font-[cd-r] text-[18px] text-center">At Strix Productions, we specialize in turning ideas into reality. From video editing and graphic design to social media management and branding, we’ve established ourselves as a trusted partner for businesses and individuals seeking high-quality digital services.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#000]  overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center">
                              
                                <div className="col-md-6 mb-4">
                                    <p className="sm:text-[20px] text-[18px] font-[cd-m] text-[#fff] pt-3">Our Achievements</p>
                                    <p className="sm:text-[16px] text-[16px] font-[cd-r] text-[#fff] ">In just 8 months of 2024, we: </p>
                                    <div className="text-[#fff] font-[cd-r] sm:text-[20px] text-[16px]">
                                        <ul className="list-disc m-0 p-0 ">
                                            <li className="mb-2 text-[16px]">
                                                Generated over <span className="text-[#77FB38] ">$10,000</span> in revenue, a milestone that reflects our dedication and the trust of our clients.
                                            </li>
                                            <li className="mb-2 text-[16px]">
                                                Served <span className="text-[#77FB38]">40+</span> clients from various industries, tailoring our services to meet their unique needs.
                                            </li>
                                            <li className="mb-2 text-[16px]">
                                                Edited <span className="text-[#77FB38]">50+</span> professional videos, ensuring high-quality storytelling and impactful visuals.
                                            </li>
                                            <li className="mb-2 text-[16px]">
                                                Designed countless graphics, crafted standout brand identities, and managed dynamic social media campaigns.
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">These achievements are a testament to our commitment to delivering value and results for our clients. </p>

                                </div>
                                <div className="col-md-6 mb-4">
                                        <div className="d-flex justify-end">
                                    <div className="col-md-8">
                                        <Image
                                            src="/assets/image 4.png"
                                            alt="Person 1"

                                            width='5550'
                                            height='550'
                                            className="w-full"

                                        />

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
                    <Swiper1 />

                </div>
            </section>

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-12">
                            <div className="d-flex justify-between align-items-center">
                                <p className="text-[#fff]  text-[16px] p-0 m-0">SERVICES</p>
                                <p className="text-[#77FB38] p-0 m-0 align-items-center d-flex gap-2 text-[16px] ">MORE SERVICES
                                    <svg width="16" height="16" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#77FB38" />
                                    </svg>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-10 sm:pt-[50px] pt-[30px]">
                                    <div className="flex">
                                        <div className="col-md-8 mb-4">
                                            <p className="text-[#fff] p-0 m-0 align-items-center d-flex gap-2 sm:text-[35px] text-[25px] font-[cd-m]  sm:leading-[38px] ">MEDIA PRODUCTIVITY   <svg width="25" height="25" className="sm:w-[60px] w-[20px]" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#77FB38" />
                                            </svg></p>
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
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z"
                                                            fill="#77FB38"
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
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#77FB38" />
                                            </svg></p>
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
                                <p className="text-[#77FB38] p-0 m-0 align-items-center d-flex gap-2 text-[16px] ">MORE PROJECT
                                    <svg width="16" height="16" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.892377 0.980469H56V56.0881H53.476V5.28923L1.78475 56.9805L0 55.1957L51.6912 3.50448H0.892377V0.980469Z" fill="#77FB38" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="row sm:pt-[50px] pt-[50px] ">
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">EZEV</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">TYRA VENTURES</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">CLOUD ESSENTIALS</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">CLOUD BUSINESS SETUP SERVICES</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">CLOUD ACCOUNTING INCORPORATION</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">SCRIPT STUDIO</p>
                            </div>
                            <div className="col-md-12 ">
                                <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                                <p className="text-[#5B5B5B]  text-[25px] font-[cd-m] pt-[30px]  pb-[10px] text-center">BODY RESET</p>
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
                        <div className="row sm:pt-[100px] pt-[50px] sm:justify-end justify-center ">
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 001</p>
                                        <p className="text-[#ffff]  text-[25px] font-[cd-se]  pt-[10px] "><span className="text-[#77FB38]">BUSINESS-FOCUSED DESIGN </span> FOR A COMPETITIVE ADVANTAGE
                                        </p>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 002</p>

                                        <p className="text-[#ffff]  text-[25px] font-[cd-se]  pt-[10px] "> STRATEGIES COMBINING  <span className="text-[#77FB38]">  DESIGN , MARKETING AND CONSULTING  </span>
                                        </p>
                                    </div>
                                    {/*  */}
                                    <div className="col-md-6 mb-4">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 003</p>
                                        <p className="text-[#ffff]  text-[25px] font-[cd-se]  pt-[10px] "><span className="text-[#77FB38]">
                                            DATA-DRIVEN INSIGHTS </span> THAT SHAPE SMART DECISIONS
                                        </p>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 004</p>

                                        <p className="text-[#ffff]  text-[25px] font-[cd-se]  pt-[10px] ">  <span className="text-[#77FB38]">
                                            VERSATILE INDUSTRY EXPERIENCE   </span>TO MEET YOUR GOALS
                                        </p>
                                    </div>
                                    {/*  */}
                                    <div className="col-md-6 mb-4">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 005</p>
                                        <p className="text-[#ffff]  text-[25px] font-[cd-se]  pt-[10px] ">  <span className="text-[#77FB38]">

                                            FULL TRANSPARENCY   </span>ACROSS EVERY STAGE OF THE PROCES
                                        </p>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <p className="text-[16px] text-[#fff] font-[cd-r]">/ 006</p>

                                        <p className="text-[#ffff]  text-[25px] font-[cd-se]  pt-[10px] "><span className="text-[#77FB38]">
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
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">
                    <Swiper2 />

                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[30px] py-[30px]  ">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="d-flex justify-center align-items-center">
                                <p className="text-[#77FB38]  sm:text-[45px] text-[25px] sm:leading-[53px] leading-[28px] p-0 m-0 font-[cd-b]">AWARD WINNING STRIX PRODUCTION <span className="text-[#fff] "><br />WITH MORE THAN 150 AWARDS</span></p>

                            </div>
                        </div>




                    </div>


                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px]">
                <div className="container-fluid p-0">
                    <Swiper3 />

                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px] sm:pt-[50px] pt-[20px]">
                <div className="container-fluid p-0">

                    <div className="row">
                        <div className="col-md-12 sm:pt-[20px] pt-[40px]">
                            <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                            <div className="col-md-6">
                                <p className="font-[cd-se] sm:text-[30px] text-[25px] text-[#fff] pt-5 ">MEET OUR TEAM</p>
                                <p className="font-[cd-r] text-[18px] text-[#fff] ">At Strix Production, we believe that a successful marketing campaign requires the collaborative efforts of talented individuals with diverse skills and expertise. Our dedicated team of professionals is here to help your business thrive in the ever-changing landscape of digital marketing</p>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[100px] py-[30px] sm:pt-[50px] pt-[20px]">
                <div className="container-fluid p-0">

                    <div className="row">
                        <div className="col-md-12">

                            <Swiper4 />
                        </div>
                    </div>

                </div>
            </section>

            <section className="flex items-center justify-center bg-gradient-to-b from-[#CBCBCB] to-[#77FB38] overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[30px] sm:pt-[50px] pt-[20px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-end sm:pt-[40px] sm:pb-[40px]">
                        <div className="col-md-6 mb-4">
                            <div className="col-md-9">
                                <p className="sm:text-[55px] text-[30px] sm:leading-[60px] leading-[33px] font-[cd-se] text-[#000] font-[cd-b] p-0 m-0 ">Get your project
                                    estimate for free</p>

                            </div>
                        </div>
                        <div className="col-md-6">


                            <form className="space-y-6">

                                <div className="relative">
                                    <div className="row align-items-center">
                                        <div className="d-flex justify-between align-center">
                                            <p className="font-[cd-r] text-[18px] text-[#000] m-0 p-0 ">DROP A LINE </p>
                                            <div className="d-flex justify-end">
                                                <p className="font-[cd-r] text-[18px] text-[#000] d-flex  gap-2 m-0 p-0 ">COPY EMAIL
                                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.3 0H5.30005C5.10114 0 4.91037 0.0790201 4.76972 0.21967C4.62907 0.36032 4.55005 0.55109 4.55005 0.75V4.5H0.800049C0.601139 4.5 0.410369 4.57902 0.269719 4.71967C0.129069 4.86032 0.0500488 5.05109 0.0500488 5.25V17.25C0.0500488 17.4489 0.129069 17.6397 0.269719 17.7803C0.410369 17.921 0.601139 18 0.800049 18H12.8C12.9989 18 13.1897 17.921 13.3303 17.7803C13.471 17.6397 13.55 17.4489 13.55 17.25V13.5H17.3C17.4989 13.5 17.6897 13.421 17.8303 13.2803C17.971 13.1397 18.05 12.9489 18.05 12.75V0.75C18.05 0.55109 17.971 0.36032 17.8303 0.21967C17.6897 0.0790201 17.4989 0 17.3 0ZM12.05 16.5H1.55005V6H12.05V16.5ZM16.55 12H13.55V5.25C13.55 5.05109 13.471 4.86032 13.3303 4.71967C13.1897 4.57902 12.9989 4.5 12.8 4.5H6.05005V1.5H16.55V12Z" fill="black" />
                                                    </svg>

                                                </p>

                                            </div>
                                        </div>
                                        <p className="font-[cd-m] text-[35px] text-[#000] text-end">hello@strixproduction.in</p>
                                        <div className="col-md-6 mb-4">

                                            <label className="block text-sm font-[cd-m] text-black mb-3  pt-4">
                                                NAME *
                                            </label>
                                            <input
                                                type="text"

                                                className="w-full bg-transparent border-b-2 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r]"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <label className="block text-sm font-[cd-m] text-black mb-3 pt-4 ">
                                                EMAIL *
                                            </label>
                                            <input
                                                type="email"

                                                className="w-full bg-transparent border-b-2 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r] "
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>


                                <div className="relative">
                                    <label className="block text-sm font-[cd-m] text-black mb-3 ">
                                        MESSAGE
                                    </label>
                                    <textarea

                                        className="w-full bg-transparent  text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-green-500 font-[cd-r]"
                                        rows={4}
                                    ></textarea>

                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition font-[cd-m]"
                                >
                                    HIT US UP
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />






        </>
    );
}
