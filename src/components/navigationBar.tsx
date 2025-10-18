"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function NavBar() {
  const pathname = usePathname() || "/";

  const linkClasses = (href: string) =>
    `navbartextLink ${
      pathname === href
        ? "text-[var(--darkblack)]"
        : "text-[var(--gray)] hover:text-[var(--darkblack)]"
    }`;

  return (
    <div className="w-full h-full py-5 flex flex-col gap-8 text-[var(--gray)] border-r border-[var(--border)]">
      {/* Profile section */}
      <div className="w-full flex items-center gap-4">
        <img src="/David.png" alt="David's Profile Picture" />
        <p className="w-20 font-bold text-3xl leading-[1.75rem] text-[var(--primary)]">
          David Okon
        </p>
      </div>

      {/* Navigation section one */}
      <div className="w-full flex flex-col gap-2 text-[1.25rem] font-[550] mt-3">
        <Link href="/" className={linkClasses("/")}>
          Children Books
        </Link>
        <Link href="/illustration" className={linkClasses("/illustration")}>
          Illustration
        </Link>
        <Link href="/comics" className={linkClasses("/comics")}>
          Comics
        </Link>
      </div>

      {/* Navigation section two */}
      <div className="flex flex-col gap-2 text-[1.25rem] font-[550]">
        <Link href="/contact_Info" className={linkClasses("/contact_Info")}>
          Contact And Info
        </Link>
        <Link href="/affiliate" className={linkClasses("/affiliate")}>
          Affiliate
        </Link>
        <Link href="/blog" className={linkClasses("/blog")}>
          Blog
        </Link>
      </div>

      {/* Social media */}
      <div className="w-full flex justify-start items-center gap-2">
        <a
          href="https://www.linkedin.com/in/david-okon-66926a154"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="navbarIcon" />
        </a>
        <a
          href="https://web.facebook.com/okon.davidedikan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook className="navbarIcon" />
        </a>
        <a
          href="https://www.instagram.com/davidokonart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram className="navbarIcon" />
        </a>
        <a
          href="https://x.com/avidartdesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="navbarIcon" />
        </a>
        <a
          href="https://www.youtube.com/@davidokon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="navbarIcon" />
        </a>
      </div>
    </div>
  );
}
