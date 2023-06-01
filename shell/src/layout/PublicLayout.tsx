import { NavLink, Outlet } from "react-router-dom";
import "./PublicLayout.css";

export const PublicLayout = () => {
  return (
    <div className="container">
      <div className="menu">
        <p>Menu</p>
        <div className="links">
          <NavLink to="/shell" style={{ color: "white" }}>
            Shell
          </NavLink>
          <br />
          <br />
          <NavLink to="blog/home" style={{ color: "white" }}>
            Blog
          </NavLink>
          <br />
          <br />
          <NavLink to="characters" style={{ color: "white" }}>
            Characters
          </NavLink>
        </div>
      </div>

      <div className="header">Header de la pagina</div>

      <div className="main">
        <h5>Render del microfrontend</h5>

        <Outlet />
      </div>

      <div className="footer">Footer de la página</div>
    </div>
  );
};
