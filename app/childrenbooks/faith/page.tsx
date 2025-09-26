import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Faith() {
  return (
    <Publish
      img={ChildrenBooks[11].img}
      title={ChildrenBooks[11].title}
      message={ChildrenBooks[11].message}
      paragraph={ChildrenBooks[11].paragrapy}
    />
  );
}
