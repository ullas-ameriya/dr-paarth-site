const publications = [
  {
    title: "Comparison of clinical and radiological evaluation of dynamic hip screw va proximal femoral nail A2 in Intertrochanteric fracture.",
    journal: "DY Patil Medical College",
    year: "2022",
    link: "https://medical.dpu.edu.in/Orthopaedics-dissertation.aspx",
  },
  {
    title: "Efficacy of stereotactic aspiration in deep-seated and eloquent-region intracranial pyogenic abscesses",
    journal: "PubMed",
    year: "2008",
    link: "#",
  },
];

const Publications = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((p, i) => (
            <div key={i} className="border-b pb-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">
                {p.journal} • {p.year}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="text-blue-600 text-sm"
                >
                  Read more
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;