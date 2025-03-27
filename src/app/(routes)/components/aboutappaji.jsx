import Image from "next/image";
import {
  ChevronDown,
  Book,
  Award,
  School,
  Globe,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutAppaji() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative py-20 ">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Sri Shivakumara Swamiji
            </h1>
            <p className="text-xl text-amber-800 mb-6">
              A life dedicated to spiritual enlightenment and social service
            </p>
            <p className="text-gray-700 mb-8">
              Explore the extraordinary journey of Sri Shivakumara Swamiji, from
              his early life in Solapur to becoming a revered spiritual leader
              and founder of Chidambara Ashrama in Bidar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-50"
              >
              Watch Discourses
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-80 w-80 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg">
              <Image
                src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742713234/wlcayjd8fi0eu6h2pnon.webp"
                alt="Sri Shivakumara Swamiji"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <a
            href="#about"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-md text-amber-700 animate-bounce"
          >
            <ChevronDown />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              About Sri Shivakumara Swamiji
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Born as Veerakumar on November 16, 1945 (Karthika Krishna
              Ekadashi, Sunday) in Solapur, Sri Shivakumara Swamiji dedicated
              his life to spiritual enlightenment and social service. His
              journey from a young boy to a revered spiritual leader has
              inspired millions across the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <Book className="h-8 w-8 text-amber-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">
                  Spiritual Scholar
                </h3>
                <p className="text-gray-700 text-center">
                  A multi-lingual scholar with profound knowledge of scriptures
                  and an unparalleled speaker who captivated audiences across
                  multiple countries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <School className="h-8 w-8 text-amber-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">
                  Educational Visionary
                </h3>
                <p className="text-gray-700 text-center">
                  Established numerous educational institutions to empower the
                  community through knowledge and learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-amber-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">
                  Global Influence
                </h3>
                <p className="text-gray-700 text-center">
                  Spread spiritual wisdom across continents with tours to
                  England, America, Canada, Singapore, New Zealand, and
                  Australia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Life Journey Section */}
      <section id="life" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Life Journey
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              The inspiring journey of Sri Shivakumara Swamiji from his early
              days to becoming a revered spiritual leader.
            </p>
          </div>

          <Tabs defaultValue="early-life" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-amber-100 p-1 mb-8">
              <TabsTrigger
                value="early-life"
                className="data-[state=active]:bg-amber-700 data-[state=active]:text-white"
              >
                Early Life
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-amber-700 data-[state=active]:text-white"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="spiritual"
                className="data-[state=active]:bg-amber-700 data-[state=active]:text-white"
              >
                Spiritual Path
              </TabsTrigger>
              <TabsTrigger
                value="ashrama"
                className="data-[state=active]:bg-amber-700 data-[state=active]:text-white"
              >
                Ashrama
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="early-life"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                Early Life
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Born on November 16, 1945 (Karthika Krishna Ekadashi, Sunday)
                  in Solapur to Sri Kallappa and Parvatamma, he was named
                  Veerakumar.
                </p>
                <p>
                  When he was just a year old, his father Sri Kallappa passed
                  away unexpectedly. Following this tragedy, Parvatamma returned
                  to Padanooru with her son.
                </p>
                <p>
                  He was raised with strong cultural and moral values under the
                  influence of the Sharana tradition. His grandfather, Sri
                  Sidramappa, who was a freedom fighter, had a significant
                  influence on his upbringing.
                </p>
                <div className="flex items-center gap-2 text-amber-700 mt-4">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Born: November 16, 1945</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Birthplace: Solapur</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="education"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                Education
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Veerakumar completed his primary education at the Government
                  Primary School in Padanooru.
                </p>
                <p>
                  Sri Banthanala Shivayogi of Lachyana Matha arranged for his
                  admission to Siddheshwara High School in Vijayapura. Every
                  day, Veerakumar traveled from Padanooru to Vijayapura by train
                  for school.
                </p>
                <p>
                  Recognizing his deep renunciation and sharp intellect at the
                  young age of 14, a devotee named Sri Veerangowda of Kamadalli
                  facilitated his higher education.
                </p>
                <p>
                  For special studies, he was sent to Haridwar, where he
                  underwent rigorous learning for seven to eight years. He
                  became well-versed in all scriptures under the guidance of his
                  Guru.
                </p>
              </div>
            </TabsContent>

            <TabsContent
              value="spiritual"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                Spiritual Path
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  While studying in high school, he would pass by
                  Shanmukharoodha Matha where Sri Shivaputra Mahaswamiji, a
                  direct disciple of Sri Siddharoodha Swamiji of Hubballi,
                  resided.
                </p>
                <p>
                  In 1962, he took initiation (Guru Deeksha) from Sri Shivaputra
                  Mahaswamiji, adopting the name Sri Shivakumara and embarking
                  on a life of spiritual pursuit.
                </p>
                <p>
                  He stayed at Sri Siddharoodha Matha in Hubballi, diligently
                  pursuing his studies.
                </p>
                <p>
                  During his time in Haridwar, he took Sannyasa Deeksha from Sri
                  Mahamandaleshwar Maheshwarananda Swamiji, receiving the title
                  "Vidyananda Saraswati".
                </p>
              </div>
            </TabsContent>

            <TabsContent
              value="ashrama"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                Establishment of Chidambara Ashrama
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  After visiting Muchalamba in 1971, Sri Shivakumara Swamiji
                  experienced an intense divine vision of Sri Siddharoodha
                  Swamiji, who instructed him to establish a spiritual center.
                </p>
                <p>
                  In 1978, Sri Shivakumara Swamiji permanently relocated to
                  Bidar. He chose land in Mailoor Survey No. for his ashram,
                  which was donated by Shantabai Halawai.
                </p>
                <p>
                  Over time, the Chidambara Ashrama grew into a major spiritual
                  and educational center in Bidar, serving as a beacon of
                  knowledge and spirituality.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-semibold text-amber-900 text-center mb-8">
              Key Milestones
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>

              {/* Timeline items */}
              <div className="grid grid-cols-1 gap-8">
                <div className="relative flex items-center justify-end md:justify-start md:even:justify-end">
                  <div className="md:w-1/2 md:pr-8 md:even:pl-8 md:even:pr-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500 md:even:border-l-0 md:even:border-r-4">
                      <h4 className="text-lg font-semibold text-amber-900">
                        1945
                      </h4>
                      <p className="text-gray-700">
                        Born as Veerakumar in Solapur
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>

                <div className="relative flex items-center justify-end md:justify-end">
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500 md:border-l-0 md:border-r-4">
                      <h4 className="text-lg font-semibold text-amber-900">
                        1962
                      </h4>
                      <p className="text-gray-700">
                        Took initiation (Guru Deeksha) from Sri Shivaputra
                        Mahaswamiji
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>

                <div className="relative flex items-center justify-end md:justify-start">
                  <div className="md:w-1/2 md:pr-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                      <h4 className="text-lg font-semibold text-amber-900">
                        1971
                      </h4>
                      <p className="text-gray-700">
                        First visit to Bidar for the Punya Aradhana of Sri
                        Nagabhushana Shivayogi
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>

                <div className="relative flex items-center justify-end md:justify-end">
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500 md:border-l-0 md:border-r-4">
                      <h4 className="text-lg font-semibold text-amber-900">
                        1978
                      </h4>
                      <p className="text-gray-700">
                        Permanently relocated to Bidar and established
                        Chidambara Ashrama
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>

                <div className="relative flex items-center justify-end md:justify-start">
                  <div className="md:w-1/2 md:pr-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                      <h4 className="text-lg font-semibold text-amber-900">
                        1996
                      </h4>
                      <p className="text-gray-700">
                        Undertook spiritual tour of England, America, Canada,
                        and Singapore
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>

                <div className="relative flex items-center justify-end md:justify-end">
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500 md:border-l-0 md:border-r-4">
                      <h4 className="text-lg font-semibold text-amber-900">
                        2006
                      </h4>
                      <p className="text-gray-700">
                        Visited New Zealand and Australia, delivering eleven
                        major lectures
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Titles and Recognitions */}
      <section id="contributions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Titles and Contributions
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Sri Shivakumara Swamiji received numerous prestigious titles and
              made significant contributions to society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2 text-amber-700" />
                Prestigious Titles
              </h3>
              <ul className="space-y-4">
                <li className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Sri Shivata Bhushana
                  </h4>
                  <p className="text-gray-700">
                    Awarded by Amreshwara Matha, Gulegudda (1973)
                  </p>
                </li>
                <li className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Vedanta Vagisha
                  </h4>
                  <p className="text-gray-700">
                    Awarded by Shanmukharoodha Matha, Vijayapura
                  </p>
                </li>
                <li className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">Geetottama</h4>
                  <p className="text-gray-700">
                    Awarded by Banaras Hindu University for expertise in the
                    Bhagavad Gita
                  </p>
                </li>
                <li className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Vedanta Acharya
                  </h4>
                  <p className="text-gray-700">
                    Awarded by Dakshinamurthy Sanskrit University, Varanasi
                  </p>
                </li>
                <li className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Honorary Doctorate
                  </h4>
                  <p className="text-gray-700">
                    Awarded by Gulbarga University in recognition of his 75
                    years of spiritual service
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-amber-700" />
                Contributions to Society
              </h3>
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Educational Institutions
                  </h4>
                  <p className="text-gray-700">
                    Established numerous schools and colleges to provide quality
                    education to all sections of society.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Spiritual Centers
                  </h4>
                  <p className="text-gray-700">
                    Founded temples and spiritual centers that serve as beacons
                    of spiritual knowledge and guidance.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Global Spiritual Tours
                  </h4>
                  <p className="text-gray-700">
                    Spread spiritual wisdom across continents with tours to
                    England, America, Canada, Singapore, New Zealand, and
                    Australia.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Literary Works
                  </h4>
                  <p className="text-gray-700">
                    Authored numerous books and articles on spirituality,
                    philosophy, and moral values.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-900">
                    Social Welfare
                  </h4>
                  <p className="text-gray-700">
                    Initiated various social welfare programs to help the
                    underprivileged and marginalized sections of society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Photo Gallery
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Glimpses from the life and journey of Sri Shivakumara Swamiji.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Gallery Image ${
                    i + 1
                  }`}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              View More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-amber-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl font-medium italic mb-8">
              "My grandson should follow in the footsteps of Swami Vivekananda
              and lead a spiritual life."
            </p>
            <p className="text-lg text-amber-200">
              - Sri Sidramappa, Grandfather of Sri Shivakumara Swamiji
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
