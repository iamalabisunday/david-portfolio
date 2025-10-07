import Publish from "../../components/publish";
import ChildrenBooks from "../../data/childrenbooks";

export default function Zoo() {
  return (
    <Publish
      img={ChildrenBooks[3].img}
      title={ChildrenBooks[3].title}
      message={ChildrenBooks[3].message}
      paragraph={ChildrenBooks[3].paragrapy}
    />
  );
}
