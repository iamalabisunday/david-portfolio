import { ReactNode } from "react";

// app/data/childrenbooks.ts
export type Book = {
  id: number;
  title: string;
  image: string;
  destination: string;
  message: string;
  paragraph: string;
  Link?: ReactNode;
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
    Link: (
      <a
        href="https://www.amazon.com/gp/product/B0FC5GWBWQ?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks&qid=1760211456&sr=1-1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Buy on Amazon
      </a>
    ),
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
    Link: (
      <a
        href="https://www.amazon.co.uk/Golden-Virtues-Abimbola-Onyekachi/dp/9789572107#:~:text=Golden%20Virtues%20by%20Abimbola%20Onyekachi%20teaches%20the%20essential,obedience%2C%20friendliness%2C%20joy%2C%20and%20peaceful%20coexistence%20in%20society."
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Buy on Amazon
      </a>
    ),
  },
  {
    id: 3,
    title: "Woods",
    image: "/children/Woods.jpg",
    destination: "/childrenbooks/woods",
    message:
      "This children's picture book is dedicated to those who will put their faith in God like a flint because they shall never be ashamed.",
    paragraph: "",
    Link: (
      <a
        href="https://www.amazon.com/Woods-David-Okon/dp/B0F8ZHPJV7"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Buy on Amazon
      </a>
    ),
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
    Link: (
      <a
        href="https://www.amazon.com/dp/1662878400/ref=mes-dp?_encoding=UTF8&pd_rd_w=KmpPS&content-id=amzn1.sym.1763b2a9-7aa6-49c2-a60b-ee230f5faf79&pf_rd_p=1763b2a9-7aa6-49c2-a60b-ee230f5faf79&pf_rd_r=X370CWKEDMAFQ91NWYNY&pd_rd_wg=jXLRM&pd_rd_r=4127d9b1-a42b-401d-ad3c-283bc194a700"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Buy on Amazon
      </a>
    ),
  },
];

export default childrenBooks;
