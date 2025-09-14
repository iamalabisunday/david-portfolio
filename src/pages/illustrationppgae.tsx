import { illustrationData } from "../data/illustrationsdata.tsx";

export default function IllustrationPage() {
  return (
    <div className="columns-1 lg:columns-3">
      {illustrationData.map((illustration) => (
        <div key={illustration.id} className="mb-5">
          <img
            src={illustration.image}
            alt="illustration"
            className="w-full h-auto rounded-md block shadow-sm"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
