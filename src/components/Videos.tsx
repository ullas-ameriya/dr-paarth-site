const videos = [
  {
    title: "Right way to massage new born",
    url: "https://youtube.com/embed/4YN1xPJ2xTE",
  },
  {
    title: "Plantar Fasciitis",
    url: "https://youtube.com/embed/nnRgFLgPq5I",
  },
  {
    title: "Hot pack vs cold pack",
    url: "https://www.youtube.com/embed/oKY-4rwnd4s",
  },
];


// const videos = [
//   "https://youtube.com/embed/4YN1xPJ2xTE",
//   "https://youtube.com/embed/nnRgFLgPq5I",
//   "https://www.youtube.com/embed/oKY-4rwnd4s"
// ];

const Videos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Patient Education Videos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div key={i} className="aspect-video">
              <iframe
                src={v.url}
                className="w-full h-full rounded-xl"
                allowFullScreen
              ></iframe>
              <h4 className="text-xl font-bold text-center mt-4">{v.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;

