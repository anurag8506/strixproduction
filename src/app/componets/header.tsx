


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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-black"
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
                      <li className="flex items-center text-[#77FB38]">
                        <button
                          className="flex items-center justify-center text-lg sm:py-0 py-2 text-[#77FB38] font-[cd-r] group"
                        >
                          HOME
                          <span
                            className="ml-1 text-sm transform transition-transform duration-300 group-hover:rotate-180"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </span>
                        </button>
                      </li>

                      <div className="sm:absolute relative left-[-2] sm:top-[30px] top-[0px] sm:p-[10px] p-[0px] sm:mt-2 w-[280px] bg-black sm:shadow-md rounded-md transition-all ease-in-out group-hover:!opacity-100 opacity-0 invisible group-hover:!visible h-[0px] sm:h-[auto] group-hover:h-[auto]">
                        <ul className="pl-5 py-0 space-y-2 sm:mt-4 mb-0">
                          <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] pt-[10px]">
                            <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#fff] hover:text-[#0073fd]">
                              ABOUT
                            </li>
                          </Link>
                          <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] pt-[10px]">
                            <li className="mb-3 leading-[18px] text-[16px] font-[cd-r] font-[500] text-[#fff] hover:text-[#0073fd]">
                              SERVICES
                            </li>
                          </Link>
                          <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] pt-[10px]">
                            <li className="mb-3 leading-[18px] text-[16px]  font-[cd-r] font-[500] text-[#fff] hover:text-[#0073fd]">
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
              <div className="sm:flex sm:gap-[100px] justify-end sm:block hidden ">
                <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] py-[10px]">
                  <span className=" font-[cd-r] text-white no-underline">
                    WORK
                  </span>
                </Link>
                <Link href="/" className="text-white text-[18px] no-underline block sm:py-[0px] py-[10px]">
                  <span className=" font-[cd-r] text-white no-underline">
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
