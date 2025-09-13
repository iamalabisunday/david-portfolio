import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

export default function AppLayout() {
  return (
    <div className="flex px-[2rem] h-screen gap-8">
      <div className="w-[15.625rem] ">
        <SideBar />
      </div>
      <main className="flex-1 py-[2rem] overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}
