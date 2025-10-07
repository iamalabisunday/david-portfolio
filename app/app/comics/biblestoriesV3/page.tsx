import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function BibleStoriesV2() {
  return (
    <Publish
      img={Comics[1].img}
      title={Comics[1].title}
      message={Comics[1].message}
      paragraph={Comics[1].paragrapy}
    />
  );
}
