import { Outlet } from "react-router-dom";

const CardContent = () => {
  return (
    <div>
      <h4>Microfrontend Blog</h4>
      <Outlet />
    </div>
  );
};

export default CardContent;
