import { NavLink, Outlet } from "react-router-dom";
import "./PublicLayout.css";

export const PublicLayout = () => {
  return (
    <div className="container">
      <div className="menu">
        <p>Menu</p>
        <div className="links">
          <NavLink className="nav-links" to="/shell">
            Shell
          </NavLink>

          <NavLink className="nav-links" to="/shell/blog/home">
            Blog
          </NavLink>

          <NavLink className="nav-links" to="/shell/characters">
            Characters
          </NavLink>
        </div>
      </div>

      <div className="header">Header de la pagina</div>

      <div className="main">
        <h5>Render del microfrontend</h5>

        <Outlet />
      </div>
    </div>
  );
};
