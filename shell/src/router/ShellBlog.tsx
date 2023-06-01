import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const ShellRouter = () => {
  return <RouterProvider router={router} />;
};

export default ShellRouter;
