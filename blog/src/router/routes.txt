import { createBrowserRouter } from "react-router-dom";
import { Home, Episodes, CardContent } from "../components";
import { loaderEpisodes } from "../components/Episodes";

export const router = createBrowserRouter([
  {
    path: "shell/blog",
    element: <CardContent />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "episodes",
        element: <Episodes />,
        loader: loaderEpisodes,
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/shell/blog",
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "episodes",
//         element: <Episodes />,
//         loader: loaderEpisodes,
//       },
//     ],
//   },
// ]);
