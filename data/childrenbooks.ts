// app/data/childrenbooks.ts
import type { Book } from "../types";

const ChildrenBooks: Book[] = [
  {
    id: 1,
    title: "Ammy Kiwi",
    image: "/children/AmmyKiwi.jpg",
    destination: "/childrenbooks/ammykiwi",
    message:
      "Go on an adventure with a little girl and her pup as they make-believe their way through the zoo! Pack your adventure bag with all the necessities and discover all kinds of fun animals that live around the world! Ammy and Kiwi are the best of friends and love learning together and making memories.",
    paragraph:
      "Don’t forget to keep an eye out for special clues along the way! Let the adventure begin and may it never end…",
  },
  {
    id: 2,
    title: "Golden",
    image: "/children/Golden.jpg",
    destination: "/childrenbooks/golden",
    message:
      "This book is meant to guide children on the right path of obeience, love, honesty and loyalty towards fellow human beings. It will to develop their minds as good people as they grow from childhood to adulthood, by making them memorise messages of the scriptural verses at home and schools, to build a better world of peace, purity, love and cooperation among people according to the original purpose of God's creation of the world.",
    paragraph:
      "There could be less hatred, racism, crimes and disaffection in scoiety when children are well taught and brought up with the topics, memory verses and pictures in this book.",
  },
  {
    id: 3,
    title: "Woods",
    image: "/children/Woods.jpg",
    destination: "/childrenbooks/wood",
    message:
      "Step into the woods with curious hearts and playful spirits. Discover the mystery that hides among the trees.",
    paragraph:
      "Adventure and friendship await those who dare to wander deeper into the forest.",
  },
  {
    id: 4,
    title: "Zoo",
    image: "/children/Zoo.jpg",
    destination: "/childrenbooks/zoo",
    message:
      "Journey through a colorful zoo full of talking animals, laughter, and fun.",
    paragraph:
      "Every animal has a story — come meet them all and enjoy their world!",
  },
];

export default ChildrenBooks;
