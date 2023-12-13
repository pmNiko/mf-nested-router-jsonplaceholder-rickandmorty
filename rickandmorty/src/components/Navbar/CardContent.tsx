import { NavLink, Outlet } from "react-router-dom";
import { Routes } from "../../router";
import "./CardContainer.css";

const CardContent = ({ pathname }: { pathname: string }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2em",
      }}
    >
      <h4
        style={{
          marginBottom: "2em",
        }}
      >
        Microfrontend JSONPlaceholder
      </h4>

      <div className="nav-links-placeholder">
        <NavLink
          className="custom-nav-link"
          to={pathname + Routes.index.routerPath}
        >
          {Routes.index.label}
        </NavLink>
        <br />
        <br />
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginBottom: "2em",
          }}
        >
          <NavLink
            className="custom-nav-link"
            to={pathname + Routes.characters.absolutePath}
          >
            {Routes.characters.label}
          </NavLink>
          <NavLink
            className="custom-nav-link"
            to={pathname + Routes.episodes.absolutePath}
          >
            {Routes.episodes.label}
          </NavLink>
          <NavLink
            className="custom-nav-link"
            to={pathname + Routes.locations.absolutePath}
          >
            {Routes.locations.label}
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default CardContent;
