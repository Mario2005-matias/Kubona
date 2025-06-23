'use client'
import { useState } from "react"
import * as React from "react";
import Image from "next/image";
import { FaHeart } from 'react-icons/fa'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const saloes = [
  { id: 1,nome: "Salão Brilho da Manhã",urlImage: "/assets/saloes/salao1.jpg" },
  { id: 3, nome: "Salão Pérola Negra", urlImage: "/assets/saloes/salao3.jpg" },
  { id: 2, nome: "Salão Aurora da Baía", urlImage: "/assets/saloes/salao8.jpg" },
  { id: 4, nome: "Salão Lua de Luanda", urlImage: "/assets/saloes/salao4.jpg" },
  { id: 5, nome: "Salão Estrela Dourada", urlImage: "/assets/saloes/salao5.jpg" },
  { id: 6, nome: "Salão", urlImage: "/assets/saloes/salao6.jpg" },
];

export default function SectionMelhorSalao() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <section className="w-full px-4 md:px-10 text-[#1F2937] mt-10">
      <div className="max-w-7xl mx-auto p-6 ">
        <div className="w-full text-center flex flex-col items-center justify-center ">
          <h3 className="text-sm max-[426px]:text-xs">
            AS CIDADES E ÁREAS MAIS MODERNAS NO MUNDO
          </h3>
          <h2 className="text-3xl max-[530px]:text-2xl max-[353px]:text-xl font-semibold">
            Melhores salões para alugar -{" "}
            <span className="text-[#DC2626]">KUBONA</span>
          </h2>
        </div>
        <div className=" rounded-lg px-4 py-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {saloes.map((salao) => (
                <CarouselItem
                  key={salao.id}
                  className="overflow-hidden pl-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="relative">
                    <Image
                      src={salao.urlImage}
                      alt="Salão de eventos"
                      width={400}
                      height={500}
                      className="rounded-md"
                    />
                    <div className="absolute bg-[#00000040] bottom-0 w-full px-4 py-2 flex flex-row items-center justify-between text-white">
                      <h2>{salao.nome}</h2>
                      <div className='flex flex-row gap-1 items-center justify-center'>
                        {count}
                        <FaHeart onClick={handleCount} className="text-red-500" />
                      </div>
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
