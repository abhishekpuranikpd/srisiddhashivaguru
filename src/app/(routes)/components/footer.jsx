import React from "react";
import Link from "next/link"; // Import Next.js Link
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons

const Footer = () => {
  return (
<div className="bg-white text-[#37131d] py-10">
  <footer className="container mx-auto px-5">
    <div className="flex flex-wrap  justify-between text-left container mx-auto">
      {/* Address Section */}
      <div className="w-full md:w-5/12 px-4 md:px-12 mb-4">
        <h2 className="title-font text-left border-t-2 font-bold max-w-max border-b-2 border-[#FFCB05] text-[#c5341c] tracking-widest text-lg mb-3">
          Address:
        </h2>
        <div className="flex text-left justify-start md:justify-start">
          <p>
            <span>Chidambar Ashram Sri Siddharudh Math</span> <br /> <br />
            <span>
              <b>Address:</b> Sri Siddharudh math Gumpa, Bidar-585401
            </span>
            <br />
            <span>
              <b>Phone:</b> +91 9665322445
            </span>
            <br />
            <span>
              <b>Email:</b> siddharudhamathbidar@gmail.com
            </span>
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-full md:w-2/12 px-4 mb-8">
        <h2 className="title-font border-t-2 font-bold max-w-max border-b-2 border-[#FFCB05] text-[#c5341c] tracking-widest text-lg mb-3">
          Links
        </h2>
        <nav className="list-none space-y-2">
          <li>
            <Link href="/">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">About Swamiji</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">About Math</span>
            </Link>
          </li>
          <li>
            <Link href="/seva">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">Seva</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">Contact</span>
            </Link>
          </li>
        </nav>
      </div>

      {/* Our Reach Section */}
      <div className=" md:w-2/12 px-4 mb-8">
        <h2 className="title-font border-t-2 font-bold max-w-max border-b-2 border-[#FFCB05] text-[#c5341c] tracking-widest text-lg mb-3">
          Our Reach
        </h2>
        <nav className="list-none space-y-2">
          <li>
            <Link href="#">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">Publications</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="text-[#37131d] hover:text-[#37131d] hover:font-semibold cursor-pointer">Newsletter</span>
            </Link>
          </li>
        </nav>
      </div>
   {/* Find Us On Section */}
   <div className=" md:w-3/12 px-4 mb-8">
        <h2 className="title-font border-t-2 font-bold max-w-max border-b-2 border-[#FFCB05] text-[#c5341c] tracking-widest text-lg mb-3">
          Find Us On
        </h2>
        <div className="flex justify-start md:justify-start space-x-4">
          <Link href="#" aria-label="Facebook">
            <span className="text-[#c5341c]">
              <Facebook className="w-6 h-6" />
            </span>
          </Link>
          <Link href="#" aria-label="Twitter">
            <span className="text-[#c5341c]">
              <Twitter className="w-6 h-6" />
            </span>
          </Link>
          <Link href="#" aria-label="Instagram">
            <span className="text-[#c5341c]">
              <Instagram className="w-6 h-6" />
            </span>
          </Link>
      
        </div>
        <div className="bg-[#c5341c] rounded-xl p-2 max-w-max px-6 my-4">
  <nav className="list-none space-y-6 text-center font-semibold"> {/* Adjusted `space-y-4` to `space-y-6` for larger spacing */}
    <li>
      <Link href="/contact-us">
        <span className="text-[#fff] pb-2 cursor-pointer border-b-[3px] hover:text-[#FFCB05]" 
              style={{
                borderImage: "linear-gradient(to right, transparent 10%, #FFCB05 50%, transparent 90%)", 
                borderImageSlice: 1,
              }}>
          ENQUIRE NOW
        </span>
      </Link>
    </li>
    <li>
      <Link href="/join-us">
        <span className="text-[#fff] pb-2 cursor-pointer border-b-[3px] hover:text-[#FFCB05]" 
              style={{
                borderImage: "linear-gradient(to right, transparent 10%, #FFCB05 50%, transparent 90%)", 
                borderImageSlice: 1,
              }}>
          JOIN US
        </span>
      </Link>
    </li>
    <li>
      <Link href="#">
        <span className="text-[#fff] pb-2 cursor-pointer hover:text-[#FFCB05]" 
             >
          DONATION
        </span>
      </Link>
    </li>
  </nav>
</div>

      </div>
   
    </div>

    {/* Footer Bottom Section */}
    <div className="bg-[#37131d] rounded-2xl py-4">
      <div className="w-full px-4 flex justify-center items-center mb-2">
        <div className="flex justify-center md:justify-start space-x-4">
          <Link href="#" aria-label="Facebook">
            <span className="text-[#c5341c]">
              <Facebook className="w-6 h-6" />
            </span>
          </Link>
          <Link href="#" aria-label="Twitter">
            <span className="text-[#c5341c]">
              <Twitter className="w-6 h-6" />
            </span>
          </Link>
          <Link href="#" aria-label="Instagram">
            <span className="text-[#c5341c]">
              <Instagram className="w-6 h-6" />
            </span>
          </Link>
        
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
        <p className="text-sm text-white px-2">
          © Chidambar Ashram Sri Siddharudh math Bidar -
          <span className="text-gray-300 hover:text-white ml-1 cursor-pointer" target="_blank" rel="noopener noreferrer">
            All Rights Reserved
          </span>
        </p>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Footer;
