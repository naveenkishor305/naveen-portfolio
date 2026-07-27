import Contact from "@/components/home/contact";
import About from "@/components/home/about";
import SiteHeader from "@/components/layout/site-header";
import { projects } from "@/data/projects";
import Hero from "@/components/home/hero";
import SelectedWork from "@/components/home/selected-work";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#111111]">
      <SiteHeader />
<Hero />
      <SelectedWork projects={projects} />
      <About />
      <Contact />
    </main>
  );
}




