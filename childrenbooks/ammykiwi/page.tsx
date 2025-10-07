import Childrenbooksinterior from "../../components/childrenbooksinterior";
import ChildrenBooks from "../../data/childrenbooks"; // adjust path

export default function Ammykiwi() {
  return (
    <Childrenbooksinterior
      id={1}
      image={ChildrenBooks[0].image}
      title={ChildrenBooks[0].title}
      message={ChildrenBooks[0].message}
      paragraph={ChildrenBooks[0].paragraph}
      books={ChildrenBooks}
    />
  );
}
