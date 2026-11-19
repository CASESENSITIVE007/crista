import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AiSuccess from "./components/AiSuccess";
import Services from "./components/Services";
import Partner from "./components/Partner";
import Testimonials from "./components/Testimonials";
import Csr from "./components/Csr";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AiSuccess />
        <Services />
        <Partner />
        <Testimonials />
        <Csr />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
