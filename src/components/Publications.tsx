const publications = [
  {
    title: "Evaluation of Chat GPT responses for back pain management.",
    journal: "European Journal of Orthopaedic Trauma and surgery",
    year: "2024",
    link: "https://pubmed.ncbi.nlm.nih.gov/38407621/",
  },
  {
    title: "Anterior shoulder instability with engaging Hill Sachs lesion treated with isolated bankart repair vs. bankart repair and remplissage technique",
    journal: "J ORTHOP TRAUMA SURG REL RES16(9)",
    year: "2021",
    link: "https://www.jotsrr.org/articles/anterior-shoulder-instability-with-engaging-hill-sachs-lesion-treated-with-isolated-bankart-repair-vs-bankart-repair-and.pdf",
  },
  {
    title: "To compare the clinical and radiological outcome of unstable intertrochanteric fracture patients treated with Dynamic Hip screw vs proximal femoral nail A2",
    journal: "J ORTHOP TRAUMA SURG REL RES 16(12)",
    year: "2021",
    link: "https://www.jotsrr.org/articles/comparison-of-clinical-and-radiological-outcome-of-patients-with-unstable-intertrochanteric-fracture-treated-with-pfn-a2.pdf",
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