import "../styles/navbar.css";
export default function Navbar() {
  return (
    <header>
      <h2>Trip</h2>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <p className="log-in">Log in</p>
    </header>
  );
}
