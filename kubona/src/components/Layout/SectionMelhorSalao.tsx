import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pessoas = [
  { id: 1, urlImage: "/assets/salao.jpg" },
  { id: 2, urlImage: "/assets/salao.jpg" },
  { id: 3, urlImage: "/assets/salao.jpg" },
  { id: 4, urlImage: "/assets/salao.jpg" },
  { id: 5, urlImage: "/assets/salao.jpg" },
  { id: 6, urlImage: "/assets/salao.jpg" },
];

export default function SectionMelhorSalao() {
  return (
    <section className="w-full py-10 px-4 md:px-10 text-[#1F2937]">
      <div className="max-w-7xl mx-auto  p-6 rounded-xl shadow-lg">
        <h2 className="mb-2 text-xl font-bold ">
          Melhores salões para alugar
        </h2>
        <h3 className="mb-6 ">
          As cidades e áreas mais modernas do mundo
        </h3>

        <div className=" rounded-lg px-4 py-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {pessoas.map((pessoa) => (
                <CarouselItem
                  key={pessoa.id}
                  className="pl-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Image
                    src={pessoa.urlImage}
                    alt="Salão de eventos"
                    width={400}
                    height={500}
                    className="rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
