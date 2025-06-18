import {
  Waves,
  UtensilsCrossed,
  Snowflake,
  ParkingCircle,
  Wifi,
} from "lucide-react";

const comodidades = [
  { id: 1, nome: "Piscina aquecida", icon: <Waves /> },
  { id: 2, nome: "Cozinha", icon: <UtensilsCrossed /> },
  { id: 3, nome: "Ar condicionado", icon: <Snowflake /> },
  { id: 4, nome: "Estacionamento grauito", icon: <ParkingCircle /> },
  { id: 5, nome: "Wi-fi ", icon: <Wifi /> },
];

export default function SectionComodidades() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-15">
      <div className="container">
        <h2 className="mb-5 text-xl font-bold">Comodidades populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {comodidades.map((item) => (
            <div key={item.id} className="flex flex-col items-start bg-white p-4  shadow gap-2">
              {item.icon}
              <p className="font-semibold">{item.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
