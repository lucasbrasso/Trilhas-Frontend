import { Link } from "react-router-dom";
import Navbar from "../../Trilha 1/Navbar/Navbar";

export function BookingSuccess() {
  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-gray-900 rounded-xl border border-gray-700 p-8 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-50 mb-4">
          Reserva Confirmada!
        </h1>
        <p className="text-gray-400 mb-6">
          Sua reserva foi realizada com sucesso.
        </p>
        <Link
          to="/rooms"
          className="inline-block bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Voltar para Quartos
        </Link>
      </div></div>
    </div>
  );
}
