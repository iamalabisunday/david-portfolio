import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Card({
  img,
  logo,
  title,
  message,
  link,
  heading,
  more,
}: {
  img: string;
  logo?: string;
  title: string;
  message: string;
  link?: string;
  heading?: string;
  more?: string;
}) {
  return (
    <div className="max-w-[300px] border-1 border-[var(--border)] rounded-[0.5rem]">
      <img src={img} alt="Affiliate Post" />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          {logo ? (
            <img src={logo} alt="logo" className="w-[4rem]" />
          ) : (
            `${heading}`
          )}

          <p className="text-[1.25rem] font-[600]">{title}</p>
        </div>
        <p className="text-[1rem]">{message}</p>
        <div className="w-full flex justify-end">
          <div className="w-fill flex justify-center items-center gap-1 cursor-pointer">
            {link ? (
              <Link
                href="https://aejuice.com/?ref=DavidOkon"
                className="text-[0.85rem] hover:underline"
                target="_blank"
              >
                {link}
              </Link>
            ) : (
              <span className="text-[0.85rem]">{more}</span>
            )}

            <IoIosArrowForward className="tracking-0 text-[0.85rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
