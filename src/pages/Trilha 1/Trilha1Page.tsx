import Button from "./Button/Button";
import Card from "./Card/Card";
import Gallery from "./Gallery/Gallery";
import Navbar from "./Navbar/Navbar";
import ContactForm from "./ContactForm/ContactForm";

export default function Trilha1Page() {
  return (
    <div className="min-h-screen bg-gray-950 m-0 p-0">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Button</h2>
          <Button text="lalalalá" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Card</h2>
          <Card />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente Gallery</h2>
          <Gallery />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-50 mb-4">Componente ContactForm</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}