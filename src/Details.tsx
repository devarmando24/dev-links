import { useTheme } from "./hooks/useTheme";
import sol from "../src/assets/SunDim.svg";
import lua from "../src/assets/Moon.svg";
import p1 from "../src/assets/p1.png";

import { ArrowLeft, LinkSimpleHorizontal } from "@phosphor-icons/react";

export function Details() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dark:text-light text-black">
      <header className="h-[62px] p-5 flex items-center justify-between">
        <button className="transition-all duration-500 hover:scale-110">
          <ArrowLeft size={22} weight="bold" />
        </button>
        <h2 className="font-bold text-lg">Detalhes do Projeto</h2>
        <button
          className="transition-all duration-500 hover:scale-110"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <img height={22} width={22} src={sol} alt="Sol" />
          ) : (
            <img height={22} width={22} src={lua} alt="Lua" />
          )}
        </button>
      </header>

      <main className="p-5 flex flex-col gap-3">
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
      </main>
    </div>
  );
}
