import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AnnacharaSection() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-amber-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-maroon-800 mb-4">Annachatra</h1>

          <p className="text-sm md:text-base">
            Anna Chhatra is a place where the residents of the Math as well as visitors have Mahaprasad. It daily serves
            around 2000 to 3000 people. This is open for everyone without any distinction, which gives out strong
            message of <span className="font-bold">'Samata'</span>
            and <span className="font-bold">'Seva'</span>. The concept behind the Anna Chhatra is to provide food to
            anyone hungry without any fees or questions. Many volunteers provide their service in cooking and serving
            the Mahaprasad. The visitors of the Siddhagiri Museum can also have Mahaprasad here. On the days of
            festivals, more than 50,000 people are served at Anna Chhatra.
          </p>

          <p className="text-sm md:text-base">
            One of the principle strictly followed here is – One can get Mahaprasad as much as he/she wants, but
            shouldn't waste it. Amount of food wasted could've fed a starving person. Timings of serving food is between
            11 am to 3 pm and 7 pm to 8 pm. Anybody can voluntarily opt to serve a day's meal in Annachatra. Donation of
            Rs. 11,000/- is a cost of a day's food preparation. Abhishek is done at main temple in the name of
            food-donor.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">Delightful Mahaprasada under clear sky</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">Timing – 11 AM to 3 PM & 7 pm to 8 pm</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">Serving to 3000 people daily</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">Healthy Food</p>
            </div>
          </div>

          {/* Donation Box */}
          <div className="border-2 border-amber-400 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-bold text-center mb-4">ANNACHATRA DONATION</h3>
            <p className="text-sm mb-6">
              If any devotee donates Rs. 11000/- for Annachtram, then that day Shivlinga Pooja is performed on behalf of
              that donor. The name of the donor is published.
            </p>
            <Button className="w-full bg-red-700 hover:bg-red-800 text-white">DONATE NOW</Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[400px] md:h-[600px] w-full">
          <Image
            src="https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg"
            alt="Annachatra Service"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-end mt-8">
        <button className="bg-maroon-800 text-white p-2 rounded-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

