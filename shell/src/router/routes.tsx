import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import Home from "../pages/Home";
import { Routes } from "./index";

const RouterJSONPlaceholder = lazy(
  () => import("jsonplaceholder/RouterJSONPlaceholder")
);
const Characters = lazy(() => import("characters/Characters"));

export const router = createBrowserRouter(
  [
    {
      path: Routes.index.routerPath,
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: Routes.jsonplaceholder.routerPath,
          element: <RouterJSONPlaceholder pathname={Routes.index.routerPath} />,
        },
        {
          path: Routes.rickAndMorty.routerPath,
          element: <Characters />,
        },
      ],
    },
  ],
  {
    basename: "",
  }
);
