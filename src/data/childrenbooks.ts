// app/data/childrenbooks.ts
export type Book = {
  id: number;
  title: string;
  image: string;
  destination: string;
  message: string;
  paragraph: string;
};

const childrenBooks: Book[] = [
  {
    id: 1,
    title: "A day in the Woods",
    image: "/children/AmmyKiwi.jpg",
    destination: "/childrenbooks/ammykiwi",
    message:
      "Go on an adventure with a little girl and her pup as they make-believe their way through the woods! Pack your Adventure bag with all the necessities and discover fun facts about nature while appreciating its beauty. Ammy and Kiwi are the best of friends and love learning together and making memories.",
    paragraph:
      " Don't forget to keep an eye out for special clues along the way! Let the adventure begin and may it never end...",
  },
  {
    id: 2,
    title: "Golden Virtues",
    image: "/children/Golden.jpg",
    destination: "/childrenbooks/golden",
    message:
      "This book is meant to guide children on the right path of obedience, love, honesty and loyalty towards fellow human beings. It will help to develop their minds as good people as they grow from childhood to adulthood, by making them memorise messages of the scriptural verses at home and schools, to build a better world of peace, purity, love and cooperation among people according to the original purpose of God’s creation of the world.",
    paragraph:
      "There could be less hatred, racism, crimes and disaffection in society when children are well taught and brought up with the topics, memory verses and pictures in this book.",
  },
  {
    id: 3,
    title: "Woods",
    image: "/children/Woods.jpg",
    destination: "/childrenbooks/woods",
    message:
      "This children's picture book is dedicated to those who will put their faith in God like a flint because they shall never be ashamed.",
    paragraph: "",
  },
  {
    id: 4,
    title: "A Day at the Zoo",
    image: "/children/Zoo.jpg",
    destination: "/childrenbooks/zoo",
    message:
      "Go on an adventure with a little girl and her pup as they make-believe their way through the woods! Pack your Adventure bag with all the necessities and discover fun facts about nature while appreciating its beauty. Ammy and Kiwi are the best of friends and love learning together and making memories. ",
    paragraph:
      "Don't forget to keep an eye out for special clues along the way! Let the adventure begin and may it never end...",
  },
];

export default childrenBooks;
