"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

type MobileNavProps = {
  active?: string;
  onSelect?: (href: string) => void;
};

export default function MobileNavbar({
  active,
  onSelect = () => {},
}: MobileNavProps) {
  const [menu, setMenu] = useState(false);
  const pathnameFromHook = usePathname();
  const pathname = active ?? pathnameFromHook;

  // utility function to apply active style
  const linkClasses = (href: string) => {
    return `mobileNavbartextLink ${
      pathname === href
        ? "text-[var(--gray)]"
        : "text-[var(--darkblack)] hover:text-[var(--darkblack)]"
    }`;
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="relative w-full flex justify-between items-center p-3 overflow-x-hidden">
      <img
        src="/David.png"
        alt="David's Profile Picture"
        className="w-10 h-10"
      />
      {menu ? (
        <RiCloseLargeLine
          onClick={toggleMenu}
          className="w-6 h-6 font-bold z-20"
        />
      ) : (
        <MdOutlineMenu
          onClick={toggleMenu}
          className="w-6 h-6 font-bold z-20"
        />
      )}
      {/* Menu over Section */}
      <div
        className={`fixed z-10 h-screen top-0 bottom-0 right-0 w-[250px] bg-[#0B0D17]/15 backdrop-blur-[80px] transform transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          {/* Navigation section one*/}
          <div className="flex flex-col gap-2 text-[1.35rem] font-[550] mt-24 pl-10">
            <Link
              href="/"
              className={linkClasses("/")}
              onClick={() => {
                onSelect("/comics");
                setMenu(false);
              }}
            >
              Children Books
            </Link>
            <Link
              href="/illustration"
              className={linkClasses("/illustration")}
              onClick={() => {
                onSelect("/comics");
                setMenu(false);
              }}
            >
              Illustration
            </Link>
            <Link
              href="/comics"
              className={linkClasses("/comics")}
              onClick={() => {
                onSelect("/comics");
                setMenu(false);
              }}
            >
              Comics
            </Link>
          </div>
          {/* Navigation section two*/}
          <div className="flex flex-col gap-2 text-[1.35rem] font-[550] pl-10">
            <Link
              href="/contact_Info"
              className={linkClasses("/contact_Info")}
              onClick={() => {
                onSelect("/contact_Info");
                setMenu(false);
              }}
            >
              Contact And Info
            </Link>
            <Link
              href="/affiliate"
              className={linkClasses("/affiliate")}
              onClick={() => {
                onSelect("/affiliate");
                setMenu(false);
              }}
            >
              Affiliate
            </Link>
            <Link
              href="/blog"
              className={linkClasses("/blog")}
              onClick={() => {
                onSelect("/blog");
                setMenu(false);
              }}
            >
              Blog
            </Link>
            <button
              onClick={() => {
                onSelect("/blog");
                setMenu(false);
              }}
              className={`${linkClasses("/blog")} navButton`}
            ></button>
          </div>
          {/* Social media Handle */}
          <div className="flex justify-start items-center gap-2 pl-10">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/david-okon-66926a154"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mobileNavbarIcon" />
            </Link>
            {/* Facebook */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaSquareFacebook className="mobileNavbarIcon" />
            </Link>
            {/* Instagram */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram className="mobileNavbarIcon" />
            </Link>
            {/* Twitter */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="mobileNavbarIcon" />
            </Link>
            {/* Youtube */}
            <Link href="" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="mobileNavbarIcon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
