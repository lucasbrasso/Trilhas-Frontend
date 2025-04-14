import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Erro from "./pages/Erro";

import Trilha1Page from "./pages/Trilha 1/Trilha1Page"
import Trilha2Page from "./pages/Trilha 2/Trilha2Page"

import Animal from "./pages/Trilha 3/Animal";
import { RoomDetails } from "./pages/Trilha 3/ReservaDeHotel/RoomDetails";
import { BookingSuccess } from "./pages/Trilha 3/ReservaDeHotel/BookingSucess";
import Rooms  from "./pages/Trilha 3/ReservaDeHotel/Rooms";

import Trilha4Page  from "./pages/Trilha 4/Trilha4Page";
import { BuscarUsuario } from "./pages/Trilha 4/BuscarUsuario";
import { CadastrarUsuario } from "./pages/Trilha 4/CadastrarUsuario";

import './App.css'

export default function App() {
  {/* troquei o home, about e contact pelas paginas das trilhas */}
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Erro />} />

        <Route path="/trilha-1" element={<Trilha1Page />} />
        <Route path="/trilha-2" element={<Trilha2Page />} />
        <Route path="/trilha-4" element={<Trilha4Page />} />

        {/* trilha 3 */}
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />

        <Route path="/buscar" element={<BuscarUsuario />} />
        <Route path="/cadastrar" element={<CadastrarUsuario />} />
      </Routes>
    </Router>
  );
}