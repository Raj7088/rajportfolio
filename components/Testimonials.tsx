export default function Testimonials() {
  const data = [
    {
      name: "Rohit Sharma",
      role: "Software Engineer",
      feedback: "The training was amazing and practical. Cleared many real-world doubts.",
      avatar: "ro.jpg"
    },
    {
      name: "TechCorp Pvt Ltd",
      role: "Corporate Training",
      feedback: "Our team gained great DevOps & Cloud knowledge. Highly recommended.",
      avatar: "techcorp.png"
    },
    {
      name: "Anjali Mehta",
      role: "Student",
      feedback: "Nagaraja sir’s mentorship helped me build confidence in MERN stack. Projects were very useful.",
      avatar: "anu.jpg"
    },
    {
      name: "Vikram Singh",
      role: "Professional Upskilling",
      feedback: "The Node.js and Next.js sessions were hands-on and extremely effective. Truly industry-ready.",
      avatar: "download.jpg"
    },
    {
      name: "EduTech Institute",
      role: "Workshop Training",
      feedback: "Corporate-level teaching, very structured and engaging sessions for our students.",
      avatar: "edu.jpg"
    },
     {
      name: "DCL Institute",
      role: "Workshop Training",
      feedback: "Corporate-level teaching, very structured and engaging sessions for our students.",
      avatar: "dcl.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          ⭐ What People Say About Me
        </h1>
        <p className="text-gray-600 text-center mt-4 text-lg">
          Feedback from students, professionals, and organizations I’ve trained
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-blue-400/40 transition duration-300"
            >
              <div className="flex items-center gap-4">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
                  />
                )}
                <div>
                  <h3 className="font-bold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
