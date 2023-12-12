import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardContent, Home } from "../components";
import {
  loaderComments,
  loaderPosts,
  loaderTodos,
  loaderUsers,
} from "../loaders";
import { Routes } from "./index";

const Posts = lazy(() => import("../pages/Posts"));
const Todos = lazy(() => import("../pages/Todos"));
const Comments = lazy(() => import("../pages/Comments"));
const Users = lazy(() => import("../pages/Users"));

const RouterJSONPlaceholder = ({ pathname = "" }: { pathname?: string }) => {
  const router = createBrowserRouter(
    [
      {
        path: pathname + Routes.index.routerPath,
        element: <CardContent pathname={pathname} />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: Routes.todos.routerPath,
            loader: loaderTodos,
            element: <Todos />,
          },
          {
            path: Routes.posts.routerPath,
            loader: loaderPosts,
            element: <Posts />,
          },
          {
            path: Routes.comments.routerPath,
            loader: loaderComments,
            element: <Comments />,
          },
          {
            path: Routes.users.routerPath,
            loader: loaderUsers,
            element: <Users />,
          },
        ],
      },
    ],
    { basename: "" }
  );
  return <RouterProvider router={router} />;
};

export default RouterJSONPlaceholder;
