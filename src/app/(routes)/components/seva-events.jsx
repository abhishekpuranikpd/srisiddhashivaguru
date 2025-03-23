import Link from "next/link";
import React from "react";

const PageSeva = () => {
  return (
    <>
      <div id="seva" className="py-16 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#37131d] mb-2">
              Seva Programs at Chalakpaur & Bidar
            </h2>
            <div className="w-24 h-1 bg-[#C5341C] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Join us in our service initiatives that embody the teachings of
              our Swamijis through compassionate action and community support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevaPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#C5341C]"
              >
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#37131d] mb-2">
                    {program.title}
                  </h3>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FFCB05]/20 flex items-center justify-center mr-3">
                      <span className="text-[#37131d] font-bold">
                        {program.schedule.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-700">{program.schedule}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{program.description}</p>

                  {/* <div className="border-t border-gray-200 pt-4 mt-4">
                 <Link href={`/seva/${program.id}`}>
                   <span className="text-[#C5341C] hover:text-[#a42c18] font-medium flex items-center">
                     Learn More & Participate
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                     </svg>
                   </span>
                 </Link>
               </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#37131d]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FFCB05] mb-2">
              Upcoming Spiritual Events
            </h2>
            <div className="w-24 h-1 bg-[#FFCB05] mx-auto mb-6"></div>
            <p className="text-white max-w-3xl mx-auto">
              Join us for these sacred gatherings and spiritual discourses at
              Siddharudh Math
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-[#FFCB05]/30"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#FFCB05] text-[#37131d] rounded-lg p-3 text-center mr-4 w-16">
                    <span className="block text-sm font-medium">
                      {event.month}
                    </span>
                    <span className="block text-2xl font-bold">
                      {event.day}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.time}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center text-[#FFCB05]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/events">
              <span className="inline-block border-2 border-[#FFCB05] text-[#FFCB05] hover:bg-[#FFCB05] hover:text-[#37131d] font-medium py-3 px-8 rounded-lg transition-colors">
                View Full Calendar
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSeva;

// Sample seva programs
const sevaPrograms = [
  {
    id: 1,
    title: "Daily Rudrabhishek",
    schedule: "Daily Morning",
    description:
      "Daily Rudrabhishek To Sadguru sri Siddharoodh Swamiji Moorti performed with sacred rituals and mantras.",
    image:
      "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
  },
  {
    id: 2,
    title: "Monday Pallakki Utsava",
    schedule: "Every Monday",
    description:
      "Special procession with Swamiji's palanquin accompanied by devotional music and prayers.",
    image:
      "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
  },
  {
    id: 3,
    title: "Sunday Pravachana",
    schedule: "Every Sunday Evening",
    description:
      "Sri Dr. Shivkumar Swamiji delivers spiritual discourses on ancient texts and practical spirituality.",
    image:
      "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
  },
  {
    id: 4,
    title: "Shravana Masa Pravachana",
    schedule: "During Shravana Month",
    description:
      "Special series of discourses during the sacred month of Shravana on various spiritual topics.",
    image:
      "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
  },
  {
    id: 5,
    title: "Guru Poornima Mahotsava",
    schedule: "Annual",
    description:
      "Grand celebration on Guru Poornima with special pravachana by Sri Dr. Shivkumar Swamiji.",
    image:
      "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
  },
  {
    id: 6,
    title: "Sadguru Jayanti Mahotsava",
    schedule: "April-May & November",
    description:
      "Celebration of Sadguru Siddharoodha & Shivakumar Mahaswamiji Jayanti with devotees from across India.",
    image:
      "https://res.cloudinary.com/dnckhli5u/image/upload/v1742717898/fbbvhdnyt7i5fgyffpie.jpg",
  },
];

// Sample events
const events = [
  {
    id: 1,
    title: "Guru Poornima Celebration",
    month: "Jul",
    day: "23",
    time: "6:00 AM - 9:00 PM",
    description:
      "Special abhishekam, homa, and pravachana by Sri Dr. Shivkumar Swamiji.",
    location: "Main Temple, Siddharudh Math",
  },
  {
    id: 2,
    title: "Shravana Masa Special Discourse",
    month: "Aug",
    day: "15",
    time: "6:30 PM - 8:30 PM",
    description:
      "Discourse on the essence of Bhagavad Gita by Sri Dr. Shivkumar Swamiji.",
    location: "Pravachana Hall, Siddharudh Math",
  },
  {
    id: 3,
    title: "Sadguru Jayanti Mahotsava",
    month: "Nov",
    day: "10",
    time: "5:00 AM - 10:00 PM",
    description:
      "Grand celebration with special rituals, cultural programs, and mass feeding.",
    location: "Siddharudh Math, Chalakpaur",
  },
];

// Sample gallery images
