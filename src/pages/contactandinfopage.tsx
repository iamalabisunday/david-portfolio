import profilePhoto from "../assets/DavdPhoto.jpg";

export default function ContactAndInfoPage() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Profile Photo Section */}
      <div>
        <img
          src={profilePhoto}
          alt="David's Profile Photo"
          className="w-fit h-auto rounded-md shadow-md"
        />
      </div>
      {/* Profile text Section */}
      <div className="w-full h-auto flex flex-col gap-4 text-priGray">
        <div className="flex flex-col gap-4 text-[1rem] font-medium leading-[2rem]">
          <span className="text-primary font-bold text-xl text-[2rem]">
            About Me
          </span>
          <p>
            I’m David Okon, a children’s book author, illustrator, and comic
            creator. I love telling stories that spark imagination, inspire
            kindness, and bring smiles to young readers. Through colorful
            illustrations and playful storytelling, I create books and comics
            that encourage children to dream, learn, and explore the world
            around them.
          </p>
          <p>
            Every project I work on is designed to leave a lasting impression
            whether it’s a whimsical picture book, a fun comic strip, or an
            illustrated adventure. My goal is simple: to make stories that
            children cherish and parents value. Let’s create something magical
            together!
          </p>
        </div>
      </div>
    </div>
  );
}
