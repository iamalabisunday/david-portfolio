"use client";
import ChildrenBooks from "./data/childrenbooks";
import Interiors from "./data/Interior";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      {/* ✅ Children's books cover */}
      <span className="w-full text-2xl font-[500] text-[var(--typography)]">
        Children&apos;s Books Cover
      </span>
      <div className="w-full lg:columns-3 columns-1 space-y-4 md:pb-10 pb-2">
        {[...ChildrenBooks.slice(3), ...ChildrenBooks.slice(0, 3)].map(
          (book) => {
            if (!book) return null;
            return (
              <Link
                key={book.id}
                href={book.destination || "#"}
                className="flex-col space-y-2 group block overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
                />
              </Link>
            );
          }
        )}
      </div>
      {/* ✅ Interior illustrations section */}
      <span className="w-full text-2xl font-[500] text-[var(--typography)] bg-redd-900">
        Interior Illustrations
      </span>
      <div className="w-full lg:columns-3 columns-1 space-y-4 border-t-1 border-[var(--border)] md:pt-10 pt-2">
        {[...Interiors.slice(3), ...Interiors.slice(0, 3)].map((book) => {
          if (!book) return null;
          return (
            <div
              key={book.id}
              className="flex-col space-y-2 group block overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
