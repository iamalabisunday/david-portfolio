import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function BePeacefull() {
  return (
    <Publish
      img={ChildrenBooks[8].img}
      title={ChildrenBooks[8].title}
      message={ChildrenBooks[8].message}
      paragraph={ChildrenBooks[8].paragrapy}
    />
  );
}
