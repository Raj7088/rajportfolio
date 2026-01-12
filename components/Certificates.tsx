export default function Certificates() {
   const certs = [
    { title: "AWS Certified Solutions Architect", img: "certificate_1.png" },
    { title: "Azure Fundamentals", img: "certificate_2.png" },
    { title: "Certified DevOps Professional", img: "certificate_3.png" },
    { title: "MERN Stack Developer", img: "certificate_4.png" },
    { title: "Next.js & React.js Advanced", img: "certificate_5.png" },
    { title: "JavaScript ES6+ Expert", img: "certificate_6.png" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          🎓 My Certificates
        </h1>
        <p className="text-gray-600 text-center mt-3 text-lg">
          Verified certifications that showcase my expertise in technology and teaching
        </p>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {certs.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 transition-transform transform hover:scale-105 hover:shadow-blue-400/40"
            >
              <div className="relative w-full h-48 md:h-52 overflow-hidden rounded-2xl">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="mt-4 text-center font-bold text-gray-800 text-lg">
                {c.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
