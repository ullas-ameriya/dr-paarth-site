import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO,WHATSAPP } from '../config/constants';

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover transition-all duration-2000 ${
            i === index
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Overlay (VERY IMPORTANT) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tigh text-center">
                Narula Ortho
              </h1>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-center">
                & Physio Centre
              </h1>

              <p className="mt-6 text-lg text-gray-200 text-center">
                Knee • Shoulder • Sports Injuries • Arthroscopy
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WHATSAPP.whatsappUrl}
                  className="bg-green-600 px-6 py-3 rounded-lg text-center"
                >
                  WhatsApp
                </a>

                <a
                  href={`tel:+${CONTACT_INFO.phoneNumber}`}
                  className="border border-white px-6 py-3 rounded-lg text-center"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Bottom Gradient Fade (premium touch) */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-white to-transparent" />

    </section>
  );
}