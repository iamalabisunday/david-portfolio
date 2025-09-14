import zomaie from "../assets/Illustrations/zomaie.jpg";
import illustrate from "../assets/Illustrations/illustrate.jpg";

export type Child = {
  id: number;
  image: string;
};

export const illustrationData: Child[] = [
  { id: 1, image: zomaie },
  { id: 2, image: illustrate },
];
