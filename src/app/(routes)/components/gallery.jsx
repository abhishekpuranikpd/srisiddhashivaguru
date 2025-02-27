import Image from "next/image"

export default function PhotoGallery() {
  // Sample data for gallery images
  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 1" },
    { id: 2, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 2" },
    { id: 3, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 3" },
    { id: 4, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 4" },
    { id: 5, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 5" },
    { id: 6, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 6" },
    { id: 7, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 7" },
    { id: 8, src: "https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg", alt: "Swamiji Image 8" },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-amber-400 rounded-full p-2 w-16 h-16 flex items-center justify-center mb-2">
          <svg className="w-8 h-8 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-6 6h8v2H8v-2z" />
          </svg>
        </div>
        <h2 className="text-amber-600 font-bold text-lg border-b-2 border-amber-400 pb-1">PHOTO GALLERY</h2>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-maroon-800 text-center mb-4">
        Bhavmudra of Pujyashri Adrishya Kadsidhheshwar Swamiji
      </h1>
      <div className="w-48 h-1 bg-amber-400 mx-auto mb-12"></div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-lg overflow-hidden border-2 border-amber-400 p-1"
          >
            <div className="absolute inset-0 bg-white rounded-lg overflow-hidden">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

