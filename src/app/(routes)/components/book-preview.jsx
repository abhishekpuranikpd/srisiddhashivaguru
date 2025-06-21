"use client"

import  React from "react"
import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"



export const BookPreview = ({ images, title, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const bookRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && currentPage < images.length - 1) {
        nextPage()
      } else if (e.key === "ArrowLeft" && currentPage > 0) {
        prevPage()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, images.length, onClose])

  const nextPage = () => {
    if (currentPage < images.length - 1 && !isFlipping) {
      setDirection("next")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection("prev")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
          aria-label="Close preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center mb-4 absolute top-6 left-1/2 transform -translate-x-1/2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-white/70 text-sm">
          Page {currentPage + 1} of {images.length}
        </p>
      </div>

      <div
        ref={bookRef}
        className="relative w-full max-w-3xl aspect-[3/2] bg-[#37131d]/50 rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Book spine effect */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-r from-black/30 to-black/10 z-20"></div>

        {/* Book shadow effect */}
        <div className="absolute inset-0 shadow-inner pointer-events-none z-30"></div>

        {/* Current page */}
        <div className="absolute inset-0 flex">
          <div
            className={cn(
              "w-1/2 h-full bg-[#FFF8F0] flex items-center justify-center p-2 transition-transform duration-500 shadow-md",
              isFlipping && direction === "next" && "origin-right -rotate-[15deg] opacity-80",
            )}
          >
            {currentPage > 0 && (
              <img
                src={images[currentPage - 1] || "/placeholder.svg"}
                alt={`Page ${currentPage}`}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div
            className={cn(
              "w-1/2 h-full bg-[#FFF8F0] flex items-center justify-center p-2 transition-transform duration-500 shadow-md",
              isFlipping && direction === "prev" && "origin-left rotate-[15deg] opacity-80",
            )}
          >
            <img
              src={images[currentPage] || "/placeholder.svg"}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation controls */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 z-40">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className={cn(
              "px-4 py-2 rounded-full bg-[#FFCB05] text-[#37131d] font-medium transition-opacity",
              (currentPage === 0 || isFlipping) && "opacity-50 cursor-not-allowed",
            )}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage >= images.length - 1 || isFlipping}
            className={cn(
              "px-4 py-2 rounded-full bg-[#FFCB05] text-[#37131d] font-medium transition-opacity",
              (currentPage >= images.length - 1 || isFlipping) && "opacity-50 cursor-not-allowed",
            )}
          >
            Next
          </button>
        </div>

        {/* Click areas for navigation */}
        <div className="absolute top-0 bottom-0 left-0 w-1/4 cursor-w-resize z-10" onClick={prevPage} />
        <div className="absolute top-0 bottom-0 right-0 w-1/4 cursor-e-resize z-10" onClick={nextPage} />
      </div>
    </div>
  )
}

