import perfil from "../../src/assets/profile.png";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function About() {
  return (
    <div className="py-[10px] flex flex-col items-center gap-[10px]">
      <img width={100} height={100} src={perfil} alt="Foto de Perfil" />
      <p className="font-bold text-dark dark:text-light text-lg">
        Armando Pereira
      </p>
      <p className="text-sm text-[#858585]">Desenvolvedor Full-Stack</p>
      <div className="flex items-center gap-[10px]">
        <a
          href="https://www.instagram.com/dev.armando"
          rel="noreferrer"
          target="_blank"
          className="bg-dark dark:bg-light rounded-full flex items-center justify-center p-2 h-[35px] w-[35px] text-light dark:text-dark shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110 hover:text-pink-500 dark:hover:text-pink-500"
        >
          <InstagramLogo weight="bold" size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/armando-pereira19"
          target="_blank"
          rel="noreferrer"
          className="bg-dark dark:bg-light rounded-full flex items-center justify-center p-2 h-[35px] w-[35px] text-light dark:text-dark shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500"
        >
          <LinkedinLogo weight="bold" size={32} />
        </a>

        <a
          href="https://github.com/apvictor"
          rel="noreferrer"
          target="_blank"
          className="bg-dark dark:bg-light rounded-full flex items-center justify-center p-2 h-[35px] w-[35px] text-light dark:text-dark shadow-gray-600 shadow-md transition-all duration-500 hover:scale-110 hover:text-gray-500 dark:hover:gray-blue-500"
        >
          <GithubLogo weight="bold" size={32} />
        </a>
      </div>
    </div>
  );
}
