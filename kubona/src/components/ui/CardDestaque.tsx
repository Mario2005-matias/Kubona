import Image from "next/image";
import { DollarSign, StarsIcon } from "lucide-react";

interface CardDestaque {
  urlImage: string;
  preco: number;
  nome: string;
  local: string;
}

export default function CardDestaque({ urlImage, preco, nome, local }: CardDestaque) {
  return (
    <div className="rounded-md overflow-hidden sm:w-full ">
      <div className="w-full relative bg-green-500">
        <Image
          src={urlImage}
          alt=""
          width={400}
          height={300}
          className="w-full  z-0"
        />
        <div className="absolute text-sm bottom-2 left-2 z-10  flex flex-row items-center justify-center text-white">
          <DollarSign className="w-5 h-5" />
          <span className="font-semibold text-lg">{preco}</span>/noite
        </div>
        <p className="absolute top-3 right-6 rounded  text-xs bg-[#1E293B] text-white px-3 py-1">Verificado</p>
      </div>
      <div className="p-4">
        <div>
          
        </div>
        <h2 className="font-semibold text-lg">{nome}</h2>
        <p className="text-sm ">{local}</p>
      </div>
    </div>
  );
}
