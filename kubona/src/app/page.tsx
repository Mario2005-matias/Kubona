import Header from "@/components/Header/Header";
import Main from "@/components/Main";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <section>
        <h2>Visite nossas localizações</h2>
        <div>
          <div>
            <Image
            src="/assets/Salao.jpg"
            widht={100}
            height={100}
            />
            <div>
              <p>Kaiulua-Kona</p>
              <p>Luanda-Cacuaco</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
