import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Wood() {
  return (
    <Publish
      img={ChildrenBooks[2].img}
      title={ChildrenBooks[2].title}
      message={ChildrenBooks[2].message}
      paragraph={ChildrenBooks[2].paragrapy}
    />
  );
}
