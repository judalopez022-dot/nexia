import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SalaryHighlight from "@/components/SalaryHighlight";
import Benefits from "@/components/Benefits";
import Company from "@/components/Company";
import Requirements from "@/components/Requirements";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Reveal onLoad>
        <Hero />
      </Reveal>

      <Reveal delay={0.05}>
        <SalaryHighlight />
      </Reveal>

      <Reveal delay={0.08}>
        <Benefits />
      </Reveal>

      <Reveal delay={0.08}>
        <Company />
      </Reveal>

      <Reveal delay={0.08}>
        <Requirements />
      </Reveal>

      <Reveal delay={0.08}>
        <Apply />
      </Reveal>

      <Footer />
    </main>
  );
}