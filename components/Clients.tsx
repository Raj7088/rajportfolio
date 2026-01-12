export default function Clients() {
  const logos = [
    "/tcs.png",
    "/infosys.png",
    "/wipro.png",
    "/accenture.png"
  ];

  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold">Trained Clients / Companies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {logos.map((logo, i) => (
          <img key={i} src={logo} className="h-16 object-contain" />
        ))}
      </div>
    </section>
  );
}
