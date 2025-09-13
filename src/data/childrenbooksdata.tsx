import Golden from "../../src/assets/childrenbooks/Golden.jpg";
import Wood from "../../src/assets/childrenbooks/Woods.jpg";
import Zoo from "../../src/assets/childrenbooks/Zoo.jpg";
import Ammyandkiwi from "../../src/assets/childrenbooks/AmmyKiwi.jpg";

export type Child = {
  id: number;
  image: string;
};

export const childrenBooksData: Child[] = [
  { id: 1, image: Wood },
  { id: 2, image: Zoo },
  { id: 3, image: Golden },
  { id: 4, image: Ammyandkiwi },
];
