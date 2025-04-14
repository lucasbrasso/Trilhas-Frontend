import { useState } from "react";

interface ToggleVisibilidadeProps {
  texto: string;
}

export function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 flex flex-col gap-4">
      {visivel && <p className="text-gray-50">{texto}</p>}
      <button
        onClick={() => setVisivel(!visivel)}
        className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors"
      >
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}