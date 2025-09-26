import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Boldness() {
  return (
    <Publish
      img={ChildrenBooks[9].img}
      title={ChildrenBooks[9].title}
      message={ChildrenBooks[9].message}
      paragraph={ChildrenBooks[9].paragrapy}
    />
  );
}
