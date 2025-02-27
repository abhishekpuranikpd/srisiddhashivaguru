import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";


export async function POST(req) {
  try {
    const body = await req.json();
    const { fullname, occupation, mobile, email, dateofbirth, address1, address2, city, State, pincode, description } = body;

    // Validation: Ensure required fields are filled
    if (!fullname || !mobile || !email || !dateofbirth || !address1 || !city || !State || !pincode) {
      return NextResponse.json({ error: "All required fields must be filled!" }, { status: 400 });
    }

    // Save data in the database
    const joinEntry = await db.joinWithUS.create({
      data: { fullname, occupation, mobile, email, dateofbirth, address1, address2, city, State, pincode, description },
    });

    return NextResponse.json({ message: "Form submitted successfully!", joinEntry }, { status: 201 });

  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
