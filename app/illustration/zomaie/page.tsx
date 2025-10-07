import Illustrationinterior from "../../components/illustrationinterior";
import Illustration from "../../data/illustration";

export default function Zomaie() {
  return (
    <Illustrationinterior
      id={1}
      image={Illustration[0].image}
      title={Illustration[0].title}
      message={Illustration[0].message}
      paragraph={Illustration[0].paragraph}
      book={Illustration}
    />
  );
}
