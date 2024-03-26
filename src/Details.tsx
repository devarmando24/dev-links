import Modal from "react-modal";
import { Toggle } from "./components/Toggle";
import { ProjectProps } from "./components/Project";
import { ArrowLeft, LinkSimpleHorizontal } from "@phosphor-icons/react";

interface Props {
  modal: boolean;
  project: ProjectProps | null;
  setModal(modal: boolean): void;
}
export function Details({ project, modal, setModal }: Props) {
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
          <img src={project?.image} alt={project?.name} />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <h3 className="font-bold text-lg">{project?.name}</h3>
          <a href={project?.link} target="_blank" rel="noopener noreferrer">
            <LinkSimpleHorizontal weight="bold" size={22} />
          </a>
        </div>

        <div className="text-[#858585]">{project?.description}</div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Tecnologias</h3>
          <div className="flex flex-wrap gap-4">
            {project?.technologies.map((tech) => (
              <span
                key={tech.name}
                className={`w-fit p-2 font-bold rounded-xl ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5">
          <h3 className="font-bold text-lg">Atividades</h3>
          <div className="text-[#858585]">{project?.activities}</div>
        </div>
      </section>
    </Modal>
  );
}
