import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Ticket() {
  return (
    <Publish
      img={ChildrenBooks[12].img}
      title={ChildrenBooks[12].title}
      message={ChildrenBooks[12].message}
      paragraph={ChildrenBooks[12].paragrapy}
    />
  );
}
