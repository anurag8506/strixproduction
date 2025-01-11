"use client"
import Image from "next/image";
import Footer from '../componets/footer'
import Header from "../componets/header";
import Contact from "@/app/componets/contact"
import MyTeam from "@/app/componets/myteam"
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
            <Header activePage="AboutPage" />

            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[10px] py-[10px] sm:pt-[160px] pt-[140px]">
                <div className="container-fluid p-0">
                    <div className="row align-items-center ">
                        <div className="col-md-6 mb-4 " data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="col-md-8" >
                                <p className="text-[#ffff] font-[600] sm:text-[65px] text-[35px] sm:leading-[70px] leading-[40px] font-[cd-b]">ABOUT<span className="text-[#EA9A4A]">STRIX PRODUCTION</span> </p>
                                <p className="font-[cd-r]  sm:text-[22px] text-[16px] text-[#FEFEFE] ">Welcome to Strix Productions – where creativity meets strategy to deliver outstanding digital solutions. Founded in May 2024, we began as a passionate freelance venture and quickly transformed into a thriving agency. Our commitment to excellence, innovation, and client satisfaction has allowed us to make a significant impact in the digital creative space.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className=" flex sm:justify-end justify-center">
                                <div className="col-md-10 ">
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
                    </div>


                </div>
            </section>
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[10px] py-[10px] " >
                <div className="container-fluid p-0">
                    <div className="row justify-center " data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className="col-md-6">
                            <div >
                                <p className="text-[#ffff] font-[cd-m] text-[20px] text-center">Who We Are </p>
                                <p className="text-[#ffff] font-[cd-r] text-[16px] text-center">At Strix Productions, we specialize in turning ideas into reality. From video editing and graphic design to social media management and branding, we’ve established ourselves as a trusted partner for businesses and individuals seeking high-quality digital services.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#000]  overflow-hidden sm:px-20 px-6 sm:py-[50px] py-[10px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center">

                                <div className="col-md-6 mb-4 order-md-1 order-2" data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <div className="col-md-10">
                                        <p className="sm:text-[25px] text-[18px] font-[cd-m] text-[#fff] pt-3">Our Achievements</p>
                                        <p className="sm:text-[16px] text-[16px] font-[cd-r] text-[#fff] ">In just 8 months of 2024, we: </p>
                                        <div className="text-[#fff] font-[cd-r] sm:text-[20px] text-[16px]">
                                            <ul className="list-disc m-0 p-0 ">
                                                <li className="mb-2 text-[16px]">
                                                    Generated over <span className="text-[#EA9A4A] ">$10,000</span> in revenue, a milestone that reflects our dedication and the trust of our clients.
                                                </li>
                                                <li className="mb-2 text-[16px]">
                                                    Served <span className="text-[#EA9A4A]">40+</span> clients from various industries, tailoring our services to meet their unique needs.
                                                </li>
                                                <li className="mb-2 text-[16px]">
                                                    Edited <span className="text-[#EA9A4A]">50+</span> professional videos, ensuring high-quality storytelling and impactful visuals.
                                                </li>
                                                <li className="mb-2 text-[16px]">
                                                    Designed countless graphics, crafted standout brand identities, and managed dynamic social media campaigns.
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="sm:text-[20px] text-[18px] font-[cd-r] text-[#fff] pt-3">These achievements are a testament to our commitment to delivering value and results for our clients. </p>

                                    </div>

                                </div>
                                <div className="col-md-6 mb-4 order-md-2 order-1" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <div className="d-flex justify-end">
                                        <div className="col-md-10 ">
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

            <section className="bg-[#000]  overflow-hidden sm:px-20 px-6 sm:py-[10px] py-[10px]">
                <div className="container-fluid p-0">

                    <div className="row align-items-center justify-center">
                        <div className="col-md-10">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-4" data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <div>
                                        <div className="col-md-10 ">
                                            <Image
                                                src="/assets/image 6.png"
                                                alt="Person 1"

                                                width='5550'
                                                height='550'
                                                className="w-full  rounded"

                                            />

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 " data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <div className="d-flex justify-end">
                                        <div className="col-md-10">
                                            <p className="sm:text-[25px] text-[18px] font-[cd-m] text-[#fff] pt-3">Our Journey, Your Story</p>
                                            <p className="sm:text-[16px] text-[16px] font-[cd-r] text-[#fff] ">Starting at the age of 19, Strix Productions is a story of perseverance, growth, and passion. From a single idea to a thriving agency generating impressive milestones, our journey is driven by a belief in creativity and hard work. We may not be a massive corporation, but we are proud of how far we’ve come – and we’re just getting started. </p>


                                            <p className="sm:text-[16px] text-[16px] font-[cd-r] text-[#fff]  pb-4">Join us on this journey. Let’s create something extraordinary together.</p>
                                            <button className="border border-white rounded-full px-5 py-2  text-[#fff]">lET’S TALK

                                            </button>

                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </section>


            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[10px] py-[10px]">
                <div className="container-fluid p-0">
                    <div className="row gx-4 gy-4" data-aos="zoom-out-up">
                        <div className="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="border border-white rounded-lg p-4 flex-grow-1 d-flex flex-column">
                                <Image
                                    src="/assets/Group 17626.png"
                                    className="w-[60px]"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />
                                <p className="font-[cd-m] text-[22px] text-white pt-4">Media Editing:</p>
                                <p className="font-[cd-r] text-[16px] text-gray-400 pt-3">
                                    From video production to photo editing, we enhance your content to perfection.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="border border-white rounded-lg p-4 flex-grow-1 d-flex flex-column">
                                <Image
                                    src="/assets/Group 17627.png"
                                    className="w-[60px]"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />
                                <p className="font-[cd-m] text-[22px] text-white pt-4">Graphic Design:</p>
                                <p className="font-[cd-r] text-[16px] text-gray-400 pt-3">
                                    Custom logos, social media posts, and thumbnails that capture your audience’s attention.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="border border-white rounded-lg p-4 flex-grow-1 d-flex flex-column">
                                <Image
                                    src="/assets/Group 17628.png"
                                    className="w-[60px]"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />
                                <p className="font-[cd-m] text-[22px] text-white pt-4">UI/UX Design:</p>
                                <p className="font-[cd-r] text-[16px] text-gray-400 pt-3">
                                    Sleek, user-focused designs for websites and applications.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="border border-white rounded-lg p-4 flex-grow-1 d-flex flex-column">
                                <Image
                                    src="/assets/Group 17629.png"
                                    className="w-[60px]"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />
                                <p className="font-[cd-m] text-[22px] text-white pt-4">Social Media Marketing:</p>
                                <p className="font-[cd-r] text-[16px] text-gray-400 pt-3">
                                    Build your online presence with data-driven strategies and creative campaigns.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="border border-white rounded-lg p-4 flex-grow-1 d-flex flex-column">
                                <Image
                                    src="/assets/Group 17630.png"
                                    className="w-[60px]"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />
                                <p className="font-[cd-m] text-[22px] text-white pt-4">Branding: </p>
                                <p className="font-[cd-r] text-[16px] text-gray-400 pt-3">
                                    Develop a cohesive and powerful brand identity to stand out in the market.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="border border-white rounded-lg p-4 flex-grow-1 d-flex flex-column">
                                <Image
                                    src="/assets/Group 17632.png"
                                    className="w-[60px]"
                                    width={1080}
                                    height={1080}
                                    alt="no-img"
                                />
                                <p className="font-[cd-m] text-[22px] text-white pt-4">Digital Marketing:</p>
                                <p className="font-[cd-r] text-[16px] text-gray-400 pt-3">
                                    Build your online presence with data-driven strategies and creative campaigns.
                                </p>
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
