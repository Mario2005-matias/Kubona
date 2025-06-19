export default function NossaHistoria() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mt-20 px-4 min-md:px-10">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">
          Nossa História - <span className="text-[#DC2626]">KUBONA</span>
        </h2>
        <div className=" gap-4 grid grid-cols-1 min-[512px]:grid-cols-2 sm:grid-cols-5">
          <div>
            <h3>História da compainha</h3>
            <p>
              Com a Kubona, você encontra o espaço ideal para seu evento em
              poucos cliques — compare preços, veja fotos reais e confirme a
              reserva sem sairde casa.
            </p>
          </div>

          <div className="h-full w-0.5 bg-black"></div>

          <div>
            <h3>História da compainha</h3>
            <p>
              Nossa missão consiste em facilitar a organização de eventos a
              conectar organizadores com melhores espaços disponíveis,
              promovendo eficiência e transparência no processo de reserva de
              salões.
            </p>
          </div>

          <div className="h-full w-0.5 bg-black"></div>

          <div>
            <h3>História da compainha</h3>
            <p>
              Temos como visão ser a principal plataforma digital de reservas de
              salões de eventos em África,promovendo a digitalização e
              crescimento dos negócios locais de eventos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
