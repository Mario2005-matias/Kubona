import Header from "@/components/Layout/Header";
import Main from './components/layout/Main'
import NossaHistoria from "./components/layout/NossaHistoria";
import NossoTeam from "./components/layout/NossoTeam";
import Footer from "@/components/Layout/Footer"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubona || Sobre",
  description: "psgina que trata tudo sobre a empre Kubona",
};

export default function Sobre() {
  return (
    <div>
      <Header />
      <Main/>
      <NossaHistoria/>
      <NossoTeam/>
      <Footer/>
    </div>
  );
}
