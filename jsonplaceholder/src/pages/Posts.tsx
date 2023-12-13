import { useLoaderData } from "react-router-dom";
import { PostResponse } from "../interfaces/JsonPlaceholderApi/Posts";

export default () => {
  const data = useLoaderData() as PostResponse[];

  if (data.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        <h4>Posts</h4>

        {data.map((post) => (
          <li
            key={post.id}
            style={{
              textAlign: "left",
              width: "280px",
              marginBottom: "1em",
              marginLeft: "2em",
              marginTop: "1em",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Usuario {post.userId}</span>
            <br />
            <span style={{ fontSize: "0.8em" }}>{post.title}</span>
          </li>
        ))}
      </div>
    </div>
  );
};
