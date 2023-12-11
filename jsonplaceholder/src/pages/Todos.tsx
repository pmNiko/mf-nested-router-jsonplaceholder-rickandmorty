import { useLoaderData } from "react-router-dom";
import { TodoResponse } from "../interfaces/JsonPlaceholderApi/Todos";

export default () => {
  const data = useLoaderData() as TodoResponse[];

  return (
    <div>
      <h4>Tareas</h4>

      {data.length > 0 &&
        data.map((tarea) => (
          <li key={tarea.id}>
            Title {tarea.title} -{" "}
            {tarea.completed ? (
              <p style={{ color: "green" }}>v</p>
            ) : (
              <p style={{ color: "red" }}>x</p>
            )}
          </li>
        ))}
    </div>
  );
};
