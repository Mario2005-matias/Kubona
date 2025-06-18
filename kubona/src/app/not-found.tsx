import Link from "next/link"
export default function Notfound () {
    return (
        <div className="w-sreen h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">404</h1>
            <p>Página não econtrada</p>
            <Link href='/' className="bg-[#1D4ED8] text-white  px-4 py-2 rounded-md ">Voltar</Link>
        </div>
    )
}