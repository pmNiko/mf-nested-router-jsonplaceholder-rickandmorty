import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import Home from "../pages/Home";

const RouterJSONPlaceholder = lazy(
  () => import("jsonplaceholder/RouterJSONPlaceholder")
);
const Characters = lazy(() => import("characters/Characters"));

export const router = createBrowserRouter([
  {
    path: "/shell",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jsonplaceholder/*",
        element: <RouterJSONPlaceholder pathname="shell" />,
      },
      {
        path: "characters/*",
        element: <Characters />,
      },
    ],
  },
]);
