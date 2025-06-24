"use client"

import { useState, useRef, useEffect } from "react"
import { X, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { cn } from "../../../../lib/utils"

export const BookPreviewModal = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const bookRef = useRef(null)

  // Safe preview image extraction
  const getPreviewImages = (book) => {
    const images = []
    for (let i = 1; i <= 7; i++) {
      const img = book[`coverImage${i}`]
      if (img && typeof img === "string") {
        images.push(img)
      }
    }
    return images
  }

  const previewImages = book ? getPreviewImages(book) : []
  const totalPages = previewImages.length

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
      if (e.key === "ArrowRight" && currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, currentPage, totalPages])

  const handleSliderChange = (value) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentPage(value[0])
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  const handleThumbnailClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentPage(index)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  const handleBuyNowClick = () => {
    const whatsappNumber = "919845547791"
    const message = `I'm interested in buying the book: ${book.title}`
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (!book || totalPages === 0) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white w-full h-full sm:w-[95vw] sm:h-[95vh] sm:rounded-xl overflow-hidden shadow-2xl relative flex flex-col"
        >
          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm sm:bg-white sm:text-black sm:hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Mobile Layout */}
          <div className="flex flex-col h-full sm:hidden">
            {/* Mobile Header with Book Info */}
            <div className="bg-gradient-to-r from-[#37131d] to-[#4a1a27] p-4 text-white flex-shrink-0">
              <div className="flex items-center gap-4">
                <img
                  src={book.coverImage1 || "/placeholder.svg"}
                  alt={book.title}
                  className="w-16 h-20 object-cover rounded-lg border-2 border-[#FFCB05]"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-[#FFCB05] font-serif truncate">{book.title}</h2>
                  <p className="text-white/90 text-sm">by {book.author}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-[#FFCB05]/20 text-[#FFCB05] px-2 py-1 rounded-full text-xs">
                      {book.category}
                    </span>
                    <span className="bg-[#C5341C]/20 text-[#C5341C] px-2 py-1 rounded-full text-xs font-bold">
                      ₹{book.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Preview Area - Takes most of the screen */}
            <div className="flex-1 bg-gray-50 relative overflow-hidden">
              {/* Navigation Arrows */}
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm disabled:opacity-30"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm disabled:opacity-30"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Page Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentPage + 1} / {totalPages}
              </div>

              {/* Image Carousel */}
              <div className="h-full w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                  {previewImages.map((img, index) => (
                    <div key={index} className="min-w-full h-full flex-shrink-0 flex items-center justify-center p-4">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Page ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="bg-white p-4 flex-shrink-0 border-t">
              {/* Slider */}
              <div className="mb-4">
                <Slider
                  value={[currentPage]}
                  min={0}
                  max={totalPages - 1}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="w-full"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
                {previewImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={cn(
                      "flex-shrink-0 w-12 h-16 border-2 rounded-lg overflow-hidden transition-all",
                      currentPage === index ? "border-[#FFCB05] shadow-lg" : "border-gray-300 opacity-70",
                    )}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Buy Button */}
              <Button
                onClick={handleBuyNowClick}
                className="w-full bg-[#FFCB05] hover:bg-[#e6b804] text-[#37131d] font-bold"
              >
                Buy Now via WhatsApp
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex h-full">
            {/* Desktop Book Info Sidebar */}
            <div className="bg-gradient-to-br from-[#37131d] via-[#4a1a27] to-[#5d1f2f] p-6 w-80 text-white flex-shrink-0">
              <div className="flex flex-col items-center text-center h-full">
                {/* Book Cover */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 border-3 border-[#FFCB05] rounded-lg transform rotate-2 opacity-50"></div>
                  <div className="absolute inset-0 border-2 border-[#FFCB05] rounded-lg transform -rotate-1"></div>
                  <img
                    src={book.coverImage1 || "/placeholder.svg"}
                    alt={book.title}
                    className="relative z-10 rounded-lg shadow-xl w-48 h-64 object-cover border-2 border-white/20"
                  />
                </div>

                {/* Book Details */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-[#FFCB05] mb-2 font-serif">{book.title}</h2>
                  <p className="text-white/90 mb-3 italic">by {book.author}</p>

                  <div className="flex gap-2 mb-4 justify-center">
                    <span className="bg-[#FFCB05]/20 text-[#FFCB05] px-3 py-1 rounded-full text-sm">
                      {book.category}
                    </span>
                    <span className="bg-[#C5341C]/20 text-[#C5341C] px-3 py-1 rounded-full text-sm font-bold">
                      {/* ₹{book.price} */}
                    </span>
                  </div>

                  <p className="text-white/80 text-sm mb-6">{book.description}</p>

                  <Button
                    onClick={handleBuyNowClick}
                    className="bg-[#FFCB05] hover:bg-[#e6b804] text-[#37131d] font-bold rounded-full"
                  >
                    Buy Now via WhatsApp
                  </Button>
                </div>

                {/* Page Counter */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[#FFCB05] bg-white/10 rounded-full px-4 py-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-serif text-sm">
                    {currentPage + 1} of {totalPages}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Preview Section */}
            <div className="flex-1 p-6 flex flex-col min-w-0">
              <h3 className="text-2xl font-bold text-[#37131d] mb-4 font-serif text-center">Book Preview</h3>

              {/* Desktop Preview Area */}
              <div className="flex-1 bg-white rounded-xl shadow-inner border-2 border-[#37131d]/10 overflow-hidden relative min-h-0">
                {/* Navigation Arrows */}
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm disabled:opacity-30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm disabled:opacity-30"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Image Carousel */}
                <div className="h-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                  >
                    {previewImages.map((img, index) => (
                      <div key={index} className="min-w-full h-full flex-shrink-0 flex items-center justify-center p-6">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Page ${index + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Controls */}
              <div className="mt-4 space-y-4 flex-shrink-0">
                {/* Slider */}
                <div className="px-2">
                  <Slider
                    value={[currentPage]}
                    min={0}
                    max={totalPages - 1}
                    step={1}
                    onValueChange={handleSliderChange}
                    className="w-full"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-2 px-1">
                  {previewImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={cn(
                        "flex-shrink-0 w-16 h-20 border-2 rounded-lg overflow-hidden transition-all hover:scale-105",
                        currentPage === index
                          ? "border-[#FFCB05] shadow-lg ring-2 ring-[#FFCB05]/50"
                          : "border-gray-300 opacity-70 hover:opacity-100",
                      )}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
