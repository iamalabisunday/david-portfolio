import Illustrationinterior from "../../components/illustrationinterior";
import Illustration from "../../data/illustration";

export default function Zomaie() {
  return (
    <Illustrationinterior
      id={1}
      img={Illustration[0].img}
      title={Illustration[0].title}
      message={Illustration[0].message}
      paragraph={Illustration[0].paragraph}
      book={Illustration}
    />
  );
}
