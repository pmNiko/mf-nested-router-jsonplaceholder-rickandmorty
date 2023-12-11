import { useLoaderData } from "react-router-dom";
import { PostResponse } from "../interfaces/JsonPlaceholderApi/Posts";

export default () => {
  const data = useLoaderData() as PostResponse[];

  return (
    <div>
      <h4>Posts</h4>

      {data.length > 0 &&
        data.map((post) => (
          <li key={post.id}>
            Title {post.title} - User: {post.userId}{" "}
          </li>
        ))}
    </div>
  );
};
