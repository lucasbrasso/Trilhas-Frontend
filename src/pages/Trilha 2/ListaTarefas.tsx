import { useState } from 'react';

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

export function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-50">Lista de Tarefas</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
          className="bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-50 flex-grow"
        />
        <button
          onClick={adicionarTarefa}
          className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Adicionar
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="text-gray-50 border-b border-gray-700 pb-2">
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}