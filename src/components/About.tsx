import { useEffect, useState } from "react";

const images = [
  "/images/about/1.jpg",
  "/images/about/2.jpg",
  "/images/about/3.jpg",
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

      {/* Image Carousel */}
      <div className="relative h-100 w-full overflow-hidden rounded-2xl shadow">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute w-full h-full object-cover object-top transition-all duration-1000 ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">
          About Dr. Paarth Narula
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Dr. Paarth Narula is an orthopaedic surgeon specializing in knee,
          shoulder, and sports injuries. Trained at Maulana Azad Medical College
          and Safdarjung Hospital, he has handled a wide range of complex cases
          in high-volume clinical environments.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          With international fellowships across Singapore and Australia, he
          brings global best practices to patient care, focusing on precision,
          faster recovery, and long-term outcomes.
        </p>
      </div>

    </section>
  );
};

export default About;