const MapSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Clinic Location</h2>

        <iframe
          src="https://www.google.com/maps?q=Shivani+Nursing+Home+Shahdara+Delhi&output=embed"
          className="w-full h-[400px] rounded-xl border"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;