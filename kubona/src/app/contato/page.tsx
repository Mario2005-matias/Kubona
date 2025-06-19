import Header from "@/components/Layout/Header";
import { PhoneCall, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contato() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-[#1F2937]">
      <Header />
      <div className="container mb-15 md:px-30 px-4">
        <h1 className="mt-30 text-4xl sm:text-2xl font-semibold text-[#1F2937]">
          Vamos Entrar em Contacto!!
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-8 text-sm">
          <div className="flex flex-col items-start justify-center mb-4">
            <span className="p-2 border rounded-sm  mb-4">
              <PhoneCall />
            </span>
            <ul>
              <li>+244 946 513 242</li>
              <li>+244 946 513 242</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center mb-4">
            <span className="p-2 border rounded-sm mb-4">
              <Mail />
            </span>
            <ul>
              <li>kubona@gmail.com</li>
              <li>help@gmail.com</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center mb-4">
            <span className="p-2 border rounded-sm mb-4">
              <MapPin />
            </span>
            <ul>
              <li>Luanda-Cacuaco</li>
              <li>Rua da Ceramica</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#1F2937] rounded-md my-10 opacity-20"></div>

        <div>
          <h2 className="text-2xl font-semibold">
            Ou Preenchao formulário abaixo
          </h2>
          <form className=" w-full flex flex-col items-center justify-center my-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-2   gap-4">
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2" htmlFor="nome">
                  Nome
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <input 
                  required
                    className="w-[90%] outline-none"
                    name="nome"
                    type="text"
                    id="nome"
                    placeholder="Digit seu nome..."
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2" htmlFor="telefone">
                  Telefone
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <input 
                  required
                    className="w-[90%] outline-none"
                    name="telefone"
                    type="tel"
                    id="Telefone"
                    placeholder="Digite seu número..."
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2" htmlFor="sobrenome">
                  Sobrenome
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <input 
                  required
                    className="w-[90%] outline-none"
                    name="sobrenome"
                    type="text"
                    id="sobrenome"
                    placeholder="Digit seu sobrenome..."
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2" htmlFor="email">
                  E-mail
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <input 
                  required
                    className="w-[90%] outline-none"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail..."
                  />
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col items-end justify-center">
              <div className=" w-full flex flex-col items-start justify-center">
                <label className="font-semibold mb-2" htmlFor="mensagem">
                  Mensagem
                </label>
                <div className="w-full flex flex-row items-start bg-white shadow py-2 px-2 gap-4">
                  <PhoneCall className="w-4 h-4" />
                  <textarea
                    className="w-full outline-none"
                    name=""
                    id="mensagem"
                    placeholder="Escreva sua mensagem"
                  />
                </div>
              </div>
              <Button
                variant={"default"}
                size={"lg"}
                className="px-20 rounded-sm mt-6"
              >
                Enviar
                <Send />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
