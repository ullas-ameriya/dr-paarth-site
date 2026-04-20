const services = [
  {
    title: "Trauma & Fracture Care",
    img: "/images/services/kneeInjury.jpg",
    desc: "Comprehensive treatment for all types of fractures, dislocations, ligament injuries, and accident-related trauma. Management includes emergency care, plaster cast, slab application, fracture reduction, and advanced surgical fixation using plates, screws, nails, or minimally invasive techniques for faster recovery and better alignment."
  },
  {
    title: "Sports Medicine & Arthroscopic Surgery",
    img: "/images/services/shoulderInjury.jpg",
    desc: "Specialized treatment for sports injuries, ligament tears, meniscus injuries, cartilage damage, shoulder instability, rotator cuff tears, ankle injuries, and overuse conditions. Advanced keyhole (arthroscopic) surgery for knee, shoulder, ankle and wrist disorders with faster rehabilitation, less pain, and early return to activity."
  },
  {
    title: "Joint Preservation & Joint Replacement",
    img: "/images/services/sportsInjury.jpg",
    desc: "Focus on preserving natural joints whenever possible through advanced procedures such as High Tibial Osteotomy (HTO), cartilage restoration, and corrective surgeries. When required, expert joint replacement surgery for hip, knee, and shoulder arthritis to relieve pain, restore movement, and improve quality of life."
  },
  {
    title: "Spine and Back Pain Care",
    img: "/images/services/arthroscopy.jpg",
    desc: "Comprehensive care for spine-related conditions including back pain, neck pain, slip disc (PIVD), sciatica, cervical/lumbar spondylosis, and spinal infections including tubercular spine. Personalized treatment focused on pain relief, recovery, and improved function."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl shadow overflow-hidden">

              <div className="overflow-hidden h-56">
                <img
                  src={s.img}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-justify">{s.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;