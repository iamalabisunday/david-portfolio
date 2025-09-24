import Weblog from "@/app/components/weblog";
import weblogs from "@/app/data/weblog";

export default function Ammykwiblog() {
  return (
    <Weblog
      img={weblogs[0].img}
      title={weblogs[0].title}
      message={weblogs[0].message}
    />
  );
}
