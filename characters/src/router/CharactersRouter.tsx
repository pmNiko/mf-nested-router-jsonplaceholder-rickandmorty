import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const CharactersRouter = () => {
  return <RouterProvider router={router} />;
};

export default CharactersRouter;
