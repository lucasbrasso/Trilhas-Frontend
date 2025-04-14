import './Gallery.css';
import trilha1Img from "../../../assets/trilha-1.webp";
import trilha2Img from "../../../assets/trilha-2.webp";
import trilha3Img from "../../../assets/trilha-3.webp";
import trilha4Img from "../../../assets/trilha-4.webp";
import cat1 from "../../../assets/404-cat.png";
import cat2 from "../../../assets/404-cat2.png";

export default function Gallery() {
  return (
    <div className="gallery-grid">
      <div className="gallery-item">
        <img src={trilha1Img} alt="Descrição 1" className="gallery-image" />
      </div>
      <div className="gallery-item">
        <img src={trilha2Img} alt="Descrição 2" className="gallery-image" />
      </div>
      <div className="gallery-item">
        <img src={trilha3Img} alt="Descrição 3" className="gallery-image" />
      </div>
      <div className="gallery-item">
        <img src={trilha4Img} alt="Descrição 4" className="gallery-image" />
      </div>
      <div className="gallery-item">
        <img src={cat1} alt="Descrição 5" className="gallery-image" />
      </div>
      <div className="gallery-item">
        <img src={cat2} alt="Descrição 6" className="gallery-image" />
      </div>
    </div>
  );
}
