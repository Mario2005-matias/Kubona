import { saloes } from "@/Data/Saloes"
import CardSaloes from "./card/CardSaloes";

export default function NossosSaloes() {
  return (
    <section className="w-full h-auto  flex flex-col items-center justify-center px-4 min-md:px-10">
      <div className="container">
        <h2 className="mb-5 text-xl font-bold">Nossos salões incriveis</h2>
        <div className=" gap-4 grid grid-cols-1 min-[512px]:grid-cols-2  min-lg:grid-cols-3 ">
          {saloes.map((salao) => (
           <CardSaloes
           key={salao.id}
            nome={salao.nome}
            local={salao.local}
            central={salao.local}
            preco={salao.preco}
            urlImage={salao.urlImage}
           />
          ))}
          </div>
        </div>
    </section>
  );
}
