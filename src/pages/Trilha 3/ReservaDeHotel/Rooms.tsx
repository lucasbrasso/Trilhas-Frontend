import { Link } from "react-router-dom";
import Navbar from "../../Trilha 1/Navbar/Navbar";

const sampleRooms = [
  { id: "1", name: "Quarto 1", price: 150 },
  { id: "2", name: "Quarto 2", price: 250 },
  { id: "3", name: "Quarto Premium", price: 500 },
];

export default function Rooms() {
  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className=" bg-gray-900 rounded-xl border border-gray-700 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-50 mb-6">
            Reservas de Hotel
          </h2>
          <ul className="space-y-4">
            {sampleRooms.map((room) => (
              <li
                key={room.id}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex justify-between items-center"
              >
                <div>
                  <span className="text-gray-50 font-medium">{room.name}</span>
                  <span className="text-gray-400 ml-2">
                    - R$ {room.price.toFixed(2)}/noite
                  </span>
                </div>
                <Link
                  to={`/rooms/${room.id}`}
                  className="bg-gray-50 hover:bg-gray-200 text-gray-950 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Ver Detalhes
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
