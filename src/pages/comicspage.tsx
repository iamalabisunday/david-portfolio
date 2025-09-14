import { comicsData } from "../data/comicsdata.tsx";

export default function IllustrationPage() {
  return (
    <div className="columns-1 md:columns-3">
      {comicsData.map((comics) => (
        <div key={comics.id}>
          <img
            src={comics.image}
            alt="comics"
            className="w-full h-auto rounded-md block shadow-sm"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
