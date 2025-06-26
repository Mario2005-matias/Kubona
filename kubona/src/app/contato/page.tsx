"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CardContato from "./components/ui/CardContato"

import Header from "@/components/Layout/Header";
import {
  PhoneCall,
  MapPin,
  Mail,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";



const Contatos = [
  {
    id: 1,
    icon: <PhoneCall />,
    nome: "Telefone",
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
    nome: "Localização",
    info1: "Luanda-Cacuaco",
    info2: "Frente à Administração",
  },
];


// ✍️ Esquema de validação com Yup
const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  sobrenome: yup.string().required("O sobrenome é obrigatório"),
  telefone: yup.string().required("O telefone é obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  mensagem: yup.string().required("A mensagem é obrigatória"),
});

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const mensagemFormatada = `Nome: ${data.nome} ${data.sobrenome}\nTelefone: ${data.telefone}\nEmail: ${data.email}\nMensagem: ${data.mensagem}`;
    const numeroApoio = "244946513242";
    const whatsappLink = `https://wa.me/${numeroApoio}?text=${encodeURIComponent(
      mensagemFormatada
    )}`;
    window.open(whatsappLink, "_blank");

    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000); // Mensagem some após 5s
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-[#1F2937]">
      <Header />
      <div className="container mb-15 md:px-30 px-4">
        <h1 className="mt-30 text-4xl max-sm:text-3xl max-[412px]:text-xl font-semibold text-[#1F2937]">
          Vamos Entrar em Contacto!!
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-8 text-sm gap-4">
          {Contatos.map((item) => (
            <CardContato
              key={item.id}
              nome={item.nome}
              icon={item.icon}
              info1={item.info1}
              info2={item.info2}
            />
          ))}
        </div>

        <div className="w-full h-0.5 bg-[#1F2937] rounded-md my-10 opacity-20" />

        <h2 className="text-2xl max-sm:text-xl font-semibold">
          Ou Preencha o formulário abaixo
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-end justify-center my-6"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nome */}
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2" htmlFor="nome">
                Nome
              </label>
              <div className="flex bg-white shadow py-2 px-2 gap-2 items-center">
                <User className="w-4 h-4" />
                <input
                  {...register("nome")}
                  id="nome"
                  placeholder="Digite seu nome..."
                  className="w-full outline-none"
                />
              </div>
              {errors.nome && (
                <span className="text-red-500 text-xs">
                  {errors.nome.message}
                </span>
              )}
            </div>

            {/* Sobrenome */}
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2" htmlFor="sobrenome">
                Sobrenome
              </label>
              <div className="flex bg-white shadow py-2 px-2 gap-2 items-center">
                <User className="w-4 h-4" />
                <input
                  {...register("sobrenome")}
                  id="sobrenome"
                  placeholder="Digite seu sobrenome..."
                  className="w-full outline-none"
                />
              </div>
              {errors.sobrenome && (
                <span className="text-red-500 text-xs">
                  {errors.sobrenome.message}
                </span>
              )}
            </div>

            {/* Telefone */}
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2" htmlFor="telefone">
                Telefone
              </label>
              <div className="flex bg-white shadow py-2 px-2 gap-2 items-center">
                <PhoneCall className="w-4 h-4" />
                <input
                  {...register("telefone")}
                  id="telefone"
                  placeholder="Digite seu telefone..."
                  className="w-full outline-none"
                />
              </div>
              {errors.telefone && (
                <span className="text-red-500 text-xs">
                  {errors.telefone.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2" htmlFor="email">
                E-mail
              </label>
              <div className="flex bg-white shadow py-2 px-2 gap-2 items-center">
                <Mail className="w-4 h-4" />
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail..."
                  className="w-full outline-none"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Mensagem */}
          <div className="w-full flex flex-col mb-4">
            <label className="font-semibold mb-2" htmlFor="mensagem">
              Mensagem
            </label>
            <div className="flex bg-white shadow py-2 px-2 gap-2">
              <MessageSquare className="w-4 h-4 mt-1" />
              <textarea
                {...register("mensagem")}
                id="mensagem"
                className="w-full outline-none resize-none h-32"
                placeholder="Escreva sua mensagem"
              />
            </div>
            {errors.mensagem && (
              <span className="text-red-500 text-xs">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          {/* Botão + Mensagem */}
          <Button type="submit" className="px-20 rounded-sm mt-6">
            Enviar <Send className="ml-2" />
          </Button>

          {enviado && (
            <p className="text-green-600 mt-4 font-medium">
              Mensagem enviada com sucesso! 😊
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
