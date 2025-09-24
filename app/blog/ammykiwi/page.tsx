import Blogs from "@/app/blog/page";

export default function AmmyKiwi() {
  return (
    <div className="w-full lg:min-h-screen flex lg:flex-row flex-col">
      <div className="flex-1"></div>
      <div className="w-full lg:w-[20rem]  lg:border-l-1 pl-4 lg:border-[var(--border)]  ">
        <span className="lg:absolute w-full mb-0 py-2 text-[1rem] fixed font-bold bg-white lg:top-0">
          For More;
        </span>
        <div className="flex flex-col gap-2 overflow-y-auto lg:py-4 pt-12">
          <Blogs />
          <Blogs />
        </div>
      </div>
    </div>
  );
}
