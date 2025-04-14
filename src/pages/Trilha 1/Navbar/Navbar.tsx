import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/" className="nav-link">Sobre</a>
          </li>
          <li>
            <a href="/" className="nav-link">Gatos</a>
          </li>
          <li>
            <a href="/" className="nav-link">Pokemons</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
