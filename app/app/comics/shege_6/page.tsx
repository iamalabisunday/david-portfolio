import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function Shege_6() {
  return (
    <Publish
      image={Comics[8].image}
      title={Comics[8].title}
      message={Comics[8].message}
      paragraph={Comics[8].paragrapy}
    />
  );
}
