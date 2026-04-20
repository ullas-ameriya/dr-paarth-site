import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_INFO, WHATSAPP } from '../config/constants';
import CalendlyPopup from "./CalendlyPopup";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Left: Logo and Name together */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Dr. Paarth Narula" 
            className="h-10 w-10 md:h-14 md:w-14 object-contain"
          />
          <h1 className="font-semibold text-lg">
            <a href="#">Dr. Paarth Narula</a>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
                  
          <a
            href={WHATSAPP.whatsappUrl}
            className="hidden md:block bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>

          <a
            href={CONTACT_INFO.phoneNumber}
            className="hidden md:block border px-6 py-3 rounded-lg"
          >
            Call Now
          </a>
          <CalendlyPopup />

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 shadow flex flex-col gap-4">

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block"
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </a>

          <a
            href={WHATSAPP.whatsappUrl}
            className="block bg-green-600 text-white text-center py-2 rounded"
          >
            Whats App
          </a>

          <a
            href={CONTACT_INFO.phoneNumber}
            className="block border px-6 py-2 rounded text-center"
          >
            Call Now
          </a>
            <CalendlyPopup />

        </div>
      )}
    </header>
  );
};

export default Header;