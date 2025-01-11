"use client"
import Image from "next/image";
import Footer from '@/app/componets/footer'
import Header from '@/app/componets/header'
import Contact from "@/app/componets/contact"
import Swiper1 from "@/app/componets/swiper1";
import FAQ from "../componets/faq";

import AOS from 'aos';
import { motion } from "framer-motion";
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

            <Header activePage="ContactPage" />
            <section className="bg-[#000] overflow-hidden min-h-[100vh]">
                <div className="container-fluid p-0 min-h-[100vh]">
                    <div className="relative sm:min-h-[100vh]">
                        <Image src='/assets/contactUs.svg' alt='...' fill objectFit="cover" className="w-full sm:h-[100vh]  z-[0]" />
                        <div className="sm:px-20 px-6">
                            <div className="row align-items-center relative z-[1] pt-[100px] sm:bottom-[-140px] ">
                                <div className="col-md-12 mb-4 ">
                                    <div className="col-md-7" >
                                        <p className="text-[#ffff] font-[600] sm:text-[120px] text-[35px] sm:leading-[120px] leading-[40px] font-[cd-b]"><span className="text-[#EA9A4A]">Contact</span>us</p>
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
                    <div className="row" data-aos="zoom-out-up">
                        <div className="col-md-6 mb-4">
                            <p className="text-[25px] text-[#EA9A4A] font-[cd-m]">Visit us</p>
                            <div className="d-flex gap-3 align-items-center pb-2">
                                <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.0007 3.16675C15.6412 3.16675 12.4194 4.50127 10.044 6.87673C7.6685 9.25219 6.33398 12.474 6.33398 15.8334C6.33398 24.3834 17.4965 34.0417 17.9715 34.4534C18.2583 34.6987 18.6233 34.8335 19.0007 34.8335C19.378 34.8335 19.743 34.6987 20.0298 34.4534C20.584 34.0417 31.6673 24.3834 31.6673 15.8334C31.6673 12.474 30.3328 9.25219 27.9573 6.87673C25.5819 4.50127 22.3601 3.16675 19.0007 3.16675ZM19.0007 31.1126C15.6282 27.9459 9.50065 21.1217 9.50065 15.8334C9.50065 13.3139 10.5015 10.8975 12.2831 9.1159C14.0647 7.33431 16.4811 6.33341 19.0007 6.33341C21.5202 6.33341 23.9366 7.33431 25.7182 9.1159C27.4998 10.8975 28.5007 13.3139 28.5007 15.8334C28.5007 21.1217 22.3732 27.9617 19.0007 31.1126ZM19.0007 9.50008C17.748 9.50008 16.5236 9.87152 15.482 10.5674C14.4405 11.2634 13.6288 12.2525 13.1494 13.4098C12.6701 14.567 12.5446 15.8404 12.789 17.069C13.0334 18.2975 13.6366 19.426 14.5223 20.3118C15.408 21.1975 16.5365 21.8007 17.7651 22.0451C18.9936 22.2894 20.267 22.164 21.4243 21.6847C22.5816 21.2053 23.5707 20.3935 24.2666 19.352C24.9625 18.3105 25.334 17.086 25.334 15.8334C25.334 14.1537 24.6667 12.5428 23.479 11.3551C22.2913 10.1673 20.6804 9.50008 19.0007 9.50008ZM19.0007 19.0001C18.3743 19.0001 17.7621 18.8144 17.2413 18.4664C16.7206 18.1184 16.3147 17.6239 16.075 17.0452C15.8354 16.4666 15.7726 15.8299 15.8948 15.2156C16.017 14.6014 16.3186 14.0371 16.7615 13.5942C17.2043 13.1514 17.7686 12.8498 18.3829 12.7276C18.9971 12.6054 19.6338 12.6681 20.2125 12.9078C20.7911 13.1475 21.2857 13.5534 21.6336 14.0741C21.9816 14.5949 22.1673 15.2071 22.1673 15.8334C22.1673 16.6733 21.8337 17.4787 21.2398 18.0726C20.646 18.6665 19.8405 19.0001 19.0007 19.0001Z" fill="#EA9A4A" />
                                </svg>
                                <p className="text-[#C5C5C5] m-0 p-0 text-[18px]">A-78, Gali No. 5, New Modern Shahdara, delhi-11003.2,</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center pb-2 pt-2">
                                <svg width="28" height="30" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0175 16.4244L16.9577 14.6584V8.20842C16.9577 7.82164 16.804 7.45071 16.5306 7.17722C16.2571 6.90373 15.8861 6.75008 15.4994 6.75008C15.1126 6.75008 14.7416 6.90373 14.4682 7.17722C14.1947 7.45071 14.041 7.82164 14.041 8.20842V15.5001C14.041 15.7561 14.1083 16.0077 14.2363 16.2294C14.3643 16.4512 14.5484 16.6353 14.7702 16.7633L18.5591 18.9508C18.725 19.0467 18.9082 19.1089 19.0982 19.134C19.2881 19.1591 19.4811 19.1464 19.6662 19.0969C19.8513 19.0473 20.0248 18.9618 20.1768 18.8451C20.3288 18.7285 20.4564 18.5831 20.5522 18.4171C20.648 18.2512 20.7101 18.068 20.7351 17.878C20.7601 17.688 20.7473 17.495 20.6977 17.31C20.648 17.1249 20.5624 16.9514 20.4457 16.7995C20.329 16.6475 20.1835 16.5201 20.0175 16.4244ZM15.4994 0.916748C12.615 0.916748 9.79551 1.77205 7.39729 3.37448C4.99907 4.97692 3.12989 7.25453 2.02611 9.91928C0.922334 12.584 0.633536 15.5163 1.19624 18.3451C1.75894 21.174 3.14787 23.7725 5.18738 25.8121C7.2269 27.8516 9.8254 29.2405 12.6543 29.8032C15.4832 30.3659 18.4154 30.0771 21.0802 28.9733C23.7449 27.8695 26.0225 26.0004 27.625 23.6021C29.2274 21.2039 30.0827 18.3844 30.0827 15.5001C30.0784 11.6337 28.5406 7.92683 25.8066 5.19286C23.0726 2.45888 19.3658 0.921048 15.4994 0.916748ZM15.4994 27.1667C13.1919 27.1667 10.9363 26.4825 9.0177 25.2006C7.09913 23.9186 5.60378 22.0965 4.72076 19.9647C3.83774 17.8329 3.6067 15.4871 4.05686 13.224C4.50702 10.9609 5.61816 8.88212 7.24978 7.2505C8.88139 5.61889 10.9602 4.50775 13.2233 4.05759C15.4864 3.60743 17.8322 3.83846 19.964 4.72149C22.0958 5.60451 23.9179 7.09986 25.1998 9.01843C26.4818 10.937 27.166 13.1926 27.166 15.5001C27.1625 18.5932 25.9322 21.5586 23.745 23.7458C21.5579 25.9329 18.5925 27.1632 15.4994 27.1667Z" fill="#EA9A4A" />
                                </svg>

                                <p className="text-[#C5C5C5] m-0 p-0 text-[18px]">Monday - Saturday, 10:00 AM -6:00 PM </p>
                            </div>
                            <div className="d-flex gap-3 align-items-center pb-2 pt-2">
                                <svg width="28" height="30" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16645 1.38892H26.3887C27.9165 1.38892 29.1665 2.63892 29.1665 4.16669V20.8334C29.1665 22.3611 27.9165 23.6111 26.3887 23.6111H4.16645C2.63867 23.6111 1.38867 22.3611 1.38867 20.8334V4.16669C1.38867 2.63892 2.63867 1.38892 4.16645 1.38892Z" stroke="#EA9A4A" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M29.1665 4.16675L15.2776 13.889L1.38867 4.16675" stroke="#EA9A4A" stroke-width="2.77778" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <p className="text-[#C5C5C5] m-0 p-0 text-[18px]">@Scriptstudio.io</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center pb-2 pt-2">
                                <svg width="28" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.3072 17.649L22.1072 15.449C21.4514 14.7985 20.5662 14.4317 19.6425 14.4278C18.7188 14.4238 17.8305 14.7831 17.1692 15.428C16.8164 15.7829 16.3508 16.0037 15.8528 16.0524C15.3547 16.1012 14.8552 15.9748 14.4402 15.695C12.8024 14.602 11.3954 13.1977 10.2992 11.562C10.0244 11.1424 9.90258 10.6409 9.95431 10.142C10.006 9.64311 10.2282 9.17728 10.5832 8.82301C11.2223 8.16108 11.5769 7.27528 11.5711 6.35519C11.5653 5.4351 11.1996 4.55384 10.5522 3.90001L8.35223 1.70001C7.69358 1.04362 6.80161 0.675049 5.87173 0.675049C4.94185 0.675049 4.04988 1.04362 3.39123 1.70001L2.75823 2.33401C-0.541769 5.63401 -0.294769 12.572 6.57123 19.434C10.7112 23.575 14.8782 25.309 18.2572 25.309C19.2519 25.3421 20.2432 25.177 21.1734 24.8231C22.1036 24.4693 22.9541 23.9338 23.6752 23.248L24.3092 22.614C24.9668 21.9551 25.336 21.062 25.3356 20.1311C25.3352 19.2002 24.9654 18.3074 24.3072 17.649ZM22.8932 21.2L22.2592 21.834C19.6592 24.434 13.9202 23.959 7.98323 18.021C2.04623 12.083 1.57023 6.34001 4.17023 3.74001L4.79923 3.10701C5.08244 2.82483 5.46594 2.66638 5.86573 2.66638C6.26552 2.66638 6.64902 2.82483 6.93223 3.10701L9.13223 5.30701C9.41029 5.58647 9.56813 5.96353 9.57205 6.35774C9.57597 6.75194 9.42568 7.13207 9.15323 7.41701C8.47751 8.09704 8.056 8.98863 7.95933 9.94241C7.86266 10.8962 8.0967 11.8542 8.62223 12.656C9.86778 14.5199 11.4695 16.1192 13.3352 17.362C14.1346 17.8876 15.0901 18.123 16.0422 18.0289C16.9943 17.9348 17.8852 17.5169 18.5662 16.845C18.8506 16.5693 19.2318 16.4163 19.6279 16.4187C20.024 16.4211 20.4032 16.5789 20.6842 16.858L22.8842 19.058C23.026 19.1978 23.1388 19.3641 23.216 19.5476C23.2933 19.7311 23.3334 19.9281 23.3343 20.1271C23.3351 20.3262 23.2966 20.5235 23.2209 20.7076C23.1452 20.8917 23.0338 21.0591 22.8932 21.2Z" fill="#EA9A4A" />
                                </svg>

                                <p className="text-[#C5C5C5] m-0 p-0 text-[18px]">+91 9999733752</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex sm:justify-end">
                                <div className="col-md-10">
                                    <p className="text-[25px] text-[#EA9A4A] font-[cd-m]">Question? Send us a message. Don&apos;t be shy</p>
                                    <form>
                                        <div className="row" >
                                            <div className="col-md-12 mb-4">
                                                <label htmlFor="name" className="text-[#C5C5C5]  text-[18px]">Name</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        placeholder="Your Name"
                                                        className="bg-[#272727] text-white  rounded-full px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="name" className="text-[#C5C5C5]  text-[18px]">Email</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="Your Name"
                                                        className="bg-[#272727] text-white  rounded-full px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="name" className="text-[#C5C5C5]  text-[18px]">Phone</label>
                                                <div className="pt-2">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="+91"
                                                        className="bg-[#272727] text-white  rounded-full px-4 py-2 focus:outline-none w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label htmlFor="name" className="text-[#C5C5C5]  text-[18px]">Message</label>
                                                <div className="pt-2">
                                                    <textarea
                                                        id="message"
                                                        placeholder="Your Message"
                                                        rows={2}
                                                        className="bg-[#272727] text-white rounded-[50px] px-4 py-4 focus:outline-none w-full"
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-md-12 mb-4 pt-4">
                                                <button
                                                    type="submit"
                                                    className="border border-white hover:border-[#EA9A4A] hover:bg-[#EA9A4A] text-white py-2 px-6 rounded-full w-full transition-all duration-300"
                                                >
                                                    Submit
                                                </button>


                                            </div>

                                        </div>



                                    </form>
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
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 ">
            <FAQ />
            </section>



          



            <Contact />


            <Footer />






        </>
    );
}
