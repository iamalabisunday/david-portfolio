import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function BibleStoriesV2() {
  return (
    <Publish
      img={Comics[0].img}
      title={Comics[0].title}
      message={Comics[0].message}
      paragraph={Comics[0].paragrapy}
    />
  );
}
