import Image from "next/image"
import { StarHalf, DollarSign } from "lucide-react"

export default function SectionDestaque() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-4 min-md:px-10 my-15">
      <div className="container">
        <h2 className="mb-5 text-xl font-bold">Salões de eventos em destaque </h2>
        <h3>Os anuncios mais populaers do nosso site</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            <div>
                <div className="">
                    <Image
                    src="/assests/Salao.jpg"
                    alt=""
                    width={400}
                    height={300}
                    />
                   <div>
                    <DollarSign/>
                    <span>200</span>/noite
                   </div>
                </div>
                <div>
                    <div>
                        <StarHalf/>
                    </div>
                    <h2>Belo condominio na Pen Station</h2>
                    <p>Manhattan, Nova York</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
