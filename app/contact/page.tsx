"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Example API call (replace with your actual endpoint)
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus({ type: "success", message: data.message });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ type: "error", message: data.message });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">

        {/* LEFT SECTION */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-800">⭐ Contact Me</h2>
          <p className="text-gray-600 mt-3">
            Let’s Build Something Meaningful Together
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Whether you’re a student starting your IT journey, a professional upgrading your skills,
            or an organization seeking impactful training programs — I’d love to connect with you.
            I believe in <span className="text-blue-500">practical learning, mentorship, and real-world application</span>.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>📧 <span className="font-semibold">Email:</span> <span className="text-blue-500">htnagaraja24@gmail.com</span></p>
            <p>📱 <span className="font-semibold">Phone / WhatsApp:</span> +91 8861417088</p>
            <p>🌐 <span className="font-semibold">Website:</span> www.dheecodinglab.com</p>
            <p>📍 <span className="font-semibold">Location:</span> Bengaluru, India</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 text-gray-800">🤝 Who Can Contact Me?</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>✔ Students & Freshers</li>
            <li>✔ Working Professionals</li>
            <li>✔ Training Institutes</li>
            <li>✔ Colleges & Universities</li>
            <li>✔ Corporate Teams</li>
            <li>✔ Anyone passionate about learning technology</li>
          </ul>
        </div>

        {/* RIGHT SECTION FORM */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800">Send Me a Message</h2>
          <p className="text-gray-600 text-center mt-2">
            I’ll get back to you as soon as possible
          </p>

          {status.message && (
            <div
              className={`mt-4 p-3 rounded-lg text-center font-medium ${
                status.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-400"
                  : "bg-red-100 text-red-700 border border-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
