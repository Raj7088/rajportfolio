import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true
    },
    slot: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "Booked"
    }
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
