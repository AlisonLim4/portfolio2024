// import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import HeroBackground from "@/components/Layout/HeroBackground/HeroBackground";
import About from "@/components/About/About";
import Servicos from "@/components/Servicos/Servicos";
import Contato from "@/components/Contato/Contato";
import Footer from "@/components/Footer/Footer";
import ProjectsSection from "@/components/Projects/ProjectsSection";

import { getProjects } from "./api/projects";

export default function Home() {
  return (
    <main className={`${poppins.variable} `}>
      <HeroBackground>
        <Header />
        <Hero />
      </HeroBackground>
      <About />
      <Servicos />
      <ProjectsSection />
      <Contato />
      <Footer />
    </main>
  );
}
