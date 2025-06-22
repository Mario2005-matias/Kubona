import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Team = [
  {
    id: 1,
    nome: "Maria Ngululo",
    cargo: "Dr. Geral",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/Maria.jpg",
  },
  {
    id: 2,
    nome: "Maria André ",
    cargo: "Dr. Juridica",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/Maria2.jpg",
  },
  {
    id: 3,
    nome: "Mário Matias",
    cargo: "Dr. Desenvolvimento",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/Mario.jpg",
  },

  {
    id: 4,
    nome: "Maria Rosa",
    cargo: "Tesoureira",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/marcia.jpg",
  },
  {
    id: 5,
    nome: "Lubanzadio Dienda ",
    cargo: "Dr. Recursos Humanos",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/luba.jpg",
  },
  {
    id: 6,
    nome: "Manuel Binga ",
    cargo: "Dr. Marketing",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/germany.jpg",
  },
  {
    id: 7,
    nome: "Natália Sandala",
    cargo: "Dr. Financeira e Contabilista",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/nazy.jpg",
  },
  {
    id: 8,
    nome: "Luciano da Conceição ",
    cargo: "Dr. Logistica",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est asperiores, autem molestiae quas natus non",
    urlImage: "/assets/luciano.jpg",
  },
];

export default function NossoTeam() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mt-20 mb-10 px-4 min-md:px-10">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-5 font-semibold max-[530px]:text-2xl max-[353px]:text-xl">
          Nosso Team - <span className="text-[#DC2626]">KUBONA</span>
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {Team.map((item) => (
            <div
              key={item.id}
              className="rounded-sm py-2 bg-white shadow flex flex-col items-center justify-center text-center mb-4"
            >
              <Image
                className="rounded-full w-28 h-28 mt-4"
                src={item.urlImage}
                alt="Mário Matias"
                width={100}
                height={100}
              />
              <h2 className="font-semibold text-lg  mt-2">{item.nome}</h2>
              <h3>{item.cargo}</h3>
              <p className="text-xs text-gray-600">{item.descricao}</p>
              <div className="my-3 flex flex-row  ">
              <Button className="bg-[#1E293B] hover:bg-[#1E293B] text-white hover:duration-300">
                  <Phone />
                  Contacta-me
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
