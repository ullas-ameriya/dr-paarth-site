import { useState } from "react";
import { PopupModal } from "react-calendly";

const CalendlyPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:block bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Online Consultation
      </button>

      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/narulaorthophysio/onlineconsultation"
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={document.getElementById("root")!}
      />
    </>
  );
};

export default CalendlyPopup;