import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Bald() {
  return (
    <Publish
      img={ChildrenBooks[15].img}
      title={ChildrenBooks[15].title}
      message={ChildrenBooks[15].message}
      paragraph={ChildrenBooks[15].paragrapy}
    />
  );
}
