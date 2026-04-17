import { MessageCircle }  from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Dr. Paarth Narula
          </h3>
          <p className="text-gray-400 text-sm">
            Orthopaedic Surgeon specializing in knee, shoulder, and sports injuries.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>

          <div className="flex gap-4">
            <a
                href="https://www.instagram.com/drpaarthnarula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-xl"
                title="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.59.263-1.045.584-1.49 1.031-.444.444-.767.899-1.031 1.49-.266.788-.467 1.659-.527 3.037C.032 8.333.015 8.74 0 12c0 3.26.015 3.667.072 4.947.06 1.377.261 2.248.527 3.036.264.59.587 1.045 1.031 1.489.444.445.9.767 1.49 1.031.788.266 1.659.467 3.037.527 1.28.06 1.687.072 4.947.072s3.668-.015 4.947-.072c1.377-.06 2.248-.261 3.037-.527.59-.264 1.045-.586 1.489-1.031.445-.444.767-.899 1.031-1.489.266-.788.467-1.659.527-3.037.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.377-.261-2.248-.527-3.037-.264-.59-.586-1.045-1.031-1.49-.444-.444-.899-.766-1.489-1.031-.788-.266-1.659-.467-3.037-.527C15.667.032 15.26.015 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.81.24 2.228.399.561.217.96.477 1.382.896.419.42.679.819.896 1.381.159.419.345 1.057.399 2.228.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.24 1.81-.399 2.228-.217.561-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.419.159-1.057.345-2.228.399-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.81-.24-2.228-.399-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.159-.419-.345-1.057-.399-2.228-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.24-1.81.399-2.228.217-.561.477-.96.896-1.382.42-.419.819-.679 1.381-.896.419-.159 1.057-.345 2.228-.399 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>

            <a
                href="https://www.youtube.com/@drpaarthnarula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-xl"
                title="Subscribe to our YouTube channel"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            <a
              href="https://wa.me/919999313898"
              target="_blank"
              className="hover:text-green-400"
            >
              <MessageCircle />
            </a>
            
          </div>

          <p className="text-gray-400 text-sm mt-4">
            +91 99993 13898
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Dr. Paarth Narula. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;