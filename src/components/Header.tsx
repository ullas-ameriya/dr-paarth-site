import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-semibold text-lg">
          {/* Dr. Paarth Narula */}
          <a href="#">Dr. Paarth Narula</a>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

          <a
            href={`https://wa.me/919999313898?text=${encodeURIComponent("Hello Dr. Paarth, I would like to book an appointment.")}`}
            className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Book Appointment
          </a>

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
            href="https://wa.me/919999313898"
            className="block bg-blue-600 text-white text-center py-2 rounded"
          >
            Book Appointment
          </a>

        </div>
      )}
    </header>
  );
};

export default Header;