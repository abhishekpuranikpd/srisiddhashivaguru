"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
  PlusCircle,
} from "lucide-react";

const menuItems = [
  {
    label: "Home",
    href: "/",
    hasSubmenu: false,
  },
  {
    label: "About",
    href: "",
    hasSubmenu: true,
    submenu: [
      { label: "About Swamiji", href: "#about" },
      { label: "About Math", href: "#" },
    ],
  },
  {
    label: "Programs",
    href: "/#seva",
    hasSubmenu: true,
    submenu: [
      {
        label: "Daily Programs",
        href: "/#seva",
        description:
          "Daily Rudrabhishek To Sadguru sri Siddharoodh Swamiji Moorti And & Monday Pallakki Utsava",
      },
      {
        label: "Weekly Programs",
        href: "/#seva",
        description:
          "Every Sunday & Shravana Masa Pravachana Sri Dr. Shivkumar Swamiji delivers Pravachana Every Sunday Evening And in the Occation Of Shravana Masa",
      },
      {
        label: "Monthly Programs",
        href: "/#seva",
        description:
          "Guru Poornima Mahotsava On the Time of Guru Poornima Sri Dr. Shivkumar Swamiji delivers Pravachana",
      },
      {
        label: "Yearly Programs",
        href: "/#seva",
        description:
          "Sadguru Jayanti Mahotsava Every year lots of devotees from all parts of the India visits to celebrate Sadguru Siddharoodha & Shivakumar Mahaswamiji Jayanti. This is Celebrated particularly in the month of April-May and November.",
      },
    ],
  },
  {
    label: "Our Reach",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "Projects", href: "#" },
      { label: "Publications", href: "/#publication" },
    ],
  },
  {
    label: "Contact US",
    href: "/contact-us",
    hasSubmenu: true,
    submenu: [
      { label: "Join with US", href: "/join-us" },
      { label: "Donation", href: "#" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    hasSubmenu: false,
  },
  {
    label: "Aashram's",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "Bramha Vidyashram Chalakapur", href: "#" },
      { label: "Chidambar Ashram Bidar", href: "#" },
      { label: "Shivayogashram Aalur Vijayapur", href: "#" },
      { label: "Sadhakashram BheemarayanGudi", href: "#" },
      { label: "Kaivalya Dham Miraj Maharashtra", href: "#" },
      { label: "Poorna Pragnya Yogashram Kalaburgi", href: "#" },
      {
        label: "Sri Siddha Bharati Trust Sindhagi Rampur Vijayapur",
        href: "#",
      },
      { label: "Sri Siddharoodh math Hosalli Dharwad", href: "#" },
      { label: "Sri Siddhashram Ambarnath Mumbai", href: "#" },

      { label: "Sri Siddharoodh Aadhyatma Sameeti Nagpur", href: "#" },

      { label: "Sri Siddhashram Mulsavalgi Vijaypur", href: "#" },
      { label: "Sri Siddharoodh math Yalavantagi Kalburgi", href: "#" },
    ],
  },
  {
    label: "Institution",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "Shri Siddharoodh Swamiji High School Chalukapur", href: "#" },
      { label: "Shri Shivakumarresh Gurukul Hr. PS. Bidar", href: "#" },
      {
        label: "N.K. Jabshetty Ayurvedic Medical College & P.G. Centre, Bidar",
        href: "#",
      },
      {
        label:
          "Shri Chandrapppa Gourshetty Arts & Science Junior College, Bidar",
        href: "#",
      },
      { label: "Indirabai G. Shetkar High School, Bidar", href: "#" },
      {
        label: "Sri Siddharoodh Public School (C.B.S.E. State Syllabus), Bidar",
        href: "#",
      },
      { label: "Shri Sadguru Siddharoodh D.Ed. College, Bidar", href: "#" },
      {
        label: "Shri Siddharoodh Charitable Hospital & Research Centre",
        href: "#",
      },
      {
        label: "Shri Sadguru Siddharoodh Mahila Mahavidyalaya, Bidar",
        href: "#",
      },
      {
        label: "Shri Siddharoodh Swami P.U. College Chalukapur, Tq. Bhalki",
        href: "#",
      },
    ],
  },
];

const socialLinks = [
  {
    platform: "Youtube",
    href: "https://youtube.com",
    icon: <Youtube className="h-6 w-6 text-white hover:text-gray-300" />,
  },
  {
    platform: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-6 w-6 text-white hover:text-gray-300" />,
  },
  {
    platform: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook className="h-6 w-6 text-white hover:text-gray-300" />,
  },
  {
    platform: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-6 w-6 text-white hover:text-gray-300" />,
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState(null);

  const drawerRef = useRef(null);
  const submenuRefs = useRef([]);

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

      // Close desktop submenu when clicking outside
      if (
        activeDesktopSubmenu !== null &&
        submenuRefs.current[activeDesktopSubmenu] &&
        !submenuRefs.current[activeDesktopSubmenu].contains(event.target)
      ) {
        setActiveDesktopSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDesktopSubmenu]);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleDesktopSubmenu = (index) => {
    setActiveDesktopSubmenu(activeDesktopSubmenu === index ? null : index);
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
            <span className="self-center text-2xl font-bold text-[#fff]">
              Siddharudh Math
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Parent Menu Item */}
              <div
                className="cursor-pointer text-[#fff] hover:underline hover:underline-offset-8 hover:rounded-lg hover:text-[#ffcb05] flex items-center"
                onClick={() => item.hasSubmenu && toggleDesktopSubmenu(index)}
              >
                <Link href={item.hasSubmenu ? "#" : item.href}>
                  <span>{item.label}</span>
                </Link>
                {item.hasSubmenu && (
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeDesktopSubmenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Enhanced Submenu (Visible on Click) */}
              {item.hasSubmenu && activeDesktopSubmenu === index && (
                <div
                  ref={(el) => (submenuRefs.current[index] = el)}
                  className="fixed  left-1/2 transform -translate-x-1/2 mt-12
                      bg-[#c5341c] rounded-xl shadow-lg p-6 w-auto max-w-6xl z-50 
                      before:absolute before:content-[''] before:w-0 before:h-0 
                   
                      "
                >
                  <nav
                    className={`grid gap-8 text-left font-semibold`}
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(
                        item.submenu.length,
                        4
                      )}, minmax(200px, 1fr))`,
                    }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="list-none">
                        <Link href={subItem.href}>
                          <div className="flex flex-col items-center text-center">
                            {/* Conditionally Render Icon */}
                            {subItem.icon && (
                              <div className="bg-yellow-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-3">
                                <svg
                                  className="w-8 h-8 text-[#c5341c]"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
                                </svg>
                              </div>
                            )}

                            {/* Label */}
                            <span className="text-white font-bold text-md uppercase">
                              {subItem.label}
                            </span>

                            {/* Read More */}
                            <span className="text-yellow-400 font-medium text-sm mt-2 flex items-center gap-1 cursor-pointer hover:text-yellow-300">
                              Read More →
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} target="_blank">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleDrawer}
            className="block p-2 focus:outline-none"
          >
            <Menu className="h-6 w-6 text-[#fff]" />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          ref={drawerRef}
          className={`fixed top-0 h-full transition-all duration-300 w-[80%] ease-in-out lg:hidden bg-[#C5341c] shadow-lg overflow-y-auto ${
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
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-[#FFCB05] pb-2">
                  <div className="flex justify-between items-center">
                    <Link href={item.hasSubmenu ? "#" : item.href}>
                      <span className="text-white hover:underline hover:underline-offset-8 flex items-center">
                        {item.label}
                      </span>
                    </Link>
                    {item.hasSubmenu && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="text-white flex justify-end items-center hover:text-[#ffcb05]"
                      >
                        <PlusCircle
                          className={`h-5 w-5 ${
                            activeSubmenu === index ? "rotate-45" : ""
                          } transition-transform duration-300`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Enhanced Mobile Submenu */}
                  {item.hasSubmenu && activeSubmenu === index && (
                    <ul className="ml-4 mt-2 space-y-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-3">
                          <Link href={subItem.href}>
                            <div className="flex flex-col">
                              <span className="block text-white hover:text-[#ffcb05] font-bold">
                                {subItem.label}
                              </span>
                              {subItem.description && (
                                <p className="text-white text-sm mt-1 font-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
            {/* Social Icons */}
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
