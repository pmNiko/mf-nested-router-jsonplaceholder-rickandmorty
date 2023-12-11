import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { CardContent, Episodes, Home } from "../components";
import { loaderEpisodes } from "../components/Episodes";

const RouterBlog = ({ pathname }: { pathname: string }) => {
  // const pathname = "shell";

  const router = createBrowserRouter([
    {
      path: `${pathname}/blog`,
      element: <CardContent />,
      children: [
        {
          path: "home",
          element: <Home pathname={pathname} />,
        },
        {
          path: "episodes",
          element: <Episodes pathname={pathname} />,
          loader: loaderEpisodes,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterBlog;
