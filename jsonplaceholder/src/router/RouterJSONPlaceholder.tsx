import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardContent, Home } from "../components";
import {
  loaderComments,
  loaderPosts,
  loaderTodos,
  loaderUsers,
} from "../loaders";

const Posts = lazy(() => import("../pages/Posts"));
const Todos = lazy(() => import("../pages/Todos"));
const Comments = lazy(() => import("../pages/Comments"));
const Users = lazy(() => import("../pages/Users"));

const RouterJSONPlaceholder = ({ pathname = "" }: { pathname?: string }) => {
  const router = createBrowserRouter([
    {
      path: `${pathname}/jsonplaceholder`,
      element: <CardContent pathname={pathname} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "todos",
          loader: loaderTodos,
          element: <Todos />,
        },
        {
          path: "posts",
          loader: loaderPosts,
          element: <Posts />,
        },
        {
          path: "comments",
          loader: loaderComments,
          element: <Comments />,
        },
        {
          path: "users",
          loader: loaderUsers,
          element: <Users />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterJSONPlaceholder;
