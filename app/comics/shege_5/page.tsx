import Publish from "@/app/components/publish";
import Comics from "@/app/data/comics";

export default function Shege_5() {
  return (
    <Publish
      img={Comics[7].img}
      title={Comics[7].title}
      message={Comics[7].message}
      paragraph={Comics[7].paragrapy}
    />
  );
}
