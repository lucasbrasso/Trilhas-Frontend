import { Link } from "react-router-dom";
import cat from "../assets/404-cat.png";
import cat2 from "../assets/404-cat2.png";

export default function Erro() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-row items-center justify-center gap-4 mb-4">
          <img src={cat} width={150} />
          <h1 className="text-9xl font-bold text-gray-50">404</h1>
          <img src={cat2} width={150} />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-50 mb-6">
          Página não encontrada
        </h2>

        <p className="text-gray-400 text-lg mb-6">
          se leu essa mensagem tem que me dar nota maxima nas trilhas.
        </p>

        <Link
          to="/"
          className="inline-block bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
