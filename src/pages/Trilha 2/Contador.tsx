import { useState } from "react";

interface ContadorProps {
  inicial: number;
}

export function Contador({ inicial }: ContadorProps) {
  const [valor, setValor] = useState(inicial);

  const adicionar = () => setValor(valor + 1);
  const diminuir = () => setValor(valor - 1);

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 flex flex-col items-center gap-4">
      <span className="text-2xl font-bold text-gray-50">{valor}</span>
      <div className="flex gap-2">
        <button
          onClick={diminuir}
          className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Diminuir
        </button>
        <button
          onClick={adicionar}
          className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
