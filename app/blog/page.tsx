"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6); // load more control

  type Post = {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  longContent: string;
  batchTime: string;
  batchStart: string;
  delay: string;
};


  const posts = [
    {
      title: "Master JavaScript in 2026 – Complete Roadmap",
      date: "January 10, 2026",
      category: "JavaScript",
      description:
        "From basics to advanced topics like closures, async, event loop and interview cracking tips.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200",
      longContent:
        "A complete JavaScript mastery roadmap covering beginner to advanced concepts including execution context, closures, event loop, async programming, interview prep, project training, and real-time coding guidance.",
      batchTime: "7:00 PM – 9:00 PM",
      batchStart: "Jan 20, 2026",
      delay: "No Delay",
    },

    {
      title: "Next.js for Real-World Projects – Trainer Guide",
      date: "January 15, 2026",
      category: "Next.js",
      description:
        "App Router, SSR vs SSG, SEO, authentication and production deployments explained practically.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      longContent:
        "Build enterprise grade Next.js apps with App Router, Authentication, Middleware, SEO strategies, SSR, SSG, ISR and production deployments.",
      batchTime: "6:30 PM – 8:30 PM",
      batchStart: "Jan 25, 2026",
      delay: "Seats Filling Fast",
    },

    {
      title: "React Hooks Explained with Real Life Examples",
      date: "January 12, 2026",
      category: "React",
      description:
        "Crystal clear hooks training with relatable real-life analogies.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200",
      longContent:
        "Simple but powerful React Hooks explanation covering useState, useEffect, useRef, context, performance optimization with interview cracking strategy.",
      batchTime: "7:30 PM – 9:00 PM",
      batchStart: "Jan 30, 2026",
      delay: "May Delay 2 Days",
    },

    {
      title: "Node.js Backend Development – Complete Guide",
      date: "January 09, 2026",
      category: "Node.js",
      description:
        "Backend concepts like REST APIs, MongoDB, Auth, JWT & deployments.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
      longContent:
        "Learn complete backend development including Express, MVC, JWT Authentication, Middleware, MongoDB, Security & Deployment.",
      batchTime: "8:00 PM – 9:30 PM",
      batchStart: "Feb 5, 2026",
      delay: "No Delay Expected",
    },

    {
      title: "Git & GitHub – Developer Must Learn",
      date: "January 16, 2026",
      category: "DevOps",
      description:
        "Git branching, merges, PRs, conflicts & GitHub actions simplified.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      longContent:
        "Master Git fundamentals to advanced workflows including PR reviews, conflict resolution & GitHub workflows.",
      batchTime: "6:00 AM – 7:30 AM",
      batchStart: "Jan 22, 2026",
      delay: "New Batch – Hurry",
    },

    {
      title: "MERN Full Stack Roadmap – Career Booster",
      date: "January 14, 2026",
      category: "MERN",
      description:
        "Perfect roadmap for students and professionals becoming MERN Devs.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
      longContent:
        "Complete MERN journey with real projects, interview prep, live training & deployment strategy.",
      batchTime: "9:00 PM – 10:30 PM",
      batchStart: "Feb 12, 2026",
      delay: "Likely 3 days delay",
    },
  ];

  // NEW detection function (7 days)
  // NEW detection function (7 days)
const isNewPost = (date: string): boolean => {
  const postDate = new Date(date);
  const today = new Date();
  const diff = (today.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= 7;
};

  // Search + Filter Logic
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      return (
        (category === "All" || post.category === category) &&
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, category]);

  return (
    <div className="min-h-screen py-14 px-6 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Blog & Training Articles
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Learn. Upskill. Grow 🚀
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 rounded-lg border border-gray-400 dark:bg-gray-800 dark:text-white"
        />

        <select
          className="p-3 rounded-lg border border-gray-400 dark:bg-gray-800 dark:text-white"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>Next.js</option>
          <option>Node.js</option>
          <option>MERN</option>
          <option>DevOps</option>
        </select>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredPosts.slice(0, visible).map((post, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* NEW BADGE */}
            {isNewPost(post.date) && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                NEW 🔥
              </span>
            )}

            <img src={post.image} className="h-52 w-full object-cover" />

            <div className="p-5">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {post.category}
              </span>

              <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {post.description}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-xs mt-3">
                📅 {post.date}
              </p>

              <button
                onClick={() => setSelectedPost(post)}
                className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      {visible < filteredPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisible(visible + 3)}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black"
          >
            Load More
          </button>
        </div>
      )}

      {/* MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 max-w-lg w-full rounded-xl p-6 shadow-2xl border dark:border-gray-700">
            <button
              onClick={() => setSelectedPost(null)}
              className="float-right text-xl text-gray-500"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold dark:text-white">
              {selectedPost.title}
            </h2>

            <p className="mt-3 dark:text-gray-300">
              {selectedPost.longContent}
            </p>

            <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p>
                <strong>Batch Time:</strong> {selectedPost.batchTime}
              </p>
              <p>
                <strong>Batch Starts:</strong> {selectedPost.batchStart}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                ⏳ {selectedPost.delay}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setSelectedPost(null)}
                className="w-1/2 py-2 bg-gray-600 text-white rounded-lg"
              >
                Close
              </button>

              <button
                onClick={() => router.push("/book")}
                className="w-1/2 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                Book Slot 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
