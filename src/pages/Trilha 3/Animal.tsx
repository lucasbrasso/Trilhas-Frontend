import { useParams } from "react-router-dom";
import Navbar from "../Trilha 1/Navbar/Navbar";

export default function Animal() {
  const { name } = useParams();

  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <div className="pb-20">
        <Navbar />
      </div>
      <div className="bg-gray-900 rounded-xl border border-gray-700 transition-all duration-300 flex flex-col">
        <h2 className="mx-auto px-4 py-20 text-gray-50 text-center">
          lembre-se de passar o parametro depois do "animal/(parametro)"
        </h2>
        <h2 className="mx-auto pb-12 px-4 text-gray-50 text-center">
          Animal: <strong>{name}</strong>
        </h2>
      </div>
    </div>
  );
}
