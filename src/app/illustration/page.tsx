"use client";
import illustration from "../../data/illustration";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IllustrationPage() {
  const router = useRouter();
  return (
    <>
      <div className="w-full lg:columns-3 columns-1 space-y-4">
        {[...illustration.slice(3), ...illustration.slice(0, 3)].map((book) => {
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
                className="object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
