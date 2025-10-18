import BookViewer from "../../../components/BookViewer";
import ChildrenBooks from "../../../data/childrenbooks"; // adjust path

export default function Ammykiwi() {
  return <BookViewer id={1} books={ChildrenBooks} />;
}
