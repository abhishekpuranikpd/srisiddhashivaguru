import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";


export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, mobile, email, message } = body;

    // Basic validation
    if (!firstname || !lastname || !mobile || !email || !message) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Save to database
    const contact = await db.contact.create({
      data: { firstname, lastname, mobile, email, message },
    });

    return NextResponse.json({ message: "Message sent successfully!", contact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
