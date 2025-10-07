import Publish from "../../components/publish";
import Illustration from "../../data/illustration";

export default function Stylized() {
  return (
    <Publish
      image={Illustration[2].image}
      title={Illustration[2].title}
      message={Illustration[2].message}
      paragraph={Illustration[2].paragrapy}
    />
  );
}
