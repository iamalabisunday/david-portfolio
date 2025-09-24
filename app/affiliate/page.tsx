import Card from "../components/card";
import Affiliate from "../data/affiliate";

export default function Affiliates() {
  return (
    <div>
      <Card
        img={Affiliate[0].img}
        logo={Affiliate[0].logo}
        title={Affiliate[0].title}
        message={Affiliate[0].message}
        link={Affiliate[0].link}
      />
    </div>
  );
}
