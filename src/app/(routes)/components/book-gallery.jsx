"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { BookPreviewModal } from "./book-preview-modal";
import Image from "next/image";

export const BookGallery = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="w-full  py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-center text-[#FFCB05] mb-8"></h2>

        {/* Book Grid */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {books.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group"
              onClick={() => setSelectedBook(book)}
            >
              <div className="relative perspective">
                <div className="absolute inset-0 bg-[#37131d] rounded-lg transform rotate-y-0 group-hover:rotate-y-20 transition-transform duration-500 shadow-xl"></div>
                <div className="relative h-[400px] transform rotate-y-0 group-hover:rotate-y-20 transition-transform duration-500">
                  <div className="absolute -right-1 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#FFCB05]/30 via-[#FFCB05] to-[#FFCB05]/30 rounded-r shadow-lg"></div>
                  <Image
                    src={book.coverImage1 || "/placeholder.svg"}
                    alt={book.title}
                    height={1000}
                    width={100}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 rounded-lg">
                    <div>
                      <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#FFCB05]">
                        {book.title}
                      </h3>
                      <p className="text-sm text-white/90">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-center"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book Preview Modal */}
      {selectedBook && (
        <BookPreviewModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};
