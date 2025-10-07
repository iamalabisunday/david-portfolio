import Publish from "../../components/publish";
import Illustration from "../../data/illustration";

export default function Zomaie() {
  return (
    <Publish
      img={Illustration[0].img}
      title={Illustration[0].title}
      message={Illustration[0].message}
      paragraph={Illustration[0].paragrapy}
    />
  );
}
