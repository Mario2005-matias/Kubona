import Image from "next/image";
import { MapPin, Home, DollarSign } from "lucide-react";

export default function NossosSaloes() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center py-20 px-4 min-md:px-10">
      <div className="container">
        <h2 className="mb-5 text-xl ">Visite nossas localizações</h2>
        <div className=" gap-4 grid grid-cols-1 min-sm:grid-cols-2  min-md:grid-cols-3 min-lg:grid-cols-4">
          <div className="rounded-md ">
            <Image
              src="/assets/salao.jpg"
              alt="Nome"
              width={200}
              height={200}
            />
            <div>
              <div>
                <h2>Enorme vila ensolarada</h2>
                <div className="text-sm flex flex-row text-[#1F2937]">
                  <span>
                    <MapPin className="w-5 h-5" />
                  </span>
                  <p>Kailua-Kona, Havai</p>
                </div>
                <div className="text-sm flex flex-row text-[#1F2937]">
                  <span>
                    <Home className="w-5 h-5" />
                  </span>
                  <p>Vila / Casa inteira</p>
                </div>
              </div>
              <div className="text-sm text-[#1D4ED8]">
                <span>
                  <DollarSign className="w-5 h-5" />
                  100/noite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
