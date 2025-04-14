import { Link, useNavigate } from "react-router-dom";
import trilha1Img from "../assets/trilha-1.webp";
import trilha2Img from "../assets/trilha-2.webp";
import trilha3Img from "../assets/trilha-3.webp";
import trilha4Img from "../assets/trilha-4.webp";

export default function LandingPage() {
  const navigate = useNavigate();
  {
    /* troquei o home, about e contact pelas paginas das trilhas */
  }
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-50 mb-4">Oi claudia</h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 flex flex-col h-full">
            <img
              src={trilha1Img}
              className="w-full h-48 rounded-t-xl"
              alt="Trilha 1"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-50 mb-3">Trilha 1</h2>
              <p className="text-gray-400 mb-4">
                Revisão Web, TypeScript, HTML e CSS
              </p>
              <div className="mt-auto">
                <Link
                  to="/trilha-1"
                  className="block w-full bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Exercícios
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 flex flex-col h-full">
            <img
              src={trilha2Img}
              className="w-full h-48 rounded-t-xl"
              alt="Trilha 2"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-50 mb-3">Trilha 2</h2>
              <p className="text-gray-400 mb-4">Componentes React</p>
              <div className="mt-auto">
                <Link
                  to="/trilha-2"
                  className="block w-full bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Exercícios
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 flex flex-col h-full">
            <img
              src={trilha3Img}
              className="w-full h-48 rounded-t-xl"
              alt="Trilha 3"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-50 mb-3">Trilha 3</h2>
              <p className="text-gray-400 mb-4">Roteamento de telas</p>
              <div className="mt-auto">
                <Link
                  to="/rooms"
                  className="block w-full bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Exercícios
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 flex flex-col h-full">
            <img
              src={trilha4Img}
              className="w-full h-48 rounded-t-xl"
              alt="Trilha 4"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-50 mb-3">Trilha 4</h2>
              <p className="text-gray-400 mb-4">Requisições para API</p>
              <div className="mt-auto">
                <Link
                  to="/trilha-4"
                  className="block w-full bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Exercícios
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-12">
          <button
            onClick={() => navigate("/animal")}
            className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-4 px-6 rounded-full transition-colors"
          >
            http://localhost:5173/animal/(parametroAQUI)
          </button>
        </div>
      </div>
    </div>
  );
}
