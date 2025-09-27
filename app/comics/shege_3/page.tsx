import Publish from "@/app/components/publish";
import Comics from "@/app/data/comics";

export default function Shege_3() {
  return (
    <Publish
      img={Comics[5].img}
      title={Comics[5].title}
      message={Comics[5].message}
      paragraph={Comics[5].paragrapy}
    />
  );
}
