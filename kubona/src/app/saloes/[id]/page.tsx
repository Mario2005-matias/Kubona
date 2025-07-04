import { saloes } from "@/Data/Saloes";
import Image from "next/image";
import { notFound } from "next/navigation";
import CardDonoSalao from "../components/ui/CardDonoSalao";
import { Button } from "@/components/ui/button";
import type { Salao } from "@/types";

type Params = Promise<{ id: string }>;

export default async function DetalheSalao({ params }: { params: Params }) {
  const { id } = await params;
  const salao: Salao | undefined = saloes.find(
    (item) => item.id.toString() === id
  );

  if (!salao) {
    return notFound();
  }

  return (
    <div className="py-30">
      <div className="max-w-5xl mx-auto flex flex-row flex-wrap gap-8 px-4 max-[1080px]:justify-center">
        <div className="flex flex-col gap-8 max-[1080px]:w-md">
          <Image
            src={salao.urlImage}
            alt={salao.nome}
            width={600}
            height={300}
            className="rounded-md max-w-xl w-full"
          />
          <div className="bg-white rounded-md shadow p-6">
            <h2 className="font-semibold text-2xl">{salao.nome}</h2>
            <div className="my-2">
              <p>
                <strong>Breve descrição:</strong>
              </p>
              <ul className="list-disc ml-8">
                <li>{salao.pessoasEmPe} pessoas em pé</li>
                <li>{salao.pessoasSentadas} pessoas sentadas</li>
                <li>Garagem para {salao.garagem} viaturas</li>
                <li>{salao.wc} WC's</li>
              </ul>
            </div>
            <p>Preço: {salao.preco}.000 AOA negociável</p>
            <p className="mb-2">Para mais informações entra em contacto</p>
            <p>Localização: {salao.local}</p>
          </div>
        </div>
        <aside className="px-4 flex flex-col items-center gap-8 min-w-sm max-w-lg">
          <div className="w-full text-lg bg-[#F97316] cursor-default text-white flex items-center justify-center py-2 px-6 rounded-sm">
            <h2>{salao.preco}.000 AOA</h2>
          </div>
          <CardDonoSalao />
          <div className="bg-white shadow w-full p-5 rounded-md">
            <h2 className="text-lg font-semibold">Contactar o proprietário</h2>

            <form className="mt-4">
              <div className="flex flex-col items-start gap-1 mb-4">
                <label htmlFor="email">*Email</label>
                <input
                  className="border-b-2 border-gray-300 w-full outline-none"
                  type="email"
                  placeholder="O teu email para receber respostas"
                />
              </div>
              <div className="flex flex-col items-start gap-1 mb-4">
                <label htmlFor="nome">*Nome</label>
                <input
                  className="border-b-2 border-gray-300 w-full outline-none"
                  type="text"
                  placeholder="O teu nome"
                />
              </div>
              <div className="flex flex-col items-start gap-1 mb-4">
                <label htmlFor="mensagem">*Mensagem</label>
                <textarea
                  className="border-b-2 border-gray-300 w-full outline-none"
                  rows={5}
                  placeholder="Coloca a tua questão"
                />
              </div>
              <div className="flex flex-row gap-2 my-2">
                <input type="checkbox" id="criarConta" />
                <label htmlFor="criarConta">Criar uma conta para mim</label>
              </div>
              <Button className="w-full">Enviar</Button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
