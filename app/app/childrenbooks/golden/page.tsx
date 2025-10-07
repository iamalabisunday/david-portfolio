import Publish from "../../components/publish";
import ChildrenBooks from "../../data/childrenbooks";

export default function Golden() {
  return (
    <Publish
      image={ChildrenBooks[1].image}
      title={ChildrenBooks[1].title}
      message={ChildrenBooks[1].message}
      paragraph={ChildrenBooks[1].paragrapy}
    />
  );
}
