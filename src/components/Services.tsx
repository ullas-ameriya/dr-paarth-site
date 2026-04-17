const services = [
  {
    title: "Knee Replacement",
    img: "/images/services/kneeInjury.jpg",
    desc: "Relief from chronic knee pain with advanced joint replacement techniques for better mobility."
  },
  {
    title: "Shoulder Injuries",
    img: "/images/services/shoulderInjury.jpg",
    desc: "Treatment for rotator cuff injuries, dislocations, and frozen shoulder."
  },
  {
    title: "Sports Injuries",
    img: "/images/services/sportsInjury.jpg",
    desc: "Specialized care for ligament tears, sprains, and athletic injuries."
  },
  {
    title: "Arthroscopy",
    img: "/images/services/arthroscopy.jpg",
    desc: "Minimally invasive procedures for faster recovery and less pain."
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
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;