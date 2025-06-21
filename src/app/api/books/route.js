// src/app/api/books/route.js
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { db } from "../../../../lib/db";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(request) {
  const data = await request.formData();
  const title = await data.get("title");
  const author = await data.get("author");
  const price = parseFloat(data.get("price"));
  const category = await data.get("category");
  const description = await data.get("description");

  const imageUrls = [];

  for (let i = 1; i <= 7; i++) {
    const image = data.get(`file${i}`);
    if (image) {
      const fileBuffer = await image.arrayBuffer();
      const mime = image.type;
      const encoding = "base64";
      const base64Data = Buffer.from(fileBuffer).toString("base64");
      const fileUri = `data:${mime};${encoding},${base64Data}`;

      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload(fileUri, { invalidate: true })
            .then(resolve)
            .catch(reject);
        });
      };

      const result = await uploadToCloudinary();
      imageUrls.push(result.secure_url);
    } else {
      imageUrls.push(null); // If no image is uploaded for this slot
    }
  }

  const book = await db.book.create({
    data: {
      title,
      author,
      price,
      category,
      description,
      coverImage1: imageUrls[0],
      coverImage2: imageUrls[1],
      coverImage3: imageUrls[2],
      coverImage4: imageUrls[3],
      coverImage5: imageUrls[4],
      coverImage6: imageUrls[5],
      coverImage7: imageUrls[6],
    },
  });

  return NextResponse.json({ success: true, book }, { status: 200 });
}
