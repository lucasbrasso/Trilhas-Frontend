import { useState } from "react";
import Navbar from "../Trilha 1/Navbar/Navbar";

export function BuscarUsuario() {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const buscar = async () => {
    if (!id) {
      setErro("Digite um ID válido");
      return;
    }

    setCarregando(true);
    setErro("");
    setUsuario(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }

      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
          <div className="flex">
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Digite o ID do usuário"
              className="bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-50 flex-1"
              min="1"
            />
            <button
              onClick={buscar}
              disabled={carregando}
              className="ml-3 bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg disabled:opacity-50"
            >
              {carregando ? "Buscando..." : "Buscar"}
            </button>
          </div>

          {carregando && <p className="mt-4 text-gray-400">Carregando...</p>}

          {erro && <p className="mt-4 text-red-400">{erro}</p>}

          {usuario && (
            <div className="mt-4 text-gray-50">
              <p>
                <span className="font-bold">Nome:</span> {usuario.name}
              </p>
              <p>
                <span className="font-bold">Email:</span> {usuario.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
