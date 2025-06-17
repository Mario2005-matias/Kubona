import { Waves, UtensilsCrossed, Snowflake, ParkingCircle, Wifi } from 'lucide-react';


export default function SectionComodidades () {
    return (
        <section className="w-full h-auto  flex flex-col items-center justify-center px-4 min-md:px-10 my-15">
              <div className="container">
                <h2 className="mb-5 text-xl text-bold">Comodidades populares</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
                    <div className='flex flex-col items-start bg-white p-4  shadow gap-2'>
                        <Waves/>
                        <p>Piscina aquecida</p>
                    </div>
                    <div className='flex flex-col items-start bg-white p-4  shadow gap-2'>
                        <UtensilsCrossed/>
                        <p>Cozinha</p>
                    </div>
                    <div className='flex flex-col items-start bg-white p-4  shadow gap-2'>
                        <Snowflake/>
                        <p>Ar condicionado</p>
                    </div>
                    <div className='flex flex-col items-start bg-white p-4  shadow gap-2'>
                        <ParkingCircle/>
                        <p>Estacionamento grauito</p>
                    </div>
                    <div className='flex flex-col items-start bg-white p-4  shadow gap-2'>
                        <Wifi/>
                        <p>Wi-fi </p>
                    </div>
                  </div>
                </div>
            </section>
    )
}