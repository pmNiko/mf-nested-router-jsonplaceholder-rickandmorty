import { useLoaderData } from "react-router-dom";
import { UserResponse } from "../interfaces/JsonPlaceholderApi/Users";

export default () => {
  const data = useLoaderData() as UserResponse[];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "2em",
          borderRadius: "5%",
          boxShadow: "2px 5px 2px 5px rgba(0, 0, 0, 0.2)",
          width: "350px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h4>Usuarios</h4>
        {data.length > 0 &&
          data.map(({ id, name, email, phone }) => (
            <li
              key={id}
              style={{
                textAlign: "left",
                width: "280px",
                marginLeft: "2em",
                marginBottom: "1em",
                marginTop: "1em",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Nombre: {name}</span>
              <br />
              <span style={{ paddingLeft: "1.4em" }}>Email: {email}</span>
              <br />
              <span style={{ paddingLeft: "1.4em" }}>Teléfono: {phone}</span>
            </li>
          ))}
      </div>
    </div>
  );
};
