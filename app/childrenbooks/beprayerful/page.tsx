import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function BePrayerful() {
  return (
    <Publish
      img={ChildrenBooks[7].img}
      title={ChildrenBooks[7].title}
      message={ChildrenBooks[7].message}
      paragraph={ChildrenBooks[7].paragrapy}
    />
  );
}
