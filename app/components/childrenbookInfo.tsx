type Book = {
  id: number;
  title: string;
  img: string;
  destination?: string;
};

export default function ChildrenBookInfo({ book }: { book: Book }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <img src={book.img} alt={book.title} className="mt-4 max-w-sm" />
    </div>
  );
}
