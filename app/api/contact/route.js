// app/api/contact/route.js
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    await connectDB();

    await Contact.create({ name, email, message });

    return new Response(
      JSON.stringify({ success: true, message: "Your request has been submitted successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong, please try again" }),
      { status: 500 }
    );
  }
}
