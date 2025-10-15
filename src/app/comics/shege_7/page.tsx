import Publish from "../../../components/publish";
import Comics from "../../../data/comics";

export default function Shege_7() {
  return (
    <Publish
      image={Comics[9].image}
      title={Comics[9].title}
      message={Comics[9].message}
      paragraph={Comics[9].paragrapy}
    />
  );
}
