import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Ntarctica() {
  return (
    <Publish
      img={ChildrenBooks[19].img}
      title={ChildrenBooks[19].title}
      message={ChildrenBooks[19].message}
      paragraph={ChildrenBooks[19].paragrapy}
    />
  );
}
