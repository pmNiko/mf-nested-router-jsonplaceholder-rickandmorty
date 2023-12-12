import { Outlet } from "react-router-dom";
import "./PublicLayout.css";
import { Sidebar } from "../components";

export const PublicLayout = () => {
  return (
    <div className="grid">
      <div className="grid__item header">App Shell</div>
      <div className="grid__item sidebar">
        <Sidebar />
      </div>
      <div className="grid__item main">
        <h5>Render del microfrontend</h5>

        <Outlet />
      </div>
    </div>
  );
};
