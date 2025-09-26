import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Create() {
  return (
    <Publish
      img={ChildrenBooks[16].img}
      title={ChildrenBooks[16].title}
      message={ChildrenBooks[16].message}
      paragraph={ChildrenBooks[16].paragrapy}
    />
  );
}
