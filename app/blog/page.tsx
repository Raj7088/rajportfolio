const posts = [
  { title: "What is DevOps?", desc: "Simple explanation for beginners" },
  { title: "Cloud vs On-Premise", desc: "Clear practical comparison" },
  { title: "Why Learn JavaScript?", desc: "Career benefit explanation" },
];

export default function Blog() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {posts.map((post, i) => (
          <div key={i} className="border p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.desc}</p>
            <button className="mt-4 text-blue-600">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
