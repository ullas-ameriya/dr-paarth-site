const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Book Appointment</h2>

      <p className="mb-2">📍 Shivani Nursing Home, Shahdara, Delhi</p>
      <p className="mb-2">📞 +91 99993 13898</p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://wa.me/919999313898"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          WhatsApp
        </a>

        <a
          href="tel:+919999313898"
          className="border px-6 py-3 rounded-lg"
        >
          Call Now
        </a>
      </div>
    </section>
  );
};

export default Contact;