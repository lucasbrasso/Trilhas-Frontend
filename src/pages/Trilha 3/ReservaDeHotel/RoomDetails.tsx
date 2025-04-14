import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Trilha 1/Navbar/Navbar";

const roomDetails = {
  "1": {
    name: "Quarto 1",
    description: "Quarto confortável com cama de casal",
  },
  "2": {
    name: "Quarto 2",
    description: "Quarto espaçoso com vista para o mar",
  },
  "3": {
    name: "Quarto Premium",
    description: "Suíte luxuosa com hidromassagem",
  },
};

export function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomDetails[id as keyof typeof roomDetails];

  if (!room) {
    return (
      <div className="bg-gray-900 text-gray-50 p-6 rounded-xl border border-gray-700">
        Quarto não encontrado
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-gray-900 rounded-xl border border-gray-700 p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-50 mb-2">{room.name}</h1>
        <p className="text-gray-400 mb-6">{room.description}</p>
        <button
          onClick={() => navigate("/booking-success")}
          className="w-full bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Reservar Agora
        </button>
      </div></div>
    </div>
  );
}
