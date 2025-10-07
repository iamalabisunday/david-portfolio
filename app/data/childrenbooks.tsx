// app/data/childrenbooks.ts
export type Book = {
  id: number;
  title: string;
  img: string;
  destination?: string;
  message: string;
  paragraph: string;
};

const childrenBooks: Book[] = [
  {
    id: 1,
    title: "Ammy Kiwi",
    img: "/children/AmmyKiwi.jpg",
    destination: "/childrenbooks/ammykiwi",
    message:
      "Go on an adventure with a little girl and her pup as they make-believe their way through the zoo! Pack your adventure bag with all the necessities and discover all kinds of fun animals that live around the world! Ammy and Kiwi are the best of friends and love learning together and making memories.",
    paragraph:
      "Don’t forget to keep an eye out for special clues along the way! Let the adventure begin and may it never end…",
  },
  {
    id: 2,
    title: "Golden",
    img: "/children/Golden.jpg",
    destination: "/childrenbooks/golden",
    message:
      "Explore the magical golden fields where dreams come alive. Join the journey through the pages filled with wonder and imagination.",
    paragraph:
      "Every story has a sparkle — find yours in Golden’s world of dreams!",
  },
  {
    id: 3,
    title: "Woods",
    img: "/children/Woods.jpg",
    destination: "/childrenbooks/wood",
    message:
      "Step into the woods with curious hearts and playful spirits. Discover the mystery that hides among the trees.",
    paragraph:
      "Adventure and friendship await those who dare to wander deeper into the forest.",
  },
  {
    id: 4,
    title: "Zoo",
    img: "/children/Zoo.jpg",
    destination: "/childrenbooks/zoo",
    message:
      "Journey through a colorful zoo full of talking animals, laughter, and fun.",
    paragraph:
      "Every animal has a story — come meet them all and enjoy their world!",
  },
];

export default childrenBooks;
