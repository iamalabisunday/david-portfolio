"use client";
import { useRouter } from "next/navigation";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import childrenBooks, { Book } from "../data/childrenbooks";

export default function Publish({ id }: { id: number }) {
  const router = useRouter();

  // Find the current book using the ID
  const currentIndex = childrenBooks.findIndex((book) => book.id === id);

  // Safety: If ID not found
  if (currentIndex === -1) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-[var(--typography)] text-lg">
        Book not found.
      </div>
    );
  }

  const currentBook = childrenBooks[currentIndex];

  // Handlers for navigation
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % childrenBooks.length;
    const nextBook = childrenBooks[nextIndex];
    if (nextBook.destination) router.push(nextBook.destination);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + childrenBooks.length) % childrenBooks.length;
    const prevBook = childrenBooks[prevIndex];
    if (prevBook.destination) router.push(prevBook.destination);
  };

  return (
    <div className="w-full h-screen flex gap-4 lg:flex-row flex-col">
      {/* Image Section */}
      <div className="relative lg:flex-1 lg:w-[75%] h-fit flex flex-col">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[var(--border)] hover:bg-[var(--primary)] text-white p-2 rounded-full cursor-pointer z-10"
        >
          <IoIosArrowBack size={30} />
        </button>

        {/* Next Button */}
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

      {/* Side Content Section */}
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
