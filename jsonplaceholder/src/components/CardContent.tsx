import { NavLink, Outlet } from "react-router-dom";

const CardContent = ({ pathname }: { pathname: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h4>Microfrontend Blog</h4>
      <NavLink
        style={{ marginBottom: "1em" }}
        to={`${pathname}/jsonplaceholder`}
      >
        Home
      </NavLink>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <NavLink to={`${pathname}/jsonplaceholder/todos`}>Tareas</NavLink>
        <NavLink to={`${pathname}/jsonplaceholder/posts`}>Posts</NavLink>
        <NavLink to={`${pathname}/jsonplaceholder/comments`}>
          Comentarios
        </NavLink>
        <NavLink to={`${pathname}/jsonplaceholder/users`}>Usuarios</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default CardContent;
