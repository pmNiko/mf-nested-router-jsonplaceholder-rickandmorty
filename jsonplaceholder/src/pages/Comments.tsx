import { useLoaderData } from "react-router-dom";
import { CommentResponse } from "../interfaces/JsonPlaceholderApi/Comments";

export default () => {
  const data = useLoaderData() as CommentResponse[];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {data.length > 0 &&
          data.map(({ id, email, body }) => (
            <div
              key={id}
              style={{
                padding: "2em",
                borderRadius: "5%",
                boxShadow: "2px 5px 2px 5px rgba(0, 0, 0, 0.2)",
                width: "300px",
                height: "170px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                textAlign: "center",
                color: "white",
                margin: "1em",
              }}
            >
              <h4 style={{ fontWeight: "bold" }}>{email}</h4>
              <h5
                style={{
                  maxHeight: "100px",
                  overflow: "hidden",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <p>{body}</p>
              </h5>
            </div>
          ))}
      </div>
    </div>
  );
};
