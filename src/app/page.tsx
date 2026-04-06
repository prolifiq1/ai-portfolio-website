import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Skills } from "@/components/Skills";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Research />
      <Contact />
    </>
  );
}
