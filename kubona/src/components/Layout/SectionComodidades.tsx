import {
  Waves,
  UtensilsCrossed,
  Snowflake,
  ParkingCircle,
  Wifi,
  Home
} from "lucide-react";

const comodidades = [
  { id: 1, nome: "Piscina", icon: <Waves /> },
  { id: 2, nome: "Cozinha", icon: <UtensilsCrossed /> },
  { id: 3, nome: "AC", icon: <Snowflake /> },
  { id: 4, nome: "Estacionamento", icon: <ParkingCircle /> },
  { id: 5, nome: "Wi-fi ", icon: <Wifi /> },
  { id: 6, nome: "Quarto Privado ", icon: <Home /> },
  { id: 7, nome: "À beira-mar ", icon: <Wifi /> },
  { id: 8, nome: "Condominios", icon: <Wifi /> },
];

export default function SectionComodidades() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-15">
      <div className="container">
        <div className="w-full text-center flex flex-col items-center justify-center my-10">
          <h3 className="text-sm max-[426px]:text-xs">OS SALÕES PARA SEUS PRÓXIMOS EVENTOS</h3>
          <h2 className="text-3xl max-[530px]:text-2xl max-[353px]:text-xl font-semibold">Uma Experiência Única Na <span className="text-[#DC2626]">KUBONA</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 ">
          {comodidades.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2">
              {item.icon}
              <p className="text-sm">{item.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
