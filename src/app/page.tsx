import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import MapSection from "@/components/MapSection";
import ChatAI from "@/components/ChatAI";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-bg">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <MapSection />
      <ChatAI />
      <ContactForm />
      <Footer />
    </div>
  );
}
