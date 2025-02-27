import React from "react";
import { db } from "../../../lib/db";
import Blogcompo from "@/components/blogcompo";

const Dashboard = async () => {
  const data = await db.Post.findMany({
    include: {
      user: true,
    },
  });
  return (
    <div>
      <div className=" min-h-screen container mx-auto ">
        {/* <Navbar /> */}
        <div className="">
          <Blogcompo blogdata={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
