"use client"

import React from "react"
import { useState } from "react"
import { BookOpen } from "lucide-react"
import { BookPreview } from "./book-preview"
import { Button } from "@/components/ui/button"


export const PreviewButton= ({ bookId, title, images }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsPreviewOpen(true)}
        variant="outline"
        className="w-full mt-2 bg-[#37131d] hover:bg-[#4a1a27] text-white border-[#FFCB05] hover:border-[#FFCB05]"
      >
        <BookOpen className="w-4 h-4 mr-2" />
        Preview Book
      </Button>

      {isPreviewOpen && <BookPreview images={images} title={title} onClose={() => setIsPreviewOpen(false)} />}
    </>
  )
}

