import profilePhoto from "../assets/DavdPhoto.jpg";

export default function ContactAndInfoPage() {
  return (
    <div className="w-full gap-[2rem] text-priGray grid grid-cols-1 lg:grid-cols-2">
      {/* Profile Photo Section */}
      <div className="w-full h-full rounded-md shadow-md">
        <img
          src={profilePhoto}
          alt="David's Profile Photo"
          className="w-full h-full rounded-md object-cover"
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
        <div className="flex flex-col gap-4 text-[1rem] font-medium leading-[2rem]">
          <span className="text-primary font-bold text-xl text-[2rem]">
            Get in Touch
          </span>
          <div className="w-full h-full flex justify-between items-center gap-4">
            <form
              action="submit"
              className="w-full flex flex-col gap-4 text-[1rem] font-medium leading-[2rem]"
            >
              <div className="w-full flex gap-4 flex-col lg:flex-row">
                {/* Full name Section */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-priGray text-[1.25rem] font-[400]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full py-[0.35rem] px-[1rem] outline-none border-2 rounded-sm border-priGray focus:border-2 focus:border-active text-[1.25rem]"
                  />
                </div>

                {/* Email Section */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-priGray text-[1.25rem] font-[400]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full py-[0.35rem] px-[1rem] outline-none border-2 rounded-sm border-priGray focus:border-2 focus:border-active text-[1.25rem]"
                  />
                </div>
              </div>

              {/* Message Section */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-priGray text-[1.25rem] font-[400]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full h-[7rem] py-[0.25rem] px-[1rem] outline-none border-2 rounded-sm border-priGray focus:border-2 focus:border-active text-[1.25rem]"
                ></textarea>
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button className="text-white text-[1.25rem] font-[400] bg-priGray px-8 py-[0.3rem] rounded-sm hover:bg-active cursor-pointer transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
