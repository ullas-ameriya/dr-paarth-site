import { useEffect, useState } from "react";

const images = [
  "/images/about/1.jpg",
  "/images/about/2.jpg",
  "/images/about/3.jpg",
  "/images/about/4.jpg",
  "/images/about/5.jpg",
  "/images/about/6.jpg",
  "/images/about/7.jpg",
  "/images/about/8.jpg",
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

        <p className="text-gray-600 leading-relaxed text-justify">
          Dr. Paarth Narula is an Orthopaedic Surgeon with special expertise in Sports Medicine, Trauma Surgery, and Joint Replacement.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          Trained at Maulana Azad Medical College and Safdarjung Hospital, with further sports medicine training in Ahmedabad, Australia, 
          and clinical exposure at Singapore General Hospital, he provides comprehensive care for fractures, ligament injuries, arthritis, 
          and joint disorders with a focus on restoring mobility and performance.
        </p>
      </div>

    </section>
  );
};

export default About;