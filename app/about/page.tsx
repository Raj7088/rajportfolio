export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          About Me
        </h1>

        {/* Intro Paragraph */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          I am <strong>Nagaraja H T</strong>, a result-driven Senior Software Engineer, Program Head, and Technical Trainer, committed to transforming learners into confident, job-ready professionals. With 7+ years of industry experience and a proven record of training 15,000+ students, I specialize in creating powerful learning experiences that bridge the gap between theory and real-world IT practice.
        </p>

        {/* What I train */}
        <div className="mt-8">
          <p className="text-gray-800 font-semibold text-lg mb-3">I train and mentor learners in:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Full Stack Development (MERN)</li>
            <li>JavaScript (ES6+), React.js & Node.js</li>
            <li>Next.js</li>
            <li>ServiceNow Development (ITSM, ITOM, Custom Apps)</li>
            <li>Databases: MongoDB & Oracle SQL</li>
            <li>Git & GitHub for real-world development workflows</li>
          </ul>
        </div>

        {/* Experience Paragraph */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Having worked with <strong>KPMG</strong>, I bring authentic industry exposure, corporate standards, and project-driven learning into every session. My teaching philosophy is built on clarity, hands-on practice, and confidence building — ensuring learners don’t just understand concepts, but apply them like real professionals.
        </p>

        {/* Quote */}
        <p className="mt-6 text-gray-600 text-lg italic border-l-4 border-blue-500 pl-4">
          <strong>“Great students don’t search for one answer — they explore multiple paths to find the best one.”</strong>
        </p>

        {/* Conclusion */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Through structured programs, real-time projects, and my “learning by doing” approach, I help students, freshers, and professionals build strong careers, upgrade skills, and stand out in the industry.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed font-semibold">
          If you’re looking to master technology with clarity, confidence, and real-world expertise, you’re in the right place.
        </p>
      </div>
    </section>
  );
}
