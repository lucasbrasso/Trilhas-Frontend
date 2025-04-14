import { useState } from "react";
import Navbar from "../Trilha 1/Navbar/Navbar";

export function CadastrarUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrar = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nome,
            email: email,
          }),
        }
      );

      if (response.ok) {
        setMensagem("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
      } else {
        setMensagem("Erro ao cadastrar usuário");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com a API");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
          <div className="mb-4">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className="bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-50 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-50 w-full"
            />
          </div>
          <button
            onClick={cadastrar}
            className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg w-full"
          >
            Cadastrar
          </button>

          {mensagem && (
            <p
              className={`mt-4 ${
                mensagem.includes("sucesso") ? "text-green-400" : "text-red-400"
              }`}
            >
              {mensagem}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
