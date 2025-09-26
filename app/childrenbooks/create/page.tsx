import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Create() {
  return (
    <Publish
      img={ChildrenBooks[17].img}
      title={ChildrenBooks[17].title}
      message={ChildrenBooks[17].message}
      paragraph={ChildrenBooks[17].paragrapy}
    />
  );
}
