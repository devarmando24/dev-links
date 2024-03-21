import p1 from "../src/assets/p1.png";

import { ArrowLeft, LinkSimpleHorizontal } from "@phosphor-icons/react";
import Modal from "react-modal";
import { Toggle } from "./components/Toggle";

interface Props {
  modal: boolean;
  setModal(modal: boolean): void;
}
export function Details({ modal, setModal }: Props) {
  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => setModal(!modal)}
      className="h-screen w-screen dark:text-light text-black bg-light dark:bg-dark"
    >
      <header className="h-[62px] p-5 flex items-center justify-between">
        <button
          onClick={() => setModal(!modal)}
          className="transition-all duration-500 hover:scale-110"
        >
          <ArrowLeft size={22} weight="bold" />
        </button>
        <h2 className="font-bold text-lg">Detalhes do Projeto</h2>
        <Toggle />
      </header>

      <section className="p-5 flex flex-col gap-3">
        <div className="flex flex-col items-center">
          <img src={p1} alt="" />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <h3 className="font-bold text-lg">Justa Troca</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LinkSimpleHorizontal weight="bold" size={22} />
          </a>
        </div>

        <div className="text-[#858585]">
          O aplicativo justa troca tem como objetivo facilitar a troca de bens
          materiais ou serviços.
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Habilidades</h3>
          <div className="flex flex-wrap gap-4">
            <span className="w-fit p-2 bg-orange-600 font-bold rounded-xl">
              HTML
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5">
          <h3 className="font-bold text-lg">Atividades</h3>
          <div className="text-[#858585]">
            Trabalhei na criação do front-end deste projeto, fiz toda a
            integração com o back-end e a disponibilização do aplicativo na loja
            Play Store.
          </div>
        </div>
      </section>
    </Modal>
  );
}
