import Card from "../components/card";
import Blog from "../data/blog";

export default function Blogs() {
  return (
    <div className="w-full flex lg:justify-start justify-center">
      <Card
        img={Blog[0].img}
        heading={Blog[0].heading}
        title={Blog[0].title}
        message={Blog[0].message}
        bloginfo={Blog[0].bloginfo}
      />
    </div>
  );
}
