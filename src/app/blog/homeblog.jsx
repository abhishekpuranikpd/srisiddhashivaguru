import Image from "next/image";
import Link from "next/link";

import { db } from "../../../lib/db";
import Blogcompo from "@/components/blogcompo";

export default async function HomeBlog() {
  const data = await db.Post.findMany({
    include: {
      user: true,
    },
  });

  return (
    <div className=" rounded-md  container mx-auto">
      {" "}
      
    
<div className="flex justify-center items-center text-center font-bold text-2xl"><h1>Recent Blogs</h1></div>
  <Link href={`/blog`}>
    <span className="font-sans text-2xl md:mr-32 md:pr-40 font-bold text-blue-600 rounded-lg container mx-auto flex justify-end ">
      See all{">"}
    </span>
  </Link>


      <div className="flex justify-between min-h-screen">
        <Blogcompo blogdata={data.slice(0, 3).reverse()} />
        
      </div>
   
    </div>
    
  );
}
