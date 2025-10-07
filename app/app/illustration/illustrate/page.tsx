import Publish from "../../components/publish";
import Illustration from "../../data/illustration";

export default function Illustrate() {
  return (
    <Publish
      image={Illustration[1].image}
      title={Illustration[1].title}
      message={Illustration[1].message}
      paragraph={Illustration[1].paragrapy}
    />
  );
}
