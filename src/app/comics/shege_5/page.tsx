import Publish from "../../../components/publish";
import Comics from "../../../data/comics";

export default function Shege_5() {
  return (
    <Publish
      image={Comics[7].image}
      title={Comics[7].title}
      message={Comics[7].message}
      paragraph={Comics[7].paragrapy}
    />
  );
}
