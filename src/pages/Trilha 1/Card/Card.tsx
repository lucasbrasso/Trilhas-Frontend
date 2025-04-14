import './Card.css';
import trilha1Img from '../../../assets/trilha-1.webp';

export default function Card() {
  return (
    <div className="custom-card">
      <img
        src={trilha1Img}
        className="custom-card-image"
        alt="Trilha 1"
      />
      <div className="custom-card-content">
        <h2 className="custom-card-title">Titulo</h2>
        <p className="custom-card-description">
          Descricao
        </p>
      </div>
    </div>
  );
}