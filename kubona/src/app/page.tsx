import Header from "@/components/Header/Header";
import SectionComodidades from "@/components/SectionComodidades";
import Main from "@/components/Main";
import NossasLocalizacoes from "@/components/NossasLocalizacoes";
import NossosSaloes from "@/components/NossosSaloes";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <NossasLocalizacoes/>
      <NossosSaloes/>
      <SectionComodidades/>
    </div>
  );
}
