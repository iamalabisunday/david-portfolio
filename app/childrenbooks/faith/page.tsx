import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Faith() {
  return (
    <Publish
      img={ChildrenBooks[10].img}
      title={ChildrenBooks[10].title}
      message={ChildrenBooks[10].message}
      paragraph={ChildrenBooks[10].paragrapy}
    />
  );
}
