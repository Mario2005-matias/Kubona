import { SoloesDestaque } from "@/Data/SoloesDestaque";
import CardDestaque from "../ui/CardDestaque";

export default function SectionDestaque() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-8">
      <div className="container">
        <div className="w-full text-center flex flex-col items-center justify-center my-10">
          <h3 className="text-sm">OS ANÚNCIOS MAIS POPULARES DO NOSSO SITE</h3>
          <h2 className="text-3xl font-semibold">Salões de eventos em destaque - <span className="text-[#DC2626]">KUBONA</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-4 max-[512px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SoloesDestaque.map((item) => (
            <CardDestaque
            key={item.id}
            urlImage={item.urlImage}
            nome={item.nome}
            local={item.local}
            preco={item.preco}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
