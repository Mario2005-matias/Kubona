import Header from "@/components/Layout/Header";
import SectionComodidades from "@/components/Layout/SectionComodidades";
import Main from "@/components/Layout/Main";
import NossosSaloes from "@/components/Layout/NossosSaloes";
import SectionMelhorSalao from "@/components/Layout/SectionMelhorSalao";
import SectionDestaque from "@/components/Layout/SectionDestaque";
import OqueEsperar from "@/components/Layout/OqueEsperar";
import CTA from "@/components/Layout/CTA";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <SectionComodidades/>
      <NossosSaloes/>
      <SectionMelhorSalao/>
      <SectionDestaque/>
      <OqueEsperar/>
      <CTA/>
      <Footer/>
    </div>
  );
}
