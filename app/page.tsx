"use client";
import ChildrenBooks from "./data/childrenbooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="w-full lg:columns-3 columns-1 space-y-4">
        {[...ChildrenBooks.slice(3), ...ChildrenBooks.slice(0, 3)].map(
          (book) => {
            if (!book) return null;
            return (
              <Link
                key={book.id}
                href={book.destination}
                className="flex flex-col space-y-2 cursor-pointer"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="object-cover rounded"
                />
              </Link>
            );
          }
        )}
      </div>
    </>
  );
}
