import { NavLink } from "react-router-dom";
import DavidPicture from "../../assets/David.png";
import LinkIn from "../../assets/LinkedIn.svg";
import Facebook from "../../assets/Facebook.svg";
import X from "../../assets/X.svg";
import Instagram from "../../assets/Instagram.svg";
import Youtube from "../../assets/Youtube.svg";

export default function SideBar() {
  return (
    <div className="w-[15.625rem] h-screen py-[2rem] flex flex-col gap-[2.5rem] border-r-1 border-border">
      {/* Profile image and Header */}
      <div className="flex justify-start align-center items-center gap-4">
        <div className="w-[3.5rem] h-[3.5rem]">
          <img
            src={DavidPicture}
            alt="David's profile picture"
            className="w-full h-full"
          />
        </div>
        <p className="text-[1.85rem] font-[700] w-[2rem] leading-[100%] tracking-[-0.03125rem[] text-primary">
          David Okon
        </p>
      </div>
      {/* navigation section */}
      <nav className="flex flex-col gap-[2rem] uppercase text-[1rem] tracking-[0rem] font-[500] text-priGray">
        <div className="flex flex-col gap-[1rem]">
          <NavLink to="/">Children Books</NavLink>
          <NavLink to="/illustration">Illustration</NavLink>
          <NavLink to="/comics">Comics</NavLink>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <NavLink to="/contactandinfo">Contact and Info</NavLink>
          <NavLink to="/affiliate">Affiliate</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
        {/* navigation social media section  */}
        <div className="w-full flex gap-[0.25rem]">
          {/* Linkin Page */}
          <NavLink to="https://www.linkedin.com/in/david-okon-66926a154">
            <img src={LinkIn} alt="linkIn logo" className="w-[2rem] h-[2rem]" />
          </NavLink>
          {/* Facebook Page */}
          <NavLink to="https://web.facebook.com/okon.davidedikan">
            <img
              src={Facebook}
              alt="facebook logo"
              className="w-[2rem] h-[2rem]"
            />
          </NavLink>
          {/* X Page */}
          <NavLink to="https://x.com/avidartdesign">
            <img src={X} alt="twitter logo" className="w-[2rem] h-[2rem]" />
          </NavLink>
          {/* Instagram Page */}
          <NavLink to="https://www.instagram.com/davidokonart?fbclid=IwY2xjawMyjjlleHRuA2FlbQIxMABicmlkETEzR2Q5RjFWR2tmSHcxM1ZEAR7h_vyUFzU5Cb3IKAgUeox5-S85-xQYIrKcqVOT7os6G6qLVSD7lMbHUSwKQQ_aem_zPFLmatI40xbG1cSR0PO6g">
            <img
              src={Instagram}
              alt="instagram logo"
              className="w-[2rem] h-[2rem]"
            />
          </NavLink>
          {/* Youtube page */}
          <NavLink to="https://www.youtube.com/@davidokon">
            <img
              src={Youtube}
              alt="youtube logo"
              className="w-[2rem] h-[2rem]"
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
