export default function Timeline() {
  const data = [
    {
      year: "2017 - 2019",
      title: "Trainer – JavaScript & Web",
      place: "Institution / Company Name"
    },
    {
      year: "2019 - 2022",
      title: "Senior Technical Trainer",
      place: "Corporate Trainings"
    },
    {
      year: "2022 - Present",
      title: "DevOps & Cloud Trainer",
      place: "Online & Enterprise Trainings"
    }
  ];

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Experience Timeline</h1>

      <div className="mt-6 border-l-4 border-blue-600 pl-6 space-y-6">
        {data.map((exp, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold">{exp.year}</h2>
            <p className="font-semibold">{exp.title}</p>
            <p className="text-gray-600">{exp.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
