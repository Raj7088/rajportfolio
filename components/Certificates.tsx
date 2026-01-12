export default function Certificates() {
  const certs = [
    { title: "AWS Certified", img: "/aws-cert.png" },
    { title: "Azure Certified", img: "/azure-cert.png" },
    { title: "DevOps Certification", img: "/devops-cert.png" }
  ];

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Certificates</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {certs.map((c, i) => (
          <div key={i} className="border p-4 rounded-xl shadow">
            <img src={c.img} className="rounded" />
            <h2 className="mt-2 font-bold">{c.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
