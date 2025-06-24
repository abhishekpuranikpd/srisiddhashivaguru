"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookPreviewModal } from "./book-preview-modal"
import { Badge, Eye, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const BookGallery = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleQuickBuy = (book, e) => {
    e.stopPropagation()
    const whatsappNumber = "919845547791"
    const message = `I'm interested in buying the book: ${book.title}`
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")
  }

  return (
    <div className="w-full py-8 bg-gradient-to-br  min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
 

        {/* Book Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={book.coverImage1 || "/placeholder.svg?height=400&width=300"}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-[#37131d] rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedBook(book)
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#FFCB05] hover:bg-[#e6b804] text-[#37131d] rounded-full"
                        onClick={(e) => handleQuickBuy(book, e)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <span className="absolute top-2 right-2 bg-[#C5341C] hover:bg-[#C5341C] text-white font-bold">
                    {/* {book.price && <>₹{book.price}</>} */}
                  </span>
                </div>

                {/* Book Info */}
                <div className="p-4">
                  <h3 className="font-serif font-bold text-[#37131d] text-sm md:text-base line-clamp-2 mb-1 group-hover:text-[#FFCB05] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2">by {book.author}</p>

                  <div className="flex items-center justify-between">
                 
                 
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book Preview Modal */}
      {selectedBook && <BookPreviewModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  )
}
