import Publish from "../../components/publish";
import ChildrenBooks from "../../data/childrenbooks"; // adjust path

export default function Ammykiwi() {
  return (
    <Publish
      img={ChildrenBooks[0].img}
      title={ChildrenBooks[0].title}
      message={ChildrenBooks[0].message}
      paragraph={ChildrenBooks[0].paragrapy}
    />
  );
}
