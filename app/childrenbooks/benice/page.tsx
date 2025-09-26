import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function BeNice() {
  return (
    <Publish
      img={ChildrenBooks[5].img}
      title={ChildrenBooks[5].title}
      message={ChildrenBooks[5].message}
      paragraph={ChildrenBooks[5].paragrapy}
    />
  );
}
