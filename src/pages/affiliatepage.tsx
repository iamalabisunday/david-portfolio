import Card from "../components/ui/card.tsx";
import Affiliate from "@/assets/affiliate/affiliate.png";
import AELogo from "@/assets/affiliate/AEJuice.svg";

export default function AffiliatePage() {
  return (
    <div className="flex justify-center lg:justify-start gap-5">
      <Card
        img={Affiliate}
        logo={AELogo}
        title="Bring your art to life"
        description="AEJuice gives you powerful tools and effects to animate faster, create better, and wow your audience."
        buttonText="Get AEJuice Now"
        buttonLink="https://aejuice.com/?ref=DavidOkon"
      />
    </div>
  );
}
