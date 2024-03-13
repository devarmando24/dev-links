import { Header } from "./components/Header";
import { About } from "./components/About";
import { Button } from "./components/Button";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <div className="w-full h-screen">
      <Header />

      <About />

      <div className="flex flex-col gap-[15px] px-5 py-[10px]">
        <Button>Portfólio</Button>
        <Button>Orçamento</Button>
      </div>

      <Projects />
    </div>
  );
}
