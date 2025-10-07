import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function Shege_4() {
  return (
    <Publish
      img={Comics[6].img}
      title={Comics[6].title}
      message={Comics[6].message}
      paragraph={Comics[6].paragrapy}
    />
  );
}
