import Header from "@/components/Layout/Header";
import SectionComodidades from "@/components/Layout/SectionComodidades";
import Main from "@/components/Layout/Main";
import NossosSaloes from "@/components/Layout/NossosSaloes";
import SectionMelhorSalao from "@/components/Layout/SectionMelhorSalao";
import SectionDestaque from "@/components/Layout/SectionDestaque";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <SectionComodidades/>
      <NossosSaloes/>
      <SectionMelhorSalao/>
      <SectionDestaque/>
    </div>
  );
}
