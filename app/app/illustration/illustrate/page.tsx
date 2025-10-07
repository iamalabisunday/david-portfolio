import Publish from "../../components/publish";
import Illustration from "../../data/illustration";

export default function Illustrate() {
  return (
    <Publish
      img={Illustration[1].img}
      title={Illustration[1].title}
      message={Illustration[1].message}
      paragraph={Illustration[1].paragrapy}
    />
  );
}
