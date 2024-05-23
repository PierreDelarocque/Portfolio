import { NavLink, Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/projet">Projets</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <header className="header-container">
        <h1 className="titre-h1">Mon Portefolio</h1>
        <div>
          <h6>none</h6>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
