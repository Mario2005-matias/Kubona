import { histtoriaMissaoVisao } from "@/Data/histtoriaMissaoVisao"
export default function NossaHistoria() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mt-20 mb-10 px-4 min-md:px-10">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-3xl max-[530px]:text-2xl max-[353px]:text-xl mb-5 font-semibold">
          Nossa História - <span className="text-[#DC2626]">KUBONA</span>
        </h2>
        <div className="text-sm container flex flex-row gap-10 justify-center flex-wrap">
          {histtoriaMissaoVisao.map((item) => (
            <div key={item.id} className='max-w-60'>
              <h3 className="font-semibold text-lg">{item.nome}</h3>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
