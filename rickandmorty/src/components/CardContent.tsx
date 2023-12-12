import { NavLink, Outlet } from "react-router-dom";
import { Routes } from "../router";

const CardContent = ({ pathname }: { pathname: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "2.5em",
      }}
    >
      <h4>Microfrontend Rick and Morty</h4>
      <NavLink
        style={{ marginTop: "2em", marginBottom: "1em" }}
        to={pathname + Routes.index.routerPath}
      >
        {Routes.index.label}
      </NavLink>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginBottom: "2em",
        }}
      >
        <NavLink to={pathname + Routes.characters.absolutePath}>
          {Routes.characters.label}
        </NavLink>
        <NavLink to={pathname + Routes.episodes.absolutePath}>
          {Routes.episodes.label}
        </NavLink>
        <NavLink to={pathname + Routes.locations.absolutePath}>
          {Routes.locations.label}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default CardContent;
