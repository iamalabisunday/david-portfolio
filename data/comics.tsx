import type { Book } from "./types";

const shegeDescription = {
  message:
    "Go on an adventure with a little girl and her pup as they make-believe their way through the zoo! Pack your adventure bag with all the necessities and discover all kinds of fun animals that live around the world! Ammy and Kiwi are the best of friends and love learning together and making memories.",
  paragraph:
    "Don’t forget to keep an eye out for special clues along the way! Let the adventure begin and may it never end…",
};

const Comics: Book[] = [
  {
    id: 1,
    title: "Bible Stories with Aunty Tolu",
    image: "/comics/bibleStoriesV2.jpg",
    destination: "/comics/biblestoriesV2",
    ...shegeDescription,
  },
  {
    id: 2,
    title: "Bible Stories with Aunty Tolu",
    image: "/comics/bibleStoriesV3.jpg",
    destination: "/comics/biblestoriesV3",
    ...shegeDescription,
  },
  {
    id: 3,
    title: "Shege Promax",
    image: "/comics/Shege.jpg",
    destination: "/comics/shege",
    ...shegeDescription,
  },
  {
    id: 4,
    title: "Shege Part 1",
    image: "/comics/Shege_1.jpg",
    destination: "/comics/shege_1",
    ...shegeDescription,
  },
  {
    id: 5,
    title: "Shege Part 2",
    image: "/comics/Shege_2.jpg",
    destination: "/comics/shege_2",
    ...shegeDescription,
  },
  {
    id: 6,
    title: "Shege Part 3",
    image: "/comics/Shege_3.jpg",
    destination: "/comics/shege_3",
    ...shegeDescription,
  },
  {
    id: 7,
    title: "Shege Part 4",
    image: "/comics/Shege_4.jpg",
    destination: "/comics/shege_4",
    ...shegeDescription,
  },
  // You can generate the rest of the "Shege" parts programmatically
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 8 + i,
    title: `Shege Part ${5 + i}`,
    image: `/comics/Shege_${5 + i}.jpg`,
    destination: `/comics/shege_${5 + i}`,
    ...shegeDescription,
  })),
];

export default Comics;
