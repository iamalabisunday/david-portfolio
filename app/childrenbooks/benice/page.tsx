import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function BeNice() {
  return (
    <Publish
      img={ChildrenBooks[6].img}
      title={ChildrenBooks[6].title}
      message={ChildrenBooks[6].message}
      paragraph={ChildrenBooks[6].paragrapy}
    />
  );
}
