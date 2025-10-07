import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function Shege_8() {
  return (
    <Publish
      image={Comics[10].image}
      title={Comics[10].title}
      message={Comics[10].message}
      paragraph={Comics[10].paragrapy}
    />
  );
}
