import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Properties from "./components/Properties/Properties";
import Agents from "./components/Agents/Agents";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
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
