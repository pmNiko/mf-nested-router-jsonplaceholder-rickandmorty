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
      <h4>Microfrontend JSONPlaceholder</h4>
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
        <NavLink to={pathname + Routes.todos.absolutePath}>
          {Routes.todos.label}
        </NavLink>
        <NavLink to={pathname + Routes.posts.absolutePath}>
          {Routes.posts.label}
        </NavLink>
        <NavLink to={pathname + Routes.comments.absolutePath}>
          {Routes.comments.label}
        </NavLink>
        <NavLink to={pathname + Routes.users.absolutePath}>
          {Routes.users.label}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default CardContent;
