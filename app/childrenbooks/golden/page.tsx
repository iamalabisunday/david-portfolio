import Childrenbooksinterior from "../../components/childrenbooksinterior";
import ChildrenBooks from "../../data/childrenbooks";

export default function Golden() {
  return (
    <Childrenbooksinterior
      id={2}
      image={ChildrenBooks[1].image}
      title={ChildrenBooks[1].title}
      message={ChildrenBooks[1].message}
      paragraph={ChildrenBooks[1].paragraph}
      books={ChildrenBooks}
    />
  );
}
