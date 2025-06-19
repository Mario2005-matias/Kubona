import { DollarSignIcon } from "lucide-react";
const Propriedades = [
  {
    id: 1,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 2,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 3,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 4,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 5,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 6,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 7,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 8,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 9,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 10,
    icon: <DollarSignIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
];

export default function OqueEsperar() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-8">
      <div className="container">
        <div className="w-full text-center flex flex-col items-center justify-center my-10">
          <h3 className="text-sm">
            PROPRIEDADES DE EVENTOS DE ALTO NÍVEL ESPERAM POR VOCÊ
          </h3>
          <h2 className="text-3xl font-semibold">
            O Que Esperar De Nossas Propriedades
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
            {Propriedades.map((item) => (
                <div key={item.id} className="flex flex-row gap-2 items-star justify-center p-3 rounded-md shadow">
                    <span>{item.icon}</span>
                    <p className="text-sm">{item.descricao}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
