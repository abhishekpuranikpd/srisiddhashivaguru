"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { cn } from "../../../../lib/utils";

export const BookPreviewModal = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const bookRef = useRef(null);

  // ✅ Safe preview image extraction
  const getPreviewImages = (book) => {
    const images = [];
    for (let i = 1; i <= 7; i++) {
      const img = book[`coverImage${i}`];
      if (img && typeof img === "string") {
        images.push(img);
      }
    }
    return images;
  };

  const previewImages = book ? getPreviewImages(book) : [];
  const totalPages = previewImages.length;

  console.log("Preview Images:", previewImages); // ✅ Debug output

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSliderChange = (value) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPage(value[0]);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleThumbnailClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPage(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  if (!book || totalPages === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#FFF8F0] rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="bg-[#37131d] hover:bg-[#4a1a27] rounded-full p-2 text-white transition-colors"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Sidebar: Book Info */}
          <div className="bg-gradient-to-b from-[#37131d] to-[#4a1a27] p-6 md:w-1/3 text-white">
            <div className="flex flex-col items-center text-center h-full">
              <div className="relative mb-6 mt-4">
                <div className="absolute inset-0 border-4 border-[#FFCB05] rounded-lg transform rotate-3"></div>
                <img
                  src={book.coverImage1 || "/placeholder.svg"}
                  alt={book.title}
                  className="relative z-10 rounded-lg shadow-lg w-48 h-64 object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#FFCB05] mb-2 font-['Playfair_Display',serif]">
                {book.title}
              </h2>
              <p className="text-white/90 mb-2 italic font-['Playfair_Display',serif]">
                by {book.author}
              </p>

              <div className="flex gap-2 mb-4 justify-center">
                <span className="bg-[#FFCB05]/20 text-[#FFCB05] px-3 py-1 rounded-full text-sm">
                  {book.category}
                </span>
                <span className="bg-[#C5341C]/20 text-[#C5341C] px-3 py-1 rounded-full text-sm">
                  ₹{book.price}
                </span>
              </div>

              <p className="text-white/80 text-sm mb-6">{book.description}</p>

              <div className="mt-auto flex items-center justify-center gap-2 text-[#FFCB05]">
                <BookOpen className="w-5 h-5" />
                <span className="font-['Playfair_Display',serif]">
                  {currentPage + 1} of {totalPages} pages
                </span>
              </div>
            </div>
          </div>

          {/* Right: Preview Carousel */}
          <div className="p-6 md:w-2/3 flex flex-col">
            <h3 className="text-xl font-bold text-[#37131d] mb-4 font-['Playfair_Display',serif] text-center">
              {book.title} - Preview
            </h3>

            <div
              ref={bookRef}
              className="relative overflow-hidden rounded-lg border border-[#37131d]/20 bg-white flex-grow"
              style={{ minHeight: "400px" }}
            >
              <div
                className="flex transition-transform duration-300 ease-out h-full"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {previewImages.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full flex-shrink-0 flex items-center justify-center p-4"
                  >
                    <img
                      src={img}
                      alt={`Page ${index + 1}`}
                      className="w-full h-auto max-h-[400px] object-contain bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="mt-6 px-4">
              <Slider
                value={[currentPage]}
                min={0}
                max={totalPages - 1}
                step={1}
                onValueChange={handleSliderChange}
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-2 flex gap-2 overflow-x-auto pb-2 px-2">
              {previewImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "flex-shrink-0 w-16 h-24 border-2 rounded overflow-hidden transition-all",
                    currentPage === index
                      ? "border-[#FFCB05] shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
