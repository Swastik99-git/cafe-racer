import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MachineSection from "@/components/MachineSection";
import BikeShowcase from "@/components/BikeShowcase";
import Performance from "@/components/Performance";
import DesignStory from "@/components/DesignStory";
import InteractiveBike from "@/components/InteractiveBike";
import Specifications from "@/components/Specifications";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-off-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <MachineSection />
        <BikeShowcase />
        <Performance />
        <DesignStory />
        <InteractiveBike />
        <Specifications />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
