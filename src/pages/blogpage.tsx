import Card from "../components/ui/card.tsx";
import Affiliate from "@/assets/affiliate/affiliate.png";

export default function BlogPage() {
  return (
    <div className="flex justify-center lg:justify-start gap-5">
      <Card
        img={Affiliate}
        logoText="ARTICLE"
        title="Ammy and Kiwi Zoo"
        description="Join Ammy on an exciting adventure to the magical Kiwi Zoo! Filled with curious animals, colorful sights"
        buttonText="READ MORE"
        buttonLink="/blog/blogCard"
      />
    </div>
  );
}
