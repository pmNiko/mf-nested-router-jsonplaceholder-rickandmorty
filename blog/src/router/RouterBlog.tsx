import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const RouterBlog = () => {
  return <RouterProvider router={router} />;
};

export default RouterBlog;
