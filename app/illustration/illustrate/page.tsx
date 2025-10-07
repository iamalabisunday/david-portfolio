import Illustrationinterior from "../../components/illustrationinterior";
import Illustration from "../../data/illustration";

export default function Illustrate() {
  return (
    <Illustrationinterior
      id={2}
      image={Illustration[1].image}
      title={Illustration[1].title}
      message={Illustration[1].message}
      paragraph={Illustration[1].paragraph}
      books={Illustration}
    />
  );
}
