import Image from "next/image"
import { GiOpenBook } from "react-icons/gi";
export default function HistorySection() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-amber-400 rounded-full p-2 w-16 h-16 flex items-center justify-center mb-2">
        <GiOpenBook className="h-8 w-8"/>
        </div>
        <h2 className="text-amber-600 font-bold text-lg border-b-2 border-amber-400 pb-1">OUR HISTORY</h2>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-maroon-800 text-center mb-4">
      Chidambar Ashram Shri Siddharudh Math Bidar
      </h1>
      <div className="w-48 h-1 bg-amber-400 mx-auto mb-8"></div>

      {/* Subtitle */}
      <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
        Siddharudh Math had been rigorously working towards the betterment of society for centuries with primary focus
        on village development.
      </p>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image src="https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg" alt="Siddharudh Temple" fill className="object-cover" />
        </div>

        {/* Right Column - Text */}
        <div className="p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-maroon-800 border-b-2 border-amber-400 pb-2 mb-6">
            Siddharudh Matham
          </h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base">
              Siddharudh Math in Bidar, is the highest seat of the Kadsiddheshwar
              tradition. It is the place where the first Kadsiddheshwar Swamiji, Shri Niramay Kadsiddheshwar came and
              settled in 7th century C.E. Since then the Math has been guiding its followers in both spiritual and
              worldly matters. Siddharudh Math is the Sthir Peeth of the Kadsiddheshwar Tradition. It was previously
              known as Kaneri math. Siddharudh Math had been rigorously working towards the betterment of society for
              centuries with primary focus on village development. Competent villages lead to a competent Nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

