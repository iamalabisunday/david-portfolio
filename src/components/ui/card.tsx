import { NavLink } from "react-router-dom";

type CardProps = {
  img: string;
  logo?: string;
  logoText?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function Card({
  img,
  logo,
  logoText,
  title,
  description,
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div className="lg:max-w-[22rem] w-full h-auto border-1 border-border">
      {/* Image Section */}
      <div className="w-full">
        <img src={img} alt="Affiliate image" className="object-cover w-full" />
      </div>
      {/* content Section */}
      <div className="w-full py-[1.5rem] px-[1rem] rounded-b-[8px] flex flex-col gap-[0.5rem]">
        {logo ? (
          <img
            src={logo}
            alt="AEJuice Logo"
            className="w-[5rem] flex items-start justify-start"
          />
        ) : (
          <span className="text-[1rem] tracking-[0.0625rem] font-[550]">
            {logoText}
          </span>
        )}
        <p className="text-[1.5rem]">{title}</p>
        <p className="text-[1.25rem] text-priGray">{description}</p>
        <div className="w-full flex justify-end hover:text-priGray cursor-pointer transition-all duration-300">
          <NavLink to={buttonLink} className="flex">
            <p>{buttonText}</p>
            <span className="material-symbols-outlined">chevron_right</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
