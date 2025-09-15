import Card from "../../components/ui/card.tsx";
import Affiliate from "@/assets/affiliate/affiliate.png";
import Zoo from "@/assets/childrenbooks/Zoo.jpg";

export default function BlogPageOne() {
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <img src={Zoo} alt="img" className="w-full h-[25rem]" />
        <div className="flex flex-col gap-[1rem] mt-[1rem] text-priGray">
          <span className="text-[1.5rem] font-medium text-active">
            Ammy and Kiwi Zoo
          </span>
          <p className="leading-[2.25rem] text-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum
            placerat ligula posuere, ut rhoncus velit eleifend.
          </p>
          <p className="leading-[2.25rem] text-[1.25rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas
            ultrices. Vestibulum et neque id ex semper varius a sit amet metus.
            Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus
            egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas
            rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum
            placerat ligula posuere, ut rhoncus velit eleifend.
          </p>
        </div>
      </div>
      <div className="max-w-[21rem] border-l-2 border-border pl-[1.5rem] flex flex-col gap-[1rem]">
        <p className="text-priGray text-[1.25rem] font-medium">For more;</p>
        <div className="overflow-auto">
          <div className="flex flex-col gap-4">
            <Card
              img={Affiliate}
              logoText="ARTICLE"
              title="Ammy and Kiwi Zoo"
              description="Join Ammy on an exciting adventure to the magical Kiwi Zoo! Filled with curious animals, colorful sights"
              buttonText="READ MORE"
              buttonLink="/blog/blogCard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
