import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Ticket() {
  return (
    <Publish
      img={ChildrenBooks[13].img}
      title={ChildrenBooks[13].title}
      message={ChildrenBooks[13].message}
      paragraph={ChildrenBooks[13].paragrapy}
    />
  );
}
