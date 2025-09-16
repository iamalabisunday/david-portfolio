import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import Menubar from "./menubar";

export default function AppLayout() {
  return (
    <>
      {/* Md and lager screen  */}
      <div className="hidden md:flex px-[2rem] h-screen gap-8 ">
        <div className="w-[15.625rem]">
          <SideBar />
        </div>
        <main className="flex-1 py-[2rem] overflow-y-scroll flex flex-col gap-[2rem]">
          <Outlet />
        </main>
      </div>
      {/* Mobile screen */}
      <div className="md:hidden flex flex-col h-screen p-[1.5rem]">
        <div className="w-full pb-4">
          <Menubar />
        </div>
        <main className="flex-1 py-[0.5rem] overflow-y-scroll flex flex-col gap-[2rem]">
          <Outlet />
        </main>
      </div>
    </>
  );
}
