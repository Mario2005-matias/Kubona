import { Star, User } from "lucide-react";
import Image from "next/image";

export default function CardDonoSalao() {
  return (
    <div className="w-full bg-white rounded-md shadow p-4">
      <p>Informação do Proprietário</p>
      <div className="flex flex-row gap-4 my-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden ">
          <Image
            src="/assets/mario2.jpg"
            alt="Mário Matias"
            height={100}
            width={80}
            className="object-fill"
          />
        </div>
        <div>
          <p>Alberto Viqueia</p>
          <div className="flex flex-row gap-1 mb-0.5">
            <Star className="text-yellow-500 w-3 h-3" />
            <Star className="text-yellow-500 w-3 h-3" />
            <Star className="text-yellow-500 w-3 h-3" />
            <Star className="text-yellow-500 w-3 h-3" />
            <Star className="text-yellow-500 w-3 h-3" />
          </div>
          <div className=" flex flex-row items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <p className="text-gray-500 text-xs">OFFLINE</p>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white p-3 rounded-xs">
        <p>+244 946 513 242</p>
        <p className="text-sm font-light">Clica aqui para negociar comigo!!</p>
      </div>
    </div>
  );
}
