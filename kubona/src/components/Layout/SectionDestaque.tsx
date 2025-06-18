import { SoloesDestaque } from "@/Data/SoloesDestaque";
import CardDestaque from "../ui/CardDestaque";

export default function SectionDestaque() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-15">
      <div className="container">
        <h2 className="text-xl font-bold">Salões de eventos em destaque </h2>
        <h3 className="mb-5">Os anuncios mais populaers do nosso site</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
