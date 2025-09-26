import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Blessing() {
  return (
    <Publish
      img={ChildrenBooks[4].img}
      title={ChildrenBooks[4].title}
      message={ChildrenBooks[4].message}
      paragraph={ChildrenBooks[4].paragrapy}
    />
  );
}
