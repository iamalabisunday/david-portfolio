import { NavLink } from "react-router-dom";
import DavidPicture from "../../assets/David.jpg";

export default function SideBar() {
  return (
    <div className="w-[15.625rem] h-screen bg-red-900 p-[2.5rem 1rem 125rem 1rem flex flex-col gap-[2rem]">
      <div className="flex justify-start align-center">
        <img src={DavidPicture} alt="David's profile picture" />
        <p>David Okon</p>
      </div>
      <nav>
        <NavLink to="/">Children</NavLink>
        <NavLink to="/illustration">Illustration</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/affiliate">Affiliate</NavLink>
        <NavLink to="/comics">Comics</NavLink>
        <NavLink to="/contactandinfo">Contact and Info</NavLink>
      </nav>
    </div>
  );
}
