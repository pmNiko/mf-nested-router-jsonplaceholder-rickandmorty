import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import Home from "../pages/Home";
import { Routes } from "./index";

const RouterJSONPlaceholder = lazy(
  () => import("mf-jsonplaceholder/RouterJSONPlaceholder")
);
const RickAndMortyRouter = lazy(
  () => import("mf-rickandmorty/RickAndMortyRouter")
);

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
          element: (
            <Suspense fallback={<p>Cargando...</p>}>
              <RouterJSONPlaceholder pathname={Routes.index.routerPath} />,
            </Suspense>
          ),
        },
        {
          path: Routes.rickAndMorty.routerPath,
          element: (
            <Suspense fallback={<p>Cargando...</p>}>
              <RickAndMortyRouter pathname={Routes.index.routerPath} />,
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASENAME_SHELL,
  }
);
