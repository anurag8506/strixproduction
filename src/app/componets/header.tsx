


"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
    className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black shadow-md" : "bg-black"
    }`}
  >
      <header className="sm:px-24 px-6 sm:flex  justify-between items-center py-4 px-6  ">
        <div className="col-12   justify-between items-center">
           <div className="row justify-between items-center">
           <div className="col-md-3">
            <div className="sm:flex  items-center space-x-2">
               <Link href="/"
               >
               <Image src="/assets/logo1.png" width={200}
                          height={100}
                          alt="no-img"
                          className="rounded-[50px] sm:w-[200] w-[150px]"
                        />

               </Link>
            </div>
          </div>
          <div className="col-md-5  justify-between items-center">
            <nav className={isMenuOpen ? "block sm:flex  bg-[#000] gap-5  text-white font-medium fixed sm:relative  sm:w-[auto] w-[90vw] sm:left-[0px] left-[0px] sm:px-[0px] pl-[30px] sm:top-[0px] top-[80px] sm:h-auto h-[calc(100vh_-_80px)] transition-all duration-200" : "block sm:flex  gap-4  text-white font-medium fixed sm:relative  sm:w-[auto] w-[90vw] sm:left-[0px] left-[-100%] sm:px-[0px] pl-[30px] sm:top-[0px] top-[80px] sm:h-auto h-[calc(100vh_-_80px)] transition-all duration-200 justify-between"}>
              <div>
              <div className="sm:flex justify-between w-full">
  <div className="relative z-50 group">
    <button className="flex items-center text-lg sm:py-[0px] py-[10px] text-[#77FB38] font-[cd-r]">
      HOME
      <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" />
        </svg>
      </span>
    </button>
    <div className="sm:absolute relative left-[-2] sm:top-[30px] top-[0px] sm:p-[10px] p-[0px] sm:mt-2 w-[280px] bg-white sm:shadow-md rounded-md transition-all ease-in-out group-hover:!opacity-100 opacity-0 invisible group-hover:!visible h-[0px] sm:h-[auto] group-hover:h-[auto]">
      <ul className="pl-5 py-0 space-y-2 sm:mt-4 mb-0">
        <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] pt-[10px]">
          <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#000] hover:text-[#0073fd]">
            ABOUT
          </li>
        </Link>
        <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] pt-[10px]">
          <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#000] hover:text-[#0073fd]">
            SERVICES
          </li>
        </Link>
        <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] pt-[10px]">
          <li className="mb-3 leading-[18px] text-[16px]  font-[cd-r]font-[500] text-[#000] hover:text-[#0073fd]">
            CONTACT US
          </li>
        </Link>
      </ul>
    </div>
  </div>


</div>

            
              </div>
            
            </nav>
          </div>
          <div className="col-md-4">
          <div className="sm:flex sm:gap-3 justify-end sm:block hidden ">
    <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] py-[10px]">
      <span className=" font-[cd-r] text-white no-underline">
        WORK
      </span>
    </Link>
    <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] py-[10px]">
      <span className=" font-[cd-r]text-white no-underline">
        BLOG
      </span>
    </Link>
  </div>

          </div>
        
           </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden absolute right-[20px] top-[30px] text-gray-600 text-3xl"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </header>
    </section>
  );
};

export default Header;
