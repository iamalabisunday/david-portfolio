import { childrenBooksData } from "../data/childrenbooksdata";

export default function ChildrenPage() {
  return (
    <div>
      {/* columnGap is set inline for predictable spacing between columns */}
      <div className="columns-1 lg:columns-3">
        {childrenBooksData.map((book) => (
          <div key={book.id} className="mb-5">
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
