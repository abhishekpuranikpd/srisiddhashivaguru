import Image from "next/image";
import { GiOpenBook } from "react-icons/gi";
export default function HistorySection() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-amber-400 rounded-full p-2 w-16 h-16 flex items-center justify-center mb-2">
          <GiOpenBook className="h-8 w-8" />
        </div>
        <h2 className="text-amber-600 font-bold text-lg border-b-2 border-amber-400 pb-1">
          OUR VISION
        </h2>
      </div>
      <div className="border border-amber-400 rounded-lg p-2 m-4 md:p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <p className="text-maroon-800 italic px-10 font-semibold">
            To inspire and guide humanity towards spiritual awakening, selfless
            service, and societal transformation, following the divine teachings
            and legacy of Sadguru Shri Siddharoodh Swamiji
          </p>
        </div>
      </div>
      {/* Title */}

      <p className="text-center text-lg mb-4 p-4 max-w-3xl mx-auto">
        The Journey of Enlightenment:{" "}
        <span className="font-bold">Sadguru Shri Dr Shivakumar Swamiji’s</span>{" "}
        Path to Spiritual Awakening.
      </p>
      {/* <h1 className="text-2xl md:text-4xl font-bold text-maroon-800 text-center mb-4">
        Chidambar Ashram Shri Siddharudh Math Bidar
      </h1> */}
      <div className="w-48 h-1 bg-amber-400 mx-auto mb-8"></div>

      {/* Subtitle */}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-center">

        <div className="relative h-[400px] md:h-[600px] md:w-auto  lg:w-full lg:h-full">
     
          <Image
            src="https://res.cloudinary.com/dnckhli5u/image/upload/v1742710966/iatzrtmrwwsyixgdweaj.jpg"
            alt="Siddharudh Temple"
            fill
            className="h-full p-2 lg:p-0 w-full border-2  shadow-xl border-amber-400 "
          />
        </div>

        {/* Right Column - Text */}
        <div className="p-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon-800 border-b-2 border-amber-400 pb-2 mb-6">
            About Sadguru Sri Siddharoodh Swamiji
          </h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base">
              Sadguru Holiness Sadguru Shri Siddharoodh Swamiji hailing from
              Hubli city of Karnataka State devoted an Siddharoodh Swami was
              born to a virtuous and religious couple, Gurushantappa (father)
              and Devamallamma (some people say only Mallamma), in a small
              village called (it has been mentioned clearly in "Shri Siddharudh
              Kathamrita" a poetic composition describing the life and the
              pastimes of Shri Siddharoodh Swami and composed by his disciple,
              Shri Shivaram Chandragiri that Swamiji was born in a place called
              Vanshdurg in the kingdom of Nizam in Shaka year 1758 (i.e. in
              1836) on Durmukhnam Samvatsar) #Chalakapur in the Bidar district
              of the state of Karnataka, India. Some people also cite his birth
              place as Bidarkoti or Vanshadurg. From the very childhood he
              showed his inclination for the spiritual science and performed
              many miracles even before he was initiated. Once as a small child
              he cursed a buffalo to die for not moving and when it really fell
              dead he brought it back to life on his mother's pleas. He used to
              attend the spiritual discourse given by the family priest
              (Kulaguru), namely, Shri Veerabhadraswami, who visited his home
              daily and ask him questions. Once Shri Veerabhadraswami told them
              that during Pralaya, earth would dissolve in water, the Five
              Elements (Panchamahabhoot), heaven and all other Lokas (the places
              inhabited by DemiGods) too would be annihilated. Every human being
              would be destroyed." On listening to these words of Kulaguru,
              child Siddha asked him, "How would the sky be annihilated?" When
              he realized that answers to his questions could be obtained only
              from his Sadguru (spiritual master), one day he left his home in
              search of his Sadguru. Initially he went to Shri Shailam where he
              learnt that a great spiritual master, Shri Gajadandaswami was
              staying at a place known as Gudigante. Young Siddha went and met
              Shri Gajadandaswami, who after testing him accepted as his
              disciple. After serving his master dutifully doing all menial jobs
              in the Ashrama happily and sincerely and performing his spiritual
              austerities (Tapas), Siddha was blessed by Gajadandaswami who
              named him as 'Siddharudha,' the one who as conquered the three
              Gunas (Sattva, Rajas and Tamas) as well as Six Doshas (faults)
              like, Kama, Krodha, Lobha, Moha, Mada, Matsara and asked him to
              first visit different pilgrimage centres and deliver the masses.
              While leaving his Sadguru's Matha, Shri Siddharudha removed the
              Ishtalinga, which is worn by all the Lingayathas and left it there
              and proceeded. Thus, he roamed around all over India. Sevas And
              Programmes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
