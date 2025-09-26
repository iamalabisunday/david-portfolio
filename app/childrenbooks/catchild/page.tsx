import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function CatChild() {
  return (
    <Publish
      img={ChildrenBooks[18].img}
      title={ChildrenBooks[18].title}
      message={ChildrenBooks[18].message}
      paragraph={ChildrenBooks[18].paragrapy}
    />
  );
}
