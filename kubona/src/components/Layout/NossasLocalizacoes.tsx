import { NossasBases } from "@/Data/NossasBases";
import CardBases from "../ui/CardBases";


export default function NossasLocalizacoes() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center py-20 px-4 min-md:px-10">
      <div className="container">
        <h2 className="mb-5 text-xl font-bold">Visite nossas localizações</h2>
        <div className=" gap-4 grid grid-cols-1 min-sm:grid-cols-2  min-md:grid-cols-3 min-lg:grid-cols-4">
          {NossasBases.map((base: any) => (
              <CardBases
              key={base.id}
              id={0}
              nome={base.nome}
              local={base.local}
              urlImage={base.urlImage}
              />
        
          ))}
        </div>
      </div>
    </section>
  );
}
