"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Briefcase,
  LogIn,
  UserPlus,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"; // Add relevant social media icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed px-2 md:px-16 lg:px-20 top-0 z-20 w-full mb-4 transition-all duration-300 ${
        scrolling ? "bg-[#37131d] shadow-md" : "bg-[#37131d]"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4">
        <Link href="/">
          <span className="flex cursor-pointer items-center">
            <span className="self-center text-2xl font-bold  text-[#fff]">
              Siddharudh Math
            </span>
          </span>
        </Link>
 
<div className=" hidden lg:flex  flex-col space-y-2">   <div className="flex space-x-4">
<Link href="https://twitter.com" target="_blank">
              <Youtube className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
           
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
          </div>

        <div className="hidden lg:flex space-x-8">
          <Link href="/about">
            <span className="cursor-pointer text-[#fff] hover:underline hover:underline-offset-8 hover:rounded-lg hover:text-[#ffcb05]  flex items-center">
              About
            </span>
          </Link>
          {/* Add more items to the upper navigation bar for larger screens */}
          <Link href="/services">
            <span className="cursor-pointer text-[#fff] hover:underline hover:underline-offset-8 hover:rounded-lg hover:text-[#ffcb05] flex items-center">
              Services
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer text-[#fff] hover:underline hover:underline-offset-8 hover:rounded-lg hover:text-[#ffcb05] flex items-center">
              Contact
            </span>
          </Link>
          {/* Social Media Icons */}
       
        </div>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={toggleDrawer}
            className="block p-2 focus:outline-none"
          >
            <Menu className="h-6 w-6 text-[#fff]" />
          </button>
        </div>

        <div
          ref={drawerRef}
          className={`fixed top-0 h-full transition-all duration-300 w-[80%] ease-in-out lg:hidden bg-[#C5341c] shadow-lg ${
            isOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="pt-1 px-2 pb-3">
            <button
              onClick={toggleDrawer}
              className="absolute top-3 right-4 focus:outline-none"
            >
              <X className="h-6 w-6 text-[#fff]" />
            </button>
          </div>
          <div className="p-4 px-10 h-full pt-6">
            <ol className="flex font-semibold flex-col space-y-4">
              <li className="border-b border-[#FFCB05] pb-2">
                <Link href="/">
                  <span className="text-white hover:underline hover:underline-offset-8 flex items-center font-semibold">
                    Home
                  </span>
                </Link>
              </li>
              <li className="border-b border-[#FFCB05] pb-2">
                <Link href="/about">
                  <span className="text-white hover:underline hover:underline-offset-8 flex items-center font-semibold">
                    About
                  </span>
                </Link>
              </li>
              <li className="border-b border-[#FFCB05] pb-2">
                <Link href="/services">
                  <span className="text-white hover:underline hover:underline-offset-8 flex items-center font-semibold">
                    Services
                  </span>
                </Link>
              </li>
              <li className="border-b border-[#FFCB05] pb-2">
                <Link href="/contact">
                  <span className="text-white hover:underline hover:underline-offset-8 flex items-center font-semibold">
                    Contact
                  </span>
                </Link>
              </li>
            </ol>
    {/* Social Media Icons */}
    <div className="flex mt-6 space-x-4">
    <Link href="https://twitter.com" target="_blank">
              <Youtube className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
           
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="h-6 w-6 text-white hover:text-gray-300 border-r pr-2" />
            </Link>
          </div>
    
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
