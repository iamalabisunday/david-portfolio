"use client";
import { useRouter } from "next/navigation";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Book } from "../data/childrenbooks";

type PublishProps = {
  id: number;
  books: Book[];
};

export default function Publish({ id, books }: PublishProps) {
  const router = useRouter();

  const currentIndex = books.findIndex((book) => book.id === id);
  if (currentIndex === -1) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-[var(--typography)] text-lg">
        Book not found.
      </div>
    );
  }

  const currentBook = books[currentIndex];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % books.length;
    const nextBook = books[nextIndex];
    if (nextBook.destination) router.push(nextBook.destination);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + books.length) % books.length;
    const prevBook = books[prevIndex];
    if (prevBook.destination) router.push(prevBook.destination);
  };

  return (
    <div className="w-full h-screen flex gap-4 lg:flex-row flex-col">
      {/* Image Section */}
      <div className="relative lg:flex-1 lg:w-[75%] h-fit flex flex-col">
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[var(--border)] hover:bg-[var(--primary)] text-white p-2 rounded-full cursor-pointer z-10"
        >
          <IoIosArrowBack size={30} />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[var(--border)] hover:bg-[var(--primary)] text-white p-2 rounded-full cursor-pointer z-10"
        >
          <MdNavigateNext size={30} />
        </button>

        <img
          src={currentBook.image}
          alt={currentBook.title}
          className="max-w-[65%] mx-auto"
        />
      </div>

      <div className="lg:w-[20rem]">
        <div className="w-full h-full lg:border-l border-[var(--border)] px-4 flex flex-col gap-2">
          <span className="text-[1.45rem] text-[var(--primary)] font-bold">
            {currentBook.title}
          </span>
          <div className="text-[1.10rem] text-[var(--typography)] font-[400] leading-[1.85rem] flex flex-col gap-2">
            {currentBook.message}
            <div>{currentBook.paragraph}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
