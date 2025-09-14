import bibleStudyV2 from "../assets/comics/bibleStoriesV2.jpg";
import bibleStudyV3 from "../assets/comics/bibleStoriesV3.jpg";

export type Child = {
  id: number;
  image: string;
};

export const comicsData: Child[] = [
  { id: 1, image: bibleStudyV2 },
  { id: 2, image: bibleStudyV3 },
];
