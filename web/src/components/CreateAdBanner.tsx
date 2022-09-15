import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className="bg-[#2A2634] py-6 px-8 self-stretch rounded-lg flex justify-between items-center mt-8">
            <div>
                <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
            </div>
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                <MagnifyingGlassPlus size={24} />
                Publicar Anúncio
            </Dialog.Trigger>
        </div>
    )
}