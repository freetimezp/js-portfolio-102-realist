import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Properties from "./components/Properties/Properties";
import Agents from "./components/Agents/Agents";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Properties />
      <Agents />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
