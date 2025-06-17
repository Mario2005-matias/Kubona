import Image from "next/image";
import { MapPin, Home, DollarSign } from "lucide-react";

type SaloesProps = {
  nome: string;
  local: string;
  central: string;
  preco: number;
  urlImage: string;
};

export default function CardSaloes({
  nome,
  local,
  central,
  preco,
  urlImage
}: SaloesProps) {
  return (
    <div className="overflow-hidden shadow rounded-md">
      <Image
        src={urlImage}
        alt={nome}
        width={400}
        height={300}
        className="w-full"
      />
      <div className="flex flex-col items-start justify-center p-4 text-[#1F2937]">
        <h2 className="font-semibold text-lg mb-2">{nome}</h2>
        <div className=" w-full flex flex-row items-end justify-between">
          <div>
            <div className="text-sm flex flex-row gap-2 mb-2 text-[#1F2937]">
              <span>
                <MapPin className="w-5 h-5" />
              </span>
              <p>{local}</p>
            </div>
            <div className="text-sm flex flex-row gap-2 text-[#1F2937]">
              <span>
                <Home className="w-5 h-5" />
              </span>
              <p>{central}</p>
            </div>
          </div>
          <div className="text-sm font-semibold flex flex-row items-center justify-center text-[#DC2626]">
            <span>
              <DollarSign className="w-5 h-5" />
            </span>
            <p className="text-lg ">{preco}</p>
            /noite
          </div>
        </div>
      </div>
    </div>
  );
}
