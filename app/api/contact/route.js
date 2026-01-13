import { connectDB } from "@/lib/mongodb";
import contact from "@/models/contact";

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

    await contact.create({ name, email, message });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your request has been submitted successfully!",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong, please try again",
      }),
      { status: 500 }
    );
  }
}
