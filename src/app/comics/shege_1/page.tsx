import Publish from "../../../components/publish";
import Comics from "../../../data/comics";

export default function Shege() {
  return (
    <Publish
      image={Comics[2].image}
      title={Comics[2].title}
      message={Comics[2].message}
      paragraph={Comics[2].paragrapy}
    />
  );
}
