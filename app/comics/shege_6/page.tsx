import Publish from "@/app/components/publish";
import Comics from "@/app/data/comics";

export default function Shege_6() {
  return (
    <Publish
      img={Comics[8].img}
      title={Comics[8].title}
      message={Comics[8].message}
      paragraph={Comics[8].paragrapy}
    />
  );
}
