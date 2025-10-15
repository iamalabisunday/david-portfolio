import Publish from "../../../components/publish";
import Comics from "../../../data/comics";

export default function Shege_2() {
  return (
    <Publish
      image={Comics[4].image}
      title={Comics[4].title}
      message={Comics[4].message}
      paragraph={Comics[4].paragrapy}
    />
  );
}
