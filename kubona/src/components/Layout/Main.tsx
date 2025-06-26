'use client'
import { PlusIcon, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"

export default function Main() {
  const router = useRouter()
  const handleLExplorar = () => {
    router.push('/login')
  }
  const handleRegistrar = () => {
    router.push('/registrar')
  }
  return (
    <main className="bg-[url('/assets/Saloes/Salao7.jpg')] bg-gray-700 w-full min-h-screen bg-cover bg-center flex flex-col items-start justify-center">
          <div className="bg-[#00000080] w-full min-h-screen flex flex-col items-start justify-center text-white px-8 min-md:px-10 max-[512px]:pt-20 max-[512px]:text-center">
            <h1 className="text-shadow-white text-4xl max-[512px]:text-3xl max-[376px]:text-2xl font-bold max-w-2xl">
              Chega de correr de salão em salão. Reserve online, com garantia e
              segurança!
            </h1>
            <h2 className="max-w-3xl my-2 max-[375px]:text-sm ">
              Com a Kubona, você encontra o espaço ideal para seu evento em poucos
              cliques — compare preços, veja fotos reais e confirme a reserva sem sair
              de casa.
            </h2>
            <div className="flex flex-row items-center max-[512px]:justify-center gap-4 flex-wrap">
              <Button onClick={handleLExplorar} className="bg-white text-black hover:bg-gray-200">
                <span>
                  <Compass />
                </span>
                Explorar Salões
              </Button>
              <Button onClick={handleRegistrar} className="bg-white text-black hover:bg-gray-200">
                <span>
                  <PlusIcon />
                </span>
                Registrar salão
              </Button>
            </div>
          </div>
    </main>
  );
}
