import Publish from "../../components/publish";
import ChildrenBooks from "../../data/childrenbooks";

export default function Wood() {
  return (
    <Publish
      image={ChildrenBooks[2].image}
      title={ChildrenBooks[2].title}
      message={ChildrenBooks[2].message}
      paragraph={ChildrenBooks[2].paragrapy}
    />
  );
}
