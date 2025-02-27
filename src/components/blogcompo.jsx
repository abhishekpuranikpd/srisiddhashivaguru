"use client"
import Link from "next/link";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import Image from "next/image";

const Blogcompo = ({ blogdata }) => {
  return (
    <div className="md:px-20 container mx-auto w-full ">
    <div className=" container mx-auto grid grid-cols-1   gap-4 md:grid-cols-3 xl:grid-cols-3 ">
      {blogdata && blogdata.length > 0 ? (
        blogdata.map((item) => (
          <section className="py-8 " key={item.id}>
            <div className="flex  items-center justify-center bg-white  md:h-[500px]">
              <div className="w-auto  p-8">
                <Image
                  src={item.image}
                  width={400} height={400}
               className="w-auto  object-cover h-[300px]"
                  alt={item.image}
                />

                <h1 className="text-1xl font-sans font-semibold  text-gray-900 mb-4">
                  {item.title}
                </h1>
                <p className="text-gray-700 leading-relaxed mb-2">
                  {item.description.slice(0, 100)}
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-indigo-500 text-xs font-medium tracking-widest mb-2">
                    {item.category}
                  </h2>
                  <Link
                    href={`/blog/${item.id}`}
                    className="text-indigo-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
                <br />
                <span className="text-gray-900 flex justify-between">
                  <span>Author: {item.user.name}</span>
                  <span>
                    <WhatsappShareButton
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${item.id}`}
                      title={`${item.description}`}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </span>
                </span>
              </div>
            </div>
          </section>
        ))
      ) : (
        <div>No Blogs found.</div>
      )}
    </div></div>
  );
};

export default Blogcompo;
