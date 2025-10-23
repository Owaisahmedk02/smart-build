import Hero from "@/components/Hero";
import About from "@/components/About";
import ForBuyers from "@/components/ForBuyers";
import ForCompany from "@/components/ForCompany";
import ForAgents from "@/components/ForAgents";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ForBuyers />
      <ForCompany />
      <ForAgents />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
