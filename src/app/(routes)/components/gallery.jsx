import Image from "next/image";

export default function PhotoGallery() {


  return (

     <div className="py-16 bg-[#FFF8F0]">
     <div className="container mx-auto px-4">
       <div className="text-center mb-12">
         <h2 className="text-3xl font-bold text-[#37131d] mb-2">Divine Glimpses</h2>
         <div className="w-24 h-1 bg-[#C5341C] mx-auto mb-6"></div>
         <p className="text-gray-700 max-w-3xl mx-auto">
           Sacred moments from our spiritual gatherings, ceremonies, and seva activities
         </p>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {gallery.map((image, index) => (
           <div key={index} className="relative overflow-hidden rounded-lg group h-48 md:h-64">
             <img
               src={image.url || "/placeholder.svg"}
               alt={image.alt}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
               <p className="text-white p-4 text-sm">{image.alt}</p>
             </div>
           </div>
         ))}
       </div>

       {/* <div className="text-center mt-10">
         <Link href="/gallery">
           <span className="inline-block bg-[#37131d] hover:bg-[#4a1a27] text-white font-medium py-3 px-8 rounded-lg transition-colors">
             View Full Gallery
           </span>
         </Link>
       </div> */}
     </div>
   </div>
  );
}
const gallery = [
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Daily Rudrabhishek Ceremony"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Monday Pallakki Utsava"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Sri Dr. Shivkumar Swamiji's Pravachana"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Devotees at Guru Poornima Celebration"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Sadguru Jayanti Procession"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Annadanam Seva Program"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Temple Rituals at Siddharudh Math"
  },
  {
    url: "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
    alt: "Spiritual Retreat at Chalakpaur"
  }
];