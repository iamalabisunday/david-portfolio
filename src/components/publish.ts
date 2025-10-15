import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export default function Publish({
  image,
  title,
  message,
  paragraph,
}: {
  image: string;
  title: string;
  message: string;
  paragraph: string;
}) {
  return (
    <div className="w-full h-screen flex gap-4 lg:flex-row flex-col">
      {/* Image Display Section */}
      <div className="relative lg:flex-1 lg:w-[75%] h-fit flex flex-col">
        {/* Next Icon Button Section */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[var(--border)] hover:bg-[var(--primary)] text-white p-2 rounded-full cursor-pointer z-10">
          <MdNavigateNext size={30} />
        </div>
        {/* Previous Icon Button Section */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[var(--border)] hover:bg-[var(--primary)] text-white p-2 rounded-full cursor-pointer z-10">
          <IoIosArrowBack size={30} />
        </div>
        <img src={image} alt={title} className="max-w-[65%] mx-auto" />
      </div>
      {/* Side Content Section */}
      <div className="lg:w-[20rem]">
        <div className="w-full h-full lg:border-l-1 lg:border-[var(--border)] px-4 flex flex-col gap-2">
          <span className="text-[1.45rem] text-[var(--primary)] font-bold">
            {title}
          </span>
          <div className="text-[1.10rem] text-[var(--typography)] font-[400] leading-[1.85rem] flex flex-col gap-2">
            {message}
            <div>{paragraph}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
