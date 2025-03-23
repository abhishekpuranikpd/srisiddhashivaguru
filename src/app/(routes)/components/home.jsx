"use client";
import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import NavBar from "./navbar";

const HomeClient = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const images = [
    {
      src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg",
    },
    {
      src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408103/3.jpg_wexf0a.jpg",
    },
    {
        src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg",
      },
      {
        src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408103/3.jpg_wexf0a.jpg",
      },
  ];
  return (
    <>
      <div className=" flex items-center mb-12  justify-center">
        <div className="w-full h-full">
          <Carousel
            plugins={[plugin.current]}
            className="w-full lg:min-h-screen h-[400px]"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
          >
            <CarouselContent className="w-full lg:min-h-screen h-[400px] shadow-inner">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="w-full lg:min-h-screen h-[400px]"
                >
                  <Image
                    src={image.src}
                    height={1094}
                    width={3000}
                    quality={100}
                    className="pl-3 max-w-full lg:min-h-screen h-[400px]"
                    alt={`Slide ${index + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HomeClient;
