"use client";
import comics from "@/app/data/comics";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ComicsPage() {
  const router = useRouter();
  return (
    <>
      <div className="w-full lg:columns-3 columns-1 space-y-4">
        {comics.map((book) => {
          if (!book) return null;
          return (
            <Link
              key={book.id}
              href={book.destination}
              className="flex-col space-y-2 group block overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={book.img}
                alt={book.title}
                className="object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
