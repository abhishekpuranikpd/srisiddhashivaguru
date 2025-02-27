import { NextResponse } from "next/server";
import { Post } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

import { db } from "../../../../lib/db";
import { getCurrentUser } from "../../../../lib/session";

// Cloudinary config


export async function GET(request) {
  let data;
  try {
    data = await db.keya.findMany();
  } catch (error) {
    data = { success: false };
  }
  console.log(data);
  return NextResponse.json({ data, success: true });
}

export async function POST(request) {
  const data = await request.formData();
  
  const title = await data.get("title");
  const pdflink = await data.get("pdflink");
  const category = await data.get("category");






  //   const { title, pdflink, category } = await request.json();
  const user = await getCurrentUser();
  console.log(user);

  console.log(title, "Post");

  const post = await db.keya.create({
    data: { title, pdflink, category, UserId: user.id },
  });

  return NextResponse.json(
    { result: "Posted", success: true, post },
    { status: 200 }
  );
}
