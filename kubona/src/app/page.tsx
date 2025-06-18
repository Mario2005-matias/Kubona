import Header from "@/components/Header/Header";
import SectionComodidades from "@/components/SectionComodidades";
import Main from "@/components/Main";
import NossasLocalizacoes from "@/components/NossasLocalizacoes";
import NossosSaloes from "@/components/NossosSaloes";
import SectionMelhorSalao from "@/components/SectionMelhorSalao";
import SectionDestaque from "@/components/SectionDestaque";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <NossasLocalizacoes/>
      <NossosSaloes/>
      <SectionComodidades/>
      <SectionMelhorSalao/>
      <SectionDestaque/>
    </div>
  );
}
