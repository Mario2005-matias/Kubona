"use client";
import { useState } from "react";
import Header from "@/components/Layout/Header";
import { PhoneCall, MapPin, Mail, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardContato from "./components/ui/CardContato";

export const Contatos = [
  {
    id: 1,
    icon: <PhoneCall />,
    nome: "Contacto",
    info1: "+244 946 513 242",
    info2: "+244 946 513 242",
  },
  {
    id: 2,
    icon: <Mail />,
    nome: "Email",
    info1: "kubona@gmail.com",
    info2: "help@gmail.com",
  },
  {
    id: 3,
    icon: <MapPin />,
    nome: "Contacto",
    info1: "Luanda-Cacuaco",
    info2: "Frente a Administração",
  },
];

export default function Contato() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSend = () => {
    console.log("Enviou...")
  }
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend()
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-[#1F2937]">
      <Header />
      <div className="container mb-15 md:px-30 px-4">
        <h1 className="mt-30 text-4xl max-sm:text-3xl max-[412px]:text-xl font-semibold text-[#1F2937] ">
          Vamos Entrar em Contacto!!
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-8 text-sm">
          {Contatos.map((item) => (
            <CardContato
              key={item.id}
              nome={item.nome}
              children={item.icon}
              info1={item.info1}
              info2={item.info2}
            />
          ))}
        </div>

        <div className="w-full h-0.5 bg-[#1F2937] rounded-md my-10 opacity-20"></div>

        <div>
          <h2 className="text-2xl max-sm:text-xl font-semibold">
            Ou Preencha o formulário abaixo
          </h2>
          <form
            onSubmit={handleSubmit}
            className=" w-full flex flex-col items-center justify-center my-6"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2   gap-4">
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2 max-[425px]:text-sm" htmlFor="nome">
                  Nome
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <User className="w-4 h-4" />
                  <input
                    required
                    className="w-[90%] outline-none max-[425px]:text-sm"
                    name="nome"
                    type="text"
                    id="nome"
                    placeholder="Digita o seu nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2 max-[425px]:text-sm" htmlFor="sobrenome">
                  Sobrenome
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <User className="w-4 h-4" />
                  <input
                    required
                    className="w-[90%] outline-none max-[425px]:text-sm"
                    name="sobrenome"
                    type="text"
                    id="sobrenome"
                    placeholder="Digita o seu sobrenome..."
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2 max-[425px]:text-sm" htmlFor="telefone">
                  Telefone
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <input
                    required
                    className="w-[90%] outline-none max-[425px]:text-sm"
                    name="telefone"
                    type="tel"
                    id="Telefone"
                    placeholder="Digite seu número..."
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start justify-center mb-4">
                <label className="font-semibold mb-2 max-[425px]:text-sm" htmlFor="email">
                  E-mail
                </label>
                <div className="w-full flex flex-row items-center justify-center bg-white shadow py-2 gap-2">
                  <Mail className="w-4 h-4" />
                  <input
                    required
                    className="w-[90%] outline-none max-[425px]:text-sm"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col items-end justify-center">
              <div className=" w-full flex flex-col items-start justify-center">
                <label className="font-semibold mb-2 max-[425px]:text-sm" htmlFor="mensagem">
                  Mensagem
                </label>
                <div className="w-full flex flex-row items-start bg-white shadow py-2 px-2 gap-4">
                  <MessageSquare className="w-4 h-4" />
                  <textarea
                    className="w-full outline-none"
                    name=""
                    id="mensagem"
                    placeholder="Escreva sua mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>
              </div>
              <Button
                variant={"default"}
                size={"lg"}
                className="px-20 rounded-sm mt-6"
                type="submit"
                onClick={handleSend}
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
