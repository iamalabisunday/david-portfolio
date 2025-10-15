import Card from "../../components/card";
import Affiliate from "../../data/affiliate";

export default function Affiliates() {
  return (
    <div className="w-full flex lg:justify-start justify-center">
      <Card
        image={Affiliate[0].image}
        logo={Affiliate[0].logo}
        title={Affiliate[0].title}
        message={Affiliate[0].message}
        link={Affiliate[0].link}
      />
    </div>
  );
}
