export default function Testimonials() {
  const data = [
    {
      name: "Rohit Sharma",
      role: "Software Engineer",
      feedback: "The training was amazing and practical. Cleared many real-world doubts."
    },
    {
      name: "TechCorp Pvt Ltd",
      role: "Corporate Training",
      feedback: "Our team gained great DevOps & Cloud knowledge. Highly recommended."
    }
  ];

  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold">Testimonials</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {data.map((t, index) => (
          <div key={index} className="border p-6 rounded-xl bg-white shadow">
            <p className="text-gray-700">“{t.feedback}”</p>
            <h3 className="mt-3 font-bold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
