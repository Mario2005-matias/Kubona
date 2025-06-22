import { BadgeDollarSign, InfoIcon, Coins, ShieldCheck, Hotel, Headset, PlusCircle } from "lucide-react";
const Propriedades = [
  {
    id: 1,
    icon: <ShieldCheck />,
    descricao:
      "Um paraíso particular para você e seus entes queridos durante todo o feriado.",
  },
  {
    id: 2,
    icon: <Coins />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 3,
    icon: <Headset />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 4,
    icon: <Hotel />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 5,
    icon: <BadgeDollarSign />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 6,
    icon: <BadgeDollarSign />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 7,
    icon: <BadgeDollarSign />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
  {
    id: 8,
    icon: <BadgeDollarSign />,
    descricao:
      "Adicione seu anúncio em nossa plataforma e publique-o sem pagar nenhuma taxa.",
  },
  {
    id: 9,
    icon: <Headset />,
    descricao:
      "Oferecemos suporte 24 horas por dia, 7 dias por semana para gerenciar seu anúncio ou suas férias.",
  },
  {
    id: 10,
    icon: <InfoIcon />,
    descricao:
      "Um paraísoparticular para vocêe seus entesqueridos durantetodo o feriado.",
  },
];

export default function OqueEsperar() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-8">
      <div className="container">
        <div className="w-full text-center flex flex-col items-center justify-center my-10">
          <h3 className="text-sm max-[426px]:text-xs">
            PROPRIEDADES PARA EVENTOS DE ALTO NÍVEL ESPERAM POR VOCÊ
          </h3>
          <h2 className="text-3xl max-[530px]:text-2xl max-[353px]:text-xl font-semibold">
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
