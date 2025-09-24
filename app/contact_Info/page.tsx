export default function ContactAndInfo() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-8">
      <img src="./DavidPhoto.jpg" alt="" />
      <div className="flex flex-col gap-2">
        <span className="text-2xl text-[var(--primary)] font-bold">
          About Me
        </span>
        <div className="text-[1.15rem] text-[var(--typograpy)] flex flex-col gap-2 font-[400] leading-[1.85rem]">
          <p>
            I’m David Okon, a children’s book author, illustrator, and comic
            creator. I love telling stories that spark imagination, inspire
            kindness, and bring smiles to young readers. Through colorful
            illustrations and playful storytelling, I create books and comics
            that encourage children to dream, learn, and explore the world
            around them.
          </p>
          <p>
            Every project I work on is designed to leave a lasting
            impression—whether it’s a whimsical picture book, a fun comic strip,
            or an illustrated adventure. My goal is simple: to make stories that
            children cherish and parents value. Let’s create something magical
            together!
          </p>
        </div>
      </div>
    </div>
  );
}
