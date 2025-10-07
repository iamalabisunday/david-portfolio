import Publish from "../../components/publish";
import Illustration from "../../data/illustration";

export default function Zomaie() {
  return (
    <Publish
      image={Illustration[0].image}
      title={Illustration[0].title}
      message={Illustration[0].message}
      paragraph={Illustration[0].paragrapy}
    />
  );
}
