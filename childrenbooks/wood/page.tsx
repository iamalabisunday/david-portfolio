import Publish from "../../components/publish";
import ChildrenBooks from "../../data/childrenbooks";

export default function Wood() {
  return (
    <Publish
      img={ChildrenBooks[2].img}
      title={ChildrenBooks[2].title}
      message={ChildrenBooks[2].message}
      paragraph={ChildrenBooks[2].paragrapy}
    />
  );
}
