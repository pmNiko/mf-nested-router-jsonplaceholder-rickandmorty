import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardContent, Home } from "../components";

const RickAndMortyRouter = ({ pathname = "" }: { pathname?: string }) => {
  const router = createBrowserRouter([
    {
      path: `${pathname}/rickandmorty`,
      element: <CardContent pathname={pathname} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RickAndMortyRouter;
