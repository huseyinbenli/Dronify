import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <h1 className="main-header">Dronify</h1>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}
