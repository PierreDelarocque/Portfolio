import { NavLink, Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <header className="header-container">
        <h1 className="titre-h1">Mon Portefolio</h1>
      </header>
      <nav>
        <NavLink to="/">Portfolio</NavLink>
        <NavLink to="/projet">Projets</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
