export default function Timeline() {
  const data = [
    {
      year: "2018 - 2019",
      title: "Network Engineer",
      place: "CMSIT Services Pvt Ltd",
      description:
        "Started career building with computer networks. Gained hands-on experience in computer components and computer netwirking."
    },
    {
      year: "2019 - 2021",
      title: "ServiceNow Developer",
      place: "KPMG",
      description:
        "designs, develops, and maintains applications on the ServiceNow platform to automate business processes and improve IT service management"
    },
    {
      year: "2021 - 2025",
      title: "Senior Technical Trainer",
      place: "Pentagonspace Pvt Ltd",
      description:
        "Led corporate training programs on Fullstack development, MERN Stack, React.js, Node.js, and project-based learning."
    },
    {
      year: "2025 - Present",
      title: "Program  Head-MERN stack",
      place: "Dhee coding labs Pvt Ltd",
      description:
        "Guiding students, freshers, and corporate learners to build job-ready skills through mentorship, structured programs, and hands-on projects. Mentoring professionals on CI/CD, AWS & Azure, Docker, Kubernetes, and modern DevOps practices for real-world deployment scenarios."
    },
   
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          🕒 Experience Timeline
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-12">
          My professional journey from developer to trainer & mentor
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-4 border-blue-400"></div>

          <div className="space-y-12">
            {data.map((exp, index) => (
              <div
                key={index}
                className={`relative md:flex md:items-center md:justify-${index % 2 === 0 ? "start" : "end"}`}
              >
                {/* Dot marker */}
                <div className="absolute -left-3 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg border-2 border-white"></div>

                {/* Card */}
                <div
                  className={`bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 w-full md:w-5/12 transition hover:scale-105 ${
                    index % 2 === 0
                      ? "md:ml-12 md:text-left"
                      : "md:mr-12 md:text-right md:ml-auto"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-800">{exp.year}</h3>
                  <p className="text-lg font-semibold text-gray-700 mt-1">{exp.title}</p>
                  <p className="text-gray-500 mt-1">{exp.place}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
