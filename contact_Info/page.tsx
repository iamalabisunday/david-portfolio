export default function ContactAndInfo() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-8">
      <img
        src="./DavidPhoto.jpg"
        alt="David's Picture"
        className="max-w-[33.6875rem]"
      />
      <div className="flex flex-col gap-2">
        <span className="text-2xl text-[var(--primary)] font-bold">
          About Me
        </span>
        <div className="text-[1.15rem] text-[var(--typography)] flex flex-col gap-2 font-[400] leading-[1.85rem]">
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
        <div className="flex flex-col gap-4">
          <span className="text-2xl text-[var(--primary)] font-bold">
            Get in Touch
          </span>
          <form action="submit" className="flex flex-col lg:gap-4 gap-3">
            {/* Full Name Section*/}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="firstname"
                id="firstname"
                className="text-[1.25rem] font-medium text-[var(--typography)]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="w-full h-10 inputStyle"
              />
            </div>
            {/* Email Address Section */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                id="email"
                className="text-[1.25rem] font-medium text-[var(--typography)]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-10 inputStyle"
              />
            </div>
            {/* Message Section */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="textarea"
                id="textarea"
                className="text-[1.25rem] font-medium text-[var(--typography)]"
              >
                Message
              </label>
              <textarea
                name="textarea"
                id="textarea"
                className="w-full h-40 inputStyle"
              ></textarea>
            </div>
            {/* Button Section */}
            <div className="w-full flex justify-end">
              <button className="lg:w-fit w-full bg-[var(--gray)] hover:bg-[var(--primary)] text-white px-4 py-1 text-[1.25rem] font-bold rounded-sm cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
