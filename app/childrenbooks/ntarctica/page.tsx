import Publish from "@/app/components/publish";
import ChildrenBooks from "@/app/data/childrenbooks"; // adjust path

export default function Ntarctica() {
  return (
    <Publish
      img={ChildrenBooks[20].img}
      title={ChildrenBooks[20].title}
      message={ChildrenBooks[20].message}
      paragraph={ChildrenBooks[20].paragrapy}
    />
  );
}
