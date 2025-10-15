"use client";
import Blogs from "../app/blog/page";

export default function Weblog({
  image,
  title,
  message,
}: {
  image: string;
  title: string;
  message: string;
}) {
  return (
    <div className="w-full lg:min-h-screen flex lg:flex-row flex-col">
      {/* Main Blog Section */}
      <div className="w-fit flex flex-col gap-2 mr-4 overflow-scroll text-[1.10rem] text-[var(--typography)] font-[400] leading-[1.85rem]">
        <img src={image} alt="AmmyKiwi.jpg" className="w-fit h-[25rem]" />
        <span className="text-2xl font-bold text-[var(--primary)] ">
          {title}
        </span>
        {message}
      </div>
      {/* For More Section */}
      <div className="w-full lg:w-[20rem] min-h-screen lg:border-l-1 pl-4 lg:border-[var(--border)]  ">
        <span className="lg:absolute w-[17rem] mb-0 py-2 text-[1rem] fixed font-bold bg-white lg:top-0">
          For More;
        </span>
        <div className="flex lg:flex-col flex-col md:flex-row gap-2 overflow-y-auto lg:py-4 pt-12">
          <Blogs />
        </div>
      </div>
    </div>
  );
}
