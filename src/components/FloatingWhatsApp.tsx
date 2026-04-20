import { MessageCircle } from "lucide-react";
import { WHATSAPP } from '../config/constants';

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    //   className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50 animate-pulse"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsApp;