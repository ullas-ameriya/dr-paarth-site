const videos = [
  "https://www.youtube.com/embed/4YN1xPJ2xTE",
  "https://www.youtube.com/embed/oKY-4rwnd4s",
  "https://www.youtube.com/embed/r3XUyArWeCU"
];

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
                src={v}
                className="w-full h-full rounded-xl"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;

