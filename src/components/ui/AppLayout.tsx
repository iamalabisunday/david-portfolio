import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

export default function AppLayout() {
  return (
    <div>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
