import { childrenBooksData } from "../data/childrenbooksdata";

export default function ChildrenPage() {
  return (
    <div className="p-6">
      {/* columnGap is set inline for predictable spacing between columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        {childrenBooksData.map((book) => (
          <div key={book.id} className="mb-4">
            <img
              src={book.image}
              alt="Children's book"
              className="w-full h-auto rounded-md block shadow-sm"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
