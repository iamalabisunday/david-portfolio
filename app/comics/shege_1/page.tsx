import Publish from "@/app/components/publish";
import Comics from "@/app/data/comics";

export default function Shege_1() {
  return (
    <Publish
      img={Comics[3].img}
      title={Comics[3].title}
      message={Comics[3].message}
      paragraph={Comics[3].paragrapy}
    />
  );
}
