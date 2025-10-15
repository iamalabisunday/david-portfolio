import Publish from "../../../components/publish";
import Comics from "../../../data/comics";

export default function Shege_3() {
  return (
    <Publish
      image={Comics[5].image}
      title={Comics[5].title}
      message={Comics[5].message}
      paragraph={Comics[5].paragrapy}
    />
  );
}
