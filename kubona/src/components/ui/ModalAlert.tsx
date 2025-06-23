import { Button } from "@/components/ui/button"
type AlertProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export default function ModalAlert ({isOpen, onClose, children}: AlertProps) {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-10 bg-[#000000ce] bg-opacity-25 text-gray-700 ">
                    <div className="flex h-full w-full items-center justify-center px-4">
                        <div className="absolute  z-50 mx-4 my-0 flex h-auto w-[480px] flex-col overflow-hidden rounded-md bg-white shadow-2xl max-[525px]:w-[90%] ">
                            <header className="bg-[#1E293B] text-white">
                               <h1>Erro</h1>
                            </header>
                            <div className="w-full p-3">
                                {children}
                                <Button onClick={onClose}>
                                    Ok
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}