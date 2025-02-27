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
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "About Swamiji", href: "#" },
      { label: "About Math", href: "" },
    ],
  },
  {
    label: "Seva",
    href: "#",
  },
 
  {
    label: "Programs",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "Daily Programs", href: "#" },
      { label: "Weekly Programs", href: "" },
      { label: "Monthly Programs", href: "" },
      { label: "yearly Programs", href: "" },
    ],
  },
  {
    label: "Our Reach",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "Projects", href: "#" },
      { label: "Publications", href: "" },
    ],
  },
  {
    label: "Contact US",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "Join with US", href: "#" },
      { label: "Donation", href: "#" },
    ],
  }, {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Aashram's",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "", href: "#" },
      { label: "", href: "#" },
    ],
  },
  {
    label: "Institution",
    href: "#",
    hasSubmenu: true,
    submenu: [
      { label: "", href: "#" },
      { label: "", href: "#" },
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
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track the active submenu

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

  // Function to toggle a submenu's visibility
  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
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
    <div key={index} className="relative group">
      {/* Parent Menu Item */}
      <Link href={item.href}>
        <span className="cursor-pointer text-[#fff] hover:underline hover:underline-offset-8 hover:rounded-lg hover:text-[#ffcb05]">
          {item.label}
        </span>
      </Link>

      {/* Submenu (Visible on Hover, Styled) */}
      {item.hasSubmenu && (
        <div className="absolute left-0 mt-2 px-4 bg-[#c5341c] rounded-xl shadow-lg p-2 min-w-max opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-300">
          <nav className="list-none text-left font-semibold space-y-3">
            {item.submenu.map((subItem, subIndex) => (
              <li key={subIndex} className="whitespace-nowrap">
                <Link href={subItem.href}>
                  <span
                    className="text-[#fff] cursor-pointer pb-2 hover:text-[#FFCB05] border-b-[3px]"
                    style={{
                      borderImage:
                        "linear-gradient(to right, transparent 10%, #FFCB05 50%, transparent 90%)",
                      borderImageSlice: 1,
                    }}
                  >
                    {subItem.label}
                  </span>
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
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-[#FFCB05] pb-2">
                  <div className="flex justify-between items-center">
                    <Link href={item.href}>
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

                  {/* Submenu */}
                  {item.hasSubmenu && activeSubmenu === index && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.href}>
                            <span className="block text-white hover:text-[#ffcb05]">
                              {subItem.label}
                            </span>
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
