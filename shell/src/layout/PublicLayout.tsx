import { NavLink, Outlet } from "react-router-dom";
import { Routes } from "../router";
import "./PublicLayout.css";

export const PublicLayout = () => {
  return (
    <div className="container">
      <div className="menu">
        <p>Menu</p>
        <div className="links">
          <NavLink className="nav-links" to={Routes.index.routerPath}>
            {Routes.index.label}
          </NavLink>

          <NavLink
            className="nav-links"
            to={Routes.jsonplaceholder.absolutePath}
          >
            {Routes.jsonplaceholder.label}
          </NavLink>

          <NavLink className="nav-links" to={Routes.rickAndMorty.absolutePath}>
            {Routes.rickAndMorty.label}
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
