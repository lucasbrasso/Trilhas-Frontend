import Navbar from "../Trilha 1/Navbar/Navbar";
import { Contador } from "./Contador";
import { ListaTarefas } from "./ListaTarefas";
import { Saudacao } from "./Saudacao";
import { ToggleVisibilidade } from "./ToggleVisibilidade";


export default function Trilha2Page() {
  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Contador</h2>
          <Contador inicial={0} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Saudação</h2>
          <Saudacao nomeInicial="nome" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Lista de Tarefas</h2>
          {/* a baleia azul chinesa ajudou nessa */}
          <ListaTarefas tarefasIniciais={["tarefa1"]} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Controle de Visibilidade</h2>
          <ToggleVisibilidade texto="Agora voce me ve" />
        </div>
      </div>
    </div>
  );
}