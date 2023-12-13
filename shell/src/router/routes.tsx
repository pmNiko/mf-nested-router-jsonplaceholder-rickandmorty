import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import Home from "../pages/Home";
import MFJSONPlaceholder from "../parcels/MFJSONPlaceholder";
import MFRickAnndMorty from "../parcels/MFRickAnndMorty";
import { Routes } from "./index";

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
          element: <MFJSONPlaceholder />,
        },
        {
          path: Routes.rickAndMorty.routerPath,
          element: <MFRickAnndMorty />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASENAME_SHELL,
  }
);
