import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudies />
      <Timeline />
      <Skills />
      <Research />
      <Contact />
    </>
  );
}
