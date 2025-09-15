// import { Navlink } from "react-router-dom";
import Affiliate from "@/assets/affiliate/affiliate.png";
import AELogo from "@/assets/affiliate/AEJuice.svg";

export default function Card() {
  return (
    <div className="lg:max-w-[22rem] w-full h-auto border-1 border-border">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={Affiliate}
          alt="Affiliate image"
          className="object-cover w-full"
        />
      </div>
      {/* content Section */}
      <div className="w-full py-[1.5rem] px-[1rem] rounded-b-[8px] flex flex-col gap-[0.5rem]">
        <img
          src={AELogo}
          alt="AEJuice Logo"
          className="w-[5rem] flex items-start justify-start"
        />
        <p className="text-[1.5rem]">Bring your art to life</p>
        <p className="text-[1.25rem] text-priGray">
          AEJuice gives you powerful tools and effects to animate faster, create
          better, and wow your audience.
        </p>
        <div className="w-full flex justify-end hover:text-priGray cursor-pointer transition-all duration-300">
          <p>Get AEJuice Now</p>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </div>
  );
}
