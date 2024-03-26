import { Header } from "./components/Header";
import { About } from "./components/About";
import { Button } from "./components/Button";
import { Projects } from "./components/Projects";

import Modal from "react-modal";
import { useState } from "react";
import { Details } from "./Details";
import { ProjectProps } from "./components/Project";

Modal.setAppElement("#root");

export function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [project, setProject] = useState<ProjectProps | null>(null);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="sm:max-w-96 w-full h-screen">
        <Header />

        <About />

        <div className="flex flex-col gap-[15px] px-5 py-[10px]">
          <Button href="https://apvictor.github.io/armando.github.io">
            Portfólio
          </Button>
          <Button href="https://wa.me/5511995052373?text=Olá,%20encontrei%20seu%20portfólio.">
            Contato
          </Button>
        </div>

        <Projects setModal={setModal} setProject={setProject} />
      </div>

      <Details modal={modal} setModal={setModal} project={project} />
    </div>
  );
}
