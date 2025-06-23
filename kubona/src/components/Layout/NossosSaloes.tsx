import { saloes } from "@/Data/Saloes";
import CardSaloes from "../ui/CardSaloes";
import Link from "next/link";

export default function NossosSaloes() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mt-20 px-4 min-md:px-10">
      <div className="container">
        <div className=" gap-4 grid grid-cols-1 min-[512px]:grid-cols-2 sm:grid-cols-3  min-lg:grid-cols-4 ">
          {saloes.map((salao) => (
            <Link href={`/salao/${salao.id}`} key={salao.id} className="mb-2">
              <CardSaloes
                nome={salao.nome}
                local={salao.local}
                central={salao.central}
                preco={salao.preco}
                urlImage={salao.urlImage}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
