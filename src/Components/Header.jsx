import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="nav-header">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="logo-header">
        <a href="#">
          <img src="/images/Landie.png" alt="landing logo" />
        </a>
      </div>
      <div className="action-header">
        <button className="btn-primary">Buy Now</button>
      </div>
    </div>
  );
}
