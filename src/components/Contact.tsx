import { CONTACT_INFO, WHATSAPP } from '../config/constants';
import CalendlyPopup from './CalendlyPopup';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Book Appointment</h2>

      <p className="mb-2">📍 {CONTACT_INFO.address}</p>
      <p className="mb-2">📞 {CONTACT_INFO.phoneNumber.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3')}</p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href={WHATSAPP.whatsappUrl}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          WhatsApp
        </a>

        <a
          href={`tel:+${CONTACT_INFO.phoneNumber}`}
          className="border px-6 py-3 rounded-lg"
        >
          Call Now
        </a>
        <CalendlyPopup />
      </div>
    </section>
  );
};

export default Contact;