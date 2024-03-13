import p1 from "../../src/assets/p1.png";
import p2 from "../../src/assets/p2.png";
import p3 from "../../src/assets/p3.png";
import p4 from "../../src/assets/p4.png";

import { Project } from "./Project";

export function Projects() {
  return (
    <div className="w-full px-5 py-[10px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-dark dark:text-light">Principais projetos</p>
        <button className="text-[#858585]">Ver mais</button>
      </div>
      <div className="flex items-center justify-between">
        <Project image={p1} name="Biblia Fiel Comentada" />
        <Project image={p2} name="Quero te Conhecer" />
        <Project image={p4} name="Igreja Universal" />
        <Project image={p3} name="Hyupp" />
      </div>
    </div>
  );
}
