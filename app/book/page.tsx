"use client";

import { useState } from "react";

const availableSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
];

export default function BookSlotPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date().toISOString().split("T")[0];

 const handleBooking = async () => {
  if (!selectedDate || !selectedSlot) {
    alert("Please select a date and a slot!");
    return;
  }

  const res = await fetch("/api/book-slot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      date: selectedDate,
      slot: selectedSlot
    })
  });

  const data = await res.json();

  if (data.success) {
    setConfirmed(true);
  } else {
    alert("Failed to book slot. Try again!");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Book a Slot
        </h1>

        {!confirmed ? (
          <div className="space-y-6">
            {/* Date Picker */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Select Date
              </label>
              <input
                type="date"
                min={today}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 gap-3">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    className={`px-4 py-3 rounded-xl border font-medium transition 
                      ${
                        selectedSlot === slot
                          ? "bg-blue-400 text-white border-blue-400"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50"
                      }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm Button */}
            <button
              className="w-full bg-blue-400 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
              onClick={handleBooking}
            >
              Confirm Booking
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🎉 Slot Booked Successfully!
            </h2>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Date:</span> {selectedDate}
            </p>
            <p className="mb-6 text-gray-700">
              <span className="font-medium">Time:</span> {selectedSlot}
            </p>
            <button
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-xl hover:bg-gray-300 transition"
              onClick={() => {
                setConfirmed(false);
                setSelectedDate("");
                setSelectedSlot("");
              }}
            >
              Book Another Slot
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
