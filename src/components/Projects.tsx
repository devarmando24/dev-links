import { useState } from "react";
import { projects } from "../api";

import { Project, ProjectProps } from "./Project";

interface Props {
  setModal(modal: boolean): void;
  setProject(project: ProjectProps): void;
}
export function Projects({ setProject, setModal }: Props) {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const cut = seeMore ? projects.length : 4;

  return (
    <div className="w-full px-5 py-[10px] flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-dark dark:text-light">Principais projetos</p>
        <button className="text-[#858585]" onClick={() => setSeeMore(!seeMore)}>
          {!seeMore ? "Ver mais" : "Ver menos"}
        </button>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-4 gap-2">
        {projects.slice(0, cut).map((project: ProjectProps) => (
          <Project
            key={project.id}
            project={project}
            setModal={setModal}
            setProject={setProject}
          />
        ))}
      </div>
    </div>
  );
}
