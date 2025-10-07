import Illustrationinterior from "../../components/illustrationinterior";
import Illustration from "../../data/illustration";

export default function Illustrate() {
  return (
    <Illustrationinterior
      id={2}
      img={Illustration[1].img}
      title={Illustration[1].title}
      message={Illustration[1].message}
      paragraph={Illustration[1].paragraph}
      books={Illustration}
    />
  );
}
