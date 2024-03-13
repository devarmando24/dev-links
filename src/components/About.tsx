import { GitHub } from "./icons/GitHub";
import { Linkedin } from "./icons/Linkedin";
import { Instagram } from "./icons/Instagram";

import perfil from "../../src/assets/profile.png";

export function About() {
  return (
    <div className="py-[10px] flex flex-col items-center gap-[10px]">
      <img width={100} height={100} src={perfil} alt="" />
      <p className="font-bold text-dark dark:text-light text-lg">
        Armando Pereira
      </p>
      <p className="text-sm text-[#858585]">Desenvolvedor Full-Stack</p>
      <div className="flex items-center gap-[10px]">
        <button className="bg-dark dark:bg-light rounded-full flex items-center justify-center p-[10px] h-[35px] w-[35px] text-light dark:text-dark shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110">
          <Instagram />
        </button>
        <button className="bg-dark dark:bg-light rounded-full flex items-center justify-center p-[10px] h-[35px] w-[35px] text-light dark:text-dark shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110">
          <Linkedin />
        </button>
        <button className="bg-dark dark:bg-light rounded-full flex items-center justify-center p-[10px] h-[35px] w-[35px] text-light dark:text-dark shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110">
          <GitHub />
        </button>
      </div>
    </div>
  );
}
