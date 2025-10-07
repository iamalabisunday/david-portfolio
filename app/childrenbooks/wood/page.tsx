import Childrenbooksinterior from "../../components/childrenbooksinterior";
import ChildrenBooks from "../../data/childrenbooks";

export default function Wood() {
  return (
    <Childrenbooksinterior
      id={3}
      image={ChildrenBooks[2].image}
      title={ChildrenBooks[2].title}
      message={ChildrenBooks[2].message}
      paragraph={ChildrenBooks[2].paragraph}
      books={ChildrenBooks}
    />
  );
}
