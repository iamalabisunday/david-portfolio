import Publish from "../../components/publish";
import ChildrenBooks from "../../data/childrenbooks"; // adjust path

export default function Ammykiwi() {
  return (
    <Publish
      image={ChildrenBooks[0].image}
      title={ChildrenBooks[0].title}
      message={ChildrenBooks[0].message}
      paragraph={ChildrenBooks[0].paragrapy}
    />
  );
}
