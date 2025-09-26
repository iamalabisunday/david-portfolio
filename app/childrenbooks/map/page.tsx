import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Map() {
  return (
    <Publish
      img={ChildrenBooks[14].img}
      title={ChildrenBooks[14].title}
      message={ChildrenBooks[14].message}
      paragraph={ChildrenBooks[14].paragrapy}
    />
  );
}
