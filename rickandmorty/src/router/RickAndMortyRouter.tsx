import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardContent } from "../components";
import { loaderCharacters, loaderEpisodes, loaderLocations } from "../loaders";
import { Routes } from "./index";
import Home from "../pages/Home";

const Characters = lazy(() => import("../pages/Characters"));
const Episodes = lazy(() => import("../pages/Episodes"));
const Locations = lazy(() => import("../pages/Locations"));

const RickAndMortyRouter = ({ pathname = "" }: { pathname?: string }) => {
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
            path: Routes.characters.routerPath,
            loader: loaderCharacters,
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Characters />,
              </Suspense>
            ),
          },
          {
            path: Routes.episodes.routerPath,
            loader: loaderEpisodes,
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Episodes />,
              </Suspense>
            ),
          },
          {
            path: Routes.locations.routerPath,
            loader: loaderLocations,
            element: (
              <Suspense fallback={<span>Cargando...</span>}>
                <Locations />,
              </Suspense>
            ),
          },
        ],
      },
    ],
    {
      basename: import.meta.env.VITE_BASENAME_RICKANDMORTY,
    }
  );
  return <RouterProvider router={router} />;
};

export default RickAndMortyRouter;
