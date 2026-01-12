"use client";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
  import Timeline from "@/components/Timeline";
        

import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">


<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl font-bold"
>
  Hi, I'm <span className="text-blue-600">Nagaraja</span>
</motion.h1>



     

      <h2 className="text-2xl mt-3">
        Technical Trainer • MERN • NextJS • JavaScript • ReactJS • NodeJS • ExpressJS • MongoDB
      </h2>

      <p className="mt-4 text-gray-600 leading-relaxed">
        With 8+ years of experience, I have trained 5000+ students &
        professionals across corporate and academic platforms.
        I specialize in MERN Stack, Fullstack Developement, Node.js, and Modern JavaScript.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg" >
         <a href="/contact">Contact Me</a> 
        </button>
        
          <a
  href="/resume.pdf"
  download
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Download Resume
</a>

       
      </div>
<br/>
      <Testimonials />
    

<Timeline />
<Certificates/>

    </div>
  );
}
