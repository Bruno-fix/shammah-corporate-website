import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OpeningStatement from "@/components/sections/OpeningStatement";
import AuthorityStrip from "@/components/sections/AuthorityStrip";
import Services from "@/components/sections/Services";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import Segments from "@/components/sections/Segments";
import Differentials from "@/components/sections/Differentials";
import Clients from "@/components/sections/Clients";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <OpeningStatement />
        <AuthorityStrip />
        <Services />
        <ProjectsShowcase />
        <Segments />
        <Differentials />
        <Clients />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
