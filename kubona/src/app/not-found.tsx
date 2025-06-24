"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Send } from "lucide-react";
import ModalAlert from "@/components/ui/ModalAlert";

export default function Notfound() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  const enviarWhatsApp = () => {
    if (nome === "" || mensagem === "") {
      alert("Preencha o formulário");
    } else {
      const mensagemFormatada = `${nome} ${mensagem}`;
      const numeroApoio = "+244946513242";
      const whatsappLink = `https://wa.me/${numeroApoio}?text=${encodeURIComponent(
        mensagemFormatada
      )}`
      window.open(whatsappLink, "_blanck");
    }
  };

  const router = useRouter();
  const voltarHome = () => {
    router.push("/");
  };

  return (
    <div className="w-sreen h-screen flex flex-col items-center justify-center mx-4">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="max-w-lg text-center">
        Página não encontrada, mas podemos te
        ajudar no whatsApp
      </h2>
      <p>Você quer?</p>
      <div className="flex flex-row items-center gap-4 mt-2">
        <Button
          onClick={voltarHome}
          className="bg-red-600 hover:bg-red-700 hover:duration-300"
        >
          Não
        </Button>
        <Button
          onClick={handleOpenModal}
          className="bg-green-600 hover:bg-green-700 hover:duration-300"
        >
          Sim
        </Button>
      </div>
      
      <ModalAlert isOpen={isOpenAlert} onClose={handleCloseAlert}>
        <p>Preencha os campos vazios</p>
        <Button>OK</Button>
      </ModalAlert>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-end justify-center"
        >
          <div className="w-full flex flex-col justify-center gap-1 mb-4">
            <label htmlFor="email">*Email</label>
            <input
              type="text"
              required
              id="email"
              placeholder="exemplo@gmail.com"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border px-4 py-2 w-full text-sm rounded-sm"
            />
          </div>
          <div className="w-full flex flex-col justify-center gap-1">
            <label htmlFor="mensagem">*Mensagem</label>
            <textarea
              name=""
              id="mensagem"
              placeholder="Escreva a sua mensagem"
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="border px-4 py-2 w-full text-sm rounded-sm"
            ></textarea>
          </div>
          <Button onClick={enviarWhatsApp} className="bg-[#1E293B] mt-2">
            Envial
            <Send />
          </Button>
        </form>
      </Modal>
    </div>
  );
}
