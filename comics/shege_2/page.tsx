import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function Shege_2() {
  return (
    <Publish
      img={Comics[4].img}
      title={Comics[4].title}
      message={Comics[4].message}
      paragraph={Comics[4].paragrapy}
    />
  );
}
