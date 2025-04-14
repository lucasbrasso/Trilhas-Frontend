import { Link } from "react-router-dom";
import Navbar from "../Trilha 1/Navbar/Navbar";

export default function Trilha4Page() {
  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex gap-4 items-center justify-center">
          <Link
            to="/cadastrar"
            className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-3 px-6 rounded-lg transition-colors text-center"
          >
            Cadastrar Usuário
          </Link>
          <Link
            to="/buscar"
            className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-3 px-6 rounded-lg transition-colors text-center"
          >
            Buscar Usuário
          </Link>
        </div>
      </div>
    </div>
  );
}
