import Publish from "../../components/publish";
import Comics from "../../data/comics";

export default function BibleStoriesV2() {
  return (
    <Publish
      image={Comics[0].image}
      title={Comics[0].title}
      message={Comics[0].message}
      paragraph={Comics[0].paragrapy}
    />
  );
}
