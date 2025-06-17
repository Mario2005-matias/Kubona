import Image from 'next/image'

type CardProps = {
    id: number,
    nome: string,
    local: string,
    urlImage: string
}

export default function CardBases ({nome , local, urlImage}: CardProps) {
    return (
        <div  className="rounded-md flex flex-row gap-2 p-2">
            <Image src={urlImage} width={100} height={200} alt='' 
                    className="rounded-md" />
            <div>
            <h3 className='text-[#1F2937]'>{nome}</h3>
             <p>{local}</p>
            </div>
        </div>
    )
}