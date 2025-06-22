import Header from "@/components/Layout/Header";
import Main from './components/layout/Main'
import NossaHistoria from "./components/layout/NossaHistoria";
import NossoTeam from "./components/layout/NossoTeam";
import Footer from "@/components/Layout/Footer"

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
