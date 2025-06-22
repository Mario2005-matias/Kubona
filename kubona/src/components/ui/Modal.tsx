import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
type ModalProps = {
    isOpen: boolean
    children: React.ReactNode
    onClose: () => void
}

export default function Modal ({ isOpen, onClose, children }: ModalProps) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-10 bg-[#000000ce] bg-opacity-25 text-gray-700 ">
                    <div className="flex h-full w-full items-center justify-center px-4">
                        <div className="absolute z-50 mx-auto my-0 flex h-auto w-[480px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl  ">
                            <header className="bg-[#1E293B] text-white">
                                <div className="flex flex-row items-center justify-between px-4 py-3">
                                    <h1>Formulário</h1>
                                    <Button className="bg-transparent hover:bg-transparent hover:scale-100" onClick={onClose}>
                                        <XIcon/>
                                    </Button>
                                </div>
                            </header>
                            <div className="w-full p-3">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}