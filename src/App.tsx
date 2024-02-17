import lua from "../src/assets/Moon.svg";
import perfil from "../src/assets/profile.png";
import instagram from "../src/assets/InstagramLogo.svg";
import linkedin from "../src/assets/LinkedinLogo.svg";
import github from "../src/assets/GithubLogo.svg";
import p1 from "../src/assets/p1.png";
import p2 from "../src/assets/p2.png";
import p3 from "../src/assets/p3.png";
import p4 from "../src/assets/p4.png";

export function App() {
  return (
    <div className="w-full h-screen bg-[#EEE]">
      {/* HEADER */}
      <header className="h-[62px] p-5 flex items-center justify-end">
        <button className="transition-all duration-500 hover:scale-110">
          <img height={22} width={22} src={lua} alt="Lua" />
        </button>
      </header>

      {/* SOBRE */}
      <div className="py-[10px] flex flex-col items-center gap-[10px]">
        <img width={100} height={100} src={perfil} alt="" />
        <p className="font-bold text-[#212529] text-lg">Armando Pereira</p>
        <p className="text-sm text-[#858585]">Desenvolvedor Full-Stack</p>
        <div className="flex items-center gap-[10px]">
          <button className="bg-[#212529] rounded-full flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#EEE] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110">
            <img src={instagram} alt="Instagram" height={15} width={15} />
          </button>
          <button className="bg-[#212529] rounded-full flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#EEE] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110">
            <img src={linkedin} alt="Linkedin" height={15} width={15} />
          </button>
          <button className="bg-[#212529] rounded-full flex items-center justify-center p-[10px] h-[35px] w-[35px] text-[#EEE] shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110">
            <img src={github} alt="GitHub" height={15} width={15} />
          </button>
        </div>
      </div>

      {/* BOTOES */}
      <div className="flex flex-col gap-[15px] px-5 py-[10px]">
        <button className="h-[50px] bg-[#212529] text-[#EEE] font-bold rounded-lg shadow-gray-600 shadow-md transition-all duration-500 hover:scale-105">
          Portfólio
        </button>
        <button className="h-[50px] bg-[#212529] text-[#EEE] font-bold rounded-lg shadow-gray-600 shadow-md transition-all duration-500 hover:scale-105">
          Orçamento
        </button>
      </div>

      {/* PROJETOS */}
      <div className="w-full  px-5 py-[10px] flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="text-[#212529]">Principais projetos</p>
          <button className="text-[#858585]">Ver mais</button>
        </div>
        <div className="flex items-center justify-between">
          <button className="w-[70px] transition-all duration-500 hover:scale-105">
            <img src={p1} alt="BFC" />
            <p className="overflow-hidden py-1 text-xs whitespace-nowrap text-ellipsis">
              Biblia Fiel Comentada
            </p>
          </button>
          <button className="w-[70px] transition-all duration-500 hover:scale-110">
            <img src={p2} alt="QTC" />
            <p className="overflow-hidden py-1 text-xs whitespace-nowrap text-ellipsis">
              Quero te Conhecer
            </p>
          </button>
          <button className="w-[70px] transition-all duration-500 hover:scale-105">
            <img src={p3} alt="Hyupp" />
            <p className="overflow-hidden py-1 text-xs whitespace-nowrap text-ellipsis">
              Hyupp
            </p>
          </button>
          <button className="w-[70px] transition-all duration-500 hover:scale-105">
            <img src={p4} alt="Universal" />
            <p className="overflow-hidden py-1 text-xs whitespace-nowrap text-ellipsis">
              Igreja Universal
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
