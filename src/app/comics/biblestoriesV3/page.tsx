import Publish from "../../../components/publish";
import Comics from "../../../data/comics";

export default function BibleStoriesV2() {
  return (
    <Publish
      image={Comics[1].image}
      title={Comics[1].title}
      message={Comics[1].message}
      paragraph={Comics[1].paragrapy}
    />
  );
}
