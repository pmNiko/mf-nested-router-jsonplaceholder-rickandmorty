import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardContent } from "../components";
import {
  loaderComments,
  loaderPosts,
  loaderTodos,
  loaderUsers,
} from "../loaders";
import { Routes } from "./index";
import Home from "../pages/Home";

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
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Todos />,
              </Suspense>
            ),
          },
          {
            path: Routes.posts.routerPath,
            loader: loaderPosts,
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Posts />,
              </Suspense>
            ),
          },
          {
            path: Routes.comments.routerPath,
            loader: loaderComments,
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Comments />,
              </Suspense>
            ),
          },
          {
            path: Routes.users.routerPath,
            loader: loaderUsers,
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Users />,
              </Suspense>
            ),
          },
        ],
      },
    ],
    { basename: import.meta.env.VITE_BASENAME_JSONPLACEHOLDER }
  );
  return <RouterProvider router={router} />;
};

export default RouterJSONPlaceholder;
