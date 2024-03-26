export interface ProjectProps {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
  activities: string;
  technologies: { name: string; color: string }[];
}

interface Props {
  project: ProjectProps;
  setModal(modal: boolean): void;
  setProject(project: ProjectProps): void;
}
export function Project({ setProject, project, setModal }: Props) {
  return (
    <button
      onClick={() => {
        setModal(true);
        setProject(project);
      }}
      className="text-dark dark:text-light w-[70px] transition-all duration-500 hover:scale-105"
    >
      <img src={project.image} alt={project.name} />
      <p className="overflow-hidden py-1 text-xs whitespace-nowrap text-ellipsis">
        {project.name}
      </p>
    </button>
  );
}
