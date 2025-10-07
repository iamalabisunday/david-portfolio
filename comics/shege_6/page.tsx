import Publish from "../../components/publish";
import Comics from "../../data/comics";

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
