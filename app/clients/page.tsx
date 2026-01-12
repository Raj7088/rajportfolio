export default function Clients() {
  const logos = [
    { src: "comp1.png", name: "TCS" },
    { src: "comp2.jpg", name: "Infosys" },
    { src: "comp3.png", name: "Wipro" },
    { src: "comp4.png", name: "Accenture" },
    { src: "comp5.jpg", name: "Cognizant" },
    { src: "comp6.jpg", name: "Capgemini" },
    { src: "comp7.jpg", name: "Tech Mahindra" },
    { src: "comp8.png", name: "HCL" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          💼 Trained Clients & Companies
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Over the years, I’ve delivered impactful training sessions to professionals and teams across leading organizations.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12 items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex justify-center items-center p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 hover:scale-105 hover:shadow-blue-400/40 transition-transform duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
