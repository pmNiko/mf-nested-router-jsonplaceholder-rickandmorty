import { createBrowserRouter } from "react-router-dom";
import { CardContent, Characters, Home } from "../components";
import { loaderCharacters } from "../components/Characters";

export const router = createBrowserRouter([
  {
    path: "shell/characters",
    element: <CardContent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all",
        element: <Characters />,
        loader: loaderCharacters,
      },
    ],
  },
]);
