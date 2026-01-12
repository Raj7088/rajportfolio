export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">🚀 My Services</h1>
          <p className="text-gray-600 mt-3 text-lg">
            Empowering Students, Professionals & Organizations with Real-World Learning
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-gray-800">🎓 IT Training Programs</h3>
            <p className="text-gray-600 mt-3">
              Structured training programs designed for freshers and working professionals with 
              hands-on learning, practical examples, and industry-focused approach.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Beginner to Advanced Training</li>
              <li>✔ Real-Time Practice</li>
              <li>✔ Job Ready Curriculum</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-gray-800">💻 Full Stack Development Training</h3>
            <p className="text-gray-600 mt-3">
              In-depth MERN Stack, JavaScript, React.js, Node.js & Next.js training with projects 
              that help you build real-world applications confidently.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ MERN Stack</li>
              <li>✔ React & Next.js</li>
              <li>✔ Real Projects & Portfolio</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-gray-800">🏢 Corporate & Institutional Training</h3>
            <p className="text-gray-600 mt-3">
              Customized training for universities, institutes, and corporate teams with 
              tailored curriculum based on industry needs.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Corporate Upskilling</li>
              <li>✔ College Workshops</li>
              <li>✔ Customized Training Modules</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-gray-800">👨‍🏫 Mentorship & Career Guidance</h3>
            <p className="text-gray-600 mt-3">
              Personal mentorship to help learners build confidence, clarity, and strong 
              career direction with real IT guidance.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ 1:1 Mentorship</li>
              <li>✔ Career Roadmap</li>
              <li>✔ Interview Preparation</li>
            </ul>
          </div>

          {/* CARD 5 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-gray-800">🛠 ServiceNow Development Guidance</h3>
            <p className="text-gray-600 mt-3">
              Professional training & guidance in ServiceNow Development including ITSM, ITOM,
              workflows, and real business applications.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ ServiceNow Training</li>
              <li>✔ Real-Time Use Cases</li>
              <li>✔ Implementation Guidance</li>
            </ul>
          </div>

          {/* CARD 6 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-gray-800">🤝 Workshops & Seminars</h3>
            <p className="text-gray-600 mt-3">
              Engaging workshops & tech seminars designed to inspire, educate, and build strong
              technical foundations.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Technology Awareness</li>
              <li>✔ Practical Demonstrations</li>
              <li>✔ Large & Small Audience Sessions</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800">Ready to Learn or Collaborate?</h2>
          <p className="text-gray-600 mt-2">
            Let’s work together and create powerful learning experiences!
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
