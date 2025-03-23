import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section with Swamiji Image */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#37131d]/70 to-[#37131d]/90"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="mb-6 border-4 border-[#FFCB05] rounded-full p-1 inline-block">
            <Image
            width={400} height={500}
              src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742717397/wvtlxlrzix1jawrrlxai.png" 
              alt="Siddharudh Swamiji" 
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#FFCB05] mb-4">
          Siddharudh Swamiji Publications
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
         
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Discover the divine teachings and spiritual wisdom of Sadguru Sri Siddharoodh Swamiji and Sri Dr. Shivkumar Swamiji
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#books">
              <span className="bg-[#FFCB05] hover:bg-[#e6b700] text-[#37131d] font-medium py-3 px-6 rounded-lg transition-colors">
                Explore Sacred Texts
              </span>
            </Link>
            <Link href="#seva">
              <span className="bg-[#C5341C] hover:bg-[#a42c18] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Seva Programs
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* About the Swamijis Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#37131d] mb-2">Our Spiritual Guides</h2>
            <div className="w-24 h-1 bg-[#FFCB05] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The divine teachings of our revered Swamijis have transformed countless lives through their wisdom and compassion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-end">
              <div className="relative mb-6">
                <div className="absolute inset-0 border-4 border-[#FFCB05] rounded-lg transform rotate-3"></div>
                <Image width={800} height={400}
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg" 
                  alt="Siddharudh Swamiji" 
                  className="relative z-10 rounded-lg shadow-lg w-64 h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#37131d] mb-2">Sadguru Sri Siddharoodh Swamiji</h3>
              <p className="text-center md:text-right text-gray-700 max-w-md">
                A revered spiritual master from Hubballi-Dharwad, Karnataka, whose teachings on Advaita Vedanta have guided seekers on the path of self-realization for generations.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="relative mb-6">
                <div className="absolute inset-0 border-4 border-[#FFCB05] rounded-lg transform -rotate-3"></div>
                <Image width={800} height={400}
                  src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742713234/wlcayjd8fi0eu6h2pnon.webp" 
                  alt="Shivkumar Swamiji" 
                  className="relative z-10 rounded-lg shadow-lg w-64 h-80 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#37131d] mb-2">Sri Dr. Shivkumar Swamiji</h3>
              <p className="text-center md:text-left text-gray-700 max-w-md">
                Continuing the spiritual legacy in Bidar, Karnataka, Sri Dr. Shivkumar Swamiji's profound discourses and compassionate guidance illuminate the path of dharma for modern seekers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Texts Section */}
      <div id="books" className="py-16 bg-[url('/placeholder.svg?height=800&width=1600')] bg-fixed bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#37131d]/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FFCB05] mb-2">Sacred Texts & Publications</h2>
            <div className="w-24 h-1 bg-[#FFCB05] mx-auto mb-6"></div>
            <p className="text-white max-w-3xl mx-auto">
              Explore the spiritual wisdom through our collection of sacred texts, discourses, and publications that illuminate the path to self-realization
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white/95 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={book.coverImage || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{book.title}</h3>
                      <p className="text-sm text-gray-200">{book.author}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#C5341C] font-bold">₹{book.price}</span>
                    <span className="text-xs bg-[#FFCB05]/20 text-[#37131d] px-2 py-1 rounded-full">
                      {book.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{book.description}</p>
                  
                  {/* <Link href={`/publications/${book.id}`}>
                    <span className="block text-center bg-[#37131d] hover:bg-[#4a1a27] text-white font-medium py-2 px-4 rounded-md transition-colors">
                      View Details
                    </span>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Link href="/publications/all">
              <span className="inline-block border-2 border-[#FFCB05] text-[#FFCB05] hover:bg-[#FFCB05] hover:text-[#37131d] font-medium py-3 px-8 rounded-lg transition-colors">
                View All Publications
              </span>
            </Link>
          </div> */}
        </div>
      </div>


      {/* Contact & Donation Section */}
      <div className="py-16 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#37131d]/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-[#FFCB05]/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#FFCB05] mb-2">Support Our Mission</h2>
              <p className="text-white">
                Your generous contributions help us continue the spiritual legacy and seva programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
                <p className="text-gray-300 mb-4">
                  Siddharudh Math, Chalakpaur<br />
                  Bidar, Karnataka - 585401
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">Phone:</span> +91 98765 43210
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Email:</span> info@siddharudhmath.org
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Make a Donation</h3>
                <p className="text-gray-300 mb-4">
                  Your support enables us to continue our spiritual and humanitarian work
                </p>
                <Link href="/donate">
                  <span className="block text-center bg-[#FFCB05] hover:bg-[#e6b700] text-[#37131d] font-bold py-3 px-6 rounded-lg transition-colors">
                    Donate Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample book data
const books = [
  {
    id: 1,
    title: "Siddharudh Charitra",
    author: "Sri Dr. Shivkumar Swamiji",
    price: 499,
    category: "Biography",
    description: "The divine life story of Sadguru Sri Siddharoodh Swamiji that illuminates the path of spiritual seekers.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 2,
    title: "Vedanta Prakasha",
    author: "Sadguru Sri Siddharoodh Swamiji",
    price: 599,
    category: "Philosophy",
    description: "A profound exploration of Advaita Vedanta philosophy that reveals the ultimate truth of existence.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 3,
    title: "Daily Spiritual Practice",
    author: "Sri Dr. Shivkumar Swamiji",
    price: 399,
    category: "Sadhana",
    description: "A practical guide to daily spiritual practices that transform consciousness and bring inner peace.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 4,
    title: "Bhakti Yoga Sadhana",
    author: "Sri Dr. Shivkumar Swamiji",
    price: 450,
    category: "Yoga",
    description: "Comprehensive teachings on the path of devotion that opens the heart to divine love and grace.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 5,
    title: "Guru Tattva",
    author: "Sadguru Sri Siddharoodh Swamiji",
    price: 550,
    category: "Philosophy",
    description: "Exploring the profound principle of the Guru and the transformative power of the Guru-disciple relationship.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 6,
    title: "Pravachana Sangraha",
    author: "Sri Dr. Shivkumar Swamiji",
    price: 650,
    category: "Discourses",
    description: "A collection of enlightening discourses delivered during Shravana Masa that illuminate the spiritual path.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 7,
    title: "Karma Yoga in Daily Life",
    author: "Sri Dr. Shivkumar Swamiji",
    price: 425,
    category: "Yoga",
    description: "Practical wisdom on transforming everyday actions into spiritual practice through selfless service.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
  {
    id: 8,
    title: "Essence of Upanishads",
    author: "Sadguru Sri Siddharoodh Swamiji",
    price: 575,
    category: "Vedanta",
    description: "A profound exploration of the essential teachings of the Upanishads that reveal the nature of reality.",
    coverImage: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717645/jyswunstfjp3adfhu3dz.jpg",
  },
];


