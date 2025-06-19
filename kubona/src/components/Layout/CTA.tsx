import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className=" min-h-full my-20 flex items-center justify-center">
      <div className="bg-[url('/assets/Salao.jpg')] bg-fixed container h-96 bg-cover bg-center text-white rounded-2xl overflow-hidden max-[645px]:rounded-none">
        <div className=" bg-[#00000080] w-full h-full  px-20 py-20 flex flex-col items-start justify-center max-md:items-center max-md:text-center max-md:px-8 max-md:py-8 ">
            <p className="max-md:text-sm text-center">SEU REFÚGIO DE FÉRIAS DEFINITIVO NA KUBONA</p>
            <h2 className="text-5xl max-w-lg font-semibold my-2 max-md:text-4xl max-sm:text-3xl">Experimente Os Verdadeiros Salões Na <span className="text-[#DC2626]">KUBONA</span></h2>
            <Button variant={"outline"} className="py-6 rounded-sm">
                Entre em contacto connosco hoje
            </Button>
        </div>
      </div>
    </section>
  );
}
