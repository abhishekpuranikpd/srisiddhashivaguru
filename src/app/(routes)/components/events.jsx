import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AnnacharaSection() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-amber-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        <div className="space-y-6 text-justify">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-maroon-800 mb-4">
            Anna Dasoha 
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base">
            <span className="font-bold">Anna Dasoha</span> at{" "}
            <span className="font-bold">Siddharudh Math</span> is a sacred
            tradition rooted in the principles of
            <span className="font-bold"> ‘Samata’ (equality)</span> and
            <span className="font-bold"> ‘Seva’ (selfless service)</span>. It is
            a place where both residents of the Math and visitors partake in{" "}
            <span className="font-bold">Mahaprasad</span>, embodying the spirit
            of universal brotherhood.
          </p>

          <p className="text-sm md:text-base">
            Every day,{" "}
            <span className="font-bold">
              thousands of devotees and visitors
            </span>{" "}
            are served wholesome meals, ensuring that
            <span className="font-bold"> no one goes hungry</span>. The
            tradition follows the profound belief that{" "}
            <span className="font-bold">
              food should be shared without distinction
            </span>
            of caste, creed, or status. On special occasions and festivals, the
            Math extends its mission of service even further, serving an even
            greater number of people.
          </p>

          <p className="text-sm md:text-base">
            A fundamental principle upheld here is that{" "}
            <span className="font-bold">
              one may take as much as needed, but must not waste even a morsel
            </span>
            , as every grain of food has the potential to feed the hungry. The{" "}
            <span className="font-bold">Anna Dasoha operates daily</span>{" "}
            between <span className="font-bold">11 AM – 3 PM</span> and{" "}
            <span className="font-bold">7 PM – 8 PM</span>, welcoming everyone
            with open arms.
          </p>

          <p className="text-sm md:text-base">
            Many devoted individuals and families voluntarily contribute towards
            this noble cause by{" "}
            <span className="font-bold">
              sponsoring meals for an entire day
            </span>
            . As a gesture of gratitude, a special{" "}
            <span className="font-bold">
              Abhishek (sacred offering) is performed in the name of the donor
            </span>{" "}
            at the main temple.
          </p>

          <p className="text-sm md:text-base font-bold">
            Anna Dasoha stands as a{" "}
            <span className="font-bold">
              symbol of compassion and selfless giving
            </span>
            , reminding us that{" "}
            <span className="font-bold">
              serving food is not just an act of kindness, but a form of worship
              in itself
            </span>
            .
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg
                  className="w-10 h-10 text-amber-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 10h18v4H3zM12 2l7 6H5z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">
                Sacred Mahaprasad for All
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg
                  className="w-10 h-10 text-amber-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">
                Timings: 11 AM – 3 PM & 7 PM – 8 PM
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg
                  className="w-10 h-10 text-amber-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 10h18v4H3zM12 2l7 6H5z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">
                Feeding Over 3,000 People Daily
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2">
                <svg
                  className="w-10 h-10 text-amber-800"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-1 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
                </svg>
              </div>
              <p className="text-center font-medium text-sm">
                No Discrimination – Food for All
              </p>
            </div>
          </div>

          {/* Donation Box */}
          <div className="border-2 border-amber-400 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-bold text-center mb-4">
              SUPPORT ANNA DASOHA
            </h3>
            <p className="text-sm mb-6">
              If any devotee donates <span className="font-bold">₹11,000</span>{" "}
              for Anna Dasoha, a
              <span className="font-bold">  Abhishek</span> is
              performed in their name at the main temple, and their contribution
              is acknowledged as an act of divine service.
            </p>
            <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-bold">
              DONATE NOW
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
          <div className="grid grid-cols-1 md:h-full md:w-full h-[1000px]  lg:grid-cols-2 gap-1">
              <div className=" relative rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742712749/dagbgoea54qwbhioysei.jpg"
                  alt="Siddharudh Ajja"
                  fill
                  className="lg:object-cover  "
                />
              </div>
              <div className=" relative rounded-lg hidden lg:block overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742712749/vpj7o3gs4mnuhnbtkwwu.jpg"
                  alt="Siddharudh Ajja"
                  fill
                  className="lg:object-cover "
                />
              </div>
              <div className=" relative rounded-lg hidden lg:block overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742712749/lk3mbgc3asbz6idtikfq.jpg"
                  alt="Siddharudh Ajja"
                  fill
                  className="lg:object-cover "
                />
              </div>
           
              <div className=" relative rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742712748/gnnxokv3blaobicv9zwq.jpg"
                  alt="Siddharudh Ajja"
                  fill
                  className="lg:object-cover "
                />
              </div>
              <div className=" relative rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742712748/w9kxdwkihard1tq2ni0j.jpg"
                  alt="Siddharudh Ajja"
                  fill
                  className="lg:object-cover "
                />
              </div>
              <div className=" relative rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742712749/zkxtnjvtynxgx2n6cjep.jpg"
                  alt="Siddharudh Ajja"
                  fill
                  className="lg:object-cover "
                />
              </div>
            </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-end mt-8">
        <button className="bg-maroon-800 text-white p-2 rounded-md">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
