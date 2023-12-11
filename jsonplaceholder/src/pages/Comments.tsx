import { useLoaderData } from "react-router-dom";
import { CommentResponse } from "../interfaces/JsonPlaceholderApi/Comments";

export default () => {
  const data = useLoaderData() as CommentResponse[];

  return (
    <div>
      <h4>Commentarios</h4>

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
            <div key={id} style={{ width: "250px" }}>
              <h4 style={{ maxHeight: "30px" }}>Email: {email}</h4>
              <h5>Mensaje: {body}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};
