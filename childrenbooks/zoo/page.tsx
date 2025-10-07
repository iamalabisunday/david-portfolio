import Childrenbooksinterior from "../../components/childrenbooksinterior";
import ChildrenBooks from "../../data/childrenbooks";

export default function Zoo() {
  return (
    <Childrenbooksinterior
      id={4}
      img={ChildrenBooks[3].img}
      title={ChildrenBooks[3].title}
      message={ChildrenBooks[3].message}
      paragraph={ChildrenBooks[3].paragraph}
      books={ChildrenBooks}
    />
  );
}
