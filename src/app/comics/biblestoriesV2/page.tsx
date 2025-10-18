import BookViewer from "../../../components/BookViewer";
import Comics from "../../../data/comics";

export default function BibleStoriesV2() {
  return <BookViewer id={1} books={Comics} />;
}
