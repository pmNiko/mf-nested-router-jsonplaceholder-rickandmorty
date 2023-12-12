import { NavLink } from "react-router-dom";
import { Routes } from "../../router";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="links">
      <NavLink className="nav-links" to={Routes.index.routerPath}>
        {Routes.index.label}
      </NavLink>

      <NavLink className="nav-links" to={Routes.jsonplaceholder.absolutePath}>
        {Routes.jsonplaceholder.label}
      </NavLink>

      <NavLink className="nav-links" to={Routes.rickAndMorty.absolutePath}>
        {Routes.rickAndMorty.label}
      </NavLink>
    </div>
  );
};
