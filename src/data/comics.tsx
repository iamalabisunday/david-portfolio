import { ReactNode } from "react";

// app/data/comics.ts
export type Book = {
  id: number;
  title: string;
  image: string;
  destination: string;
  message: string;
  paragraph: string;
  Link?: ReactNode;
};

const comics: Book[] = [
  {
    id: 1,
    title: "Bible Stories with Aunty Tolu",
    image: "/comics/bibleStoriesV2.jpg",
    destination: "/comics/biblestoriesV2",
    message:
      "BIBLE STORIES WITH AUNTY TOLU is a delightful children’s book that brings the timeless stories of the Bible to life. Join Aunty Tolu as she shares these beloved tales with young readers in a way that is engaging, entertaining, and easy to understand",
    paragraph:
      "Through colorful illustrations and simple language, children will learn about stories from the Bible and how it affects their lives today. Aunty Tolu’s warm and friendly personality makes these stories come alive, as she shares the lessons of faith and love that they teach. Whether reading with family or on their own, children will love the charming illustrations and uplifting messages of Bible Stories with Aunty Tolu. This book is perfect for children who are just beginning to learn about the Bible, and for parents who want to share the joy of Scripture with their children.",
  },
  {
    id: 2,
    title: "Bible Stories with Aunty Tolu",
    image: "/comics/bibleStoriesV3.jpg",
    destination: "/comics/biblestoriesV3",
    message:
      "BIBLE STORIES WITH AUNTY TOLU is a delightful children’s book that brings the timeless stories of the Bible to life. Join Aunty Tolu as she shares these beloved tales with young readers in a way that is engaging, entertaining, and easy to understand",
    paragraph:
      "Through colorful illustrations and simple language, children will learn about stories from the Bible and how it affects their lives today. Aunty Tolu’s warm and friendly personality makes these stories come alive, as she shares the lessons of faith and love that they teach. Whether reading with family or on their own, children will love the charming illustrations and uplifting messages of Bible Stories with Aunty Tolu. This book is perfect for children who are just beginning to learn about the Bible, and for parents who want to share the joy of Scripture with their children.",
  },
];

export default comics;
