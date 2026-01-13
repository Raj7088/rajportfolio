import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function POST(req) {
  try {
    const { date, slot } = await req.json();

    if (!date || !slot) {
      return new Response(
        JSON.stringify({ success: false, message: "Date and Slot required" }),
        { status: 400 }
      );
    }

    await connectDB();

    await Booking.create({
      date,
      slot
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Slot booked successfully!",
        date,
        slot
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
