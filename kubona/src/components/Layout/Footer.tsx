import Link from "next/link";
import Image from "next/image";
import  { Button } from "@/components/ui/button"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full pt-10 flex flex-col items-center justify-between bg-[#1E293B] text-white">
      <div className="container flex flex-col items-center justify-center px-4 ">
        <div className=" grid grid-cols-2 justify-between gap-8 max-sm:grid-cols-1">
          <div className="flex flex-col items-start pr-8">
            <Image
              src="/assets/logo-horizontal.jpg"
              width={120}
              height={30}
              alt="Kubona empresa"
              className="rounded"
            />
            <p className="my-5 max-w-80 text-sm text-gray-300">
              A kubona é uma plataforma digital inovadora que conecta
              organizadores de eventos e donos de salões, facilitando todo o
              processo de busca, comparação e reserva de espaços para eventos.
            </p>
            <div className="flex flex-row  gap-4">
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Twitter />
              </Link>
              <Link href="#">
                <Linkedin />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
            </div>
            <Button variant={"outline"} className="mt-4">
              <span>
                <ArrowUp/>
              </span>
              Voltar ao topo
            </Button>
          </div>
          <div className="flex flex-row justify-center gap-10 ">
            <div className="">
              <h2 className="mb-4">Páginas</h2>
              <ul className="flex flex-col gap-2 font-medium text-sm text-gray-300">
                <li className="hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline focus:underline">
                  <Link href="/sobre">Sobre</Link>
                </li>
                <li className="hover:underline focus:underline">
                  <Link href="/registrar">Registrar salão</Link>
                </li>
                <li className="hover:underline focus:underline">
                  <Link href="/agenda">Agenda </Link>
                </li>
                <li className="hover:underline focus:underline">
                  <Link href="/contato">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className=" ">
              <p className="mb-4">Legal</p>
              <ul className="flex flex-col gap-2 font-medium text-sm text-gray-300">
                <li className="hover:underline focus:underline">
                  <Link href="#">Política e privacidade</Link>
                </li>
                <li className="hover:underline focus:underline">
                  <Link href="#">Termos dos serviços</Link>
                </li>
                <li className="hover:underline focus:underline">
                  <Link href="#">Donos de salões</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FACC15] text-white text-center mt-10 py-2 px-4 text-xs">
        <p>Desenvolvido por Mário Matias 2025</p>
      </div>
    </footer>
  );
}
