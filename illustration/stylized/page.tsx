import Publish from "../../components/publish";
import Illustration from "../../data/illustration";

export default function Stylized() {
  return (
    <Publish
      img={Illustration[2].img}
      title={Illustration[2].title}
      message={Illustration[2].message}
      paragraph={Illustration[2].paragrapy}
    />
  );
}
