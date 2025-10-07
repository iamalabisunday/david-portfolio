import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function Shege_7() {
  return (
    <Publish
      img={Comics[9].img}
      title={Comics[9].title}
      message={Comics[9].message}
      paragraph={Comics[9].paragrapy}
    />
  );
}
