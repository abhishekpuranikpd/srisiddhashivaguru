import Image from "next/image"

export default function GurukulFoundation() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header with Logo */}
      <div className="flex flex-col items-center md:items-start mb-8">
        {/* <div className="w-32 h-32 relative mb-4">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="Siddhagiri Gurukul Foundation Logo"
            width={128}
            height={128}
            className="object-contain"
          />
        </div> */}
        <h1 className="text-3xl md:text-4xl font-bold text-maroon-800 border-b-2 border-amber-400 pb-2">
          Siddhagiri Foundation
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <p className="text-sm md:text-base">
            Siddhagiri Gurukul Foundation, a Trust intends to serve the society in general through various social,
            educational, spiritual, and agricultural initiatives. Established on October 9, 1997, the Trust firmly
            believes in the tenets of 'Knowledge', 'Truth' and 'Equality' and accordingly makes no discrimination in its
            initiatives and programmes. Social welfare initiatives such as – Siddhagiri Hospital, Vidyachetana,
            Anandashram and Women Empowerment are just a few of the successful initiatives of SGF, focused on Village
            development.
          </p>

          <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
            <p className="font-bold">ESTABLISHED IN : 1997</p>
            <p className="font-bold">REGISTRATION NO. : E17180 (MUMBAI)</p>
          </div>

          <p className="text-sm md:text-base">
            SGF's logo strongly upholds the tenets of 'Knowledge', 'Truth' and 'Equality'. In Sanskrit, 'Siddha' means
            one who has achieved enlightenment and 'Giri' means a Mountain. India's spiritual journey has been all about
            seekers seeking salvation through penance and meditation. At the end, as they transcend the 'ahamkara' (ego
            or I-maker), they become the enlightened masters who can guide the people on the right path. Sidhhagiri as
            an institution has been shaped up by such 'Siddha' masters for thousands of years. The mountain and the
            temple of Lord Mahadeva in the logo depict this essence of Siddhagiri Math and its journey.
          </p>

        </div>

        {/* Right Column - Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg"
              alt="Siddhagiri Activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg"
              alt="Siddhagiri Activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg"
              alt="Siddhagiri Activities"
              fill
              className="object-cover"
            />
          </div>
       
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/ds4mdy9oy/image/upload/v1736408138/matt01_lirnyi.jpg"
              alt="Siddhagiri Activities"
              fill
              className="object-cover"
            />
          </div>
          
        </div>
        
      </div>
      
          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <h3 className="text-xl font-bold text-maroon-800">DNYANAM</h3>
              <p className="mt-2">Is a supreme knowledge.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <h3 className="text-xl font-bold text-maroon-800">SATYAM</h3>
              <p className="mt-2">
                Is unfolding the secrets of the ultimate truth - the only thing which remains unchanged i.e. Atman are
                explored and practiced here i.e. self-realization.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <h3 className="text-xl font-bold text-maroon-800">SAMATA</h3>
              <p className="mt-2">
                Serving all for equal Rights and Provisions without any discrimination in terms of cast, creed and
                gender.
              </p>
            </div>
          </div>
    </div>
  )
}

