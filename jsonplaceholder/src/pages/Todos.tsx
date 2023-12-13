import { useLoaderData } from "react-router-dom";
import { TodoResponse } from "../interfaces/JsonPlaceholderApi/Todos";

export default () => {
  const data = useLoaderData() as TodoResponse[];

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
        <h4>Tareas</h4>

        {data.length > 0 &&
          data.map(({ id, title, completed }) => (
            <div
              key={id}
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1em",
              }}
            >
              <p
                style={{
                  width: "340px",
                  textAlign: "left",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {title}
              </p>
              <div>
                {completed ? (
                  <p
                    style={{
                      background: "green",
                      borderRadius: "50%",
                      width: "1.15em",
                      height: "1.2em",
                      boxShadow: "2px 3px 2px 2px rgba(0, 0, 0, 0.2)",
                      color: "white",
                      fontSize: "1.1em",
                      fontWeight: "bold",
                      paddingBottom: "1px",
                    }}
                  >
                    v
                  </p>
                ) : (
                  <p
                    style={{
                      background: "red",
                      borderRadius: "50%",
                      width: "1.15em",
                      height: "1.2em",
                      boxShadow: "2px 3px 2px 2px rgba(0, 0, 0, 0.2)",
                      color: "white",
                      fontSize: "1.1em",
                      fontWeight: "bold",
                      paddingBottom: "1px",
                    }}
                  >
                    x
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
