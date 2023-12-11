import { useLoaderData } from "react-router-dom";
import { UserResponse } from "../interfaces/JsonPlaceholderApi/Users";

export default () => {
  const data = useLoaderData() as UserResponse[];

  return (
    <div>
      <h4>Usuarios</h4>

      {data.length > 0 &&
        data.map(({ id, name, email, phone }) => (
          <li key={id}>
            Nombre: {name} - Email: {email} - Teléfono: {phone}
          </li>
        ))}
    </div>
  );
};
