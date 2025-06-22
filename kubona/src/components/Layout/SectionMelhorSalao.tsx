import * as React from "react";
import Image from "next/image";
import { Heart } from "lucide-react"
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
    <section className="w-full px-4 md:px-10 text-[#1F2937] mt-10">
      <div className="max-w-7xl mx-auto p-6 ">
        <div className="w-full text-center flex flex-col items-center justify-center ">
          <h3 className="text-sm max-[426px]:text-xs">AS CIDADES E ÁREAS MAIS MODERNAS NO MUNDO</h3>
          <h2 className="text-3xl max-[530px]:text-2xl max-[353px]:text-xl font-semibold">Melhores salões para alugar - <span className="text-[#DC2626]">KUBONA</span></h2>
        </div>
        <div className=" rounded-lg px-4 py-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {pessoas.map((pessoa) => (
                <CarouselItem
                  key={pessoa.id}
                  className="pl-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="relative">
                    <Image
                      src={pessoa.urlImage}
                      alt="Salão de eventos"
                      width={400}
                      height={500}
                      className="rounded-md"
                    />
                    <div className="absolute bottom-4 w-full px-4 flex flex-row items-center justify-between text-white">
                      <h2>Nome</h2> 
                      <Heart className="" />
                    </div>
                  </div>
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
