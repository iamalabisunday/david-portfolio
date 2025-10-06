type Book = {
  id: number;
  title: string;
  img: string;
  destination?: string;
};

export default function Publish({
  img,
  title,
  message,
  paragraph,
}: {
  img: string;
  title: string;
  message: string;
  paragraph: string;
}) {
  return (
    <div className="w-full h-screen flex gap-4 lg:flex-row flex-col">
      <div className="lg:flex-1 lg:w-[75%] h-fit flex flex-col">
        <img src={img} alt={title} className="w-[80%] mx-auto" />
      </div>
      <div className="lg:w-[20rem]">
        <div className="w-full h-full lg:border-l-1 lg:border-[var(--border)] px-4 flex flex-col gap-2">
          <span className="text-[1.45rem] text-[var(--primary)] font-bold">
            {title}
          </span>
          <div className="text-[1.10rem] text-[var(--typograpy)] font-[400] leading-[1.85rem] flex flex-col gap-2">
            {message}
            <div>{paragraph}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
