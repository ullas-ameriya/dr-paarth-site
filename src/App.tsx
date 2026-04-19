import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import MapSection from "./components/MapSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Publications from "./components/Publications";
import Videos from "./components/Videos";
import Reviews from "./components/Reviews";
// import AppointmentForm from "./components/AppointmentForm";

function App() {
  return (
    <>
      <Header />
      <div className="pt-17">
        <Hero />
        <About />
        <Services />
        <Publications />
        <Videos />
        <Reviews />
        <WhyUs />
        <MapSection />
        {/* <AppointmentForm /> */}
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;