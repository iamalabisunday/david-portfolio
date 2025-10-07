import Illustrationinterior from "../../components/illustrationinterior";
import Illustration from "../../data/illustration";

export default function Stylized() {
  return (
    <Illustrationinterior
      id={3}
      image={Illustration[2].image}
      title={Illustration[2].title}
      message={Illustration[2].message}
      paragraph={Illustration[2].paragraph}
      book={Illustration}
    />
  );
}
