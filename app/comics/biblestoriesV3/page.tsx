import Publish from "@/app/components/publish";
import Illustration from "@/app/data/illustration";

export default function BibleStoriesV3() {
  return (
    <Publish
      img={Illustration[1].img}
      title={Illustration[1].title}
      message={Illustration[1].message}
      paragraph={Illustration[1].paragrapy}
    />
  );
}
