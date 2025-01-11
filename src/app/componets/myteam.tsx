
import Image from "next/image";

import "aos/dist/aos.css";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos';
import "bootstrap/dist/css/bootstrap.min.css"
export default function MyTeam() {

        useEffect(() => {
            AOS.init();
            AOS.refresh();
        }, []);
    return (
        <>
        <div >
         
            <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-[10px] py-[10px]">
                <div className="container-fluid p-0">
                <div className="row" data-aos="fade-up" data-aos-duration="3000" >
                        <div className="col-md-12 sm:pt-[20px] pt-[40px]">
                            <div className="border border-[1px] border-[#5B5B5B] border-t w-full"></div>
                            <div className="col-md-6">
                                <p className="font-[cd-se] sm:text-[30px] text-[25px] text-[#fff] pt-5 ">MEET OUR TEAM</p>
                                <p className="font-[cd-r] text-[18px] text-[#fff] ">At Strix Production, we believe that a successful marketing campaign requires the collaborative efforts of talented individuals with diverse skills and expertise. Our dedicated team of professionals is here to help your business thrive in the ever-changing landscape of digital marketing</p>

                            </div>
                        </div>

                    </div>
                    <div className="row pt-4"  data-aos="fade-up" data-aos-duration="3000" >
                        <div className="col-md-4 mb-4">
                            <Image
                                src='/assets/image (4).png'
                                className="object-contain w-full "
                                width={1080}
                                height={1080}
                                alt="Image"
                            />
                            <p className="font-[cd-m] text-center text-[25px] p-0 m-0 pt-4 text-[#fff]">Rajnandan soni</p>
                            <p className="font-[cd-r] text-center text-[16px] p-0 m-0 text-[#B8B8B8]">Chief Financial Officer</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Image
                                src='/assets/image (6).png'
                                className="object-contain w-full "
                                width={1080}
                                height={1080}
                                alt="Image"
                            />
                            <p className="font-[cd-m] text-center text-[25px] p-0 m-0 pt-4 text-[#fff]">Kirti fore</p>
                            <p className="font-[cd-r] text-center text-[16px] p-0 m-0 text-[#B8B8B8]">Human Resource Manager</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Image
                                src='/assets/image (8).png'
                                className="object-contain w-full "
                                width={1080}
                                height={1080}
                                alt="Image"
                            />
                            <p className="font-[cd-m] text-center text-[25px] p-0 m-0 pt-4 text-[#fff]">Rohan Rana</p>
                            <p className="font-[cd-r] text-center text-[16px] p-0 m-0 text-[#B8B8B8]">Senior Full-Stack Developer</p>
                        </div>
                    
                    </div>

                </div>
            </section>

        </div>
        </>
    );
}