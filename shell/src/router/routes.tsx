import { NavLink, createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import { lazy } from "react";

const Blog = lazy(() => import("blog/Blog"));
const Characters = lazy(() => import("characters/Characters"));

export const router = createBrowserRouter([
  {
    path: "/shell",
    element: <PublicLayout />,
    children: [
      {
        path: "blog/*",
        element: <Blog pathname="shell" />,
      },
      {
        path: "characters/*",
        element: <Characters />,
      },
    ],
  },
]);
