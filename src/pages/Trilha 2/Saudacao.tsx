import { useState } from 'react';

interface SaudacaoProps {
  nomeInicial: string;
}

export function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);
  const [novoNome, setNovoNome] = useState('');

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-50">Olá, {nome}!</h2>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite um novo nome"
        className="bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-50"
      />
      <button
        onClick={() => {
          if (novoNome.trim()) {
            setNome(novoNome);
            setNovoNome('');
          }
        }}
        className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Atualizar Nome
      </button>
    </div>
  );
}