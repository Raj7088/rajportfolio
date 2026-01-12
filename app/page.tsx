"use client";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";
import Image from "next/image";
 // Place your photo in public folder

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT SIDE: PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
            <Image
              src="/me.jpg"
              alt="Nagaraja"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Hi, I'm <span className="text-blue-600">Nagaraja</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-3 text-gray-700">
            Technical Trainer • MERN • NextJS • JavaScript • ReactJS • NodeJS • ExpressJS • MongoDB
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            With 8+ years of experience, I have trained 5000+ students & professionals across corporate and academic platforms.
            I specialize in MERN Stack, Fullstack Development, Node.js, and Modern JavaScript.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>

            <a
              href="Nagaraja H T _Resume_U.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* ADD SPACING */}
      <div className="mt-20 max-w-6xl mx-auto space-y-20">

        {/* TESTIMONIALS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Timeline />
        </motion.div>

        {/* CERTIFICATES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Certificates />
        </motion.div>

      </div>
    </section>
  );
}
