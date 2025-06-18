import { PlusIcon, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Main() {
  return (
    <main className="bg-[url('/assets/Salao.jpg')] w-full min-h-screen bg-cover bg-center flex flex-col items-start justify-center text-white px-8 min-md:px-10">
          <h1 className="text-4xl font-bold max-w-2xl">
            Chega de correr de salão em salão. Reserve online, com garantia e
            segurança!
          </h1>
          <h2 className="max-w-3xl my-2">
            Com a Kubona, você encontra o espaço ideal para seu evento em poucos
            cliques — compare preços, veja fotos reais e confirme a reserva sem sair
            de casa.
          </h2>
          <div className="flex flex-row items-center gap-4 flex-wrap">
            <Button className="bg-white text-black">
              <span>
                <Compass />
              </span>
              Explorar Salões
            </Button>
            <Button className="bg-white text-black">
              <span>
                <PlusIcon />
              </span>
              Registrar salão
            </Button>
          </div>
    </main>
  );
}
